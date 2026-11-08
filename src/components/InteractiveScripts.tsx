"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function InteractiveScripts() {
  const pathname = usePathname();

  useEffect(() => {
    const cleanups: (() => void)[] = [];

    // 0. CLEANUP ORPHANED CALENDARS ON ROUTE TRANSITION
    document.querySelectorAll(".flatpickr-calendar").forEach((el) => el.remove());

    // 1. GALLERY THUMBNAILS SWITCHER
    function initGallery() {
      const mainImg = document.querySelector("#ab-main-img") as HTMLImageElement | null;
      const thumbWraps = document.querySelectorAll(".ab-thumb-wrap");

      if (mainImg && thumbWraps.length > 0) {
        thumbWraps.forEach((wrap) => {
          wrap.addEventListener("click", function (this: Element) {
            const clickedImg = this.querySelector(".ab-thumb") as HTMLImageElement | null;
            if (!clickedImg || !mainImg) return;
            mainImg.style.opacity = "0.5";
            setTimeout(() => {
              mainImg.src = clickedImg.src;
              mainImg.style.opacity = "1";
            }, 150);
            document.querySelectorAll(".ab-thumb").forEach((t) => t.classList.remove("active"));
            clickedImg.classList.add("active");
            wrap.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
          });
        });
      }
    }

    // 2. PACKAGE TABS & DROPDOWN SELECTOR WITH REAL-TIME PRICING
    function initTabsAndPricing() {
      const root = document.getElementById("ab-single-houseboat");
      if (!root) return;
      const container: HTMLElement = root;
      const tabBtns = container.querySelectorAll(".ab-tab-btn");
      const customSelectTrigger = container.querySelector("#custom-select-trigger");
      const customSelectWrapper = container.querySelector(".ab-custom-select-wrapper");
      const customSelectOptions = container.querySelectorAll(".ab-cso-item");
      const nativeSelect = container.querySelector("#ab-cruise-type") as HTMLSelectElement | null;

      // Extract bedroom count from pathname, h1, or price subtitle
      function getBedroomCount(): number {
        const pathMatch = pathname.match(/\/(\d+)-bedroom/i);
        if (pathMatch) return parseInt(pathMatch[1], 10);

        const h1 = container.querySelector("h1")?.textContent || "";
        const h1Match = h1.match(/(\d+)\s*Bedroom/i);
        if (h1Match) return parseInt(h1Match[1], 10);

        const sub = container.querySelector(".ab-sh-price-subtitle")?.textContent || "";
        const subMatch = sub.match(/(\d+)\s*bedroom/i);
        if (subMatch) return parseInt(subMatch[1], 10);

        return 1;
      }

      const FLEET_PRICING: Record<
        number,
        {
          bedrooms: number;
          baseGuests: number;
          maxGuestsOvernight: number;
          maxGuestsDay: number;
          overnight: { base: number; extraPerAdult: number; threshold: number };
          day: { base: number; extraPerAdult: number; threshold: number };
          night: { base: number; extraPerAdult: number; threshold: number };
        }
      > = {
        1: {
          bedrooms: 1,
          baseGuests: 2,
          maxGuestsOvernight: 4,
          maxGuestsDay: 6,
          overnight: { base: 9000, extraPerAdult: 1000, threshold: 2 },
          day: { base: 8000, extraPerAdult: 1000, threshold: 2 },
          night: { base: 7500, extraPerAdult: 500, threshold: 2 },
        },
        2: {
          bedrooms: 2,
          baseGuests: 4,
          maxGuestsOvernight: 8,
          maxGuestsDay: 25,
          overnight: { base: 14000, extraPerAdult: 800, threshold: 4 },
          day: { base: 12000, extraPerAdult: 750, threshold: 4 },
          night: { base: 9000, extraPerAdult: 500, threshold: 4 },
        },
        3: {
          bedrooms: 3,
          baseGuests: 6,
          maxGuestsOvernight: 12,
          maxGuestsDay: 30,
          overnight: { base: 18000, extraPerAdult: 1000, threshold: 6 },
          day: { base: 14000, extraPerAdult: 700, threshold: 6 },
          night: { base: 13500, extraPerAdult: 500, threshold: 6 },
        },
        4: {
          bedrooms: 4,
          baseGuests: 8,
          maxGuestsOvernight: 16,
          maxGuestsDay: 30,
          overnight: { base: 24000, extraPerAdult: 1000, threshold: 8 },
          day: { base: 20000, extraPerAdult: 750, threshold: 8 },
          night: { base: 18000, extraPerAdult: 500, threshold: 8 },
        },
        5: {
          bedrooms: 5,
          baseGuests: 10,
          maxGuestsOvernight: 20,
          maxGuestsDay: 40,
          overnight: { base: 30000, extraPerAdult: 1000, threshold: 10 },
          day: { base: 26000, extraPerAdult: 800, threshold: 10 },
          night: { base: 22500, extraPerAdult: 500, threshold: 10 },
        },
        6: {
          bedrooms: 6,
          baseGuests: 12,
          maxGuestsOvernight: 24,
          maxGuestsDay: 60,
          overnight: { base: 36000, extraPerAdult: 1000, threshold: 12 },
          day: { base: 32000, extraPerAdult: 800, threshold: 12 },
          night: { base: 27000, extraPerAdult: 500, threshold: 12 },
        },
        7: {
          bedrooms: 7,
          baseGuests: 14,
          maxGuestsOvernight: 28,
          maxGuestsDay: 80,
          overnight: { base: 42000, extraPerAdult: 1000, threshold: 14 },
          day: { base: 28000, extraPerAdult: 800, threshold: 14 },
          night: { base: 31500, extraPerAdult: 500, threshold: 14 },
        },
        8: {
          bedrooms: 8,
          baseGuests: 16,
          maxGuestsOvernight: 32,
          maxGuestsDay: 100,
          overnight: { base: 48000, extraPerAdult: 1000, threshold: 16 },
          day: { base: 32000, extraPerAdult: 800, threshold: 16 },
          night: { base: 36000, extraPerAdult: 500, threshold: 16 },
        },
        10: {
          bedrooms: 10,
          baseGuests: 20,
          maxGuestsOvernight: 40,
          maxGuestsDay: 120,
          overnight: { base: 60000, extraPerAdult: 1000, threshold: 20 },
          day: { base: 40000, extraPerAdult: 800, threshold: 40 },
          night: { base: 45000, extraPerAdult: 500, threshold: 20 },
        },
        12: {
          bedrooms: 12,
          baseGuests: 24,
          maxGuestsOvernight: 48,
          maxGuestsDay: 150,
          overnight: { base: 72000, extraPerAdult: 1000, threshold: 24 },
          day: { base: 48000, extraPerAdult: 800, threshold: 48 },
          night: { base: 54000, extraPerAdult: 500, threshold: 24 },
        },
        14: {
          bedrooms: 14,
          baseGuests: 28,
          maxGuestsOvernight: 56,
          maxGuestsDay: 200,
          overnight: { base: 84000, extraPerAdult: 1000, threshold: 28 },
          day: { base: 56000, extraPerAdult: 800, threshold: 56 },
          night: { base: 63000, extraPerAdult: 500, threshold: 28 },
        },
      };

      const termsData: Record<string, string[]> = {
        overnight: [
          "<strong>Itinerary &amp; Menu Variations:</strong> The cruise route and food menu are subject to slight changes depending on the specific boat assigned, weather conditions, or seasonal availability.",
          "<strong>Check in:</strong> 12 noon. <strong>Check out:</strong> 09:00 AM.",
          "Guests are not allowed to sleep outside the bedrooms for safety reasons.",
          "Beverages and any cook-to-order items will be charged extra on actuals.",
          "Air conditioners in the bedrooms will be switched on only from 09:00 PM to 06:00 AM. If you require full-time AC, please inform us at the time of booking (extra charges apply).",
          "Meal plan applied on APAI / full board basis (inclusive of breakfast, lunch &amp; dinner).",
          "Management is not responsible for late arrivals. Check-out time will be followed strictly as per schedule.",
          "You can enjoy complete privacy in the boat; it is exclusively booked for your group.",
          "The boat will be anchored in a designated backwater area during the night and will not cruise after 17:30 hrs.",
        ],
        day: [
          "<strong>Itinerary &amp; Menu Variations:</strong> The cruise route and food menu are subject to slight changes depending on the specific boat assigned, weather conditions, or seasonal availability.",
          "<strong>Check in:</strong> 11:30 AM. <strong>Check out:</strong> 5:00 PM.",
          "Guests are not allowed to sleep outside the bedrooms for safety reasons.",
          "Beverages and any cook-to-order items will be charged extra on actuals.",
          "Air conditioners in the bedrooms will be switched on only from 09:00 PM to 06:00 AM. If you require full-time AC, please inform us at the time of booking (extra charges apply).",
          "Management is not responsible for late arrivals. Check-out time will be followed strictly as per schedule.",
          "You can enjoy complete privacy in the boat; it is exclusively booked for your group.",
        ],
        night: [
          "<strong>Itinerary &amp; Menu Variations:</strong> The cruise route and food menu are subject to slight changes depending on the specific boat assigned, weather conditions, or seasonal availability.",
          "<strong>Check in:</strong> 5:00 PM. <strong>Check out:</strong> 09:00 AM.",
          "Guests are not allowed to sleep outside the bedrooms for safety reasons.",
          "Beverages and any cook-to-order items will be charged extra on actuals.",
          "Air conditioners in the bedrooms will be switched on only from 09:00 PM to 06:00 AM. If you require full-time AC, please inform us at the time of booking (extra charges apply).",
          "Management is not responsible for late arrivals. Check-out time will be followed strictly as per schedule.",
          "You can enjoy complete privacy in the boat; it is exclusively booked for your group.",
        ],
      };

      const bedCount = getBedroomCount();
      const boatPricing = FLEET_PRICING[bedCount] || FLEET_PRICING[1];

      // Guest Counters elements
      const vAdults = container.querySelector("#val-adults") as HTMLInputElement | null;
      const vKids = container.querySelector("#val-kids") as HTMLInputElement | null;
      const btnAm = container.querySelector("#btn-adult-minus") as HTMLButtonElement | null;
      const btnAp = container.querySelector("#btn-adult-plus") as HTMLButtonElement | null;
      const btnKm = container.querySelector("#btn-kid-minus") as HTMLButtonElement | null;
      const btnKp = container.querySelector("#btn-kid-plus") as HTMLButtonElement | null;
      const dInput = container.querySelector("#ab-date") as HTMLInputElement | null;

      let adults = parseInt((vAdults && vAdults.value) || String(boatPricing.baseGuests), 10);
      if (isNaN(adults) || adults < 1) adults = boatPricing.baseGuests;
      let kids = parseInt((vKids && vKids.value) || "0", 10);
      if (isNaN(kids) || kids < 0) kids = 0;

      let currentPackageId = "overnight";
      let currentMaxCapacity = boatPricing.maxGuestsOvernight;

      function getSelectedPackage(): string {
        const activeOption = container.querySelector(".ab-cso-item.selected");
        return activeOption?.getAttribute("data-value") || currentPackageId;
      }

      function setCruisePackage(packageId: string, shouldScroll = false) {
        currentPackageId = packageId;

        // 1. Sync custom select dropdown options
        if (customSelectOptions.length > 0) {
          customSelectOptions.forEach((opt) => opt.classList.remove("selected"));
          const activeOption = container.querySelector(`.ab-cso-item[data-value="${packageId}"]`);
          if (activeOption) {
            activeOption.classList.add("selected");
            const triggerTitle = container.querySelector(".ab-cst-title");
            const triggerSubtitle = container.querySelector(".ab-cst-subtitle");
            const optTitle = activeOption.querySelector(".ab-cso-title-text")?.textContent?.trim();
            const optSubtitle = activeOption.querySelector(".ab-cso-subtitle")?.textContent?.trim();
            if (triggerTitle && optTitle) triggerTitle.textContent = optTitle;
            if (triggerSubtitle && optSubtitle) triggerSubtitle.textContent = optSubtitle;
          }
        }

        // 2. Sync hidden native select
        if (nativeSelect) nativeSelect.value = packageId;

        // 3. Sync tabs & tab contents
        tabBtns.forEach((b) => b.classList.remove("active"));
        container.querySelectorAll(".ab-tab-content").forEach((c) => c.classList.remove("active"));

        const targetTabBtn = container.querySelector(`.ab-tab-btn[data-target="tab-${packageId}"]`);
        const targetTabContent = container.querySelector(`#tab-${packageId}`);
        if (targetTabBtn) {
          targetTabBtn.classList.add("active");
          if (shouldScroll) {
            targetTabBtn.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
          }
        }
        if (targetTabContent) targetTabContent.classList.add("active");

        // 4. Update capacity limits based on package (Day vs Overnight/Night)
        currentMaxCapacity = packageId === "day" ? boatPricing.maxGuestsDay : boatPricing.maxGuestsOvernight;

        if (adults + kids > currentMaxCapacity) {
          adults = Math.min(adults, currentMaxCapacity);
          kids = Math.min(kids, currentMaxCapacity - adults);
          if (adults < 1) adults = 1;
        }

        // 5. Update capacity note & subtitle
        const capacityNoteText = container.querySelector(".ab-capacity-note");
        if (capacityNoteText) {
          capacityNoteText.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" role="presentation"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg> Maximum capacity is ${currentMaxCapacity} guests total.`;
        }
        const priceSubtitle = container.querySelector(".ab-sh-price-subtitle");
        if (priceSubtitle) {
          priceSubtitle.textContent = `Whole boat • ${boatPricing.bedrooms} bedroom houseboat • Up to ${currentMaxCapacity} guests`;
        }

        const headerCapacity = container.querySelector("#ab-header-capacity");
        if (headerCapacity) {
          headerCapacity.innerHTML = `<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" role="presentation"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg> Up to ${currentMaxCapacity} Guests`;
        }

        // 6. Update terms & logistics grid
        const tcGrid = container.querySelector("#ab-tc-dynamic-grid");
        if (tcGrid && termsData[packageId]) {
          tcGrid.innerHTML = termsData[packageId]
            .map(
              (text) => `
                <div class="ab-tc-item">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" role="presentation"><path d="M20 6L9 17l-5-5"></path></svg>
                    <p>${text}</p>
                </div>
              `
            )
            .join("");
        }

        syncUI();
      }

      function refreshPricing() {
        const pkg = getSelectedPackage();
        const pkgConfig = boatPricing[pkg as "overnight" | "day" | "night"] || boatPricing.overnight;

        const base = pkgConfig.base;
        const threshold = pkgConfig.threshold;
        const extraCount = adults > threshold ? adults - threshold : 0;
        const extra = extraCount * pkgConfig.extraPerAdult;
        const total = base + extra;

        const formattedTotal = "₹" + total.toLocaleString("en-IN");
        const formattedBase = "₹" + base.toLocaleString("en-IN");
        const formattedExtra = "+ ₹" + extra.toLocaleString("en-IN");

        // Price amount on top of price card
        const priceAmountDisplay = container.querySelector(".ab-sh-price-amount");
        if (priceAmountDisplay) {
          priceAmountDisplay.innerHTML = `<span class="ab-price-from">From</span> ${formattedTotal}`;
        }

        // Mobile sticky bar price
        const mobilePriceDisplay = document.querySelector(".ab-msb-price strong");
        if (mobilePriceDisplay) {
          mobilePriceDisplay.textContent = formattedTotal;
        }

        // Breakdown elements
        const pbBase = container.querySelector("#ab-pb-base");
        const pbExtra = container.querySelector("#ab-pb-extra");
        const pbTotal = container.querySelector("#ab-pb-total");
        const pbTotalFooter = container.querySelector("#ab-pb-total-footer");
        const pbExtraRow = container.querySelector("#ab-pb-extra-row") as HTMLElement | null;
        const pbBaseLabel = container.querySelector("#ab-pb-base-label");

        if (pbBase) pbBase.textContent = formattedBase;
        if (pbTotal) pbTotal.textContent = formattedTotal;
        if (pbTotalFooter) pbTotalFooter.textContent = formattedTotal;

        if (pbBaseLabel) {
          pbBaseLabel.innerHTML = `Base Price <span style="font-size: 11.5px; font-weight: 500; color: #9ca3af; margin-left: 4px;">(Up to ${boatPricing.baseGuests} Adults)</span>`;
        }

        if (pbExtraRow) {
          if (extra > 0) {
            pbExtraRow.style.display = "flex";
            const labelSpan = pbExtraRow.querySelector("span:first-child");
            if (labelSpan) labelSpan.textContent = "Extra Adults Charge";
            if (pbExtra) pbExtra.textContent = formattedExtra;
          } else {
            pbExtraRow.style.display = "none";
          }
        }

        // Update WhatsApp CTAs
        updateWhatsAppLink(formattedTotal);
      }

      function updateWhatsAppLink(formattedPrice: string) {
        const dateVal = dInput && dInput.value && dInput.value.trim() ? dInput.value.trim() : "To be decided";
        const activeOption = container.querySelector(".ab-cso-item.selected");
        const packageSelected =
          activeOption?.querySelector(".ab-cso-title-text")?.textContent?.trim() || "Overnight Cruise";

        const msg = `Hi Alleppey Booking! I would like to check availability for a ${boatPricing.bedrooms} Bedroom Houseboat Alleppey.\n\n*Package:* ${packageSelected}\n*Check-in Date:* ${dateVal}\n*Guests:* ${adults} Adults, ${kids} Kids\n*Estimated Price:* ${formattedPrice}\n\nPlease confirm availability.`;

        const waTargetLinks = container.querySelectorAll(
          "#booking-widget a.ab-btn-wa, .ab-sh-price-card a.ab-btn-wa, .ab-mobile-sticky-bar a.ab-btn-wa"
        );

        waTargetLinks.forEach((link) => {
          (link as HTMLAnchorElement).href = `https://wa.me/917012761588?text=${encodeURIComponent(msg)}`;
          (link as HTMLAnchorElement).target = "_blank";
          (link as HTMLAnchorElement).rel = "noopener noreferrer";
        });
      }

      function syncUI() {
        if (vAdults) vAdults.value = String(adults);
        if (vKids) vKids.value = String(kids);
        const total = adults + kids;

        if (btnAm) btnAm.disabled = adults <= 1;
        if (btnKm) btnKm.disabled = kids <= 0;
        if (btnAp) btnAp.disabled = adults >= currentMaxCapacity || total >= currentMaxCapacity;
        if (btnKp) btnKp.disabled = kids >= currentMaxCapacity || total >= currentMaxCapacity;

        refreshPricing();
      }

      // Tab clicks
      tabBtns.forEach((btn) => {
        btn.addEventListener("click", function (this: Element) {
          const targetId = this.getAttribute("data-target");
          if (!targetId) return;
          const pkgVal = targetId.replace("tab-", "");
          setCruisePackage(pkgVal, true);
        });
      });

      // Custom dropdown toggle & item select
      if (customSelectTrigger && customSelectWrapper) {
        const parentField = customSelectWrapper.closest(".ab-booking-field");

        customSelectTrigger.addEventListener("click", (e) => {
          e.stopPropagation();
          const isOpen = customSelectWrapper.classList.toggle("open");
          if (parentField) parentField.classList.toggle("open-field", isOpen);
        });

        const handleOutsideClick = (e: MouseEvent) => {
          if (!customSelectWrapper.contains(e.target as Node)) {
            customSelectWrapper.classList.remove("open");
            if (parentField) parentField.classList.remove("open-field");
          }
        };
        document.addEventListener("click", handleOutsideClick);
        cleanups.push(() => document.removeEventListener("click", handleOutsideClick));

        customSelectOptions.forEach((opt) => {
          opt.addEventListener("click", function (this: Element, e: Event) {
            e.stopPropagation();
            const val = this.getAttribute("data-value") || (e.target as Element).closest(".ab-cso-item")?.getAttribute("data-value");
            if (!val) return;
            setCruisePackage(val, false);
            customSelectWrapper.classList.remove("open");
            if (parentField) parentField.classList.remove("open-field");
          });
        });
      }

      // Adult and Kid controls
      if (btnAm) {
        btnAm.addEventListener("click", () => {
          if (adults > 1) {
            adults--;
            syncUI();
          }
        });
      }
      if (btnAp) {
        btnAp.addEventListener("click", () => {
          if (adults < currentMaxCapacity && adults + kids < currentMaxCapacity) {
            adults++;
            syncUI();
          }
        });
      }
      if (btnKm) {
        btnKm.addEventListener("click", () => {
          if (kids > 0) {
            kids--;
            syncUI();
          }
        });
      }
      if (btnKp) {
        btnKp.addEventListener("click", () => {
          if (kids < currentMaxCapacity && adults + kids < currentMaxCapacity) {
            kids++;
            syncUI();
          }
        });
      }

      // Input manual changes
      if (vAdults) {
        vAdults.addEventListener("input", function (this: HTMLInputElement) {
          let val = parseInt(this.value, 10);
          if (isNaN(val)) return;
          if (val < 1) val = 1;
          if (val > currentMaxCapacity) val = currentMaxCapacity;
          if (val + kids > currentMaxCapacity) val = currentMaxCapacity - kids;
          adults = val;
          refreshPricing();
        });
        vAdults.addEventListener("blur", function (this: HTMLInputElement) {
          let val = parseInt(this.value, 10);
          if (isNaN(val) || val < 1) val = 1;
          adults = val;
          syncUI();
        });
      }

      if (vKids) {
        vKids.addEventListener("input", function (this: HTMLInputElement) {
          let val = parseInt(this.value, 10);
          if (isNaN(val)) return;
          if (val < 0) val = 0;
          if (val > currentMaxCapacity) val = currentMaxCapacity;
          if (adults + val > currentMaxCapacity) val = currentMaxCapacity - adults;
          kids = val;
          refreshPricing();
        });
        vKids.addEventListener("blur", function (this: HTMLInputElement) {
          let val = parseInt(this.value, 10);
          if (isNaN(val) || val < 0) val = 0;
          kids = val;
          syncUI();
        });
      }

      // Check-in date listeners
      if (dInput) {
        dInput.addEventListener("change", refreshPricing);
        dInput.addEventListener("input", refreshPricing);
      }

      // Initialize UI on load
      setCruisePackage(currentPackageId, false);
    }

    // 3. LIGHTBOX FOR PHOTOS
    function initLightbox() {
      // Create lightbox modal if not exists
      let lightbox = document.getElementById("ab-global-lightbox");
      if (!lightbox) {
        lightbox = document.createElement("div");
        lightbox.id = "ab-global-lightbox";
        lightbox.style.cssText = `
          position: fixed; top: 0; left: 0; width: 100vw; height: 100vh;
          background: rgba(0,0,0,0.9); z-index: 9999999;
          display: none; align-items: center; justify-content: center;
          cursor: pointer;
        `;
        const img = document.createElement("img");
        img.id = "ab-global-lightbox-img";
        img.style.cssText = "max-width: 90vw; max-height: 85vh; border-radius: 12px; box-shadow: 0 20px 50px rgba(0,0,0,0.5); object-fit: contain;";
        lightbox.appendChild(img);
        lightbox.addEventListener("click", () => {
          lightbox!.style.display = "none";
        });
        document.body.appendChild(lightbox);
      }

      (window as unknown as { openLightbox: (el: HTMLElement) => void }).openLightbox = function (el: HTMLElement) {
        const src = el.getAttribute("src") || (el.querySelector("img") && el.querySelector("img")!.getAttribute("src"));
        if (src && lightbox) {
          const lImg = document.getElementById("ab-global-lightbox-img") as HTMLImageElement;
          if (lImg) lImg.src = src;
          lightbox.style.display = "flex";
        }
      };

      (window as unknown as { closeLightbox: () => void }).closeLightbox = function () {
        if (lightbox) lightbox.style.display = "none";
      };
    }

    // 4. CONTACT FORM WHATSAPP SUBMITTER
    function initContactForm() {
      (window as unknown as { sendToWhatsApp: () => void }).sendToWhatsApp = function () {
        const fname = (document.getElementById("wa-fname") as HTMLInputElement)?.value || "";
        const lname = (document.getElementById("wa-lname") as HTMLInputElement)?.value || "";
        const email = (document.getElementById("wa-email") as HTMLInputElement)?.value || "";
        const phone = (document.getElementById("wa-phone") as HTMLInputElement)?.value || "";
        const subject = (document.getElementById("wa-subject") as HTMLInputElement)?.value || "";
        const message = (document.getElementById("wa-message") as HTMLTextAreaElement)?.value || "";

        let text = `*New Inquiry from Website Contact Form*%0A%0A`;
        if (fname || lname) text += `*Name:* ${fname} ${lname}%0A`;
        if (email) text += `*Email:* ${email}%0A`;
        if (phone) text += `*Phone:* ${phone}%0A`;
        if (subject) text += `*Subject:* ${subject}%0A`;
        if (message) text += `*Message:* ${message}%0A`;

        window.open(`https://wa.me/917012761588?text=${text}`, "_blank");
      };
    }

    // 5. STICKY SCROLL TO BOOK BUTTON & MOBILE BAR
    function initStickyScroll() {
      const stickyBar = document.querySelector(".ab-mobile-sticky-bar");
      if (stickyBar) {
        const handleScroll = () => {
          if (window.scrollY > 400) {
            stickyBar.classList.remove("ab-hide-bar");
          } else {
            stickyBar.classList.add("ab-hide-bar");
          }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        handleScroll();
      }

      const scrollBtn = document.getElementById("ab-sticky-scroll-btn");
      if (scrollBtn) {
        scrollBtn.addEventListener("click", () => {
          const widget =
            document.querySelector(".ab-sh-price-card") ||
            document.getElementById("booking-widget") ||
            document.querySelector(".hb-card");
          if (widget) {
            widget.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        });
      }
    }

    // Run initializations after DOM settles
    const timer = setTimeout(() => {
      initGallery();
      initTabsAndPricing();
      initLightbox();
      initContactForm();
      initStickyScroll();
    }, 100);

    return () => {
      clearTimeout(timer);
      cleanups.forEach((fn) => fn());
      document.querySelectorAll(".flatpickr-calendar").forEach((el) => el.remove());
    };
  }, [pathname]);

  return null;
}

