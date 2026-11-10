
import Image from "next/image";
import {
  BookOpen,
  ShieldCheck,
  Users,
  Trophy,
  ArrowUpRight,
} from "lucide-react";

const highlights = [
  {
    number: "01",
    title: "Quality Education",
    description:
      "Encouraging curiosity, knowledge and a strong foundation for academic learning.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80",
    alt: "Students learning in a classroom",
    icon: BookOpen,
    category: "ACADEMIC EXCELLENCE",
  },
  {
    number: "02",
    title: "Discipline & Values",
    description:
      "Promoting responsibility, self-discipline and positive values in everyday life.",
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=900&q=80",
    alt: "Students participating in group activities",
    icon: ShieldCheck,
    category: "STRONG VALUES",
  },
  {
    number: "03",
    title: "Student Development",
    description:
      "Supporting confidence, communication and the individual potential of every student.",
    image:
      "https://images.unsplash.com/photo-1577896851231-70ef18881754?w=900&q=80",
    alt: "Students participating in classroom activities",
    icon: Users,
    category: "ALL-ROUND GROWTH",
  },
  {
    number: "04",
    title: "Growth & Excellence",
    description:
      "Inspiring students to set goals, develop their abilities and strive for excellence.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=900&q=80",
    alt: "Students learning and growing together",
    icon: Trophy,
    category: "FUTURE READY",
  },
];

export default function SchoolHighlights() {
  return (
    <section className="relative overflow-hidden bg-[#F5F7FA] px-5 py-16 sm:px-8 sm:py-24 lg:py-28">

      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-32 top-0 h-96 w-96 rounded-full bg-[#EAC66F]/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-96 w-96 rounded-full bg-[#102B50]/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">

          <span className="inline-flex items-center gap-2 rounded-full border border-[#D5A63C]/40 bg-white px-5 py-2 text-xs font-extrabold uppercase tracking-[0.2em] text-[#B68A2D] shadow-sm">
            <span className="h-2 w-2 rounded-full bg-[#D5A63C]" />
            What Makes Us Different
          </span>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#102B50] sm:text-4xl lg:text-5xl">
            Building Strong Foundations for Success
          </h2>

          <div className="mx-auto mt-6 h-1.5 w-24 rounded-full bg-gradient-to-r from-[#D5A63C] to-[#EAC66F]" />

          <p className="mt-6 text-sm leading-8 text-slate-600 sm:text-base">
            We believe education is about more than academics. It is about
            developing knowledge, character, confidence and the ability to grow.
          </p>
        </div>

        {/* Premium Image Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">

          {highlights.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.number}
                className="group relative isolate flex min-h-[410px] flex-col overflow-hidden rounded-[1.75rem] border border-white/20 bg-[#102B50] shadow-[0_12px_35px_rgba(16,43,80,0.12)] transition-all duration-500 motion-reduce:transition-none hover:-translate-y-2 hover:shadow-[0_25px_50px_rgba(16,43,80,0.25)] sm:min-h-[430px]"
              >

                {/* Background Image */}
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="z-0 object-cover transition-transform duration-700 motion-reduce:transition-none group-hover:scale-105"
                />

                {/* Multi-layer Overlay */}
                <div className="absolute inset-0 z-10 bg-gradient-to-b from-[#081B32]/55 via-[#102B50]/30 to-[#081B32]/95" />

                {/* Card Content */}
                <div className="relative z-20 flex flex-1 flex-col justify-between p-5 sm:p-6">

                  {/* Top Row */}
                  <div className="flex items-start justify-between">

                    <span
                      aria-hidden="true"
                      className="text-5xl font-black tracking-tight text-white/45 transition-colors duration-500 group-hover:text-[#EAC66F]"
                    >
                      {item.number}
                    </span>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#EAC66F]/70 bg-[#102B50]/75 text-[#EAC66F] shadow-xl backdrop-blur-md transition-all duration-500 group-hover:rotate-3 group-hover:scale-105 group-hover:bg-[#D5A63C] group-hover:text-[#102B50] motion-reduce:transition-none">
                      <Icon size={27} strokeWidth={2} aria-hidden="true" />
                    </div>
                  </div>

                  {/* Bottom Content */}
                  <div>

                    <span className="inline-block max-w-full rounded-full border border-[#EAC66F]/40 bg-[#102B50]/70 px-3 py-1.5 text-[10px] font-extrabold tracking-[0.12em] text-[#EAC66F] backdrop-blur-sm">
                      {item.category}
                    </span>

                    <div className="mb-4 mt-5 h-1 w-12 rounded-full bg-[#D5A63C] transition-all duration-500 group-hover:w-20" />

                    <h3 className="text-xl font-extrabold leading-tight text-white sm:text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-100">
                      {item.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4">

                      <span className="text-xs font-bold uppercase tracking-wider text-white/90">
                        Our Commitment
                      </span>

                      <div
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#EAC66F]/60 text-[#EAC66F] transition-all duration-300 group-hover:border-[#D5A63C] group-hover:bg-[#D5A63C] group-hover:text-[#102B50]"
                        aria-hidden="true"
                      >
                        <ArrowUpRight size={19} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Gold Border Animation */}
                <div className="absolute bottom-0 left-0 z-30 h-1.5 w-0 bg-gradient-to-r from-[#D5A63C] to-[#EAC66F] transition-all duration-500 motion-reduce:transition-none group-hover:w-full" />

                {/* Hover Border */}
                <div className="pointer-events-none absolute inset-0 z-30 rounded-[1.75rem] border-2 border-transparent transition-colors duration-500 group-hover:border-[#EAC66F]/60 motion-reduce:transition-none" />

              </article>
            );
          })}

        </div>
      </div>
    </section>
  );
}
