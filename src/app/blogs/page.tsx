import type { Metadata } from "next";
import Link from "next/link";
import blogsData from "@/data/blogs_full.json";
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
  const blogs = (blogsData as unknown) as BlogItem[];

  return (
    <>
      <style
        dangerouslySetInnerHTML={{
          __html: `
/* --- GLOBALS & HERO --- */
.bl-hero-wrapper {
    position: relative; width: 100vw; max-width: 100vw; margin-left: calc(-50vw + 50%); box-sizing: border-box;
    background-image: linear-gradient(135deg, rgba(10, 25, 47, 0.9) 0%, rgba(10, 25, 47, 0.6) 50%, rgba(10, 25, 47, 0.3) 100%), url('/wp-content/uploads/2026/06/c7ae71982dfc11ea93ad0242ac110002-scaled.avif'); 
    background-size: cover; background-position: center; padding: 120px 20px; font-family: 'Poppins', 'Lato', sans-serif; text-align: center;
}
.bl-hero-container { max-width: 800px; margin: 0 auto; color: #ffffff; }
.bl-badge { display: inline-block; background: rgba(44, 214, 100, 0.15); border: 1px solid rgba(44, 214, 100, 0.4); color: #2cd664; padding: 6px 14px; border-radius: 30px; font-size: 12px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 20px; backdrop-filter: blur(4px); }
.bl-hero-title { font-size: 52px; font-weight: 800; line-height: 1.15; margin: 0 0 20px 0; letter-spacing: -1px; }
.bl-highlight { color: #2cd664; }
.bl-hero-subtitle { font-size: 16px; line-height: 1.7; color: #d1d5db; margin: 0 auto; font-weight: 300; }

/* --- DYNAMIC GRID STYLES --- */
.bl-main-wrapper { font-family: 'Poppins', 'Lato', sans-serif; width: 100vw; max-width: 100vw; margin-left: calc(-50vw + 50%); box-sizing: border-box; background-color: #fcfcfc; padding: 80px 20px; }
.bl-grid-container { max-width: 1200px; margin: 0 auto; display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px; }
.bl-card { background: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.03); border: 1px solid #f0f2f5; transition: transform 0.3s ease, box-shadow 0.3s ease; display: flex; flex-direction: column; text-decoration: none; }
.bl-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(0,0,0,0.08); }
.bl-img-wrapper { position: relative; width: 100%; height: 240px; overflow: hidden; }
.bl-card-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
.bl-card:hover .bl-card-img { transform: scale(1.08); }
.bl-card-content { padding: 30px 25px; display: flex; flex-direction: column; flex: 1; }
.bl-category { color: #ff6600; font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 1.5px; margin-bottom: 12px; }
.bl-card-title { color: #1a2b3c; font-size: 20px; font-weight: 700; line-height: 1.4; margin: 0 0 15px 0; transition: color 0.3s ease; }
.bl-card:hover .bl-card-title { color: #2cd664; }
.bl-card-excerpt { color: #666666; font-size: 14px; line-height: 1.6; margin: 0 0 20px 0; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; flex: 1; }
.bl-card-footer { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #eef0f2; padding-top: 15px; margin-top: auto; }
.bl-date { color: #888888; font-size: 12px; font-weight: 500; }
.bl-read-more { color: #1a2b3c; font-size: 13px; font-weight: 700; display: flex; align-items: center; gap: 5px; }

/* --- MOBILE RESPONSIVENESS --- */
@media (max-width: 900px) { .bl-grid-container { grid-template-columns: repeat(2, 1fr); } .bl-hero-title { font-size: 42px; } }
@media (max-width: 768px) { .bl-hero-wrapper { padding: 80px 15px; } .bl-hero-title { font-size: 36px; } .bl-main-wrapper { padding: 50px 15px; } .bl-grid-container { grid-template-columns: 1fr; gap: 30px; } }
`,
        }}
      />

      {/* Hero Section */}
      <div className="bl-hero-wrapper">
        <div className="bl-hero-container">
          <span className="bl-badge">📖 Travel Guides & Tips</span>
          <h1 className="bl-hero-title">
            Discover the <span className="bl-highlight">Backwaters.</span>
          </h1>
          <p className="bl-hero-subtitle">
            Read our latest local insights, travel itineraries, and expert tips to
            make your trip to the Venice of the East absolutely unforgettable.
          </p>
        </div>
      </div>

      {/* Authentic WordPress Blog Grid */}
      <div className="bl-main-wrapper">
        <div className="bl-grid-container">
          {blogs.map((b) => (
            <Link key={b.slug} href={`/blogs/${b.slug}/`} className="bl-card">
              <div className="bl-img-wrapper">
                <img
                  src={b.image}
                  alt={b.title}
                  className="bl-card-img"
                  loading="lazy"
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
