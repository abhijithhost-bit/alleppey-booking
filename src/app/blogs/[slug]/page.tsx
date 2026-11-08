import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, User, ArrowLeft, MessageCircle, Clock } from "lucide-react";
import blogsData from "@/data/blogs.json";
import siteConfig from "@/data/siteConfig.json";
import Breadcrumb from "@/components/Breadcrumb";
import BookingForm from "@/components/BookingForm";
import { BlogPost } from "@/types";

interface BlogPageProps {
  params: Promise<{ slug: string }>;
}

const blogs = blogsData as BlogPost[];

export const dynamicParams = false;

export async function generateStaticParams() {
  return blogs.map((b) => ({
    slug: b.slug,
  }));
}

export async function generateMetadata({ params }: BlogPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) {
    return { title: "Blog Post Not Found | Alleppey Booking" };
  }

  return {
    title: post.seo.title,
    description: post.seo.description,
    keywords: post.seo.focusKeyword ? [post.seo.focusKeyword] : undefined,
    alternates: { canonical: `${siteConfig.url}/blogs/${slug}/` },
    openGraph: {
      title: post.seo.title,
      description: post.seo.description,
      url: `${siteConfig.url}/blogs/${slug}/`,
      type: "article",
      publishedTime: post.date,
      images: [{ url: `${siteConfig.url}${post.image}`, alt: post.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.seo.title,
      description: post.seo.description,
      images: [`${siteConfig.url}${post.image}`],
    },
  };
}

/** Strip WordPress block comments and wp-* classes from HTML */
function cleanWpHtml(html: string): string {
  return html
    .replace(/<!--\s*\/?wp:[^>]*-->/g, "")
    .replace(/\bclass="wp-block-list\b[^"]*"/g, "")
    .replace(/\bclass="wp-block-heading\b[^"]*"/g, "")
    .replace(/\bclass="wp-block-image[^"]*"/g, "")
    .replace(/\bclass="wp-image-\d+[^"]*"/g, "")
    .replace(/\bclass="\s*"/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();
}

export default async function SingleBlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) notFound();

  const relatedBlogs = blogs.filter((b) => b.slug !== slug).slice(0, 3);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: [`${siteConfig.url}${post.image}`],
    datePublished: post.date,
    dateModified: post.date,
    author: [{ "@type": "Person", name: post.author }],
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: `${siteConfig.url}/wp-content/uploads/2026/06/Untitled-design-2-1.webp`,
      },
    },
    description: post.seo.description,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${siteConfig.url}/blogs/${slug}/`,
    },
  };

  const whatsappInquiryUrl = `https://wa.me/917012761588?text=Hello%20Alleppey%20Booking%2C%20I%20read%20your%20article%20%22${encodeURIComponent(post.title)}%22%20and%20would%20like%20to%20enquire%20about%20booking%20a%20tour.`;

  const cleanedContent = cleanWpHtml(post.contentHtml || "");

  return (
    <article className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-slate-50 min-h-screen">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: "Blogs", href: "/blogs/" },
            { label: post.title },
          ]}
        />

        {/* Article Header */}
        <header className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm mt-4 mb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 mb-4">
            <span className="flex items-center gap-1.5 font-medium text-slate-600">
              <Calendar className="w-3.5 h-3.5 text-[#FF6600]" />
              <span>{post.date}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-medium text-slate-600">
              <User className="w-3.5 h-3.5 text-[#2CD664]" />
              <span>{post.author}</span>
            </span>
            <span>•</span>
            <span className="flex items-center gap-1.5 font-medium text-slate-500">
              <Clock className="w-3.5 h-3.5" />
              <span>5 min read</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight leading-tight mb-6">
            {post.title}
          </h1>

          {/* Featured Image */}
          <div className="relative h-72 sm:h-96 w-full rounded-2xl overflow-hidden shadow-md bg-slate-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 800px"
            />
          </div>
        </header>

        {/* Main Article Body — cleaned WordPress HTML */}
        <div className="bg-white rounded-3xl p-6 sm:p-12 border border-slate-200/80 shadow-sm mb-12">
          <div
            className="blog-content"
            suppressHydrationWarning
            dangerouslySetInnerHTML={{ __html: cleanedContent }}
          />

          {/* In-Article WhatsApp Callout */}
          <div className="mt-12 p-6 rounded-2xl bg-emerald-50 border border-emerald-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h2 className="text-base font-bold text-[#0A2540]">
                Planning Your Alleppey Backwater Trip?
              </h2>
              <p className="text-xs text-slate-600 mt-1">
                Chat with our local cruise captain on WhatsApp for actual boat photos, live availability, and direct booking rates.
              </p>
            </div>
            <a
              href={whatsappInquiryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-full font-bold text-xs bg-[#2CD664] hover:bg-[#22B350] text-white flex items-center gap-2 flex-shrink-0 shadow-md transition-colors"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>Enquire on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Back to Blogs Link */}
        <div className="mb-8">
          <Link
            href="/blogs/"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A2540] hover:text-[#FF6600] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to All Guides
          </Link>
        </div>

        {/* Bottom Booking Form */}
        <div className="my-12">
          <BookingForm
            title="Book Your Alleppey Cruise Experience"
            subtitle="Get instant WhatsApp confirmation and live boat photos directly from the jetty"
          />
        </div>

        {/* Related Articles */}
        <div className="mt-16 mb-8">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
              More Travel Guides
            </h2>
            <Link href="/blogs/" className="text-xs font-bold text-[#FF6600] hover:underline">
              View All Guides →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedBlogs.map((b) => (
              <article
                key={b.slug}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col group"
              >
                <div className="relative h-40 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    loading="eager"
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-slate-400">{b.date}</span>
                    <h3 className="text-xs font-bold text-[#0A2540] group-hover:text-[#FF6600] transition-colors mt-1 line-clamp-2">
                      <Link href={`/blogs/${b.slug}/`}>{b.title}</Link>
                    </h3>
                  </div>
                  <Link
                    href={`/blogs/${b.slug}/`}
                    className="text-xs font-bold text-[#FF6600] mt-3 inline-block hover:underline"
                  >
                    Read →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
