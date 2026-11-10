
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Play,
  Video,
  X,
  Clapperboard,
  CalendarDays,
  Dumbbell,
  BookOpen,
} from "lucide-react";

import {
  galleryVideos,
  type GalleryVideo,
} from "@/content/galleryVideos";

const categories = [
  "All",
  "School Events",
  "Activities",
  "Classroom",
  "Sports",
] as const;

type Category = (typeof categories)[number];

function getYouTubeEmbedUrl(url: string) {
  try {
    const parsedUrl = new URL(url);
    let videoId = "";

    if (parsedUrl.hostname.includes("youtu.be")) {
      videoId = parsedUrl.pathname.slice(1);
    } else if (parsedUrl.hostname.includes("youtube.com")) {
      videoId =
        parsedUrl.searchParams.get("v") ||
        parsedUrl.pathname.split("/").filter(Boolean).pop() ||
        "";
    }

    if (!videoId) return "";

    return `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1`;
  } catch {
    return "";
  }
}

function getCategoryIcon(category: string) {
  switch (category) {
    case "School Events":
      return CalendarDays;
    case "Activities":
      return Clapperboard;
    case "Classroom":
      return BookOpen;
    case "Sports":
      return Dumbbell;
    default:
      return Video;
  }
}

export default function VideoGallery() {
  const [activeCategory, setActiveCategory] =
    useState<Category>("All");

  const [selectedVideo, setSelectedVideo] =
    useState<GalleryVideo | null>(null);

  const filteredVideos =
    activeCategory === "All"
      ? galleryVideos
      : galleryVideos.filter(
          (video) => video.category === activeCategory
        );

  useEffect(() => {
    if (!selectedVideo) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedVideo(null);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [selectedVideo]);

  const canPlayVideo = (video: GalleryVideo) =>
    Boolean(video.videoUrl.trim());

  return (
    <section
      id="video-gallery"
      className="bg-[#F5F7FA] px-5 py-20 sm:px-8 lg:px-12"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D5A63C]/30 bg-[#D5A63C]/10 px-4 py-2 text-sm font-semibold text-[#102B50]">
            <Video size={16} />
            School Videos
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-[#102B50] sm:text-4xl lg:text-5xl">
            Moments in Motion
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600 sm:text-lg">
            Explore memorable moments, school activities and
            learning experiences through our video gallery.
          </p>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#D5A63C]" />
        </div>

        {/* Category Filters */}
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => {
            const isActive = activeCategory === category;

            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={isActive}
                className={`rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#D5A63C] ${
                  isActive
                    ? "bg-[#102B50] text-white shadow-lg shadow-[#102B50]/20"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-[#D5A63C] hover:text-[#102B50]"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Video Cards */}
        {filteredVideos.length > 0 ? (
          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
            {filteredVideos.map((video) => {
              const Icon = getCategoryIcon(video.category);
              const playable = canPlayVideo(video);

              return (
                <article
                  key={video.id}
                  className="group overflow-hidden rounded-2xl border border-slate-200/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  {/* Thumbnail */}
                  <div className="relative aspect-video overflow-hidden bg-[#102B50]">
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#07172D]/80 via-[#07172D]/10 to-transparent" />

                    {/* Play Button */}
                    <button
                      type="button"
                      disabled={!playable}
                      onClick={() => setSelectedVideo(video)}
                      aria-label={
                        playable
                          ? `Play ${video.title}`
                          : `${video.title} video coming soon`
                      }
                      className={`absolute inset-0 flex items-center justify-center ${
                        playable
                          ? "cursor-pointer"
                          : "cursor-not-allowed"
                      }`}
                    >
                      <span
                        className={`flex h-16 w-16 items-center justify-center rounded-full border border-white/60 bg-[#D5A63C] text-[#102B50] shadow-xl transition-all duration-300 ${
                          playable
                            ? "group-hover:scale-110 group-hover:bg-white"
                            : "opacity-80"
                        }`}
                      >
                        <Play size={27} fill="currentColor" />
                      </span>
                    </button>

                    {/* Category */}
                    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-white/95 px-3 py-1.5 text-xs font-bold text-[#102B50] shadow">
                      <Icon size={14} />
                      {video.category}
                    </div>

                    {/* Video Status */}
                    <div className="absolute bottom-4 right-4 rounded-full bg-[#102B50]/85 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                      {playable
                        ? video.type.toUpperCase()
                        : "Coming Soon"}
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#102B50] transition-colors group-hover:text-[#B78620]">
                      {video.title}
                    </h3>

                    <p className="mt-3 min-h-12 text-sm leading-6 text-slate-600">
                      {video.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                      <span className="text-xs font-medium text-slate-500">
                        {video.duration || "School Gallery"}
                      </span>

                      <button
                        type="button"
                        disabled={!playable}
                        onClick={() => setSelectedVideo(video)}
                        className="inline-flex items-center gap-2 text-sm font-bold text-[#102B50] transition-colors hover:text-[#B78620] disabled:cursor-not-allowed disabled:opacity-50"
                      >
                        {playable ? "Watch Video" : "Coming Soon"}
                        <Play size={14} />
                      </button>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <Video className="mx-auto text-[#D5A63C]" size={42} />
            <h3 className="mt-4 text-xl font-bold text-[#102B50]">
              No Videos Available
            </h3>
            <p className="mt-2 text-sm text-slate-500">
              Videos in this category will be added soon.
            </p>
          </div>
        )}

        {/* Video Player Modal */}
        {selectedVideo && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
            aria-label={selectedVideo.title}
            onClick={() => setSelectedVideo(null)}
          >
            <div
              className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-[#102B50] shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 px-5 py-4 sm:px-7">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-[#EAC66F]">
                    School Video Gallery
                  </p>
                  <h3 className="mt-1 text-lg font-bold text-white sm:text-xl">
                    {selectedVideo.title}
                  </h3>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedVideo(null)}
                  aria-label="Close video"
                  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-[#EAC66F]"
                >
                  <X size={22} />
                </button>
              </div>

              <div className="aspect-video w-full bg-black">
                {selectedVideo.type === "mp4" ? (
                  <video
                    key={selectedVideo.videoUrl}
                    src={selectedVideo.videoUrl}
                    controls
                    autoPlay
                    playsInline
                    className="h-full w-full"
                  >
                    Your browser does not support HTML video.
                  </video>
                ) : (
                  <iframe
                    key={selectedVideo.videoUrl}
                    src={getYouTubeEmbedUrl(selectedVideo.videoUrl)}
                    title={selectedVideo.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                )}
              </div>

              <p className="px-5 py-4 text-sm leading-6 text-slate-300 sm:px-7">
                {selectedVideo.description}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
