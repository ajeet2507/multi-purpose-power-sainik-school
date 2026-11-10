
import Image from "next/image";
import {
  BookOpen,
  ShieldCheck,
  Sprout,
  Users,
  CheckCircle2,
  ArrowUpRight,
} from "lucide-react";
import { homeContent } from "@/content/home";

const icons = [BookOpen, ShieldCheck, Sprout, Users];

const coreValues = [
  "Knowledge",
  "Discipline",
  "Confidence",
  "Character",
];

export default function WhyChooseSection() {
  const section = homeContent.whyChoose;

  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] px-5 py-16 sm:px-8 sm:py-24 lg:py-28">

      {/* Background Decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#EAC66F]/15 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-80 w-80 rounded-full bg-[#102B50]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#D5A63C]/40 bg-white px-4 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#B68A2D] shadow-sm sm:px-5">
            <span
              aria-hidden="true"
              className="h-2 w-2 rounded-full bg-[#D5A63C]"
            />
            {section.badge}
          </span>

          <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[#102B50] sm:mt-6 sm:text-4xl lg:text-5xl">
            {section.heading}
          </h2>

          <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#D5A63C] to-[#EAC66F] sm:mt-6 sm:w-24" />

          <p className="mt-5 text-sm leading-8 text-slate-600 sm:mt-6 sm:text-base">
            {section.description}
          </p>
        </div>

        {/* Main Layout */}
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* Left Image */}
          <div className="relative mx-auto w-full max-w-xl pb-6 pl-3 sm:pl-5">

            {/* Decorative Frame */}
            <div
              aria-hidden="true"
              className="absolute left-0 top-0 h-28 w-28 rounded-[1.5rem] border-2 border-[#D5A63C]/60 sm:h-40 sm:w-40"
            />

            {/* Main Image */}
            <div className="relative h-[320px] overflow-hidden rounded-[1.5rem] shadow-2xl sm:h-[480px] sm:rounded-[2rem] lg:h-[520px]">

              <Image
                src={section.image.src}
                alt={section.image.alt}
                fill
                loading="lazy"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 50vw"
                className="object-cover transition-transform duration-700 hover:scale-105 motion-reduce:transition-none"
              />

              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-[#081B32]/85 via-[#102B50]/10 to-transparent"
              />

              {/* Image Caption */}
              <div className="absolute bottom-6 left-5 right-5 sm:bottom-8 sm:left-8 sm:right-8">

                <p className="text-2xl font-extrabold text-white sm:text-3xl">
                  Learn. Grow. Lead.
                </p>

                <p className="mt-2 text-xs leading-6 text-slate-200 sm:text-sm">
                  Building knowledge, confidence and character
                </p>
              </div>
            </div>

            {/* Philosophy Card */}
            <div className="absolute bottom-0 right-0 z-10 max-w-[85%] rounded-2xl border border-[#EAC66F]/50 bg-white px-4 py-3 shadow-xl sm:right-1 sm:px-6 sm:py-4">

              <p className="text-[10px] font-bold uppercase tracking-widest text-[#B68A2D] sm:text-xs">
                Our Philosophy
              </p>

              <p className="mt-1 text-base font-extrabold text-[#102B50] sm:text-lg">
                Excellence in Growth
              </p>
            </div>

            {/* Decorative Gold Element */}
            <div
              aria-hidden="true"
              className="absolute -bottom-1 -right-1 -z-10 h-20 w-20 rounded-xl bg-[#D5A63C]/20 sm:h-28 sm:w-28"
            />
          </div>

          {/* Right Feature Cards */}
          <div className="grid gap-5 sm:grid-cols-2">

            {section.features.map((feature, index) => {
              const Icon = icons[index % icons.length];

              return (
                <article
                  key={feature.title}
                  className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_8px_30px_rgba(16,43,80,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D5A63C]/70 hover:shadow-[0_18px_40px_rgba(16,43,80,0.13)] motion-reduce:transform-none motion-reduce:transition-none sm:p-6 lg:p-7"
                >

                  {/* Decorative Number */}
                  <span
                    aria-hidden="true"
                    className="absolute right-5 top-4 text-5xl font-black text-[#102B50]/[0.045] transition-colors duration-300 group-hover:text-[#D5A63C]/20"
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <div className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#102B50] to-[#1D4775] text-[#EAC66F] shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 motion-reduce:transform-none motion-reduce:transition-none sm:h-16 sm:w-16">

                    <Icon
                      size={27}
                      strokeWidth={1.8}
                      aria-hidden="true"
                    />
                  </div>

                  {/* Text */}
                  <h3 className="mt-5 text-lg font-extrabold leading-snug text-[#102B50] transition-colors group-hover:text-[#B68A2D] sm:mt-6">
                    {feature.title}
                  </h3>

                  <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                    {feature.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="mt-6 flex items-center justify-between">

                    <div className="h-1 w-12 rounded-full bg-[#D5A63C] transition-all duration-500 group-hover:w-20 motion-reduce:transition-none" />

                    <ArrowUpRight
                      size={20}
                      aria-hidden="true"
                      className="text-[#B68A2D] opacity-60 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:opacity-100 motion-reduce:transition-none"
                    />
                  </div>

                  {/* Bottom Gold Border */}
                  <div
                    aria-hidden="true"
                    className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-[#D5A63C] to-[#EAC66F] transition-all duration-500 group-hover:w-full motion-reduce:transition-none"
                  />

                </article>
              );
            })}

          </div>
        </div>

        {/* Bottom Values Strip */}
        <div className="mt-16 rounded-2xl bg-[#102B50] px-5 py-7 shadow-xl sm:mt-20 sm:px-10 sm:py-9">

          <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-5 text-center sm:gap-x-10">

            {coreValues.map((value) => (
              <div
                key={value}
                className="flex items-center gap-2"
              >
                <CheckCircle2
                  size={19}
                  className="shrink-0 text-[#EAC66F]"
                  aria-hidden="true"
                />

                <span className="text-sm font-bold tracking-wide text-white sm:text-base">
                  {value}
                </span>
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}
