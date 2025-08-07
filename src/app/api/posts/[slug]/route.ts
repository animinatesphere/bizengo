import { NextRequest, NextResponse } from "next/server";
import { NotionBlog } from "@/lib/notion";

// Add these exports for static generation
export const dynamic = "force-static";
export const revalidate = false;

// You need this function to pre-generate all possible slug routes
export async function generateStaticParams() {
  try {
    const blog = new NotionBlog();
    const posts = await blog.getAllPosts();

    return posts.map((post) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { slug: string } }
) {
  try {
    const blog = new NotionBlog();
    const post = await blog.getPostBySlug(params.slug);

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    return NextResponse.json(post);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch post" },
      { status: 500 }
    );
  }
}
import Link from "next/link";
