import siteConfig from "@/data/siteConfig.json";
import houseboatsData from "@/data/houseboats.json";
import activitiesData from "@/data/activities.json";

export const dynamic = "force-static";

export async function GET() {
  const lines: string[] = [];

  lines.push(`# ${siteConfig.name}`);
  lines.push("");
  lines.push(`> ${siteConfig.tagline}`);
  lines.push("");
  lines.push(
    `${siteConfig.name} is a premier booking service for verified private houseboats, sharing boathouses, Shikara boat rides, kayaking, and speedboat tours in Alleppey (Alappuzha) backwaters, Kerala, India.`
  );
  lines.push("");

  lines.push("## Contact & Booking Information");
  lines.push(`- Website: ${siteConfig.url}`);
  lines.push(`- Phone / WhatsApp: ${siteConfig.phones[0]?.display || "+91 70127 61588"}`);
  lines.push(`- Direct WhatsApp Booking: ${siteConfig.whatsappUrl}`);
  lines.push(
    `- Boarding Jetty: ${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.state} ${siteConfig.address.pincode}, ${siteConfig.address.country}`
  );
  lines.push(`- Operating Hours: ${siteConfig.hours}`);
  lines.push("");

  lines.push("## Private Houseboat Fleet (Bedroom Categories)");
  lines.push(
    "Every private houseboat is 100% exclusive to your group and includes a dedicated 3-member crew (Captain, Engine Driver, Chef) and all freshly prepared Kerala meals on board."
  );
  lines.push("");

  for (const boat of houseboatsData) {
    const bedrooms = boat.bedrooms;
    const startingPrice = boat.priceDisplay || `₹${boat.startingPrice?.toLocaleString("en-IN")}`;
    const capacity = boat.capacity;
    const url = `${siteConfig.url}/${boat.slug}/`;
    const badge = boat.badge ? ` (${boat.badge})` : "";

    lines.push(
      `- [${boat.title}](${url})${badge}: ${bedrooms} AC bedroom${bedrooms > 1 ? "s" : ""}, attached private bathroom${bedrooms > 1 ? "s" : ""}, capacity ${capacity}. Starting at ${startingPrice}/night. Inclusions: Captain, private chef, backwater cruise, welcome drink, lunch, evening tea/snacks, dinner, and breakfast.`
    );
  }
  lines.push(
    `- [Houseboat Fleet Overview](${siteConfig.url}/house-boat-alleppey/): Complete overview and comparison of 1 to 14 bedroom private houseboats.`
  );
  lines.push("");

  lines.push("## Day Cruises & Backwater Activities");
  for (const act of activitiesData) {
    const url = `${siteConfig.url}/${act.slug}/`;
    lines.push(
      `- [${act.title}](${url}): ${act.tagline} Starting from ${act.priceDisplay}. Capacity: ${act.capacity}. Duration: ${act.duration}.`
    );
  }
  lines.push("");

  lines.push("## Key Houseboat Inclusions & Policies");
  lines.push(
    "- **Cruise Timings**: Overnight check-in at 12:00 PM, check-out at 9:00 AM next morning. Cruising runs from 12:00 PM to 5:30 PM (as mandated by Kerala Port & Canal safety regulations), anchors overnight by lake shore, and resumes morning cruise from 8:00 AM to 9:00 AM."
  );
  lines.push(
    "- **Meal Inclusions**: Authentic Kerala feast cooked onboard. Lunch (Kerala boiled rice, sambar, thoran, avial, fish fry / Karimeen option), evening tea/coffee with banana fritters (pazham pori), dinner (chicken roast / veg dishes, chapati, rice), and Kerala breakfast (appam with stew or idli/dosa)."
  );
  lines.push(
    "- **Air Conditioning**: Deluxe category operates Night AC (9:00 PM to 6:00 AM). Premium and Luxury categories provide 24-Hour full-time AC in bedrooms and glass-covered living lounges."
  );
  lines.push(
    "- **Crew & Safety**: Every boat carries life jackets, fire extinguishers, first aid kit, and an experienced 3-member certified crew."
  );
  lines.push("");

  lines.push("## Extended Knowledge Base");
  lines.push(`- [Full LLM Catalog & Tier Breakdown](${siteConfig.url}/llms-full.txt)`);
  lines.push(`- [XML Sitemap](${siteConfig.url}/sitemap.xml)`);

  const content = lines.join("\n");

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400, s-maxage=86400",
    },
  });
}
