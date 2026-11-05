import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BookOpen, Calendar, User, ArrowRight } from "lucide-react";
import blogsData from "@/data/blogs.json";
import siteConfig from "@/data/siteConfig.json";
import Breadcrumb from "@/components/Breadcrumb";
import { BlogPost } from "@/types";

export const metadata: Metadata = {
  title: "Alleppey Travel Blogs & Kerala Backwater Guides | Alleppey Booking",
  description:
    "Explore our insider travel guides, houseboat cost breakdowns, Shikara guides, kayaking tips, and itineraries for your trip to Alleppey (Alappuzha), Kerala.",
  alternates: {
    canonical: `${siteConfig.url}/blogs/`,
  },
  openGraph: {
    title: "Alleppey Travel Blogs & Kerala Backwater Guides | Alleppey Booking",
    description:
      "Explore insider travel guides, houseboat cost breakdowns, Shikara guides, kayaking tips, and itineraries for Alleppey, Kerala.",
    url: `${siteConfig.url}/blogs/`,
  },
};

export default function BlogsPage() {
  const blogs = blogsData as BlogPost[];

  return (
    <div className="py-6 sm:py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Blogs & Travel Guides" }]} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto my-8">
          <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
            Kerala Travel Insights
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-[#0A2540] mt-3 tracking-tight">
            Alleppey Backwater Travel Guides & Blogs
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-3 leading-relaxed">
            Insider tips from local captains: how to book houseboats, compare private vs sharing options, discover hidden canals by Shikara, and plan your dream vacation.
          </p>
        </div>

        {/* Featured First Post */}
        {blogs[0] && (
          <div className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-md mb-12 grid grid-cols-1 lg:grid-cols-12 group">
            <div className="lg:col-span-7 relative h-72 sm:h-96 w-full bg-slate-100">
              <Image
                src={blogs[0].image}
                alt={blogs[0].title}
                fill
                priority
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 1024px) 100vw, 60vw"
              />
              <span className="absolute top-4 left-4 bg-[#FF6600] text-white text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                Featured Guide
              </span>
            </div>
            <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 text-xs text-slate-400 mb-3">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{blogs[0].date}</span>
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <User className="w-3.5 h-3.5" />
                    <span>{blogs[0].author}</span>
                  </span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-[#0A2540] group-hover:text-[#FF6600] transition-colors mb-3 leading-snug">
                  <Link href={`/blogs/${blogs[0].slug}/`}>{blogs[0].title}</Link>
                </h2>
                <p className="text-xs sm:text-sm text-slate-600 line-clamp-4 leading-relaxed mb-6">
                  {blogs[0].excerpt}
                </p>
              </div>

              <Link
                href={`/blogs/${blogs[0].slug}/`}
                className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#FF6600] hover:underline"
              >
                <span>Read Full Travel Guide</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        )}

        {/* All Remaining Posts Grid */}
        <div className="mt-12 mb-6">
          <h2 className="text-xl sm:text-2xl font-extrabold text-[#0A2540]">
            All Backwater Articles &amp; Travel Guides
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {blogs.slice(1).map((b) => (
            <article
              key={b.slug}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                <Image
                  src={b.image}
                  alt={b.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 text-[11px] text-slate-400 mb-2">
                    <Calendar className="w-3 h-3" />
                    <span>{b.date}</span>
                  </div>
                  <h3 className="text-base font-bold text-[#0A2540] group-hover:text-[#FF6600] transition-colors mb-2 leading-snug line-clamp-2">
                    <Link href={`/blogs/${b.slug}/`}>{b.title}</Link>
                  </h3>
                  <p className="text-xs text-slate-500 line-clamp-3 leading-relaxed mb-4">
                    {b.excerpt}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100">
                  <Link
                    href={`/blogs/${b.slug}/`}
                    className="text-xs font-bold text-[#FF6600] flex items-center gap-1 hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

