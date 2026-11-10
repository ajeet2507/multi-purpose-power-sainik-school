
"use client";

import { useEffect } from "react";
import Image from "next/image";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Images,
} from "lucide-react";
import type { GalleryImage } from "@/content/gallery";

interface GalleryLightboxProps {
  images: GalleryImage[];
  selectedImage: GalleryImage | null;
  onClose: () => void;
  onNavigate: (image: GalleryImage) => void;
}

export default function GalleryLightbox({
  images,
  selectedImage,
  onClose,
  onNavigate,
}: GalleryLightboxProps) {
  useEffect(() => {
    if (!selectedImage) return;

    const currentIndex = images.findIndex(
      (image) => image.id === selectedImage.id
    );

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight" && images.length > 1) {
        const nextIndex = (currentIndex + 1) % images.length;
        onNavigate(images[nextIndex]);
      }

      if (event.key === "ArrowLeft" && images.length > 1) {
        const previousIndex =
          (currentIndex - 1 + images.length) % images.length;

        onNavigate(images[previousIndex]);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedImage, images, onClose, onNavigate]);

  if (!selectedImage) return null;

  const currentIndex = images.findIndex(
    (image) => image.id === selectedImage.id
  );

  const goPrevious = () => {
    if (images.length <= 1) return;

    const previousIndex =
      (currentIndex - 1 + images.length) % images.length;

    onNavigate(images[previousIndex]);
  };

  const goNext = () => {
    if (images.length <= 1) return;

    const nextIndex = (currentIndex + 1) % images.length;
    onNavigate(images[nextIndex]);
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050D18]/95 p-3 backdrop-blur-xl sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Gallery image preview"
    >
      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery preview"
        className="absolute right-4 top-4 z-20 rounded-full border border-white/20 bg-white/10 p-3 text-white transition hover:bg-[#D5A63C] sm:right-8 sm:top-8"
      >
        <X size={22} />
      </button>

      <div
        className="relative flex w-full max-w-6xl flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Image area */}
        <div className="relative flex h-[65vh] w-full items-center justify-center sm:h-[75vh]">
          <Image
            src={selectedImage.imageUrl}
            alt={selectedImage.title}
            fill
            priority
            sizes="100vw"
            className="object-contain"
          />

          {/* Previous */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={goPrevious}
              aria-label="Previous image"
              className="absolute left-1 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-[#D5A63C] sm:left-3 sm:p-4"
            >
              <ChevronLeft size={24} />
            </button>
          )}

          {/* Next */}
          {images.length > 1 && (
            <button
              type="button"
              onClick={goNext}
              aria-label="Next image"
              className="absolute right-1 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-white/10 p-3 text-white backdrop-blur-md transition hover:bg-[#D5A63C] sm:right-3 sm:p-4"
            >
              <ChevronRight size={24} />
            </button>
          )}
        </div>

        {/* Image information */}
        <div className="mt-5 flex w-full flex-col justify-between gap-4 sm:flex-row sm:items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#EAC66F]">
              {selectedImage.category}
            </span>

            <h3 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">
              {selectedImage.title}
            </h3>

            <p className="mt-2 text-sm text-white/60">
              {selectedImage.description}
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-2 text-sm font-semibold text-white/70">
            <Images size={17} />
            {currentIndex + 1} / {images.length}
          </div>
        </div>
      </div>
    </div>
  );
}
