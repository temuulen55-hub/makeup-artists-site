import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { format } from "date-fns";
import Container from "@/components/ui/Container";
import { BLOG_POSTS } from "@/lib/data/blogPosts";

type PageProps = {
  // Next.js 15: params нь Promise болсон (Async Request APIs breaking change),
  // тул page component-ийг async болгож, эхлээд await хийх ёстой.
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="py-16 lg:py-24">
      <Container className="max-w-3xl">
        <Link href="/zovlogoo" className="font-sans text-sm text-dusty-rose">
          ← Бүх нийтлэл
        </Link>

        <span className="mt-6 block font-sans text-xs font-medium uppercase tracking-wide text-dusty-rose">
          {post.category}
        </span>
        <h1 className="mt-2 font-serif text-3xl leading-tight text-charcoal lg:text-5xl">
          {post.title}
        </h1>
        <div className="mt-4 flex items-center gap-3 font-sans text-sm text-charcoal/50">
          <span>{format(new Date(post.date), "yyyy.MM.dd")}</span>
          <span aria-hidden="true">·</span>
          <span>{post.readTime} унших</span>
        </div>

        <div
          className="mt-8 aspect-[16/9] w-full rounded-2xl bg-champagne"
          aria-hidden="true"
        />

        <p className="mt-8 font-sans text-lg leading-relaxed text-charcoal/80">
          {post.excerpt}
        </p>

        <div className="mt-6 space-y-5">
          {post.content.map((paragraph, i) => (
            <p key={i} className="font-sans leading-relaxed text-charcoal/70">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-ivory p-6 text-center">
          <p className="font-serif text-xl text-charcoal">
            Зөвлөгөөг амьдрал дээр хэрэгжүүлмээр санагдсан уу?
          </p>
          <Link href="/zahialga" className="btn-primary mt-4 inline-flex">
            Цаг захиалах
          </Link>
        </div>
      </Container>
    </article>
  );
}
