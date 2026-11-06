"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function InteractiveScripts() {
  const pathname = usePathname();

  useEffect(() => {
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

    // 2. PACKAGE TABS & DROPDOWN SELECTOR
    function initTabsAndPricing() {
      const container = document.getElementById("ab-single-houseboat") || document;
      const tabBtns = container.querySelectorAll(".ab-tab-btn");
      const customSelectTrigger = container.querySelector("#custom-select-trigger");
      const customSelectWrapper = container.querySelector(".ab-custom-select-wrapper");
      const customSelectOptions = container.querySelectorAll(".ab-cso-item");
      const nativeSelect = container.querySelector("#ab-cruise-type") as HTMLSelectElement | null;

      // Tab clicking
      tabBtns.forEach((btn) => {
        btn.addEventListener("click", function (this: Element) {
          const targetId = this.getAttribute("data-target");
          if (!targetId) return;

          container.querySelectorAll(".ab-tab-btn").forEach((b) => b.classList.remove("active"));
          container.querySelectorAll(".ab-tab-content").forEach((c) => c.classList.remove("active"));

          this.classList.add("active");
          const targetContent = container.querySelector(`#${targetId}`);
          if (targetContent) targetContent.classList.add("active");

          // Sync select
          const pkgVal = targetId.replace("tab-", "");
          if (nativeSelect) nativeSelect.value = pkgVal;
          if (customSelectOptions.length > 0) {
            customSelectOptions.forEach((opt) => opt.classList.remove("selected"));
            const activeOpt = container.querySelector(`.ab-cso-item[data-value="${pkgVal}"]`);
            if (activeOpt) activeOpt.classList.add("selected");
          }
          refreshPricing();
        });
      });

      // Custom dropdown toggle
      if (customSelectTrigger && customSelectWrapper) {
        customSelectTrigger.addEventListener("click", (e) => {
          e.stopPropagation();
          customSelectWrapper.classList.toggle("open");
        });

        document.addEventListener("click", () => {
          customSelectWrapper.classList.remove("open");
        });

        customSelectOptions.forEach((opt) => {
          opt.addEventListener("click", function (this: Element) {
            const val = this.getAttribute("data-value");
            if (!val) return;
            const targetTabBtn = container.querySelector(`.ab-tab-btn[data-target="tab-${val}"]`) as HTMLButtonElement | null;
            if (targetTabBtn) targetTabBtn.click();
            customSelectWrapper.classList.remove("open");
          });
        });
      }

      // Guest Counters
      const vAdults = container.querySelector("#val-adults") as HTMLInputElement | null;
      const vKids = container.querySelector("#val-kids") as HTMLInputElement | null;
      const btnAm = container.querySelector("#btn-adult-minus");
      const btnAp = container.querySelector("#btn-adult-plus");
      const btnKm = container.querySelector("#btn-kid-minus");
      const btnKp = container.querySelector("#btn-kid-plus");

      if (btnAm && vAdults) {
        btnAm.addEventListener("click", () => {
          let val = parseInt(vAdults.value || "2", 10);
          if (val > 1) {
            vAdults.value = String(val - 1);
            refreshPricing();
          }
        });
      }
      if (btnAp && vAdults) {
        btnAp.addEventListener("click", () => {
          let val = parseInt(vAdults.value || "2", 10);
          vAdults.value = String(val + 1);
          refreshPricing();
        });
      }
      if (btnKm && vKids) {
        btnKm.addEventListener("click", () => {
          let val = parseInt(vKids.value || "0", 10);
          if (val > 0) {
            vKids.value = String(val - 1);
            refreshPricing();
          }
        });
      }
      if (btnKp && vKids) {
        btnKp.addEventListener("click", () => {
          let val = parseInt(vKids.value || "0", 10);
          vKids.value = String(val + 1);
          refreshPricing();
        });
      }

      const dInput = container.querySelector("#ab-date") as HTMLInputElement | null;
      if (dInput) {
        dInput.addEventListener("change", refreshPricing);
      }

      function refreshPricing() {
        const adultsCount = parseInt((vAdults && vAdults.value) || "2", 10);
        const kidsCount = parseInt((vKids && vKids.value) || "0", 10);
        const activeTab = container.querySelector(".ab-tab-btn.active");
        const pkg = activeTab?.getAttribute("data-target")?.replace("tab-", "") || "overnight";
        const dateVal = (dInput && dInput.value) || "Upcoming Dates";

        const boatTitle = document.querySelector("h1")?.textContent?.trim() || "Houseboat";

        // Update WhatsApp CTAs
        const waBtns = document.querySelectorAll("a[href*='wa.me'], a.ab-btn-wa");
        const msg = `Hi Alleppey Booking, I want to check availability for ${boatTitle} (%0APackage: ${pkg}, %0ADate: ${dateVal}, %0AGuests: ${adultsCount} Adults, ${kidsCount} Kids). Please share live photos and rates.`;
        waBtns.forEach((btn) => {
          const a = btn as HTMLAnchorElement;
          a.href = `https://wa.me/917012761588?text=${encodeURIComponent(msg)}`;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
        });
      }

      refreshPricing();
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

    // 5. STICKY SCROLL TO BOOK BUTTON
    function initStickyScroll() {
      const scrollBtn = document.getElementById("ab-sticky-scroll-btn");
      if (scrollBtn) {
        scrollBtn.addEventListener("click", () => {
          const widget = document.getElementById("booking-widget") || document.querySelector(".hb-card");
          if (widget) {
            widget.scrollIntoView({ behavior: "smooth", block: "start" });
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

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
}

