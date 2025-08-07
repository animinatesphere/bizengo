import { NextResponse } from "next/server";
import { NotionBlog } from "../../../lib/notion";

// Add these exports for static generation
export const dynamic = "force-static";
export const revalidate = false;

export async function GET() {
  try {
    const blog = new NotionBlog();
    const posts = await blog.getAllPosts();

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
