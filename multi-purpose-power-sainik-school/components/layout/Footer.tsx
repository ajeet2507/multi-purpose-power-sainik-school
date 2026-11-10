
import Link from "next/link";
import {
  ArrowUpRight,
  GraduationCap,
  Home,
  BookOpen,
  Users,
  Camera,
  Phone,
  Target,
  ChevronRight,
} from "lucide-react";

const quickLinks = [
  { label: "Home", href: "/", icon: Home },
  { label: "About Us", href: "/about", icon: Users },
  { label: "Academics", href: "/academics", icon: BookOpen },
  { label: "Activities & Sports", href: "/activities", icon: Target },
  { label: "Admissions", href: "/admissions", icon: GraduationCap },
  { label: "Gallery", href: "/gallery", icon: Camera },
  { label: "Contact Us", href: "/contact", icon: Phone },
];

const focusAreas = [
  "Academic Development",
  "Discipline & Values",
  "Sports & Fitness",
  "Confidence & Leadership",
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#091D35] text-white">
      {/* Decorative background */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-[#D5A63C]/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-40 -left-32 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-8">
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr]">

          {/* School Identity */}
          <div>
            <Link
              href="/"
              aria-label="Multi Purpose Power Sainik School Home"
              className="group inline-flex items-center gap-3"
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EAC66F] to-[#D5A63C] text-[#102B50] shadow-lg transition-transform duration-300 group-hover:scale-105">
                <GraduationCap size={32} />
              </div>

              <div>
                <h2 className="text-lg font-extrabold leading-tight text-white">
                  Multi Purpose Power
                </h2>
                <p className="mt-1 text-sm font-semibold tracking-[0.15em] text-[#EAC66F]">
                  SAINIK SCHOOL
                </p>
              </div>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-300">
              Building knowledge, discipline, confidence and character
              to help students prepare for a brighter future.
            </p>

            <Link
              href="/admissions"
              className="mt-7 inline-flex items-center gap-2 rounded-xl bg-[#D5A63C] px-5 py-3 text-sm font-bold text-[#102B50] shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-[#EAC66F] hover:shadow-lg"
            >
              Explore Admissions
              <ArrowUpRight size={17} />
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold text-white">
              Explore Our Website
            </h3>

            <div className="mt-5 h-1 w-12 rounded-full bg-[#D5A63C]" />

            <ul className="mt-6 space-y-3">
              {quickLinks.map((link) => {
                const Icon = link.icon;

                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group inline-flex items-center gap-3 text-sm text-slate-300 transition-all duration-300 hover:translate-x-1 hover:text-[#EAC66F]"
                    >
                      <Icon
                        size={15}
                        className="shrink-0 text-[#D5A63C]"
                      />
                      {link.label}
                      <ChevronRight
                        size={13}
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Focus Areas */}
          <div>
            <h3 className="text-base font-bold text-white">
              Our Focus Areas
            </h3>

            <div className="mt-5 h-1 w-12 rounded-full bg-[#D5A63C]" />

            <p className="mt-6 text-sm leading-7 text-slate-300">
              We aim to create a positive learning environment that
              encourages students to grow academically and personally.
            </p>

            <ul className="mt-5 space-y-4">
              {focusAreas.map((area) => (
                <li
                  key={area}
                  className="flex items-center gap-3 text-sm text-slate-300"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#D5A63C]/15 text-xs font-bold text-[#EAC66F]">
                    ✓
                  </span>
                  {area}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-7 text-center sm:flex-row sm:text-left">
          <p className="text-xs leading-6 text-slate-400 sm:text-sm">
            2026 Multi Purpose Power Sainik School.
            All rights reserved.
          </p>

          <p className="text-xs font-medium tracking-wide text-slate-400 sm:text-sm">
            Knowledge
            <span className="mx-2 text-[#D5A63C]">•</span>
            Discipline
            <span className="mx-2 text-[#D5A63C]">•</span>
            Excellence
          </p>
        </div>
      </div>
    </footer>
  );
}
