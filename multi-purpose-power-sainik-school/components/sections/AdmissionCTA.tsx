
import Link from "next/link";
import {
  ArrowRight,
  GraduationCap,
  Phone,
  Sparkles,
} from "lucide-react";
import { homeContent } from "@/content/home";

export default function AdmissionCTA() {
  const content = homeContent.admissionCTA;

  return (
    <section className="relative isolate overflow-hidden bg-[#102B50] px-5 py-16 sm:px-8 sm:py-24 lg:py-28">

      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#D5A63C]/15 blur-3xl sm:h-96 sm:w-96"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 -left-32 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl sm:h-96 sm:w-96"
      />

      <div className="relative mx-auto max-w-7xl">

        <div className="relative overflow-hidden rounded-[1.5rem] border border-[#EAC66F]/30 bg-gradient-to-br from-[#173B66] to-[#0B203C] px-5 py-10 shadow-2xl sm:rounded-[2rem] sm:px-10 sm:py-14 lg:px-16 lg:py-16">

          {/* Decorative Circles */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-[#EAC66F]/15 sm:h-80 sm:w-80"
          />

          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 -top-6 h-40 w-40 rounded-full border border-[#EAC66F]/10 sm:h-60 sm:w-60"
          />

          <div className="relative grid items-center gap-10 lg:grid-cols-[1fr_auto] lg:gap-12">

            {/* Content */}
            <div className="max-w-3xl text-center lg:text-left">

              {/* Badge */}
              <span className="inline-flex items-center gap-2 rounded-full border border-[#EAC66F]/30 bg-[#D5A63C]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#EAC66F] sm:text-xs">
                <Sparkles size={15} aria-hidden="true" />
                {content.badge}
              </span>

              {/* Heading */}
              <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-white sm:mt-6 sm:text-4xl lg:text-5xl">
                {content.heading}
              </h2>

              <div className="mx-auto mt-5 h-1.5 w-20 rounded-full bg-gradient-to-r from-[#D5A63C] to-[#EAC66F] sm:mt-6 lg:mx-0" />

              {/* Description */}
              <p className="mt-5 text-sm leading-8 text-slate-200 sm:mt-6 sm:text-base">
                {content.description}
              </p>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-col justify-center gap-4 sm:mt-9 sm:flex-row lg:justify-start">

                <Link
                  href="/admissions"
                  className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-[#D5A63C] px-7 py-3.5 text-sm font-extrabold text-[#102B50] shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#EAC66F] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EAC66F] motion-reduce:transform-none motion-reduce:transition-none sm:text-base"
                >
                  {content.primaryButton}

                  <ArrowRight
                    size={19}
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none"
                  />
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl border border-white/40 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-[#EAC66F] hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#EAC66F] motion-reduce:transition-none sm:text-base"
                >
                  <Phone size={18} aria-hidden="true" />
                  {content.secondaryButton}
                </Link>

              </div>

              {/* Note */}
              <p className="mt-5 text-xs leading-6 text-slate-300 sm:mt-6 sm:text-sm">
                {content.note}
              </p>
            </div>

            {/* Decorative Icon Panel */}
            <div
              aria-hidden="true"
              className="mx-auto flex h-32 w-32 shrink-0 items-center justify-center rounded-[1.75rem] border border-[#EAC66F]/30 bg-[#D5A63C]/10 shadow-2xl sm:h-44 sm:w-44 lg:h-48 lg:w-48"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-[1.25rem] bg-gradient-to-br from-[#EAC66F] to-[#D5A63C] text-[#102B50] shadow-xl sm:h-28 sm:w-28 lg:h-32 lg:w-32">
                <GraduationCap
                  size={65}
                  strokeWidth={1.5}
                  className="h-12 w-12 sm:h-16 sm:w-16"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
