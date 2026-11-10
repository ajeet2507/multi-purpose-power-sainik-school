
"use client";

import { useCallback, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Camera, Sparkles } from "lucide-react";

import {
  galleryImages,
  type GalleryImage,
} from "@/content/gallery";

import FeaturedGallery from "@/components/gallery/FeaturedGallery";
import GalleryFilters, {
  type GalleryFilter,
} from "@/components/gallery/GalleryFilters";
import GalleryGrid from "@/components/gallery/GalleryGrid";
import GalleryLightbox from "@/components/gallery/GalleryLightbox";
import VideoGallery from "@/components/gallery/VideoGallery";

const INITIAL_VISIBLE_IMAGES = 6;
const LOAD_MORE_COUNT = 3;

export default function GalleryPage() {
  const [activeFilter, setActiveFilter] =
    useState<GalleryFilter>("All");

  const [visibleCount, setVisibleCount] =
    useState(INITIAL_VISIBLE_IMAGES);

  const [selectedImage, setSelectedImage] =
    useState<GalleryImage | null>(null);

  const filteredImages = useMemo(() => {
    if (activeFilter === "All") {
      return galleryImages.filter((image) => !image.isFeatured);
    }

    return galleryImages.filter(
      (image) => image.category === activeFilter
    );
  }, [activeFilter]);

  const visibleImages = filteredImages.slice(0, visibleCount);

  const featuredImages = useMemo(() => {
    if (activeFilter === "All") {
      return galleryImages.filter((image) => image.isFeatured);
    }

    return galleryImages.filter(
      (image) => image.isFeatured && image.category === activeFilter
    );
  }, [activeFilter]);

  const lightboxImages = useMemo(() => {
    const combined = [...featuredImages, ...filteredImages];

    return combined.filter(
      (image, index, self) =>
        self.findIndex((item) => item.id === image.id) === index
    );
  }, [featuredImages, filteredImages]);

  const handleFilterChange = (filter: GalleryFilter) => {
    setActiveFilter(filter);
    setVisibleCount(INITIAL_VISIBLE_IMAGES);
  };

  const handleImageClick = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
  }, []);

  const handleLightboxNavigate = useCallback((image: GalleryImage) => {
    setSelectedImage(image);
  }, []);

  const handleLightboxClose = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((previous) => previous + LOAD_MORE_COUNT);
  };

  return (
    <>
      {/* Gallery Hero */}
      <section className="relative overflow-hidden bg-[#102B50]">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute -right-20 -top-32 h-96 w-96 rounded-full bg-[#D5A63C] blur-[120px]" />
          <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full bg-blue-400 blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 py-24 text-center sm:py-32 lg:px-8">
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#EAC66F]/30 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[2px] text-[#EAC66F]">
            <Camera size={15} />
            School Life in Pictures
          </span>

          <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-6xl">
            Every Picture Tells
            <span className="block text-[#EAC66F]">
              A Beautiful Story
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-8 text-white/70 sm:text-base">
            Explore our collection of memorable moments, learning
            experiences, activities and celebrations.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3 text-sm text-white/70">
            <span>Learning</span>
            <span className="text-[#EAC66F]">✦</span>
            <span>Growing</span>
            <span className="text-[#EAC66F]">✦</span>
            <span>Celebrating</span>
          </div>
        </div>
      </section>

      {/* Featured Gallery */}
      <FeaturedGallery
        images={featuredImages}
        onImageClick={handleImageClick}
      />

      {/* Image Gallery */}
      <section className="bg-[#F5F7FA] px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center">
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[3px] text-[#B18427]">
              <Sparkles size={15} />
              Explore Our Memories
            </span>

            <h2 className="text-3xl font-extrabold text-[#102B50] sm:text-4xl">
              Our School <span className="text-[#D5A63C]">Gallery</span>
            </h2>

            <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-500">
              A collection of moments that make every school day special.
            </p>
          </div>

          {/* Category Filters */}
          <div className="mb-12">
            <GalleryFilters
              activeFilter={activeFilter}
              onFilterChange={handleFilterChange}
            />
          </div>

          {/* Image Grid */}
          <GalleryGrid
            images={visibleImages}
            onImageClick={handleImageClick}
          />

          {/* Load More */}
          {visibleCount < filteredImages.length && (
            <div className="mt-12 text-center">
              <button
                type="button"
                onClick={handleLoadMore}
                className="inline-flex items-center gap-3 rounded-full bg-[#102B50] px-8 py-4 text-sm font-bold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#D5A63C] hover:shadow-xl"
              >
                Load More Photos
                <ArrowRight size={18} />
              </button>

              <p className="mt-4 text-xs text-slate-400">
                Showing {visibleImages.length} of {filteredImages.length} photos
              </p>
            </div>
          )}

          {filteredImages.length > 0 &&
            visibleCount >= filteredImages.length && (
              <p className="mt-12 text-center text-sm text-slate-400">
                You have explored all photos in this category.
              </p>
            )}
        </div>
      </section>

      {/* Video Gallery */}
      <VideoGallery />

      {/* Admissions CTA */}
      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#102B50] px-7 py-14 text-center sm:px-12 sm:py-20">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-[#D5A63C]/20 blur-3xl" />

          <div className="relative">
            <span className="text-xs font-bold uppercase tracking-[3px] text-[#EAC66F]">
              Be Part of Our Journey
            </span>

            <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
              Every Great Journey Begins With a
              <span className="text-[#EAC66F]"> First Step</span>
            </h2>

            <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/70">
              Discover an engaging learning environment for your child's
              educational journey from LKG to Class 8.
            </p>

            <Link
              href="/admissions"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-[#D5A63C] px-8 py-4 text-sm font-extrabold text-[#102B50] transition-all hover:bg-white"
            >
              Explore Admissions
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Image Lightbox */}
      <GalleryLightbox
        images={lightboxImages}
        selectedImage={selectedImage}
        onClose={handleLightboxClose}
        onNavigate={handleLightboxNavigate}
      />
    </>
  );
}
