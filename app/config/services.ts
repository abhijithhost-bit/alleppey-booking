export interface ServiceTier {
  id: string;
  name: string;
  badge?: string;
  price: string;
  originalPrice?: string;
  priceNote: string;
  duration: string;
  capacity: string;
  features: string[];
  popular?: boolean;
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  keyword: string;
  tagline: string;
  metaTitle: string;
  metaDescription: string;
  startingPrice: string;
  originalPrice: string;
  priceSub: string;
  rating: number;
  reviewCount: number;
  badge: string;
  image: string;
  duration: string;
  capacity: string;
  suitableFor: string;
  quickSpecs: {
    duration: string;
    capacity: string;
    meals: string;
    timing: string;
  };
  highlights: string[];
  overview: string[];
  tiers: ServiceTier[];
  itinerary: {
    time: string;
    title: string;
    description: string;
  }[];
  included: string[];
  excluded: string[];
  faqs: ServiceFAQ[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: "private-houseboats",
    slug: "private-houseboats",
    title: "Alleppey Private Houseboat Tour Packages",
    shortTitle: "Private Houseboats",
    keyword: "Alleppey Private Houseboat Tour Packages",
    tagline: "Exclusive 1 to 7 BHK Luxury Houseboats with Dedicated Private Chef, Captain & Sundeck",
    metaTitle: "Alleppey Private Houseboat Packages | Luxury Overnight & Day Cruise",
    metaDescription:
      "Book 100% private Alleppey houseboat tour packages. 1 to 7 BHK deluxe & luxury houseboats with private chef, authentic Kerala meals, AC bedrooms, and sunset cruises.",
    startingPrice: "₹6,500",
    originalPrice: "₹8,500",
    priceSub: "per night (2 guests, all meals included)",
    rating: 4.9,
    reviewCount: 1840,
    badge: "Most Popular for Couples & Families",
    image: "/images/private-houseboat.jpg",
    duration: "Overnight (21 Hours) or Day Cruise (6 Hours)",
    capacity: "2 to 25+ Guests (1 to 7 Bedrooms)",
    suitableFor: "Couples, Honeymooners, Families & Private Get-togethers",
    quickSpecs: {
      duration: "21 Hours (12:00 PM – 9:00 AM)",
      capacity: "1 to 7 BHK (2 - 25 Guests)",
      meals: "All 3 Meals + Tea & Snacks (Live Chef)",
      timing: "Check-in 12:00 PM | Checkout 9:00 AM",
    },
    highlights: [
      "100% Private Boat – zero shared space with strangers",
      "Full 3-person private crew: Captain, Engine Driver & Live Cook",
      "Authentic Kerala banquet: Karimeen fry, chicken, prawns & vegetarian treats",
      "Spacious glass-walled or open sundeck overlooking Vembanad lake",
      "Government-inspected safety gear and child life vests",
    ],
    overview: [
      "Experience the pinnacle of Kerala backwater luxury with an exclusive private houseboat booking. Unlike shared tours, the entire boat, sundeck, and dining lounge belong solely to you and your loved ones.",
      "Glide past floating lotus lagoons, traditional paddy fields cultivated below sea level in Kuttanad, and quaint riverside temples. Our private chef serves freshly cooked Kerala delicacies directly to your table while you soak in mesmerizing sunsets over Vembanad Lake.",
    ],
    tiers: [
      {
        id: "1-bhk-deluxe",
        name: "1-BHK Deluxe Private Houseboat",
        badge: "Best for Couples / Honeymoon",
        price: "₹6,500",
        originalPrice: "₹8,500",
        priceNote: "per night / 2 adults",
        duration: "21 Hours (12 PM - 9 AM)",
        capacity: "2 Adults (+ 1 Child under 5)",
        features: [
          "Private AC Bedroom with ensuite washroom",
          "Dedicated 3-member crew (Captain + Driver + Chef)",
          "All meals included: Lunch, Sunset Snacks, Dinner & Breakfast",
          "Sunset cruise across Punnamada Lake & Kuttanad",
          "Night AC operation (9:00 PM to 6:00 AM)",
        ],
        popular: true,
      },
      {
        id: "2-bhk-premium",
        name: "2-BHK Premium Family Houseboat",
        badge: "Ideal for Families",
        price: "₹10,500",
        originalPrice: "₹13,500",
        priceNote: "per night / 4 to 6 guests",
        duration: "21 Hours (12 PM - 9 AM)",
        capacity: "4 to 6 Guests",
        features: [
          "2 Private AC Bedrooms with private attached bathrooms",
          "Large upper or front sundeck with panoramic views",
          "Full meals prepared live onboard to your taste",
          "Evening village stroll & canoe ride access",
          "24-Hour AC option available on request",
        ],
      },
      {
        id: "3-bhk-luxury",
        name: "3 to 6 BHK Luxury Group Houseboat",
        badge: "Big Families & Celebrations",
        price: "₹16,500",
        originalPrice: "₹21,000",
        priceNote: "per night / 6 to 12+ guests",
        duration: "21 Hours or Day Cruise",
        capacity: "6 to 25 Guests",
        features: [
          "3 to 6 Luxury AC Bedrooms with modern amenities",
          "Expansive upper dining deck and sound system",
          "Grand Kerala feast with seafood specials & desserts",
          "Custom route including Champakkulam & Pathiramanal",
          "Dedicated service staff for large groups",
        ],
      },
    ],
    itinerary: [
      {
        time: "12:00 PM",
        title: "Traditional Welcome & Departure",
        description:
          "Board at Finishing Point jetty with a fresh tender coconut or spiced buttermilk welcome drink. Cruise commences towards Punnamada Lake.",
      },
      {
        time: "01:30 PM",
        title: "Authentic Kerala Lunch Onboard",
        description:
          "Anchor in a serene canal and savor traditional Kerala Sadhya with piping hot Karimeen (Pearl Spot) fish fry, chicken roast, and fragrant red/white rice.",
      },
      {
        time: "04:30 PM",
        title: "Sunset Tea & Village Scenic Cruise",
        description:
          "Enjoy hot Kerala banana fritters (pazham pori) and spiced chai while the sun casts golden hues over Vembanad Lake.",
      },
      {
        time: "05:30 PM",
        title: "Canal Anchoring & Village Walk",
        description:
          "Government navigation rules require boats to anchor by 5:30 PM. Step ashore for a guided walk through local backwater hamlets.",
      },
      {
        time: "08:30 PM",
        title: "Candlelight Dinner & Overnight Rest",
        description:
          "Relish a warm freshly prepared dinner under the stars, followed by a quiet night in your climate-controlled private bedroom.",
      },
      {
        time: "08:00 AM",
        title: "Morning Cruise & Checkout",
        description:
          "Morning cruise with Kerala breakfast (Appam with stew / Idli / Poori) before checking out by 9:00 AM.",
      },
    ],
    included: [
      "Exclusive entire private boat for your party",
      "Private Captain, Boat Driver & Onboard Chef",
      "All meals: Welcome drink, Lunch, Evening Tea/Snacks, Dinner & Breakfast",
      "AC in all booked bedrooms",
      "Fuel, toll, and passenger insurance",
      "Life jackets and emergency safety gear",
    ],
    excluded: [
      "Alcoholic beverages and personal extra snacks",
      "Pickup/drop transfer to railway station or airport (available on request)",
      "Entry fees to any local historical monuments",
    ],
    faqs: [
      {
        question: "How do private houseboats differ from sharing houseboats?",
        answer:
          "In a private houseboat, the entire boat including all decks, dining areas, and crew are reserved exclusively for you. You do not share any space with strangers. In sharing houseboats, you book an individual bedroom and share the common sundeck and dining areas with other travelers.",
      },
      {
        question: "What food is provided on the private houseboat?",
        answer:
          "All meals are prepared fresh onboard by your personal chef. We serve traditional Kerala cuisine including Karimeen fish fry, chicken curry, thoran, sambar, rice, and desserts. Pure vegetarian, Jain, and kid-friendly meal requests are customized on prior notice at no extra charge.",
      },
      {
        question: "When does the air conditioning run?",
        answer:
          "Deluxe houseboats run AC in bedrooms from 9:00 PM to 6:00 AM. Premium and Luxury categories provide full-time (day and night) AC in bedrooms and glass-enclosed living spaces.",
      },
    ],
  },
  {
    id: "sharing-houseboats",
    slug: "sharing-houseboats",
    title: "Alleppey Sharing Houseboat Tour Packages",
    shortTitle: "Sharing Houseboats",
    keyword: "Alleppey Sharing Houseboat Tour Packages",
    tagline: "Pocket-Friendly Luxury Backwater Cruise with Private AC Bedroom & All Meals Included",
    metaTitle: "Alleppey Sharing Houseboat Booking | Budget Backwater Tour Packages",
    metaDescription:
      "Looking for affordable Alleppey houseboat tour packages? Book a private AC room in a sharing houseboat with all meals included starting at just ₹3,999. Perfect for solo and budget travelers.",
    startingPrice: "₹3,999",
    originalPrice: "₹5,500",
    priceSub: "per private room / night (all meals included)",
    rating: 4.8,
    reviewCount: 960,
    badge: "Best Budget Luxury Value",
    image: "/images/sharing-houseboat.jpg",
    duration: "Overnight (21 Hours - 12 PM to 9 AM)",
    capacity: "1 to 2 Adults per private room",
    suitableFor: "Solo Travelers, Couples on a Budget, Backpackers",
    quickSpecs: {
      duration: "21 Hours (12:00 PM – 9:00 AM)",
      capacity: "1 Private Room (2 Guests)",
      meals: "All Meals Included (Buffet Style)",
      timing: "Check-in 12:00 PM | Checkout 9:00 AM",
    },
    highlights: [
      "Private lockable AC bedroom with private attached bathroom",
      "Cost-effective luxury – save up to 45% compared to private boats",
      "Delicious buffet meals: Kerala Lunch, Evening Tea, Dinner & Breakfast",
      "Spacious double-deck boat with scenic 360-degree viewing lounge",
      "Meet friendly fellow travelers from across the world",
    ],
    overview: [
      "Dreaming of experiencing a night on an authentic Kerala houseboat without paying for the entire vessel? Our Alleppey sharing houseboat packages are the ultimate smart travel solution.",
      "You receive your own private, lockable, air-conditioned bedroom with attached modern toilet, while sharing the expansive sundeck, dining area, and scenic cruise experience with a small group of courteous fellow travelers.",
    ],
    tiers: [
      {
        id: "sharing-deluxe-room",
        name: "Standard Deluxe Private Cabin",
        badge: "Most Affordable",
        price: "₹3,999",
        originalPrice: "₹5,500",
        priceNote: "per night / 2 guests",
        duration: "21 Hours (12 PM - 9 AM)",
        capacity: "2 Guests (1 Double Bed)",
        features: [
          "Private lockable bedroom with clean linen",
          "Attached private western bathroom & shower",
          "All 4 meals included (Lunch, Tea, Dinner, Breakfast)",
          "Shared open sundeck with seating",
          "Night AC from 9:00 PM to 6:00 AM",
        ],
        popular: true,
      },
      {
        id: "sharing-upper-deck",
        name: "Upper Deck Premium Cabin",
        badge: "Best Backwater View",
        price: "₹4,999",
        originalPrice: "₹6,800",
        priceNote: "per night / 2 guests",
        duration: "21 Hours (12 PM - 9 AM)",
        capacity: "2 Guests",
        features: [
          "Upper deck private room with large lake-facing windows",
          "Faster access to open observation terrace",
          "Delicious Kerala buffet dining with fish fry & chicken",
          "All safety kits & certified captain team",
          "Night AC operation with power backup generator",
        ],
      },
    ],
    itinerary: [
      {
        time: "12:00 PM",
        title: "Check-in & Cabin Allocation",
        description:
          "Board our large multi-bedroom houseboat at the boarding dock. Settle into your assigned private cabin and receive a refreshing welcome drink.",
      },
      {
        time: "01:30 PM",
        title: "Backwater Lunch Buffet",
        description:
          "Gather in the dining lounge for a generous Kerala spread with fish fry, sambar, thoran, avial, and papadums.",
      },
      {
        time: "04:00 PM",
        title: "Sundeck Cruising & Tea Time",
        description:
          "Relax on the open viewing deck while cruising through Punnamada and Kuttanad lagoons with evening tea and hot snacks.",
      },
      {
        time: "05:30 PM",
        title: "Sunset Mooring & Lakeside Walk",
        description:
          "Houseboat anchors safely by the riverbank. Enjoy an evening stroll along the village bund road.",
      },
      {
        time: "08:30 PM",
        title: "Dinner & Comfortable Sleep",
        description:
          "Savor dinner followed by restful AC sleep in your private secure bedroom.",
      },
      {
        time: "09:00 AM",
        title: "Breakfast & Disembarkation",
        description:
          "Morning lake cruise with South Indian breakfast before check-out.",
      },
    ],
    included: [
      "1 Private lockable bedroom with attached bathroom",
      "All meals: Welcome drink, Lunch, Evening snacks, Dinner & Breakfast",
      "Night AC in your private room",
      "Access to shared observation sundeck and dining lounge",
      "Life jackets & certified navigation crew",
    ],
    excluded: [
      "Private dining requests (meals served in common dining lounge)",
      "Alcoholic drinks and specialized a-la-carte dishes",
      "Transfers to jetty",
    ],
    faqs: [
      {
        question: "Is the bedroom and bathroom in a sharing houseboat private?",
        answer:
          "Yes, 100%! You have your own private, lockable air-conditioned bedroom with its own ensuite private bathroom. Only the common sundeck, corridors, and dining area are shared with other guests.",
      },
      {
        question: "Is sharing houseboat suitable for female solo travelers and couples?",
        answer:
          "Absolutely. Our sharing houseboats have strict security protocols, background-verified staff, and cater to families, couples, and international travelers looking for a friendly and budget-conscious experience.",
      },
    ],
  },
  {
    id: "shikara",
    slug: "shikara",
    title: "Alleppey Shikara Boat Tour Packages",
    shortTitle: "Shikara Boat Rides",
    keyword: "Alleppey Shikara Boat Tour Packages",
    tagline: "Traditional Wooden Canopy Boats for Narrow Village Canals & Scenic Sunrise Cruises",
    metaTitle: "Alleppey Shikara Boat Booking | Hourly Rates & Village Canal Tours",
    metaDescription:
      "Book authentic Alleppey shikara boat tour packages from ₹800/hr. Cruise through narrow canals, duck farms, and shallow backwaters that houseboats cannot reach.",
    startingPrice: "₹800/hr",
    originalPrice: "₹1,200/hr",
    priceSub: "or ₹1,800 for 2-3 hr package tour",
    rating: 4.9,
    reviewCount: 1420,
    badge: "Top Choice for Village Canals",
    image: "/images/shikara-boat.jpg",
    duration: "2 to 5 Hours (Hourly or Package)",
    capacity: "2 to 15 Guests per Shikara",
    suitableFor: "Day Visitors, Photographers, Families & Small Groups",
    quickSpecs: {
      duration: "2 to 4 Hours Flexible",
      capacity: "2 to 15 Persons",
      meals: "Tea & snacks can be arranged",
      timing: "6:00 AM to 6:30 PM (Anytime)",
    },
    highlights: [
      "Navigate narrow canals and shallow waterways houseboats can never enter",
      "Comfortable cushioned lounge chairs and ornate shaded bamboo canopy",
      "Direct village immersion: duck farming, toddy tapping, canal bridges",
      "Spectacular early morning sunrise or evening golden sunset cruises",
      "Affordable hourly pricing starting at ₹800/hr for the entire boat",
    ],
    overview: [
      "If you want to experience the true, intimate heartbeat of the Kerala backwaters, a Shikara boat ride is unmatched. These traditional wooden motorized longboats feature cushioned reclining seats and open panoramic sides under a cooling thatched canopy.",
      "Because of their shallow draft and slender design, Shikaras can glide deep into interior village waterways, passing beneath low bridges, past water lily ponds, and right next to local backwater homes where houseboats simply cannot fit.",
    ],
    tiers: [
      {
        id: "2-hr-shikara",
        name: "2-Hour Village Canal Shikara",
        badge: "Quick Experience",
        price: "₹1,600",
        originalPrice: "₹2,200",
        priceNote: "total boat rate (up to 4 guests)",
        duration: "2 Hours (Flexible Timings)",
        capacity: "1 to 6 Guests",
        features: [
          "Private wooden Shikara with cushioned lounge",
          "Cruises through Punnamada canal & village pathways",
          "Life jackets for all passengers included",
          "Friendly licensed local driver cum guide",
          "Extra hour only ₹800",
        ],
      },
      {
        id: "3-hr-kuttanad-shikara",
        name: "3-Hour Kuttanad Canal Explorer",
        badge: "Most Popular",
        price: "₹2,400",
        originalPrice: "₹3,200",
        priceNote: "total boat rate (up to 6 guests)",
        duration: "3 Hours (Best in Morning/Afternoon)",
        capacity: "1 to 8 Guests",
        features: [
          "Deep village canal exploration",
          "Stop at local riverside toddy shop / tea shop for fresh snacks",
          "Paddy fields below sea level view",
          "Duck farming & lotus pond photo opportunities",
          "Free bottled drinking water provided",
        ],
        popular: true,
      },
      {
        id: "sunrise-shikara",
        name: "Sunrise Backwater Shikara Cruise",
        badge: "Photographers' Favorite",
        price: "₹1,800",
        originalPrice: "₹2,500",
        priceNote: "for 2 hours (6:00 AM – 8:00 AM)",
        duration: "2 Hours (Early Morning)",
        capacity: "1 to 6 Guests",
        features: [
          "Witness the sunrise over tranquil Vembanad Lake",
          "Morning bird-watching: Kingfishers, egrets & cormorants",
          "Zero boat traffic – absolute peace and morning mist",
          "Complimentary hot Kerala tea/coffee onboard",
        ],
      },
    ],
    itinerary: [
      {
        time: "Start",
        title: "Boarding at Finishing Point",
        description:
          "Board your private Shikara, meet your captain, and settle onto the comfortable cushioned recliners under the bamboo roof.",
      },
      {
        time: "Hour 1",
        title: "Entering the Narrow Village Waterways",
        description:
          "Leave the wide main channel and slip into winding village canals shaded by overhanging coconut palms and hibiscus.",
      },
      {
        time: "Hour 2",
        title: "Local Life & Village Pit-stop",
        description:
          "Observe fishermen throwing cast nets and duck herds. Stop at a local village stall for hot black tea, banana fritters, or tender coconut.",
      },
      {
        time: "Hour 3",
        title: "Wide Lake Panoramas & Return",
        description:
          "Cross the edge of Vembanad Lake before cruising back to the boarding pier with wonderful memories and photos.",
      },
    ],
    included: [
      "Entire private Shikara boat with shaded canopy and cushions",
      "Licensed experienced local boat driver",
      "Life jackets for adults and children",
      "Fuel and jetty parking fees",
    ],
    excluded: [
      "Food and beverage items purchased during village tea stops",
      "Hotel pick up and drop",
    ],
    faqs: [
      {
        question: "How many people can sit in one Shikara boat?",
        answer:
          "Standard Shikara boats comfortably seat 4 to 8 guests. Larger Shikaras can accommodate up to 15 passengers. The price quoted is for the entire boat, not per person.",
      },
      {
        question: "Can we book a Shikara for sunrise or sunset?",
        answer:
          "Yes! Early morning (6:00 AM to 8:30 AM) and sunset (4:30 PM to 6:30 PM) are the two most scenic times for Shikara rides, offering cool breezes, golden skies, and rich bird-watching.",
      },
    ],
  },
  {
    id: "kayaking",
    slug: "kayaking",
    title: "Alleppey Backwater Kayaking Tour Packages",
    shortTitle: "Kayaking & Canoe Tours",
    keyword: "Alleppey Backwater Kayaking Packages",
    tagline: "Eco-Friendly Guided Kayak & Canoe Expeditions Through Hidden Backwater Trails",
    metaTitle: "Alleppey Kayaking Tours | Sunrise & Sunset Backwater Kayaking Packages",
    metaDescription:
      "Paddle through hidden narrow canals with Alleppey kayaking tour packages. Certified instructors, safety gear, tandem & solo kayaks starting at ₹999/person.",
    startingPrice: "₹999",
    originalPrice: "₹1,499",
    priceSub: "per person (3-hour guided safari)",
    rating: 4.9,
    reviewCount: 880,
    badge: "Top Eco-Adventure Tour",
    image: "/images/kayaking.jpg",
    duration: "2.5 to 3.5 Hours",
    capacity: "Solo or Tandem (Double) Kayaks",
    suitableFor: "Adventure Lovers, Couples, Nature Enthusiasts & Solo Travelers",
    quickSpecs: {
      duration: "3 Hours (Morning / Afternoon)",
      capacity: "Solo & Tandem Kayaks",
      meals: "Tender Coconut & Village Snacks",
      timing: "6:30 AM (Sunrise) or 3:30 PM (Sunset)",
    },
    highlights: [
      "Zero motor noise – pure serenity, birdsong, and mirror-like canals",
      "Access shallow 3-foot wide hidden canals unreachable by any motorized boat",
      "High quality touring kayaks, lightweight paddles, and certified life jackets",
      "Led by professional certified kayak instructors with safety backup boat",
      "Includes fresh tender coconut and traditional Kerala village tea stop",
    ],
    overview: [
      "Experience the ultimate intimate communion with nature on an Alleppey backwater kayaking adventure. Kayaking lets you glide silently across tranquil waters where motorized houseboats can never venture.",
      "Dip your paddle into calm canals covered in floating pink water lilies, paddle beneath rustic wooden bridges, and observe exotic tropical birds like blue kingfishers, purple herons, and darters at arm's length.",
    ],
    tiers: [
      {
        id: "sunrise-kayaking",
        name: "Sunrise Backwater Kayak Safari",
        badge: "Most Scenic & Peaceful",
        price: "₹1,199",
        originalPrice: "₹1,699",
        priceNote: "per person (3 Hours)",
        duration: "3 Hours (6:30 AM – 9:30 AM)",
        capacity: "Solo or Tandem",
        features: [
          "Early morning paddle through misty village canals",
          "Prime birdwatching session during peak bird activity",
          "Certified guide paddling with the group",
          "Fresh tender coconut & local tea stop included",
          "Beginner instruction & waterproof phone pouch",
        ],
        popular: true,
      },
      {
        id: "sunset-kayaking",
        name: "Sunset Canal & Canoe Tour",
        badge: "Golden Hour Glow",
        price: "₹999",
        originalPrice: "₹1,499",
        priceNote: "per person (2.5 Hours)",
        duration: "2.5 Hours (3:30 PM – 6:00 PM)",
        capacity: "Solo or Tandem",
        features: [
          "Afternoon paddle catching the warm golden hour light",
          "Visit a heritage village community and clay pottery makers",
          "High buoyancy life jackets & sanitized gear",
          "Action photos and videos captured by your guide",
          "Safe and calm waters suitable for complete beginners",
        ],
      },
    ],
    itinerary: [
      {
        time: "06:30 AM",
        title: "Base Camp Briefing & Gear Setup",
        description:
          "Meet at our riverside kayak station in Kainakary. 15-minute safety briefing, paddle technique tutorial, and life vest fitting.",
      },
      {
        time: "07:00 AM",
        title: "Gliding into Hidden Water Trails",
        description:
          "Launch your kayak onto calm waters. Paddle through narrow arched waterways where tree canopies create natural green tunnels.",
      },
      {
        time: "08:15 AM",
        title: "Village Tea & Tender Coconut Break",
        description:
          "Pull ashore at a serene village island. Sip refreshing coconut water and taste local hot snacks prepared by village hosts.",
      },
      {
        time: "09:30 AM",
        title: "Return to Base & Photo Sharing",
        description:
          "Paddle back to base camp, rinse off at our washrooms, and collect HD photos captured by our guide during the expedition.",
      },
    ],
    included: [
      "Top-grade sit-in or sit-on-top kayaks & lightweight paddles",
      "Certified kayak guide and water safety escort",
      "CE-certified life jackets",
      "Tender coconut and local Kerala breakfast/tea snack",
      "Dry bags for cameras and phones",
    ],
    excluded: [
      "Personal swimwear and sun lotion",
      "Hotel transfer (can be arranged upon request)",
    ],
    faqs: [
      {
        question: "Do I need prior kayaking experience?",
        answer:
          "Not at all! Over 80% of our guests are first-time kayakers. The Alleppey backwater canals are gentle with virtually zero current. Our guides provide a comprehensive 15-minute lesson before entering the water.",
      },
      {
        question: "Are tandem (two-seater) kayaks available for couples and kids?",
        answer:
          "Yes! We offer both solo kayaks and tandem kayaks (two seats), which are great for couples, parents paddling with children, or friends who want to paddle together.",
      },
    ],
  },
  {
    id: "speed-boat",
    slug: "speed-boat",
    title: "Alleppey Speed Boat Tour Packages",
    shortTitle: "Speed Boat Rides",
    keyword: "Alleppey Speed Boat Tour Packages",
    tagline: "Thrilling High-Speed Cruises Across Vembanad Lake & Scenic Waterways",
    metaTitle: "Alleppey Speed Boat Booking | High-Speed Backwater Thrill Rides",
    metaDescription:
      "Experience high-adrenaline Alleppey speed boat tour packages. Cruise across Vembanad Lake, Pathiramanal Island, and wide rivers. Instant booking from ₹1,499.",
    startingPrice: "₹1,499",
    originalPrice: "₹2,000",
    priceSub: "per boat (30-min lake thrill, up to 6 guests)",
    rating: 4.8,
    reviewCount: 730,
    badge: "High-Adrenaline Water Thrill",
    image: "/images/speed-boat.jpg",
    duration: "30 Mins to 2 Hours",
    capacity: "4 to 8 Passengers per Speedboat",
    suitableFor: "Thrill Seekers, Friends Groups, Families & Quick Tours",
    quickSpecs: {
      duration: "30 Mins to 2 Hours",
      capacity: "Up to 8 Persons",
      meals: "Not included (Water bottles provided)",
      timing: "8:00 AM to 6:00 PM",
    },
    highlights: [
      "High-speed twin-engine marine speedboats creating impressive white wakes",
      "Cover vast distances quickly across Vembanad Lake (India's longest lake)",
      "Exciting visits to Pathiramanal bird island and Kuttanad waterways",
      "Licensed marine captains and mandatory safety life jackets for all ages",
      "Perfect for travelers short on time who want to see maximum sights",
    ],
    overview: [
      "Craving an adrenaline rush on the water? Our Alleppey speed boat tour packages deliver high-speed excitement combined with spectacular panoramic scenery across Kerala's largest lakes and rivers.",
      "Feel the cool wind in your hair as your powerful speedboat skims across the turquoise waters of Vembanad Lake, carving exhilarating turns and whisking you quickly between secluded backwater highlights.",
    ],
    tiers: [
      {
        id: "30-min-lake-sprint",
        name: "30-Minute Vembanad Lake Sprint",
        badge: "Quick Adrenaline Rush",
        price: "₹1,499",
        originalPrice: "₹2,000",
        priceNote: "for entire boat (up to 4 guests)",
        duration: "30 Minutes",
        capacity: "1 to 6 Guests",
        features: [
          "High speed sprint across open Vembanad waters",
          "Safe speed drifts and thrilling water spray",
          "Life vests for all guests mandatory & provided",
          "Certified marine pilot with high safety record",
          "Boarding at Punnamada Finishing Point",
        ],
      },
      {
        id: "1-hr-pathiramanal",
        name: "1-Hour Island Speed Expedition",
        badge: "Most Popular Speed Tour",
        price: "₹2,799",
        originalPrice: "₹3,800",
        priceNote: "for entire boat (up to 6 guests)",
        duration: "60 Minutes",
        capacity: "1 to 8 Guests",
        features: [
          "Covers Nehru Trophy race track & wide lake expanse",
          "Speed tour around Pathiramanal Island bird sanctuary",
          "Photo stop in the middle of Vembanad Lake",
          "Great for friends, families, and bachelor trips",
          "Instant spot boarding & WhatsApp booking",
        ],
        popular: true,
      },
    ],
    itinerary: [
      {
        time: "Minute 0",
        title: "Life Jacket Fitting & Safety Check",
        description:
          "Board your speedboat at Finishing Point jetty. Buckle up certified life vests and listen to your captain's safety instructions.",
      },
      {
        time: "Minute 10",
        title: "Throttle Up Across Open Waters",
        description:
          "Power up through the wide backwater lake, cruising at exhilarating speeds while admiring palm tree shorelines.",
      },
      {
        time: "Minute 30",
        title: "Island Orbit & Photo Session",
        description:
          "Slow down near scenic sandbanks or island shores for stunning photos with the lake as your backdrop.",
      },
      {
        time: "Minute 60",
        title: "High-Speed Arc & Jetty Docking",
        description:
          "Perform a final wide turn and glide smoothly back to the harbor.",
      },
    ],
    included: [
      "Private speedboat hire with professional marine driver",
      "Commercial marine life vests for every passenger",
      "Fuel costs and harbour landing taxes",
      "Complimentary drinking water bottles",
    ],
    excluded: [
      "Entry permits to restricted island sanctuaries (if any)",
      "Meals or hot beverages",
    ],
    faqs: [
      {
        question: "Is speedboat riding in Alleppey safe for kids and seniors?",
        answer:
          "Yes, completely! Our captains adjust speed according to your comfort level. For families with young children or elders, we maintain gentle cruising speeds with smooth navigation.",
      },
      {
        question: "Can we rent the speedboat on an hourly basis?",
        answer:
          "Yes, custom 1 to 3-hour speed boat charters can be arranged to travel from Alleppey to Kumarakom, Pathiramanal Island, or Muhamma.",
      },
    ],
  },
  {
    id: "homestays",
    slug: "homestays",
    title: "Alleppey Backwater Homestay Packages",
    shortTitle: "Backwater Homestays",
    keyword: "Alleppey Backwater Homestay Packages",
    tagline: "Authentic Heritage Waterfront Villas, Village Cottages & Riverside Resorts",
    metaTitle: "Alleppey Backwater Homestays | Heritage Cottages & Waterfront Stays",
    metaDescription:
      "Immerse yourself in authentic Kerala hospitality with Alleppey backwater homestay packages. Waterfront heritage rooms, homecooked Kerala meals, and canoe rides from ₹1,999/night.",
    startingPrice: "₹1,999",
    originalPrice: "₹2,800",
    priceSub: "per room / night with homecooked breakfast",
    rating: 4.9,
    reviewCount: 1120,
    badge: "Authentic Local Living",
    image: "/images/homestay.jpg",
    duration: "Overnight or Multi-Day Stays",
    capacity: "2 to 12 Guests (Private Cottages)",
    suitableFor: "Families, Slow Travelers, Couples & Culture Seekers",
    quickSpecs: {
      duration: "24-Hour Stay / Flexible Nights",
      capacity: "Private Rooms & Full Cottages",
      meals: "Authentic Homecooked Kerala Cuisine",
      timing: "Check-in 1:00 PM | Checkout 11:00 AM",
    },
    highlights: [
      "Heritage waterfront properties right on the canal edge",
      "Verandas with cane armchairs and hammocks overlooking passing boats",
      "Traditional Kerala home-cooked cuisine prepared with farm-fresh spices",
      "Free country canoe rides and guided village walks with your local host",
      "Clean, modern AC bedrooms with ensuite western bathrooms",
    ],
    overview: [
      "If you want to experience real Kerala village life beyond the deck of a boat, our Alleppey backwater homestay packages offer an unforgettable immersive retreat. Stay in centuries-old heritage Tharavadu homes or peaceful waterfront cottages.",
      "Wake up to the gentle chirping of kingfishers and the soft splash of oars on the water. Relax in a hammock under swaying coconut palms, savor warm home-cooked Appam with vegetable stew, and experience genuine local warmth.",
    ],
    tiers: [
      {
        id: "canal-view-room",
        name: "Deluxe Waterfront Canal-View Room",
        badge: "Couples & Peaceful Rest",
        price: "₹1,999",
        originalPrice: "₹2,800",
        priceNote: "per night / 2 guests",
        duration: "Check-in 1 PM | Checkout 11 AM",
        capacity: "2 Adults (+ 1 Child)",
        features: [
          "Spacious AC bedroom with traditional Kerala wood finishes",
          "Attached private modern bathroom with hot water",
          "Complimentary traditional Kerala breakfast",
          "Private sit-out patio overlooking the canal",
          "High-speed Wi-Fi & tea/coffee maker",
        ],
        popular: true,
      },
      {
        id: "heritage-villa-suite",
        name: "Heritage Backwater Family Cottage",
        badge: "Families & Long Stays",
        price: "₹3,999",
        originalPrice: "₹5,400",
        priceNote: "per night / 4 guests",
        duration: "Check-in 1 PM | Checkout 11 AM",
        capacity: "4 to 6 Guests",
        features: [
          "2 Interconnected AC bedrooms or independent cottage",
          "Manicured lawn running directly down to water's edge",
          "Homecooked 3-course Kerala dinner & breakfast options",
          "Free wooden canoe ride into interior village canals",
          "Fishing rods provided for lakeside angling",
        ],
      },
    ],
    itinerary: [
      {
        time: "01:00 PM",
        title: "Warm Welcome & Check-In",
        description:
          "Arrive by road or scenic boat taxi. Receive a warm welcome drink from your local host family and settle into your room.",
      },
      {
        time: "04:30 PM",
        title: "Evening Canoe Ride & Village Stroll",
        description:
          "Hop into a wooden country canoe with your host for a peaceful paddle through village canals, passing duck farms and paddy fields.",
      },
      {
        time: "07:30 PM",
        title: "Homecooked Kerala Dinner Feast",
        description:
          "Enjoy a sumptuous homecooked dinner featuring local delicacies, organic garden vegetables, and fresh backwater fish.",
      },
      {
        time: "08:30 AM",
        title: "Traditional Breakfast by the Water",
        description:
          "Savor freshly steamed Appams with coconut milk or spicy egg roast on the veranda while watching houseboats cruise past.",
      },
    ],
    included: [
      "AC Room / Cottage with private bathroom and daily housekeeping",
      "Authentic complimentary Kerala breakfast",
      "Complimentary country canoe boat tour in the canal",
      "High-speed Wi-Fi and parking facilities",
      "24/7 host assistance and local tour coordination",
    ],
    excluded: [
      "Lunch and dinner (available on prior request at nominal local rates)",
      "Ayurvedic massage bookings (arranged on request)",
    ],
    faqs: [
      {
        question: "How do we reach the homestay?",
        answer:
          "Most of our backwater homestays have road access with dedicated parking. Some secluded island homestays include a complimentary 5-minute scenic boat ride from the main road jetty.",
      },
      {
        question: "Can we combine a homestay stay with a houseboat or shikara ride?",
        answer:
          "Yes! A very popular 2-night combination package is 1 night on a luxury houseboat followed by 1 night at a tranquil backwater homestay with a morning shikara or kayak tour.",
      },
    ],
  },
];

export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return SERVICES_DATA.find((s) => s.slug === slug);
}
