import { Clock, Utensils, Sunset, Coffee, Sun, Anchor, CheckCircle } from "lucide-react";

export default function ItineraryTimeline() {
  const day1 = [
    {
      time: "12:00 PM",
      title: "Check-in & Welcome Drink",
      desc: "Warm traditional Kerala welcome with fresh tender coconut water or seasonal juice. Briefing by the captain on cruise route and safety.",
      icon: Anchor,
    },
    {
      time: "01:30 PM",
      title: "Authentic Kerala Backwater Lunch",
      desc: "Grand traditional feast prepared live onboard: hot Kerala red rice/basmati, fresh Pearl Spot (Karimeen fry), chicken curry, sambar, avial, thoran, curd, and crunchy papadam.",
      icon: Utensils,
    },
    {
      time: "04:00 PM",
      title: "Evening Tea & Hot Banana Fritters",
      desc: "Freshly brewed Kerala cardamom chai/filter coffee served with freshly made hot 'Pazham Pori' (sweet Kerala banana fritters) as we cruise through serene rural canals.",
      icon: Coffee,
    },
    {
      time: "05:30 PM",
      title: "Sunset Cruise over Vembanad Lake",
      desc: "Spectacular panoramic sunset views over the vast expanse of Vembanad Lake and Punnamada backwaters.",
      icon: Sunset,
    },
    {
      time: "08:00 PM",
      title: "Candlelight Dinner Under the Stars",
      desc: "Sumptuous dinner featuring chapathi, Kerala chicken curry, paneer/vegetable delights, dal fry, salad, and Kerala traditional dessert (Payasam).",
      icon: Utensils,
    },
  ];

  const day2 = [
    {
      time: "07:30 AM",
      title: "Morning Cruise Across Misty Backwaters",
      desc: "Wake up to misty waters, fresh breeze, and migratory birds skimming across the lotus ponds.",
      icon: Sun,
    },
    {
      time: "08:15 AM",
      title: "Traditional Kerala Breakfast",
      desc: "Steamed soft Idlis with Sambar & Coconut Chutney, hot crispy Vadas, or Appam with Veg/Egg stew, accompanied by fresh tea and coffee.",
      icon: Coffee,
    },
    {
      time: "09:00 AM",
      title: "Checkout with Cherished Memories",
      desc: "Boat docks back at Finishing Point jetty, Alleppey. Checkout with unforgettable backwater memories.",
      icon: CheckCircle,
    },
  ];

  return (
    <div className="bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-10 my-8">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wider bg-orange-100/70 px-3 py-1 rounded-full">
          Cruise Schedule
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-[#0A2540] mt-2">
          Alleppey Houseboat Itinerary & Meal Plan
        </h2>
        <p className="text-xs sm:text-sm text-slate-500 mt-2">
          Standard 21-hour overnight cruise program (12:00 PM to 9:00 AM)
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Day 1 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100">
          <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-100">
            <span className="w-8 h-8 rounded-full bg-[#0A2540] text-white flex items-center justify-center text-xs font-black">
              1
            </span>
            <h3 className="text-lg font-bold text-[#0A2540]">
              Day 1: Arrival, Cruise & Sunset Feast
            </h3>
          </div>

          <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-orange-200">
            {day1.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="relative">
                  <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-[#FF6600] border-2 border-white"></div>
                  <div className="flex items-center gap-2 text-xs font-extrabold text-[#FF6600] mb-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{item.time}</span>
                  </div>
                  <h4 className="text-sm font-bold text-slate-800 mb-1">
                    {item.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Day 2 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-6 pb-3 border-b border-slate-100">
              <span className="w-8 h-8 rounded-full bg-[#2CD664] text-white flex items-center justify-center text-xs font-black">
                2
              </span>
              <h3 className="text-lg font-bold text-[#0A2540]">
                Day 2: Morning Breeze & Breakfast
              </h3>
            </div>

            <div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-0.5 before:bg-emerald-200">
              {day2.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="relative">
                    <div className="absolute -left-[29px] top-1 w-4 h-4 rounded-full bg-[#2CD664] border-2 border-white"></div>
                    <div className="flex items-center gap-2 text-xs font-extrabold text-emerald-600 mb-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{item.time}</span>
                    </div>
                    <h4 className="text-sm font-bold text-slate-800 mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 p-4 rounded-xl bg-orange-50 border border-orange-200 text-xs text-slate-700">
            <strong>Note on Day Cruising vs Overnight:</strong> Daytime Shikara boat rides and speedboat tours operate between 6:00 AM and 6:30 PM. All overnight houseboats anchor safely after 5:30 PM in accordance with Kerala Inland Vessel safety regulations.
          </div>
        </div>
      </div>
    </div>
  );
}

