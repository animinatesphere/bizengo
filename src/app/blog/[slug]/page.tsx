import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { NotionBlog } from "../../../lib/notion";

// Server Component
export default async function BlogPost({ params }) {
  const blog = new NotionBlog();
  const post = await blog.getPostBySlug(params.slug);

  // If post not found, show 404
  if (!post) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <nav className="mb-8">
        <Link
          href="/blog"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          ← Back to Blog
        </Link>
      </nav>

      <article>
        <header className="mb-8">
          {post.featuredImage && (
            <div className="aspect-video mb-8 rounded-lg overflow-hidden">
              <img
                src={post.featuredImage}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-6">
            <time className="text-lg">
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>

            {post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-700 text-sm rounded-full font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        <div className="prose prose-lg prose-gray max-w-none">
          <ReactMarkdown
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold mt-8 mb-4 text-gray-900">
                  {children}
                </h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold mt-6 mb-3 text-gray-900">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-bold mt-4 mb-2 text-gray-900">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="mb-4 text-gray-700 leading-relaxed">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="mb-4 ml-6 list-disc">{children}</ul>
              ),
              ol: ({ children }) => (
                <ol className="mb-4 ml-6 list-decimal">{children}</ol>
              ),
              li: ({ children }) => (
                <li className="mb-1 text-gray-700">{children}</li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-blue-500 pl-6 py-2 my-6 bg-blue-50 italic text-gray-700">
                  {children}
                </blockquote>
              ),
              code: ({ children }) => (
                <code className="bg-gray-100 px-2 py-1 rounded text-sm font-mono text-gray-800">
                  {children}
                </code>
              ),
              pre: ({ children }) => (
                <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto my-6">
                  {children}
                </pre>
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </article>
    </div>
  );
}

// Generate static params for all posts
export async function generateStaticParams() {
  const blog = new NotionBlog();
  const posts = await blog.getAllPosts();

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

// Generate metadata for SEO
export async function generateMetadata({ params }) {
  const blog = new NotionBlog();
  const post = await blog.getPostBySlug(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: `${post.title} - My Blog`,
    description: `Blog post: ${post.title}`,
  };
}

// Enable static generation with revalidation
export const revalidate = 60;
