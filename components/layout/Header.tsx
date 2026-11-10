
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, GraduationCap, ChevronRight } from "lucide-react";

const navigation = [
  { label: "Home", href: "/" },
  //{ label: "Prepration", href: "/contact" },
  { label: "About Us", href: "/about" },
  { label: "Academics", href: "/academics" },
  { label: "Activities", href: "/activities" },
  { label: "Admissions", href: "/admissions" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 shadow-sm backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">

        {/* School Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          aria-label="Multi Purpose Power Sainik School - Home"
          className="group flex min-w-0 shrink items-center gap-3"
        >
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#102B50] text-[#EAC66F] shadow-md transition-transform duration-300 group-hover:scale-105">
            <GraduationCap size={29} strokeWidth={1.8} />
          </div>

          <div className="min-w-0">
            <p className="truncate text-sm font-extrabold leading-tight text-[#102B50] sm:text-base">
              Multi Purpose Power
            </p>
            <p className="mt-1 text-[10px] font-extrabold tracking-[2px] text-[#B68A2D] sm:text-xs">
              SAINIK SCHOOL
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-4 xl:flex"
        >
          {navigation.map((item) => {
            const active = isActive(item.href);

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={`relative whitespace-nowrap py-2 text-[13px] font-bold transition-colors duration-300 ${
                  active
                    ? "text-[#B68A2D]"
                    : "text-slate-600 hover:text-[#B68A2D]"
                }`}
              >
                {item.label}

                <span
                  className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-[#D5A63C] transition-all duration-300 ${
                    active ? "w-full" : "w-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA and Mobile Menu */}
        <div className="flex shrink-0 items-center gap-2">
          <Link
            href="/contact"
            className="hidden items-center gap-2 rounded-xl bg-[#102B50] px-4 py-3 text-xs font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1B426F] hover:shadow-lg sm:inline-flex"
          >
            Admission Enquiry
            <ChevronRight size={15} />
          </Link>

          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="rounded-xl border border-slate-200 p-2.5 text-[#102B50] transition-colors hover:border-[#D5A63C] hover:bg-slate-50 xl:hidden"
          >
            {isOpen ? <X size={23} /> : <Menu size={23} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-slate-100 bg-white transition-all duration-300 xl:hidden ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto max-w-7xl px-4 py-4 sm:px-6"
        >
          <div className="grid gap-1">
            {navigation.map((item) => {
              const active = isActive(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setIsOpen(false)}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold transition-all ${
                    active
                      ? "bg-[#102B50] text-white"
                      : "text-slate-600 hover:bg-slate-50 hover:text-[#B68A2D]"
                  }`}
                >
                  {item.label}
                  <ChevronRight
                    size={17}
                    className={active ? "text-[#EAC66F]" : "text-slate-400"}
                  />
                </Link>
              );
            })}
          </div>

          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#D5A63C] px-5 py-4 text-sm font-extrabold text-[#102B50] transition-colors hover:bg-[#EAC66F]"
          >
            Admission Enquiry
            <ChevronRight size={17} />
          </Link>
        </nav>
      </div>
    </header>
  );
}
