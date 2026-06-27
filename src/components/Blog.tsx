"use client";

import { blog } from "@/data/blog";

export default function Blog() {
  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-10">Latest Articles</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {blog.map((post, i) => (
          <div
            key={i}
            className="p-6 border rounded-xl bg-white dark:bg-gray-900 hover:shadow-lg transition"
          >
            <p className="text-xs text-indigo-600">{post.tag}</p>
            <h3 className="font-semibold mt-2">{post.title}</h3>

            <p className="text-sm text-gray-500 mt-2">
              {post.date} • {post.readTime}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}