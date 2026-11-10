
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  ShieldCheck,
  Target,
  Eye,
  Users,
  Trophy,
  HeartHandshake,
  GraduationCap,
  Lightbulb,
  Star,
  Flag,
  Compass,
  Sparkles,
  CheckCircle2,
  School,
} from "lucide-react";

import { homeContent } from "@/content/home";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Multi Purpose Power Sainik School, our educational vision, mission, core values and approach to student development from LKG to Class 8.",
  keywords: [
    "About Multi Purpose Power Sainik School",
    "School Mission and Vision",
    "School Core Values",
    "School Education",
    "LKG to Class 8",
  ],
  openGraph: {
    title: "About Us | Multi Purpose Power Sainik School",
    description:
      "Discover our school's vision, mission, educational approach and commitment to student development.",
    type: "website",
  },
};

const coreValues = [
  {
    icon: BookOpen,
    number: "01",
    title: "Knowledge",
    description:
      "Encouraging curiosity, conceptual understanding and a lifelong passion for learning.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Discipline",
    description:
      "Developing self-discipline, responsibility, respect and positive everyday habits.",
  },
  {
    icon: Users,
    number: "03",
    title: "Confidence",
    description:
      "Helping students develop communication skills, teamwork and self-belief.",
  },
  {
    icon: Trophy,
    number: "04",
    title: "Excellence",
    description:
      "Encouraging students to discover their potential and continuously improve.",
  },
];

const educationalApproach = [
  {
    icon: Lightbulb,
    title: "Concept-Based Learning",
    description:
      "Making learning meaningful through conceptual understanding, questions and exploration.",
  },
  {
    icon: Users,
    title: "Collaborative Learning",
    description:
      "Encouraging teamwork, communication and learning through shared experiences.",
  },
  {
    icon: Trophy,
    title: "Physical Development",
    description:
      "Supporting fitness, sports participation and healthy everyday habits.",
  },
  {
    icon: HeartHandshake,
    title: "Character Building",
    description:
      "Promoting respect, responsibility, honesty and positive social values.",
  },
];

const strengths = [
  {
    icon: GraduationCap,
    title: "Academic Focus",
    description:
      "A learning environment that encourages strong academic foundations.",
  },
  {
    icon: ShieldCheck,
    title: "Discipline & Values",
    description:
      "Emphasis on responsibility, respect and positive personal habits.",
  },
  {
    icon: Users,
    title: "All-Round Growth",
    description:
      "Opportunities to develop intellectual, social and personal skills.",
  },
  {
    icon: Star,
    title: "Student Confidence",
    description:
      "Encouraging participation, self-expression and leadership qualities.",
  },
];

const milestones = [
  {
    year: "Our Beginning",
    title: "The Foundation",
    description:
      "A vision to create a learning environment focused on education, discipline and character development.",
  },
  {
    year: "Our Approach",
    title: "Learning & Development",
    description:
      "A continued focus on academic learning, participation and the overall development of students.",
  },
  {
    year: "Our Direction",
    title: "Building Future Leaders",
    description:
      "Encouraging students to become confident, responsible and capable individuals.",
  },
];

const premiumCard =
  "group relative isolate overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-7 shadow-[0_8px_30px_rgba(16,43,80,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D5A63C] hover:shadow-[0_24px_55px_rgba(16,43,80,0.16)]";

const iconBox =
  "relative z-10 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#173B66] to-[#102B50] text-[#EAC66F] shadow-lg shadow-[#102B50]/20 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:from-[#EAC66F] group-hover:to-[#D5A63C] group-hover:text-[#102B50]";

const goldLine =
  "absolute bottom-0 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-[#D5A63C] to-[#EAC66F] transition-all duration-500 group-hover:w-full";

export default function AboutPage() {
  const introduction = homeContent.introduction;

  return (
    <>
      {/* 1. About Hero */}
      <section className="relative isolate overflow-hidden bg-[#102B50] px-5 py-24 sm:px-8 lg:py-32">
        <div className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#D5A63C]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#EAC66F]/30 bg-[#D5A63C]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#EAC66F]">
              <Sparkles size={15} />
              Discover Our School
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              About{" "}
              <span className="text-[#EAC66F]">
                Multi Purpose Power
              </span>{" "}
              Sainik School
            </h1>

            <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Discover an educational approach focused on knowledge,
              discipline, confidence and the all-round development of students.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-2 rounded-xl bg-[#D5A63C] px-7 py-4 font-bold text-[#102B50] transition hover:-translate-y-1 hover:bg-[#EAC66F]"
              >
                Explore Admissions
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="rounded-xl border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white/10"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. School Introduction */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-3xl bg-[#D5A63C]/20" />

            <img
              src={homeContent.images.schoolIntroduction.src}
              alt={homeContent.images.schoolIntroduction.alt}
              className="relative h-[350px] w-full rounded-3xl object-cover shadow-xl sm:h-[470px]"
            />

            <div className="absolute -bottom-6 right-4 rounded-2xl border border-slate-100 bg-white p-5 shadow-xl sm:right-8">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102B50] text-[#EAC66F]">
                  <School size={25} />
                </div>
                <div>
                  <p className="font-extrabold text-[#102B50]">
                    Learning With Purpose
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    Knowledge • Discipline • Growth
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B68A27]">
              {introduction.badge}
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#102B50] sm:text-4xl">
              {introduction.heading}
            </h2>

            <div className="mt-5 h-1.5 w-20 rounded-full bg-[#D5A63C]" />

            <p className="mt-7 text-base leading-8 text-slate-600">
              {introduction.description}
            </p>

            <p className="mt-4 text-base leading-8 text-slate-600">
              {introduction.secondaryDescription}
            </p>

            <ul className="mt-7 space-y-4">
              {introduction.highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-[#D5A63C]"
                    size={21}
                  />
                  <span className="text-sm font-semibold text-[#102B50]">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Our Story & Journey */}
      <section className="relative overflow-hidden bg-[#F5F7FA] px-5 py-20 sm:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B68A27]">
                Our Story
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#102B50] sm:text-4xl">
                A Vision to Inspire the Next Generation
              </h2>

              <div className="mt-5 h-1.5 w-20 rounded-full bg-[#D5A63C]" />

              <p className="mt-7 leading-8 text-slate-600">
                Every great educational journey begins with a vision.
                Multi Purpose Power Sainik School represents an approach
                to education that values academic understanding, discipline
                and personal development.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                We believe that education should help students understand
                the world, develop their abilities and build the confidence
                to take on future responsibilities.
              </p>

              <p className="mt-5 leading-8 text-slate-600">
                Our journey is centred on creating meaningful learning
                experiences that support students at every stage of growth.
              </p>
            </div>

            <div className="group relative overflow-hidden rounded-3xl shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
                alt="Students learning in a classroom"
                className="h-[420px] w-full object-cover transition duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102B50]/80 via-transparent to-transparent" />

              <div className="absolute bottom-7 left-7 right-7">
                <p className="text-sm font-bold uppercase tracking-widest text-[#EAC66F]">
                  Our Philosophy
                </p>
                <h3 className="mt-2 text-3xl font-extrabold text-white">
                  Learn. Grow. Lead.
                </h3>
              </div>
            </div>
          </div>

          <div className="mt-20">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B68A27]">
                Our Journey
              </span>
              <h3 className="mt-4 text-3xl font-extrabold text-[#102B50]">
                Growing With Purpose
              </h3>
            </div>

            <div className="grid gap-7 md:grid-cols-3">
              {milestones.map((item, index) => (
                <div key={item.title} className={premiumCard}>
                  <div className="pointer-events-none absolute right-4 top-4 text-6xl font-black leading-none text-[#102B50]/[0.06] transition duration-500 group-hover:text-[#D5A63C]/20 sm:text-7xl">
                    0{index + 1}
                  </div>

                  <div className={iconBox}>
                    {index === 0 ? (
                      <Flag size={27} />
                    ) : index === 1 ? (
                      <BookOpen size={27} />
                    ) : (
                      <Compass size={27} />
                    )}
                  </div>

                  <div className="relative z-10 mt-8">
                    <p className="text-xs font-extrabold uppercase tracking-widest text-[#B68A27]">
                      {item.year}
                    </p>

                    <h4 className="mt-3 text-xl font-extrabold text-[#102B50]">
                      {item.title}
                    </h4>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>

                  <div className={goldLine} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Mission & Vision */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B68A27]">
              Our Purpose
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102B50] sm:text-4xl">
              Our Mission & Vision
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Our educational philosophy is centred on helping every student
              grow with knowledge, confidence and positive values.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Mission */}
            <div className="group relative isolate overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#173B66] to-[#091D35] p-8 shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-10">
              <Target className="pointer-events-none absolute right-5 top-5 h-32 w-32 text-white/[0.10] transition duration-700 group-hover:rotate-12 group-hover:scale-110 sm:h-40 sm:w-40" />

              <div className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D5A63C] text-[#102B50] shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                  <Target size={32} />
                </div>

                <span className="mt-8 inline-block rounded-full border border-[#EAC66F]/30 bg-[#D5A63C]/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#EAC66F]">
                  Our Purpose
                </span>

                <h3 className="mt-5 text-3xl font-extrabold text-white">
                  Our Mission
                </h3>

                <p className="mt-5 text-sm leading-8 text-slate-300 sm:text-base">
                  To encourage meaningful learning, discipline, responsibility
                  and confidence while supporting the intellectual, social
                  and personal development of every student.
                </p>

                <div className="mt-8 h-1 w-16 rounded-full bg-[#D5A63C] transition-all duration-500 group-hover:w-28" />
              </div>
            </div>

            {/* Vision */}
            <div className="group relative isolate overflow-hidden rounded-[2rem] border border-[#D5A63C]/30 bg-gradient-to-br from-[#FFFDF7] to-[#F5EBD1] p-8 shadow-xl transition duration-500 hover:-translate-y-2 hover:shadow-2xl sm:p-10">
              <Eye className="pointer-events-none absolute right-5 top-5 h-32 w-32 text-[#102B50]/[0.10] transition duration-700 group-hover:-rotate-12 group-hover:scale-110 sm:h-40 sm:w-40" />

              <div className="relative z-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#102B50] text-[#EAC66F] shadow-lg transition duration-500 group-hover:-rotate-6 group-hover:scale-110">
                  <Eye size={32} />
                </div>

                <span className="mt-8 inline-block rounded-full border border-[#D5A63C]/40 bg-[#D5A63C]/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#8B691E]">
                  Our Direction
                </span>

                <h3 className="mt-5 text-3xl font-extrabold text-[#102B50]">
                  Our Vision
                </h3>

                <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                  To inspire students to become knowledgeable, confident,
                  responsible and value-driven individuals who are prepared
                  for future opportunities and challenges.
                </p>

                <div className="mt-8 h-1 w-16 rounded-full bg-[#D5A63C] transition-all duration-500 group-hover:w-28" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Core Values */}
      <section className="bg-[#F5F7FA] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B68A27]">
              What We Believe In
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-[#102B50] sm:text-4xl">
              Our Core Values
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              The values that guide our approach towards learning
              and student development.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {coreValues.map((value) => {
              const Icon = value.icon;

              return (
                <div key={value.title} className={premiumCard}>
                    <div className="pointer-events-none absolute right-5 top-5 z-0 select-none">
                        <span className="block text-5xl font-black leading-none tracking-tighter text-[#102B50]/10 transition-all duration-500 group-hover:text-[#D5A63C]/30 sm:text-6xl">
                            {value.number}
                        </span>
                    </div>

                  <div className={iconBox}>
                    <Icon size={29} strokeWidth={1.8} />
                  </div>

                  <div className="relative z-10 mt-8">
                    <p className="text-xs font-extrabold uppercase tracking-[0.2em] text-[#B68A27]">
                      VALUE {value.number}
                    </p>

                    <h3 className="mt-3 text-xl font-extrabold text-[#102B50] transition group-hover:text-[#B68A27]">
                      {value.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {value.description}
                    </p>
                  </div>

                  <div className={goldLine} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Educational Approach */}
      <section className="bg-white px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B68A27]">
                How We Encourage Learning
              </span>

              <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#102B50] sm:text-4xl">
                An Approach That Supports Every Student
              </h2>

              <div className="mt-5 h-1.5 w-20 rounded-full bg-[#D5A63C]" />

              <p className="mt-7 leading-8 text-slate-600">
                Learning is more than memorising information.
                We believe students should have opportunities to ask
                questions, participate, collaborate and develop skills
                that are useful beyond the classroom.
              </p>

              <Link
                href="/academics"
                className="mt-8 inline-flex items-center gap-2 font-bold text-[#102B50] transition hover:text-[#B68A27]"
              >
                Explore Academics
                <ArrowRight size={19} />
              </Link>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {educationalApproach.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition duration-500 hover:-translate-y-2 hover:border-[#D5A63C] hover:shadow-xl"
                  >
                    <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#D5A63C]/5 transition duration-500 group-hover:scale-150" />

                    <div className="relative z-10">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102B50] text-[#EAC66F] shadow-md transition duration-500 group-hover:rotate-6 group-hover:bg-[#D5A63C] group-hover:text-[#102B50]">
                        <Icon size={26} />
                      </div>

                      <h3 className="mt-6 text-lg font-extrabold text-[#102B50]">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {item.description}
                      </p>

                      <div className="mt-6 h-1 w-10 rounded-full bg-[#D5A63C] transition-all duration-500 group-hover:w-20" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Educational Strengths */}
      <section className="relative overflow-hidden bg-[#102B50] px-5 py-20 sm:px-8 lg:py-24">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#D5A63C]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <div className="mx-auto mb-14 max-w-2xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#EAC66F]">
              The Difference We Aim For
            </span>

            <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
              Our Educational Strengths
            </h2>

            <p className="mt-5 leading-8 text-slate-300">
              A learning-focused approach designed to support academic,
              personal and social development.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {strengths.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 to-white/[0.02] p-7 backdrop-blur-md transition duration-500 hover:-translate-y-2 hover:border-[#EAC66F]/60 hover:bg-white/[0.12] hover:shadow-2xl"
                >
                  <div className="absolute -right-8 -top-8 h-36 w-36 rounded-full border border-[#EAC66F]/10 transition duration-700 group-hover:scale-150 group-hover:border-[#EAC66F]/30" />

                  <div className="relative z-10">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#EAC66F] to-[#D5A63C] text-[#102B50] shadow-lg transition duration-500 group-hover:rotate-6 group-hover:scale-110">
                      <Icon size={27} />
                    </div>

                    <h3 className="mt-7 text-lg font-extrabold text-white">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-slate-300">
                      {item.description}
                    </p>

                    <div className="mt-6 h-1 w-10 rounded-full bg-[#EAC66F] transition-all duration-500 group-hover:w-20" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. About CTA */}
      <section className="relative overflow-hidden bg-[#F5F7FA] px-5 py-20 sm:px-8 lg:py-24">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#173B66] to-[#091D35] px-7 py-14 text-center shadow-2xl sm:px-14 sm:py-16">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D5A63C] text-[#102B50] shadow-lg">
            <HeartHandshake size={34} />
          </div>

          <span className="mt-7 inline-block text-xs font-bold uppercase tracking-[0.2em] text-[#EAC66F]">
            Begin Your Journey
          </span>

          <h2 className="mx-auto mt-4 max-w-3xl text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Let’s Build a Brighter Future Together
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">
            Explore the opportunities and learning journey at
            Multi Purpose Power Sainik School.
          </p>

          <div className="mt-9 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/admissions"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#D5A63C] px-7 py-4 font-bold text-[#102B50] transition hover:-translate-y-1 hover:bg-[#EAC66F]"
            >
              Enquire About Admissions
              <ArrowRight size={18} />
            </Link>

            <Link
              href="/contact"
              className="rounded-xl border border-white/40 px-7 py-4 font-bold text-white transition hover:bg-white/10"
            >
              Get In Touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
