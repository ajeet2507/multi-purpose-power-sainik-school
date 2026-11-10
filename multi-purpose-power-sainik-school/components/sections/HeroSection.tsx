
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Pause, Play } from "lucide-react";
import { homeContent } from "@/content/home";

export default function HeroSection() {
  const { hero, images } = homeContent;
  const slides = images.heroSlides;

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Respect visitor's motion preferences
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const updateMotionPreference = () => {
      setPrefersReducedMotion(mediaQuery.matches);
    };

    updateMotionPreference();

    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => {
      mediaQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  // Automatic image slider
  useEffect(() => {
    if (
      slides.length <= 1 ||
      isPaused ||
      prefersReducedMotion
    ) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4000);

    return () => window.clearInterval(interval);
  }, [slides.length, isPaused, prefersReducedMotion]);

  const activeSlide = slides[activeIndex];

  return (
    <section className="relative isolate overflow-hidden bg-[#102B50]">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 -top-40 h-96 w-96 rounded-full bg-[#D5A63C]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-5 py-12 sm:px-8 sm:py-16 lg:min-h-[650px] lg:grid-cols-2 lg:gap-14 lg:py-20">

        {/* Hero Content */}
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#D5A63C]/40 bg-[#D5A63C]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#EAC66F] sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[#EAC66F]" />
            {hero.badge}
          </span>

          <h1 className="mt-6 text-3xl font-extrabold leading-[1.2] tracking-tight text-white sm:text-4xl md:text-5xl lg:mt-7 lg:text-6xl">
            Building
            <span className="block text-[#EAC66F]">
              Knowledge & Character
            </span>
            For a Brighter Future
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-slate-200 sm:mt-6 sm:text-base sm:leading-8 lg:mx-0 lg:text-lg">
            {hero.description}
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row lg:justify-start">

            <Link
              href="/admissions"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-[#D5A63C] px-7 py-3.5 text-sm font-bold text-[#102B50] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-[#EAC66F] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EAC66F] sm:text-base"
            >
              {hero.primaryButton}
              <span className="ml-2" aria-hidden="true">→</span>
            </Link>

            <Link
              href="/about"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-white/40 px-7 py-3.5 text-sm font-semibold text-white transition duration-300 hover:border-white hover:bg-white hover:text-[#102B50] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-base"
            >
              {hero.secondaryButton}
            </Link>
          </div>

          <p className="mt-6 text-xs font-medium tracking-wide text-slate-300 sm:text-sm">
            Knowledge <span className="mx-2 text-[#D5A63C]">•</span>
            Discipline <span className="mx-2 text-[#D5A63C]">•</span>
            Excellence
          </p>
        </div>

        {/* Hero Image Slider */}
        <div className="relative mx-auto w-full max-w-xl lg:max-w-none">

          <div className="absolute -inset-3 rounded-[2rem] border border-[#D5A63C]/20 sm:-inset-4" />

          <div
            className="relative aspect-[4/3] min-h-[250px] overflow-hidden rounded-2xl border border-white/20 shadow-2xl sm:aspect-[5/4] sm:min-h-[380px] lg:aspect-[4/4] lg:min-h-[460px]"
            role="region"
            aria-roledescription="carousel"
            aria-label="School image gallery"
          >

            {/* Slides */}
            {slides.map((slide, index) => (
              <div
                key={slide.src}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out motion-reduce:transition-none ${
                  activeIndex === index
                    ? "z-10 opacity-100"
                    : "z-0 opacity-0"
                }`}
                aria-hidden={activeIndex !== index}
              >
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  loading={index === 0 ? "eager" : "lazy"}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 50vw"
                  className="object-cover"
                />
              </div>
            ))}

            {/* Image Overlay */}
            <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-t from-[#102B50]/95 via-[#102B50]/15 to-transparent" />

            {/* Slide Counter */}
            <div className="absolute right-4 top-4 z-30 rounded-full border border-white/30 bg-[#102B50]/60 px-4 py-2 text-xs font-bold tracking-widest text-white backdrop-blur-md">
              {String(activeIndex + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
            </div>

            {/* School Identity */}
            <div className="absolute inset-x-0 bottom-0 z-30 p-5 sm:p-8">

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#EAC66F] sm:text-sm">
                {hero.identity}
              </p>

              <h2 className="mt-2 text-2xl font-extrabold text-white sm:text-3xl md:text-4xl">
                {hero.schoolType}
              </h2>

              <div className="mt-4 h-1 w-16 rounded-full bg-[#D5A63C]" />

              <div className="mt-3 flex flex-wrap items-center justify-between gap-4">

                <p className="text-xs font-medium tracking-wide text-slate-200 sm:text-sm">
                  {hero.tagline}
                </p>

                {/* Slider Controls */}
                <div className="flex items-center gap-3">

                  {slides.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => setIsPaused((previous) => !previous)}
                        aria-label={isPaused ? "Play image slider" : "Pause image slider"}
                        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-[#102B50]/60 text-white backdrop-blur-md transition hover:border-[#EAC66F] hover:text-[#EAC66F] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#EAC66F]"
                      >
                        {isPaused ? <Play size={15} /> : <Pause size={15} />}
                      </button>

                      {/* Slide Indicators */}
                      <div className="flex items-center gap-2">
                        {slides.map((slide, index) => (
                          <button
                            key={slide.src}
                            type="button"
                            onClick={() => {
                              setActiveIndex(index);
                              setIsPaused(true);
                            }}
                            aria-label={`Show image ${index + 1}`}
                            aria-current={activeIndex === index ? "true" : undefined}
                            className={`h-2.5 rounded-full transition-all duration-300 ${
                              activeIndex === index
                                ? "w-8 bg-[#EAC66F]"
                                : "w-2.5 bg-white/60 hover:bg-white"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Decorative Gold Element */}
          <div className="absolute -bottom-3 -right-3 -z-10 h-20 w-20 rounded-2xl bg-[#D5A63C] sm:-bottom-5 sm:-right-5 sm:h-28 sm:w-28" />
        </div>
      </div>
    </section>
  );
}
