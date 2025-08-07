import Link from "next/link";
import { NotionBlog } from "../../lib/notion";
import { Metadata } from "next";

// Define the blog post interface
interface BlogPost {
  id: string;
  title: string;
  slug: string;
  date: string;
  featuredImage?: string;
  tags: string[]; // Explicitly type tags as string array
}

// This is a Server Component - runs on the server
export default async function BlogPage() {
  const blog = new NotionBlog();
  const posts: BlogPost[] = await blog.getAllPosts(); // Type the posts array

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-900">My Blog</h1>
        <p className="text-xl text-gray-600">Powered by Notion API</p>
      </header>

      <main>
        {posts.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">
              No posts yet
            </h2>
            <p className="text-gray-600">
              Create some posts in your Notion database!
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post: BlogPost) => (
              <article
                key={post.id}
                className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {post.featuredImage && (
                  <div className="aspect-video">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="p-6">
                  <h2 className="text-xl font-semibold mb-3 text-gray-900">
                    <Link
                      href={`/blog/${post.slug}`}
                      className="hover:text-blue-600 transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>
                  <p className="text-gray-500 text-sm mb-4">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  {post.tags && post.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag: string) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

// Enable static generation with revalidation
export const revalidate = 60; // Revalidate every 60 seconds

// Optional: Add metadata with proper typing
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "My Blog - Powered by Notion",
    description: "A blog powered by Notion API",
  };
}
