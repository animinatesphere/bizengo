// app/posts/[slug]/page.js
import { NotionBlog } from "@/lib/notion";

// Generate static params for all posts
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

// Generate metadata for each post
export async function generateMetadata({ params }) {
  try {
    const blog = new NotionBlog();
    const post = await blog.getPostBySlug(params.slug);

    if (!post) {
      return {
        title: "Post Not Found",
      };
    }

    return {
      title: post.title,
      description: post.excerpt,
    };
  } catch (error) {
    return {
      title: "Error Loading Post",
    };
  }
}

// Main page component
export default async function PostPage({ params }) {
  try {
    const blog = new NotionBlog();
    const post = await blog.getPostBySlug(params.slug);

    if (!post) {
      return (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl font-bold">Post Not Found</h1>
          <p>The requested post could not be found.</p>
        </div>
      );
    }

    return (
      <article className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <div className="prose max-w-none">
          {/* Render your post content here */}
          <div dangerouslySetInnerHTML={{ __html: post.content }} />
        </div>
      </article>
    );
  } catch (error) {
    console.error("Error loading post:", error);
    return (
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold">Error</h1>
        <p>Failed to load the post. Please try again later.</p>
      </div>
    );
  }
}
