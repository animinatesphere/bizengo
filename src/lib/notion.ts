// lib/notion.ts - Simplified Notion API client
import { Client } from "@notionhq/client";

export class NotionBlog {
  private notion: Client;
  private databaseId: string;

  constructor() {
    this.notion = new Client({
      auth: process.env.NOTION_TOKEN,
    });
    this.databaseId = process.env.NOTION_DATABASE_ID || "";
  }

  async getAllPosts() {
    try {
      const response = await this.notion.databases.query({
        database_id: this.databaseId,
        // No filters - get all pages
        sorts: [
          {
            property: "Date",
            direction: "descending",
          },
        ],
      });

      console.log(`Found ${response.results.length} pages in database`);
      return response.results.map((page) => this.formatPost(page));
    } catch (error) {
      console.error("Error fetching posts:", error);
      return [];
    }
  }

  async getPostBySlug(slug: string) {
    try {
      // Get all posts first, then find by slug
      const allPosts = await this.getAllPosts();
      const post = allPosts.find((p) => p.slug === slug);

      if (!post) {
        return null;
      }

      // Get content for this post
      const content = await this.getPageContent(post.id);

      return {
        ...post,
        content: content,
      };
    } catch (error) {
      console.error("Error fetching post:", error);
      return null;
    }
  }

  async getPageContent(pageId: string) {
    try {
      const response = await this.notion.blocks.children.list({
        block_id: pageId,
      });

      return response.results
        .map((block) => this.formatBlock(block))
        .join("\n\n");
    } catch (error) {
      console.error("Error fetching page content:", error);
      return "";
    }
  }

  private formatPost(page: any) {
    const properties = page.properties;

    // Safely get properties - handles missing properties gracefully
    const getTextProperty = (prop: any) => {
      return prop?.rich_text?.[0]?.plain_text || "";
    };

    const getTitleProperty = (prop: any) => {
      return prop?.title?.[0]?.plain_text || "Untitled";
    };

    const getCheckboxProperty = (prop: any) => {
      return prop?.checkbox || false;
    };

    const getDateProperty = (prop: any) => {
      return prop?.date?.start || "";
    };

    const getMultiSelectProperty = (prop: any) => {
      return prop?.multi_select?.map((tag: any) => tag.name) || [];
    };

    const getFileProperty = (prop: any) => {
      return (
        prop?.files?.[0]?.file?.url || prop?.files?.[0]?.external?.url || null
      );
    };

    return {
      id: page.id,
      title: getTitleProperty(
        properties.Title || properties.title || properties.Name
      ),
      slug: getTextProperty(properties.Slug || properties.slug),
      date: getDateProperty(
        properties.Date || properties.date || properties.Created
      ),
      tags: getMultiSelectProperty(
        properties.Tags || properties.tags || properties.Category
      ),
      featuredImage: getFileProperty(
        properties["Featured Image"] || properties.Image || properties.Cover
      ),
      published:
        getCheckboxProperty(
          properties.Published || properties.published || properties.Public
        ) || true, // Default to true if no Published field
      createdAt: page.created_time,
      updatedAt: page.last_edited_time,
      content: "", // Initialize content as empty string
    };
  }

  private formatBlock(block: any) {
    const { type } = block;

    switch (type) {
      case "paragraph":
        return this.formatRichText(block.paragraph.rich_text);

      case "heading_1":
        return `# ${this.formatRichText(block.heading_1.rich_text)}`;

      case "heading_2":
        return `## ${this.formatRichText(block.heading_2.rich_text)}`;

      case "heading_3":
        return `### ${this.formatRichText(block.heading_3.rich_text)}`;

      case "bulleted_list_item":
        return `- ${this.formatRichText(block.bulleted_list_item.rich_text)}`;

      case "numbered_list_item":
        return `1. ${this.formatRichText(block.numbered_list_item.rich_text)}`;

      case "code":
        const language = block.code.language || "";
        const code = this.formatRichText(block.code.rich_text);
        return `\`\`\`${language}\n${code}\n\`\`\``;

      case "quote":
        return `> ${this.formatRichText(block.quote.rich_text)}`;

      case "image":
        const imageUrl = block.image.file?.url || block.image.external?.url;
        const caption =
          block.image.caption?.map((c: any) => c.plain_text).join("") || "";
        return `![${caption}](${imageUrl})`;

      default:
        return "";
    }
  }

  private formatRichText(richText: any[]) {
    return richText
      .map((text) => {
        let formattedText = text.plain_text;

        if (text.annotations.bold) {
          formattedText = `**${formattedText}**`;
        }
        if (text.annotations.italic) {
          formattedText = `*${formattedText}*`;
        }
        if (text.annotations.code) {
          formattedText = `\`${formattedText}\``;
        }

        return formattedText;
      })
      .join("");
  }
}
