"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import { HouseboatGalleryItem } from "@/types";
import { X } from "lucide-react";

interface HouseboatGalleryProps {
  images: HouseboatGalleryItem[];
  defaultImage: string;
  title: string;
}

export default function HouseboatGallery({
  images,
  defaultImage,
  title,
}: HouseboatGalleryProps) {
  const galleryList =
    images.length > 0 ? images : [{ src: defaultImage, alt: title, title }];

  const [selectedImg, setSelectedImg] = useState<string>(galleryList[0].src);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const thumbsContainerRef = useRef<HTMLDivElement>(null);

  const currentItem = galleryList.find((img) => img.src === selectedImg) || galleryList[0];

  const handleSelect = (src: string, e?: React.MouseEvent<HTMLButtonElement>) => {
    if (src === selectedImg) return;
    setSelectedImg(src);

    if (e?.currentTarget) {
      e.currentTarget.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
        inline: "center",
      });
    }
  };

  return (
    <>
      <section className="ab-sh-gallery-container w-full mb-6">
        {/* Main Image Viewport — renders all gallery images stacked for 0ms instant switching */}
        <div
          className="ab-sh-main-image-wrap relative rounded-2xl overflow-hidden bg-slate-900 shadow-md group cursor-pointer aspect-[16/10] sm:aspect-[16/9]"
          onClick={() => setIsLightboxOpen(true)}
          role="button"
          tabIndex={0}
          aria-label={`View full size image: ${currentItem.title || currentItem.alt || title}`}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              setIsLightboxOpen(true);
            }
          }}
        >
          {galleryList.map((img, idx) => {
            const isSelected = img.src === selectedImg;
            return (
              <Image
                key={img.src}
                src={img.src}
                alt={img.alt || title}
                title={img.title || title}
                fill
                priority={idx === 0}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 800px"
                className={`object-cover transition-opacity duration-150 ${
                  isSelected ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                }`}
              />
            );
          })}
        </div>

        {/* Thumbnails Carousel */}
        {galleryList.length > 1 && (
          <div
            ref={thumbsContainerRef}
            className="ab-sh-thumbnails flex items-center gap-2.5 mt-3 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-slate-300"
          >
            {galleryList.map((img, idx) => {
              const isActive = img.src === selectedImg;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={(e) => handleSelect(img.src, e)}
                  className={`ab-thumb-wrap relative flex-shrink-0 w-20 sm:w-24 h-14 sm:h-16 rounded-xl overflow-hidden transition-all duration-150 border-2 ${
                    isActive
                      ? "border-brand-orange shadow-md scale-[1.02] ring-2 ring-brand-orange/30"
                      : "border-transparent opacity-70 hover:opacity-100 hover:border-slate-300"
                  }`}
                  aria-label={`Select photo ${idx + 1}: ${img.title || img.alt || "Houseboat view"}`}
                >
                  <Image
                    src={img.src}
                    alt={img.alt || title}
                    title={img.title || title}
                    fill
                    sizes="96px"
                    className={`ab-thumb object-cover ${isActive ? "active" : ""}`}
                  />
                </button>
              );
            })}
          </div>
        )}
      </section>

      {/* Lightbox Modal */}
      {isLightboxOpen && (
        <div
          className="fixed inset-0 z-[9999999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 cursor-pointer animate-fadeIn"
          onClick={() => setIsLightboxOpen(false)}
          role="dialog"
          aria-modal="true"
          aria-label={`Lightbox: ${currentItem.title || currentItem.alt || title}`}
        >
          <button
            type="button"
            onClick={() => setIsLightboxOpen(false)}
            aria-label="Close Lightbox"
            className="absolute top-5 right-5 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
          >
            <X size={24} />
          </button>
          <div
            className="relative max-w-5xl max-h-[85vh] cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImg}
              alt={currentItem.alt || currentItem.title || title}
              width={1200}
              height={800}
              style={{ maxWidth: "100%", maxHeight: "85vh", objectFit: "contain" }}
              className="rounded-xl shadow-2xl"
              unoptimized
            />
            {currentItem.title && (
              <p className="text-center text-white/80 text-sm mt-3 font-medium">
                {currentItem.title}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}

