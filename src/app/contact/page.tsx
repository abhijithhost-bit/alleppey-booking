import type { Metadata } from "next";
import { MessageCircle, Phone, Mail, MapPin } from "lucide-react";
import siteConfig from "@/data/siteConfig.json";
import Breadcrumb from "@/components/Breadcrumb";
import BookingForm from "@/components/BookingForm";

export const metadata: Metadata = {
  title: "Contact Alleppey Booking | 24/7 Phone & WhatsApp Helpdesk",
  description:
    "Get in touch with Alleppey Booking. Direct WhatsApp desk (+91 70127 61588), phone lines, office location at Finishing Point Road, Alappuzha, Kerala.",
  alternates: {
    canonical: `${siteConfig.url}/contact/`,
  },
  openGraph: {
    title: "Contact Alleppey Booking | 24/7 Phone & WhatsApp Helpdesk",
    description: "Get in touch with Alleppey Booking for room availability and rates.",
    url: `${siteConfig.url}/contact/`,
  },
};

export default function ContactPage() {
  return (
    <div className="py-6 sm:py-10 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Contact Us" }]} />

        <div className="text-center max-w-2xl mx-auto my-8">
          <span className="text-xs font-bold text-[#FF6600] uppercase tracking-wider bg-orange-100 px-3 py-1 rounded-full">
            24/7 Booking Support
          </span>
          <h1 className="text-3xl sm:text-4xl font-black text-[#0A2540] mt-3 tracking-tight">
            Contact Alleppey Booking
          </h1>
          <p className="text-xs sm:text-sm text-slate-600 mt-2">
            Have questions about room availability, route customization, or group events? Message or call our local team anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 my-8">
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-green-100 text-[#2CD664] flex items-center justify-center flex-shrink-0">
                <MessageCircle className="w-6 h-6 fill-[#2CD664]" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#0A2540]">WhatsApp Booking Desk</h2>
                <p className="text-xs text-slate-500 mt-0.5">Instant response in 2 minutes</p>
                <a
                  href="https://wa.me/917012761588"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-[#2CD664] hover:underline mt-1 inline-block"
                >
                  +91 70127 61588
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-orange-100 text-[#FF6600] flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#0A2540]">Direct Phone Line</h2>
                <p className="text-xs text-slate-500 mt-0.5">Call our captain directly</p>
                <div className="space-y-1 mt-1">
                  <a href="tel:+917012761588" className="text-sm font-bold text-slate-800 hover:text-[#FF6600] block">
                    +91 70127 61588
                  </a>
                  <a href="tel:+919947753154" className="text-sm font-bold text-slate-800 hover:text-[#FF6600] block">
                    +91 99477 53154
                  </a>
                  <a href="tel:+916238794500" className="text-sm font-bold text-slate-800 hover:text-[#FF6600] block">
                    +91 62387 94500
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#0A2540]">Email Inquiries</h2>
                <p className="text-xs text-slate-500 mt-0.5">Corporate events &amp; custom quotes</p>
                <a href="mailto:support@alleppeybooking.com" className="text-sm font-bold text-slate-800 hover:text-[#FF6600] mt-1 inline-block">
                  support@alleppeybooking.com
                </a>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-sm font-bold text-[#0A2540]">Boarding Jetty &amp; Office</h2>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Finishing Point Road, Punnamada, Alappuzha, Kerala 688013, India
                </p>
                <span className="text-[11px] text-slate-400 mt-1 block">Desk Open: 6:00 AM - 11:00 PM Daily</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <BookingForm title="Send a Booking Inquiry" />
          </div>
        </div>
      </div>
    </div>
  );
}

