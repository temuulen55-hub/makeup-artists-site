"use client";

import { useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { BLOG_CATEGORIES, BLOG_POSTS, type BlogCategory } from "@/lib/data/blogPosts";

const ALL = "Бүгд";

export default function BlogList() {
  const [active, setActive] = useState<BlogCategory | typeof ALL>(ALL);

  const posts =
    active === ALL ? BLOG_POSTS : BLOG_POSTS.filter((post) => post.category === active);

  return (
    <div>
      {/* Filter chips — mobile дээр horizontal scroll, dropdown биш */}
      <div className="-mx-5 flex gap-2.5 overflow-x-auto px-5 pb-2 lg:mx-0 lg:flex-wrap lg:px-0">
        {[ALL, ...BLOG_CATEGORIES].map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActive(category as BlogCategory | typeof ALL)}
            className={`whitespace-nowrap rounded-pill px-4 py-2 font-sans text-sm transition-colors ${
              active === category
                ? "bg-espresso text-champagne"
                : "border border-charcoal/15 text-charcoal/70 hover:border-dusty-rose hover:text-dusty-rose"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/zovlogoo/${post.slug}`}
            className="group flex flex-col rounded-2xl border border-charcoal/10 bg-white/40 p-6 transition-shadow hover:shadow-card"
          >
            <div className="aspect-[16/10] w-full rounded-xl bg-champagne" aria-hidden="true" />

            <span className="mt-4 font-sans text-xs font-medium uppercase tracking-wide text-dusty-rose">
              {post.category}
            </span>
            <h3 className="mt-2 font-serif text-xl leading-snug text-charcoal group-hover:text-espresso">
              {post.title}
            </h3>
            <p className="mt-2 line-clamp-3 font-sans text-sm text-charcoal/70">
              {post.excerpt}
            </p>
            <div className="mt-4 flex items-center gap-3 font-sans text-xs text-charcoal/50">
              <span>{format(new Date(post.date), "yyyy.MM.dd")}</span>
              <span aria-hidden="true">·</span>
              <span>{post.readTime} унших</span>
            </div>
          </Link>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="mt-12 text-center font-sans text-charcoal/60">
          Удахгүй шинэ нийтлэл нэмэгдэх болно.
        </p>
      )}
    </div>
  );
}
