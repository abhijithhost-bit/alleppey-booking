import { MetadataRoute } from "next";
import houseboatsData from "@/data/houseboats.json";
import activitiesData from "@/data/activities.json";
import blogsData from "@/data/blogs.json";
import pagesData from "@/data/pages.json";
import siteConfig from "@/data/siteConfig.json";
import { Houseboat, Activity, BlogPost, PageRecord } from "@/types";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;
  const houseboats = houseboatsData as Houseboat[];
  const activities = activitiesData as Activity[];
  const blogs = blogsData as BlogPost[];
  const pages = pagesData as Record<string, PageRecord>;

  const staticPages = Object.keys(pages)
    .filter((k) => k !== "home")
    .map((slug) => ({
      url: `${baseUrl}/${slug}/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: slug === "house-boat-alleppey" || slug === "contact" ? 0.9 : 0.7,
    }));

  const houseboatPages = houseboats.map((b) => ({
    url: `${baseUrl}/${b.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  const activityPages = activities.map((a) => ({
    url: `${baseUrl}/${a.slug}/`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  const blogPages = blogs.map((b) => ({
    url: `${baseUrl}/blogs/${b.slug}/`,
    lastModified: new Date(b.date),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/blogs/`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.85,
    },
    ...staticPages,
    ...houseboatPages,
    ...activityPages,
    ...blogPages,
  ];
}

