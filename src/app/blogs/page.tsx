import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import blogsData from "@/data/blogs.json";
import siteConfig from "@/data/siteConfig.json";

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

interface BlogItem {
  slug: string;
  title: string;
  date: string;
  image: string;
  seo?: {
    description?: string;
  };
}

export default function BlogsPage() {
  const blogs = blogsData as unknown as BlogItem[];

  return (
    <>
      {/* Hero Section */}
      <div className="bl-hero-wrapper">
        <div className="bl-hero-container">
          <span className="bl-badge">📖 Travel Guides &amp; Tips</span>
          <h1 className="bl-hero-title">
            Discover the <span className="bl-highlight">Backwaters.</span>
          </h1>
          <p className="bl-hero-subtitle">
            Read our latest local insights, travel itineraries, and expert tips to
            make your trip to the Venice of the East absolutely unforgettable.
          </p>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="bl-main-wrapper">
        <div className="bl-grid-container">
          {blogs.map((b) => (
            <Link key={b.slug} href={`/blogs/${b.slug}/`} className="bl-card">
              <div className="bl-img-wrapper">
                <Image
                  src={b.image}
                  alt={b.title || "Alleppey Backwaters Travel Guide"}
                  fill
                  loading="eager"
                  className="bl-card-img object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 900px) 50vw, 33vw"
                />
              </div>
              <div className="bl-card-content">
                <span className="bl-category">Travel Guide</span>
                <h2 className="bl-card-title">{b.title}</h2>
                <p className="bl-card-excerpt">
                  {b.seo?.description || "Read our insider guide from local backwater captains."}
                </p>
                <div className="bl-card-footer">
                  <span className="bl-date">{b.date}</span>
                  <span className="bl-read-more">Read Guide →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
