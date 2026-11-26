import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  User,
  ArrowLeft,
  MessageCircle,
  Clock,
  Phone,
  ShieldCheck,
  Check,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import blogsData from "@/data/blogs.json";
import siteConfig from "@/data/siteConfig.json";
import Breadcrumb from "@/components/Breadcrumb";
import BookingForm from "@/components/BookingForm";
import FAQAccordion from "@/components/FAQAccordion";
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

  const resolvedTitle =
    post.seo.title.includes("Alleppey Booking") || post.seo.title.length > 42
      ? { absolute: post.seo.title }
      : post.seo.title;

  return {
    title: resolvedTitle,
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

/** Strip WordPress block comments and wp-* classes from HTML, and wrap tables for mobile responsiveness */
function cleanWpHtml(html: string): string {
  let cleaned = html
    .replace(/<!--\s*\/?wp:[^>]*-->/g, "")
    .replace(/\bclass="wp-block-list\b[^"]*"/g, "")
    .replace(/\bclass="wp-block-heading\b[^"]*"/g, "")
    .replace(/\bclass="wp-block-image[^"]*"/g, "")
    .replace(/\bclass="wp-image-\d+[^"]*"/g, "")
    .replace(/\bclass="\s*"/g, "")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

  // Normalize any figure.wp-block-table wrapper into clean responsive wrapper
  cleaned = cleaned.replace(
    /<figure[^>]*wp-block-table[^>]*>\s*(<table[\s\S]*?<\/table>)\s*<\/figure>/gi,
    '<div class="blog-table-container"><div class="blog-table-scroll-hint"><span>↔ Swipe horizontally to view full table</span></div><div class="blog-table-wrapper">$1</div></div>'
  );

  // Wrap any standalone <table> not already inside blog-table-wrapper
  cleaned = cleaned.replace(
    /(<div class="blog-table-wrapper">[\s\S]*?<\/div>)|(<table[\s\S]*?<\/table>)/gi,
    (match, p1, p2) => {
      if (p1) return p1;
      return `<div class="blog-table-container"><div class="blog-table-scroll-hint"><span>↔ Swipe horizontally to view full table</span></div><div class="blog-table-wrapper">${p2}</div></div>`;
    }
  );

  return cleaned;
}

export default async function SingleBlogPage({ params }: BlogPageProps) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) notFound();

  // Popular and related guides (distinct slices so sidebar and bottom grids don't duplicate links)
  const otherBlogs = blogs.filter((b) => b.slug !== slug);
  const sidebarGuides = otherBlogs.slice(0, 3);
  const relatedBlogs =
    otherBlogs.length > 3 ? otherBlogs.slice(3, 6) : otherBlogs.slice(0, 3);

  const featuredFleets = [
    {
      title: "1 Bedroom Private",
      subtitle: "Honeymoons & Couples",
      price: "₹11,000",
      href: "/1-bedroom-houseboat-alleppey/",
      badge: "Most Popular",
    },
    {
      title: "2 Bedroom Private",
      subtitle: "Families & 4 Adults",
      price: "₹14,000",
      href: "/2-bedroom-houseboat-alleppey/",
      badge: "Family Pick",
    },
    {
      title: "3 Bedroom Private",
      subtitle: "Friends & Joint Families",
      price: "₹18,000",
      href: "/3-bedroom-houseboat-alleppey/",
      badge: "Best Value",
    },
    {
      title: "Sharing Houseboat",
      subtitle: "Private AC Room + All Meals",
      price: "₹5,999",
      href: "/sharing-houseboat-in-alleppey/",
      badge: "Budget Saver",
    },
  ];

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

  const faqSchema =
    post.faqs && post.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: post.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
        }
      : null;

  const whatsappInquiryUrl = `https://wa.me/917012761588?text=Hello%20Alleppey%20Booking%2C%20I%20read%20your%20article%20%22${encodeURIComponent(post.title)}%22%20and%20would%20like%20to%20enquire%20about%20booking%20a%20tour.`;

  const cleanedContent = cleanWpHtml(post.contentHtml || "");
  const plainTextWords = cleanedContent
    .replace(/<[^>]+>/g, " ")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
  const readMinutes = Math.max(1, Math.ceil(plainTextWords / 200));
  const hasInlineFaq = /<h2[^>]*>[\s\S]*?(?:frequently asked|faq)/i.test(
    cleanedContent
  );

  return (
    <article className="pt-24 pb-12 sm:pt-28 sm:pb-16 bg-slate-50 min-h-screen w-full max-w-full overflow-x-hidden">
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          suppressHydrationWarning
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}

      {/* Expanded Max-W-7XL Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full min-w-0">
        <Breadcrumb
          items={[
            { label: "Blogs", href: "/blogs/" },
            { label: post.title },
          ]}
        />

        {/* Full-Width Hero Section across the 7xl Container */}
        <header className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-sm mt-4 mb-8 min-w-0 overflow-hidden">
          <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 text-xs text-slate-400 mb-4">
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
              <span>{readMinutes} min read</span>
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#0A2540] tracking-tight leading-tight mb-6 sm:mb-8 break-words">
            {post.title}
          </h1>

          {/* Large Hero Featured Image */}
          <div className="relative h-64 sm:h-[420px] lg:h-[500px] w-full rounded-2xl overflow-hidden shadow-md bg-slate-100">
            <Image
              src={post.image}
              alt={post.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </header>

        {/* 2-Column Grid: Main Content (8 cols) + Sticky Sidebar (4 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Main Article Body Column */}
          <div className="lg:col-span-8 min-w-0">
            <div className="bg-white rounded-3xl p-6 sm:p-10 lg:p-12 border border-slate-200/80 shadow-sm mb-8 min-w-0 overflow-hidden">
              <div
                className="blog-content min-w-0 break-words"
                suppressHydrationWarning
                dangerouslySetInnerHTML={{ __html: cleanedContent }}
              />

              {/* In-Article WhatsApp Callout */}
              <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-200/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Direct Backwater Booking</span>
                  </div>
                  <h2 className="text-lg font-bold text-[#0A2540]">
                    Planning Your Alleppey Backwater Trip?
                  </h2>
                  <p className="text-xs text-slate-600 mt-1 leading-relaxed max-w-xl">
                    Chat with our local cruise desk on WhatsApp for live boat videos, verified berth availability, and guaranteed transparent pricing.
                  </p>
                </div>
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full font-bold text-xs bg-[#2CD664] hover:bg-[#22B350] text-white flex items-center justify-center gap-2 flex-shrink-0 shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {post.faqs && post.faqs.length > 0 && !hasInlineFaq && (
              <div className="mb-8">
                <FAQAccordion
                  items={post.faqs}
                  includeSchema={false}
                  title="Frequently Asked Questions"
                  subtitle={`Quick answers on ${post.seo.focusKeyword || post.title}`}
                />
              </div>
            )}

            {/* Back to Blogs Link */}
            <div className="mb-8">
              <Link
                href="/blogs/"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A2540] hover:text-[#FF6600] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Travel Guides
              </Link>
            </div>

            {/* Bottom Booking Form */}
            <div className="my-10">
              <BookingForm
                title="Book Your Alleppey Cruise Experience"
                subtitle="Get instant WhatsApp confirmation and live boat photos directly from the jetty"
              />
            </div>
          </div>

          {/* Sticky Sidebar Column */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
            {/* Widget 1: Direct Captain & Cruise Assistance */}
            <div className="bg-gradient-to-br from-[#0A2540] via-[#0E3156] to-[#16416E] text-white p-6 sm:p-7 rounded-3xl shadow-xl border border-slate-700/60 relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-[#2CD664]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#2CD664] text-[11px] font-bold tracking-wide uppercase mb-4 border border-white/10 backdrop-blur-sm">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Verified Operators</span>
              </div>

              <h3 className="text-xl font-black text-white tracking-tight leading-snug mb-2">
                Need Help Planning Your Houseboat?
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6">
                Connect directly with our local reservation specialists for instant date checks, boat photos, and honest pricing.
              </p>

              <div className="space-y-2.5 mb-6 text-xs text-slate-200">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2CD664] flex-shrink-0" />
                  <span>Port Authority &amp; DTPC Green-Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2CD664] flex-shrink-0" />
                  <span>Fresh Kerala Meals Cooked Onboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#2CD664] flex-shrink-0" />
                  <span>Zero Middleman Fees &amp; Transparent Rates</span>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={whatsappInquiryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 px-4 rounded-xl font-bold text-xs bg-[#2CD664] hover:bg-[#24B855] text-white flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  <span>Chat on WhatsApp (+91 70127 61588)</span>
                </a>
                <a
                  href="tel:+919947753154"
                  className="w-full py-3 px-4 rounded-xl font-semibold text-xs bg-white/10 hover:bg-white/20 text-white flex items-center justify-center gap-2 border border-white/20 transition-all"
                >
                  <Phone className="w-3.5 h-3.5 text-slate-200" />
                  <span>Call Reservation: +91 99477 53154</span>
                </a>
              </div>
            </div>

            {/* Widget 2: Featured Houseboat Fleets */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-base font-bold text-[#0A2540]">
                  Popular Fleet Options
                </h3>
                <Link
                  href="/house-boat-alleppey/"
                  className="text-[11px] font-bold text-[#FF6600] hover:underline"
                >
                  View All →
                </Link>
              </div>

              <div className="space-y-3">
                {featuredFleets.map((fleet) => (
                  <Link
                    key={fleet.href}
                    href={fleet.href}
                    className="group block p-3.5 rounded-2xl bg-slate-50 hover:bg-emerald-50/50 border border-slate-200/60 hover:border-emerald-300 transition-all"
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-bold text-[#0A2540] group-hover:text-emerald-700 transition-colors">
                        {fleet.title}
                      </span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">
                        {fleet.badge}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs text-slate-500">
                      <span className="text-[11px] text-slate-500">{fleet.subtitle}</span>
                      <span className="font-extrabold text-[#0A2540]">{fleet.price}</span>
                    </div>
                  </Link>
                ))}
              </div>

              <Link
                href="/house-boat-alleppey/"
                className="mt-4 w-full py-2.5 rounded-xl text-center block text-xs font-bold text-[#0A2540] bg-slate-100 hover:bg-slate-200 transition-colors"
              >
                Compare 1 to 14 BHK Houseboats
              </Link>
            </div>

            {/* Widget 3: Popular Travel Guides */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm">
              <h3 className="text-base font-bold text-[#0A2540] mb-4">
                Must-Read Travel Guides
              </h3>
              <div className="space-y-4">
                {sidebarGuides.map((guide) => (
                  <Link
                    key={guide.slug}
                    href={`/blogs/${guide.slug}/`}
                    className="flex items-center gap-3.5 group"
                  >
                    <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0">
                      <Image
                        src={guide.image}
                        alt={guide.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-200"
                        sizes="64px"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <span className="text-[10px] font-semibold text-slate-400 block mb-0.5">
                        {guide.date}
                      </span>
                      <h4 className="text-xs font-bold text-[#0A2540] group-hover:text-[#FF6600] transition-colors line-clamp-2 leading-snug">
                        {guide.title}
                      </h4>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>
        </div>

        {/* Bottom Related Articles Section */}
        <div className="mt-16 mb-8 pt-10 border-t border-slate-200/80">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
                More Backwater Guides
              </h2>
              <p className="text-xs text-slate-500 mt-1">
                Explore local itineraries, packing tips, and backwater experiences.
              </p>
            </div>
            <Link
              href="/blogs/"
              className="text-xs font-bold text-[#FF6600] hover:underline flex items-center gap-1"
            >
              <span>View All</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedBlogs.map((b) => (
              <article
                key={b.slug}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col group min-w-0"
              >
                <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                  <Image
                    src={b.image}
                    alt={b.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] text-slate-400">{b.date}</span>
                    <h3 className="text-sm font-bold text-[#0A2540] group-hover:text-[#FF6600] transition-colors mt-1 line-clamp-2 leading-snug">
                      <Link href={`/blogs/${b.slug}/`}>{b.title}</Link>
                    </h3>
                  </div>
                  <Link
                    href={`/blogs/${b.slug}/`}
                    className="text-xs font-bold text-[#FF6600] mt-4 inline-flex items-center gap-1 hover:underline"
                  >
                    <span>Read Guide</span>
                    <ChevronRight className="w-3 h-3" />
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
