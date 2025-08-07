import { NextResponse } from "next/server";
import { NotionBlog } from "../../../../lib/notion";

export async function GET(request, { params }) {
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
