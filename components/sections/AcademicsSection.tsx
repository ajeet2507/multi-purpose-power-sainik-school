
import Image from "next/image";
import Link from "next/link";
import {
  BookOpen,
  Lightbulb,
  GraduationCap,
  ArrowRight,
} from "lucide-react";
import { homeContent } from "@/content/home";

const icons = [BookOpen, Lightbulb, GraduationCap];

export default function AcademicsSection() {
  const academics = homeContent.academics;

  return (
    <section className="overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-24 lg:py-28">
      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div>

            <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B68A2D] sm:text-sm">
              {academics.badge}
            </p>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#102B50] sm:text-4xl lg:text-5xl">
              {academics.heading}
            </h2>

            <div className="mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#D5A63C] to-[#EAC66F]" />

            <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
              {academics.description}
            </p>

            {/* Academic Programs */}
            <div className="mt-9 space-y-4">
              {academics.programs.map((program, index) => {
                const Icon = icons[index % icons.length];

                return (
                  <article
                    key={program.title}
                    className="group flex gap-4 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-4 transition-all duration-300 hover:border-[#D5A63C]/50 hover:bg-[#FFFDF7] hover:shadow-lg sm:p-5"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#102B50] text-[#EAC66F] shadow-md transition-all duration-300 group-hover:rotate-3 group-hover:bg-[#D5A63C] group-hover:text-[#102B50]">
                      <Icon size={24} aria-hidden="true" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="text-base font-bold text-[#102B50] sm:text-lg">
                        {program.title}
                      </h3>

                      <p className="mt-2 text-sm leading-7 text-slate-600">
                        {program.description}
                      </p>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* CTA */}
            <Link
              href="/academics"
              className="group mt-9 inline-flex min-h-12 items-center justify-center gap-3 rounded-lg bg-[#102B50] px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#183D6B] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D5A63C] sm:text-base"
            >
              {academics.button}
              <ArrowRight
                size={19}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative mx-auto w-full max-w-xl pb-6 pl-3 sm:pl-5 lg:max-w-none">

            {/* Decorative Frame */}
            <div className="absolute left-0 top-0 h-24 w-24 rounded-2xl border-2 border-[#D5A63C]/50 sm:h-32 sm:w-32" />

            {/* Main Image */}
            <div className="relative min-h-[300px] overflow-hidden rounded-2xl shadow-xl sm:min-h-[450px] lg:min-h-[520px]">
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80"
                alt="Students learning in a classroom"
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102B50]/50 via-transparent to-transparent" />

              {/* Image Label */}
              <div className="absolute left-5 top-5 rounded-full border border-white/30 bg-[#102B50]/70 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                LKG to Class 8
              </div>
            </div>

            {/* Floating Information Card */}
            <div className="absolute bottom-0 right-0 z-10 max-w-[85%] rounded-xl border-l-4 border-[#D5A63C] bg-white p-4 shadow-xl sm:right-1 sm:max-w-[90%] sm:p-6">
              <p className="text-xl font-extrabold text-[#102B50] sm:text-2xl">
                Learn & Grow
              </p>

              <p className="mt-1 text-xs leading-6 text-slate-600 sm:text-sm">
                Building knowledge and confidence
              </p>
            </div>

            {/* Decorative Gold Element */}
            <div className="absolute -bottom-1 -right-1 -z-10 h-20 w-20 rounded-xl bg-[#D5A63C]/20 sm:h-28 sm:w-28" />
          </div>

        </div>
      </div>
    </section>
  );
}
