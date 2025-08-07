import notion from "./notion";
import { BlogPost } from "@/types/notion";
import { PageObjectResponse } from "@notionhq/client/build/src/api-endpoints";

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

    return response.results
      .filter((page): page is PageObjectResponse => "properties" in page)
      .map((page) => transformNotionPageToBlogPost(page));
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

    const page = response.results.find(
      (page): page is PageObjectResponse => "properties" in page
    );
    if (!page) return null;

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

function transformNotionPageToBlogPost(page: PageObjectResponse): BlogPost {
  // Log the page properties to see what's available
  console.log("Page properties:", Object.keys(page.properties));

  // Helper function to safely get property values
  const getPropertyValue = (propName: string, propType: string) => {
    const prop = page.properties[propName];
    if (!prop) return null;

    switch (propType) {
      case "title":
        return (prop as any).title?.[0]?.plain_text || "";
      case "rich_text":
        return (prop as any).rich_text?.[0]?.plain_text || "";
      case "checkbox":
        return (prop as any).checkbox ?? false;
      case "date":
        return (prop as any).date?.start || "";
      case "multi_select":
        return (prop as any).multi_select?.map((tag: any) => tag.name) || [];
      case "files":
        const files = (prop as any).files || [];
        return files[0]?.file?.url || files[0]?.external?.url || "";
      default:
        return null;
    }
  };

  return {
    id: page.id,
    title:
      getPropertyValue("Title", "title") ||
      getPropertyValue("Name", "title") ||
      "Untitled",
    slug: getPropertyValue("Slug", "rich_text") || "",
    published: getPropertyValue("Published", "checkbox") ?? true,
    date: getPropertyValue("Date", "date") || new Date().toISOString(),
    tags: getPropertyValue("Tags", "multi_select") || [],
    featuredImage: getPropertyValue("Featured Image", "files"),
  };
}
