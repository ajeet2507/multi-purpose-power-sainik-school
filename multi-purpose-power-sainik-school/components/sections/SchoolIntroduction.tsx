
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { homeContent } from "@/content/home";

export default function SchoolIntroduction() {
  const { introduction, images } = homeContent;

  return (
    <section className="overflow-hidden bg-white px-5 py-16 sm:px-8 sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-16">

        {/* School Image */}
        <div className="relative mx-auto w-full max-w-xl pb-5 pl-3 pr-2 pt-3 sm:pb-6 sm:pl-5 sm:pr-3 sm:pt-5 lg:max-w-none">

          {/* Decorative Frame */}
          <div className="absolute left-0 top-0 h-24 w-24 rounded-2xl border-2 border-[#D5A63C]/50 sm:h-32 sm:w-32" />

          {/* Main Image */}
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl">
            <Image
              src={images.schoolIntroduction.src}
              alt={images.schoolIntroduction.alt}
              fill
              priority={false}
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 85vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#102B50]/20 to-transparent" />
          </div>

          {/* School Identity Badge */}
          <div className="absolute bottom-0 right-0 z-10 rounded-xl border border-white/10 bg-[#102B50] px-4 py-3 shadow-xl sm:right-1 sm:px-7 sm:py-5">
            <p className="text-xs font-bold text-[#EAC66F] sm:text-sm">
              Multi Purpose Power
            </p>
            <p className="mt-1 text-base font-extrabold text-white sm:text-xl">
              Sainik School
            </p>
          </div>

          {/* Decorative Gold Element */}
          <div className="absolute -bottom-1 -left-1 -z-10 h-16 w-16 rounded-xl bg-[#D5A63C]/20 sm:h-20 sm:w-20" />
        </div>

        {/* Introduction Content */}
        <div className="pt-2 lg:pt-0">

          <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#B68A2D] sm:text-sm">
            {introduction.badge}
          </p>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-[#102B50] sm:text-4xl lg:text-[42px]">
            {introduction.heading}
          </h2>

          <div className="mt-5 h-1 w-20 rounded-full bg-[#D5A63C]" />

          <p className="mt-6 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {introduction.description}
          </p>

          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            {introduction.secondaryDescription}
          </p>

          {/* Highlights */}
          <ul className="mt-7 grid gap-4 sm:grid-cols-2 sm:gap-x-6 sm:gap-y-5">
            {introduction.highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-xl border border-slate-100 bg-[#F8FAFC] p-3.5 transition duration-300 hover:border-[#D5A63C]/40 hover:bg-[#FFFDF7]"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-[#B68A2D]"
                  aria-hidden="true"
                />

                <span className="text-sm font-semibold leading-6 text-slate-700">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <div className="mt-8 sm:mt-9">
            <Link
              href="/about"
              className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#102B50] px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#1B426F] hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D5A63C] sm:text-base"
            >
              {introduction.button}
              <ArrowRight
                size={17}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
