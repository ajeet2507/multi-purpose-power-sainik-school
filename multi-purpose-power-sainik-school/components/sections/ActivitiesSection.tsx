
import Image from "next/image";
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Dumbbell,
  Palette,
  Users,
} from "lucide-react";
import { homeContent } from "@/content/home";

const icons = [Dumbbell, Palette, Users];

export default function ActivitiesSection() {
  const activities = homeContent.activities;

  return (
    <section className="relative overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-24 lg:py-28">

      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-20 h-80 w-80 rounded-full bg-[#EAC66F]/10 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-[#102B50]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#D5A63C]/40 bg-[#F5F7FA] px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#B68A2D] sm:px-5">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[#D5A63C]"
            />
            {activities.badge}
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#102B50] sm:mt-6 sm:text-4xl lg:text-5xl">
            {activities.heading}
          </h2>

          <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#D5A63C] to-[#EAC66F] sm:mt-6 sm:w-24" />

          <p className="mt-5 text-sm leading-8 text-slate-600 sm:mt-6 sm:text-base">
            {activities.description}
          </p>
        </div>

        {/* Activity Cards */}
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">

          {activities.items.map((item, index) => {
            const Icon = icons[index % icons.length];

            return (
              <article
                key={item.number}
                className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_35px_rgba(16,43,80,0.07)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D5A63C]/60 hover:shadow-[0_25px_55px_rgba(16,43,80,0.14)] motion-reduce:transform-none motion-reduce:transition-none"
              >

                {/* Image Area */}
                <div className="relative h-[270px] overflow-hidden sm:h-[300px] lg:h-[320px]">

                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    loading="lazy"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110 motion-reduce:transform-none motion-reduce:transition-none"
                  />

                  {/* Image Gradient */}
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-[#081B32]/95 via-[#102B50]/20 to-transparent"
                  />

                  {/* Top Labels */}
                  <div className="absolute left-4 right-4 top-4 flex items-center justify-between sm:left-5 sm:right-5 sm:top-5">

                    <span className="rounded-full border border-white/30 bg-[#102B50]/70 px-3 py-2 text-[10px] font-bold tracking-widest text-white backdrop-blur-md sm:px-4 sm:text-xs">
                      ACTIVITY {item.number}
                    </span>

                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#EAC66F]/60 bg-[#D5A63C] text-[#102B50] shadow-xl transition-all duration-500 group-hover:rotate-12 group-hover:scale-110 motion-reduce:transform-none motion-reduce:transition-none sm:h-12 sm:w-12">
                      <Icon size={23} strokeWidth={2} aria-hidden="true" />
                    </div>
                  </div>

                  {/* Image Bottom Content */}
                  <div className="absolute bottom-5 left-5 right-5 sm:bottom-6 sm:left-6 sm:right-6">

                    <div className="mb-3 h-1 w-12 rounded-full bg-[#EAC66F] transition-all duration-500 group-hover:w-20 motion-reduce:transition-none" />

                    <h3 className="text-2xl font-extrabold text-white sm:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-xs font-medium text-slate-200 sm:text-sm">
                      Explore · Participate · Grow
                    </p>
                  </div>
                </div>

                {/* Content Area */}
                <div className="relative flex flex-1 flex-col p-5 sm:p-7">

                  <p className="text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>

                  <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-5 mt-6">

                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#B68A2D] sm:text-xs">
                      Student Development
                    </span>

                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F5F7FA] text-[#102B50] transition-all duration-300 group-hover:bg-[#102B50] group-hover:text-[#EAC66F]">
                      <ArrowUpRight
                        size={20}
                        aria-hidden="true"
                        className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 motion-reduce:transition-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Animated Bottom Border */}
                <div
                  aria-hidden="true"
                  className="absolute bottom-0 left-0 h-1.5 w-0 bg-gradient-to-r from-[#D5A63C] to-[#EAC66F] transition-all duration-500 group-hover:w-full motion-reduce:transition-none"
                />

              </article>
            );
          })}

        </div>

        {/* Bottom Message and CTA */}
        <div className="mt-12 flex flex-col items-center gap-6 text-center sm:mt-14">

          <p className="max-w-2xl text-sm font-semibold leading-7 text-[#102B50] sm:text-base">
            Every activity is an opportunity to discover, learn and grow.
          </p>

          <Link
            href="/activities"
            className="group inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#102B50] px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#183D6B] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D5A63C] sm:text-base"
          >
            Explore All Activities
            <ArrowRight
              size={19}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </Link>

        </div>

      </div>
    </section>
  );
}
