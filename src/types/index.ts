export interface PhoneContact {
  display: string;
  raw: string;
  primary: boolean;
  isWhatsApp: boolean;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  domain: string;
  url: string;
  phones: PhoneContact[];
  whatsapp: string;
  whatsappUrl: string;
  emails: string[];
  address: {
    street: string;
    city: string;
    state: string;
    pincode: string;
    country: string;
  };
  hours: string;
  logo: string;
}

export interface NavChild {
  label: string;
  href: string;
}

export interface NavItem {
  label: string;
  href: string;
  children?: NavChild[];
}

export interface SEOData {
  title: string;
  description: string;
  focusKeyword?: string;
}

export interface HouseboatTier {
  name: string;
  price: number;
  ac: string;
  meals: string;
  deck: string;
}

export interface Houseboat {
  bedrooms: number;
  slug: string;
  title: string;
  shortTitle: string;
  badge: string;
  capacity: string;
  startingPrice: number;
  priceDisplay: string;
  tiers: HouseboatTier[];
  image: string;
  description: string;
  seo: SEOData;
}

export interface ActivityFAQ {
  q: string;
  a: string;
}

export interface Activity {
  slug: string;
  title: string;
  tagline: string;
  startingPrice: number;
  priceDisplay: string;
  duration: string;
  capacity: string;
  image: string;
  badge: string;
  seo: SEOData;
  inclusions: string[];
  faqs: ActivityFAQ[];
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  image: string;
  seo: SEOData;
  excerpt: string;
  contentHtml: string;
  faqs?: ActivityFAQ[];
}

export interface PageRecord {
  slug: string;
  title: string;
  seo: SEOData;
  contentHtml?: string;
  elementorJson?: any;
}

