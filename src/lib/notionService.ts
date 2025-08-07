import notion from "./notion";
import { BlogPost, NotionPage } from "@/types/notion";

export async function getAllPosts(): Promise<BlogPost[]> {
  try {
    const response = await notion.databases.query({
      database_id: process.env.NOTION_DATABASE_ID!,
      // Remove filter for now to get all posts, or adjust based on your property names
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
        property: "Slug",
        rich_text: {
          equals: slug,
        },
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

function transformNotionPageToBlogPost(page: any): BlogPost {
  // Log the page properties to see what's available
  console.log("Page properties:", Object.keys(page.properties));

  return {
    id: page.id,
    title:
      page.properties.Title?.title[0]?.plain_text ||
      page.properties.Name?.title[0]?.plain_text ||
      "Untitled",
    slug: page.properties.Slug?.rich_text[0]?.plain_text || "",
    published: page.properties.Published?.checkbox ?? true,
    date: page.properties.Date?.date?.start || new Date().toISOString(),
    tags: page.properties.Tags?.multi_select?.map((tag: any) => tag.name) || [],
    featuredImage:
      page.properties["Featured Image"]?.files[0]?.file?.url ||
      page.properties["Featured Image"]?.files[0]?.external?.url,
  };
}
