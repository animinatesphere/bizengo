import notion from "./notion";
import { BlogPost, NotionPage } from "@/types/notion";

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        property: "Published",
        checkbox: {
          equals: true,
        },
      },
      sorts: [
        {
          property: "Date",
          direction: "descending",
        },
      ],
    });

    return response.results.map((page: any) =>
      transformNotionPageToBlogPost(page)
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return [];
  }
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      filter: {
        and: [
          {
            property: "Published",
            checkbox: {
              equals: true,
            },
          },
          {
            property: "Slug",
            rich_text: {
              equals: slug,
            },
          },
        ],
      },
    });

    if (response.results.length === 0) return null;

    const page = response.results[0] as NotionPage;
    const post = transformNotionPageToBlogPost(page);

    // Get page content
    const blocks = await notion.blocks.children.list({
      block_id: page.id,
    });

    post.content = blocks.results;

    return post;
  } catch (error) {
    console.error("Error fetching post:", error);
    return null;
  }
}

function transformNotionPageToBlogPost(page: NotionPage): BlogPost {
  return {
    id: page.id,
    title: page.properties.Title.title[0]?.plain_text || "Untitled",
    slug: page.properties.Slug.rich_text[0]?.plain_text || "",
    published: page.properties.Published.checkbox,
    date: page.properties.Date.date?.start || "",
    tags: page.properties.Tags.multi_select.map((tag) => tag.name),
    featuredImage:
      page.properties["Featured Image"].files[0]?.file?.url ||
      page.properties["Featured Image"].files[0]?.external?.url,
  };
}
