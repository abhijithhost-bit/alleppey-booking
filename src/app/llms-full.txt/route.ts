import siteConfig from "@/data/siteConfig.json";
import houseboatsData from "@/data/houseboats.json";
import activitiesData from "@/data/activities.json";

export const dynamic = "force-static";

export async function GET() {
  const lines: string[] = [];

  lines.push(`# ${siteConfig.name} - Comprehensive LLM Knowledge Base`);
  lines.push("");
  lines.push(`Domain: ${siteConfig.url}`);
  lines.push(`Primary Contact: ${siteConfig.phones[0]?.display || "+91 70127 61588"}`);
  lines.push(`WhatsApp: ${siteConfig.whatsappUrl}`);
  lines.push(`Address: ${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.pincode}, ${siteConfig.address.country}`);
  lines.push("");

  lines.push("================================================================================");
  lines.push("1. DETAILED PRIVATE HOUSEBOAT FLEET SPECIFICATIONS");
  lines.push("================================================================================");
  lines.push("");

  for (const boat of houseboatsData) {
    lines.push(`### ${boat.title}`);
    lines.push(`- URL: ${siteConfig.url}/${boat.slug}/`);
    lines.push(`- Category: Private Kerala Backwater Houseboat`);
    lines.push(`- Number of Bedrooms: ${boat.bedrooms}`);
    lines.push(`- Attached Bathrooms: ${boat.bedrooms} (Private Western Style with Hot/Cold Water)`);
    lines.push(`- Capacity: ${boat.capacity}`);
    lines.push(`- Starting Price: ${boat.priceDisplay || `₹${boat.startingPrice?.toLocaleString("en-IN")}`}`);
    if (boat.badge) lines.push(`- Highlight Badge: ${boat.badge}`);
    lines.push(`- Overview: ${boat.description}`);
    lines.push("");

    if (boat.tiers && boat.tiers.length > 0) {
      lines.push("  #### Available Tiers & Pricing:");
      for (const tier of boat.tiers) {
        lines.push(`  - **${tier.name} Tier**: ₹${tier.price.toLocaleString("en-IN")} / night`);
        lines.push(`    * AC Policy: ${tier.ac}`);
        lines.push(`    * Meals: ${tier.meals}`);
        lines.push(`    * Deck / Lounge: ${tier.deck}`);
      }
      lines.push("");
    }

    if (boat.amenitiesStructured && boat.amenitiesStructured.length > 0) {
      lines.push("  #### Amenities & Inclusions:");
      for (const am of boat.amenitiesStructured) {
        const detail = am.badge ? ` (${am.badge})` : am.sub ? ` (${am.sub})` : "";
        lines.push(`  - ${am.title}${detail}`);
      }
      lines.push("");
    }

    if (boat.faqs && boat.faqs.length > 0) {
      lines.push("  #### Frequently Asked Questions:");
      for (const faq of boat.faqs) {
        lines.push(`  - Q: ${faq.q}`);
        lines.push(`    A: ${faq.a}`);
      }
      lines.push("");
    }

    lines.push("--------------------------------------------------------------------------------");
    lines.push("");
  }

  lines.push("================================================================================");
  lines.push("2. DAY TOURS & ACTIVITIES IN ALLEPPEY");
  lines.push("================================================================================");
  lines.push("");

  for (const act of activitiesData) {
    lines.push(`### ${act.title}`);
    lines.push(`- URL: ${siteConfig.url}/${act.slug}/`);
    lines.push(`- Pricing: Starting at ${act.priceDisplay}`);
    lines.push(`- Duration: ${act.duration}`);
    lines.push(`- Capacity: ${act.capacity}`);
    lines.push(`- Tagline: ${act.tagline}`);
    lines.push(`- Description: ${act.seo?.description || act.tagline}`);
    lines.push("");
  }

  lines.push("================================================================================");
  lines.push("3. OPERATIONAL STANDARDS & CRUISE PROTOCOLS");
  lines.push("================================================================================");
  lines.push("- Check-in: 12:00 PM (Noon) at Finishing Point Jetty, Alleppey.");
  lines.push("- Check-out: 9:00 AM following morning.");
  lines.push("- Cruise Route: Punnamada Lake, Nehru Trophy starting point, SNDP canal, Kuppappuram, Meenappally, Kainakary, and Vembanad Lake.");
  lines.push("- Safety: Government licensed vessels, life buoys, life jackets for all passengers, fire-safety certified, experienced local navigators.");
  lines.push("- Booking Process: Direct reservation with instant WhatsApp confirmation via +91 70127 61588.");

  const content = lines.join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
