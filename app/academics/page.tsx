
import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Brain,
  Calculator,
  CheckCircle2,
  ClipboardCheck,
  Code2,
  GraduationCap,
  HeartHandshake,
  Languages,
  Lightbulb,
  Microscope,
  Palette,
  PencilRuler,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Academics | LKG to Class 8",
  description:
    "Explore the academic programmes at Multi Purpose Power Sainik School, covering LKG to Class 8, with a focus on foundational learning, subject knowledge, creativity and student development.",
  keywords: [
    "Multi Purpose Power Sainik School Academics",
    "School Academics LKG to Class 8",
    "Primary School Education",
    "Middle School Education",
    "School Learning Programmes",
    "School Subjects and Activities",
  ],
  openGraph: {
    title: "Academics | Multi Purpose Power Sainik School",
    description:
      "Discover learning stages, academic subjects, teaching methodology and student development from LKG to Class 8.",
    type: "website",
  },
};

const learningStages = [
  {
    number: "01",
    level: "Pre-Primary",
    classes: "LKG",
    title: "Learning Through Discovery",
    description:
      "A joyful introduction to learning through stories, activities, play and creative experiences.",
    focus: [
      "Alphabet and phonics readiness",
      "Numbers and basic counting",
      "Colours, shapes and patterns",
      "Creative activities and communication",
    ],
    image:
      "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9",
    imageAlt: "Young children enjoying classroom activities",
    icon: Star,
  },
  {
    number: "02",
    level: "Primary School",
    classes: "Classes 1–5",
    title: "Building Strong Foundations",
    description:
      "Developing essential academic skills, curiosity and confidence through structured and engaging learning.",
    focus: [
      "Reading, writing and language skills",
      "Mathematical understanding",
      "Environmental awareness",
      "Creative and computer-based learning",
    ],
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7",
    imageAlt: "Primary school students learning in a classroom",
    icon: BookOpen,
  },
  {
    number: "03",
    level: "Middle School",
    classes: "Classes 6–8",
    title: "Growing Knowledge & Confidence",
    description:
      "Strengthening subject knowledge, logical thinking and independent learning as students progress academically.",
    focus: [
      "Language and communication skills",
      "Mathematical reasoning",
      "Science concepts and exploration",
      "Digital awareness and problem-solving",
    ],
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45",
    imageAlt: "Students participating in classroom learning",
    icon: GraduationCap,
  },
];

const subjects = [
  {
    icon: Languages,
    title: "English",
    description:
      "Building reading, writing, listening and speaking skills.",
  },
  {
    icon: Languages,
    title: "Hindi",
    description:
      "Developing language understanding, reading and written expression.",
  },
  {
    icon: Calculator,
    title: "Mathematics",
    description:
      "Strengthening numerical skills, logical thinking and problem-solving.",
  },
  {
    icon: Microscope,
    title: "Environmental Studies",
    description:
      "Introducing students to their surroundings, nature and everyday life.",
  },
  {
    icon: Brain,
    title: "Science",
    description:
      "Encouraging observation, curiosity and understanding of scientific concepts.",
  },
  {
    icon: Code2,
    title: "Computer Education",
    description:
      "Introducing digital skills, computer awareness and responsible technology use.",
  },
];

const teachingMethods = [
  {
    icon: Lightbulb,
    title: "Concept-Based Learning",
    description:
      "Helping students understand concepts clearly instead of relying only on memorisation.",
  },
  {
    icon: Users,
    title: "Interactive Classrooms",
    description:
      "Encouraging participation, discussions, questions and collaborative activities.",
  },
  {
    icon: PencilRuler,
    title: "Activity-Based Learning",
    description:
      "Making lessons engaging through age-appropriate activities and practical experiences.",
  },
  {
    icon: HeartHandshake,
    title: "Individual Encouragement",
    description:
      "Supporting students according to their learning pace, interests and development needs.",
  },
];

const developmentAreas = [
  {
    icon: Languages,
    title: "Communication",
    description:
      "Encouraging students to express ideas and communicate with confidence.",
  },
  {
    icon: Palette,
    title: "Creativity",
    description:
      "Providing opportunities for imagination, creative expression and exploration.",
  },
  {
    icon: ShieldCheck,
    title: "Discipline & Values",
    description:
      "Promoting respect, responsibility, teamwork and positive habits.",
  },
  {
    icon: Brain,
    title: "Critical Thinking",
    description:
      "Developing curiosity, reasoning and independent problem-solving skills.",
  },
];

const assessmentMethods = [
  "Classroom participation and activities",
  "Assignments and practice exercises",
  "Periodic tests and learning reviews",
  "Projects and practical work where appropriate",
  "Feedback to support continuous improvement",
];

const cardClass =
  "group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_8px_30px_rgba(16,43,80,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D5A63C] hover:shadow-[0_22px_50px_rgba(16,43,80,0.13)]";

function SectionHeading({
  badge,
  title,
  description,
}: {
  badge: string;
  title: string;
  description: string;
}) {
  return (
    <div className="mx-auto mb-14 max-w-3xl text-center">
      <span className="inline-flex items-center gap-2 rounded-full border border-[#D5A63C]/30 bg-[#D5A63C]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#9A7018]">
        <Sparkles size={14} />
        {badge}
      </span>

      <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#102B50] sm:text-4xl lg:text-5xl">
        {title}
      </h2>

      <p className="mt-5 text-base leading-8 text-slate-600">
        {description}
      </p>
    </div>
  );
}

export default function AcademicsPage() {
  return (
    <div className="overflow-hidden">
      {/* 1. Academics Hero */}
      <section className="relative isolate overflow-hidden bg-[#102B50] py-24 text-white sm:py-32">
        <div className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-[#D5A63C]/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 -z-10 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#EAC66F]/40 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#EAC66F]">
              <GraduationCap size={16} />
              Academics & Learning
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              A Strong Foundation
              <span className="block text-[#EAC66F]">
                for Every Future.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">
              From LKG to Class 8, we aim to create a supportive learning
              environment where children develop knowledge, curiosity,
              confidence and essential life skills.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-3 rounded-xl bg-[#D5A63C] px-7 py-4 font-bold text-[#102B50] shadow-lg transition-all hover:-translate-y-1 hover:bg-[#EAC66F]"
              >
                Explore Admissions
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl border border-white/30 px-7 py-4 font-bold text-white transition-all hover:bg-white hover:text-[#102B50]"
              >
                Contact School
              </Link>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {["LKG", "Primary 1–5", "Middle 6–8"].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold text-blue-50"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-[#EAC66F]/30" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7"
                alt="Students learning in a classroom"
                className="h-[420px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#102B50]/85 via-transparent to-transparent" />

              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#EAC66F]">
                  Our Academic Focus
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  Learn. Explore. Grow.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Academic Philosophy */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18425]">
              Our Academic Philosophy
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#102B50] sm:text-4xl">
              Education That Builds
              <span className="text-[#C5962E]"> Strong Foundations</span>
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              We believe that every child deserves an opportunity to learn,
              explore and develop at their own pace. Our academic approach
              focuses on clear concepts, meaningful learning experiences and
              the development of essential skills.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Our learning framework is planned with a CBSE-oriented approach,
              keeping the different learning stages from LKG to Class 8 in
              mind.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Age-appropriate learning experiences",
                "Strong academic fundamentals",
                "Curiosity and independent thinking",
                "Knowledge with practical understanding",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2
                    className="shrink-0 text-[#C5962E]"
                    size={21}
                  />
                  <span className="font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-3xl bg-[#D5A63C]/15" />

            <img
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
              alt="Students engaged in classroom learning"
              className="relative h-[430px] w-full rounded-3xl object-cover shadow-2xl"
            />

            <div className="absolute -right-3 bottom-8 rounded-2xl bg-[#102B50] p-6 text-white shadow-xl sm:-right-6">
              <BookOpen className="mb-3 text-[#EAC66F]" size={32} />
              <p className="text-lg font-bold">Learning with Purpose</p>
              <p className="mt-1 text-sm text-blue-100">
                Growing with Confidence
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Class-wise Learning Stages */}
      <section className="bg-[#F5F7FA] px-6 py-24 lg:px-8">
        <SectionHeading
          badge="Learning Stages"
          title="A Learning Journey for Every Stage"
          description="Our academic structure covers three learning stages, with age-appropriate educational experiences from LKG to Class 8."
        />

        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-3">
          {learningStages.map((stage) => {
            const Icon = stage.icon;

            return (
              <article
                key={stage.number}
                className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(16,43,80,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D5A63C] hover:shadow-[0_22px_50px_rgba(16,43,80,0.14)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={stage.image}
                    alt={stage.imageAlt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#102B50]/90 via-[#102B50]/10 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full border border-white/30 bg-[#102B50]/70 px-4 py-2 text-xs font-bold uppercase tracking-wider text-white backdrop-blur-md">
                    {stage.level}
                  </span>

                  <span className="absolute bottom-5 left-5 text-3xl font-extrabold text-white">
                    {stage.classes}
                  </span>

                  <span className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D5A63C] text-[#102B50] shadow-lg">
                    <Icon size={24} />
                  </span>
                </div>

                <div className="p-7">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#B18425]">
                    Learning Stage {stage.number}
                  </span>

                  <h3 className="mt-3 text-xl font-extrabold text-[#102B50]">
                    {stage.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {stage.description}
                  </p>

                  <div className="mt-6 border-t border-slate-100 pt-6">
                    <p className="mb-4 text-sm font-bold text-[#102B50]">
                      Learning Focus
                    </p>

                    <div className="space-y-3">
                      {stage.focus.map((item) => (
                        <div key={item} className="flex items-start gap-3">
                          <CheckCircle2
                            className="mt-0.5 shrink-0 text-[#C5962E]"
                            size={17}
                          />
                          <span className="text-sm text-slate-600">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-7 h-1 w-12 rounded-full bg-[#D5A63C] transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 4. Subjects & Learning Areas */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <SectionHeading
          badge="Subjects & Learning Areas"
          title="Knowledge Across Key Learning Areas"
          description="Students are introduced to important academic subjects and learning areas appropriate to their respective classes."
        />

        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {subjects.map((subject, index) => {
            const Icon = subject.icon;

            return (
              <div key={subject.title} className={cardClass}>
                <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#D5A63C]/10 transition-transform duration-500 group-hover:scale-150" />

                <div className="relative flex items-center justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#173B66] to-[#102B50] text-[#EAC66F] shadow-lg transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:from-[#D5A63C] group-hover:to-[#EAC66F] group-hover:text-[#102B50]">
                    <Icon size={28} />
                  </div>

                  <span className="text-4xl font-black text-slate-100">
                    0{index + 1}
                  </span>
                </div>

                <h3 className="relative mt-7 text-xl font-extrabold text-[#102B50]">
                  {subject.title}
                </h3>

                <p className="relative mt-3 text-sm leading-7 text-slate-600">
                  {subject.description}
                </p>

                <div className="absolute bottom-0 left-0 h-1 w-0 rounded-full bg-gradient-to-r from-[#D5A63C] to-[#EAC66F] transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>

        <p className="mx-auto mt-8 max-w-3xl text-center text-xs leading-6 text-slate-500">
          Note: Subject availability and subject combinations may vary by
          class. The final subject list will be updated according to the
          school's confirmed academic structure.
        </p>
      </section>

      {/* 5. Teaching Methodology */}
      <section className="bg-[#F5F7FA] px-6 py-24 lg:px-8">
        <SectionHeading
          badge="Teaching Methodology"
          title="Making Learning Engaging & Meaningful"
          description="A balanced teaching approach that encourages students to understand, participate, practise and develop confidence."
        />

        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teachingMethods.map((method) => {
            const Icon = method.icon;

            return (
              <div key={method.title} className={cardClass}>
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102B50] text-[#EAC66F] transition-all duration-500 group-hover:rotate-6 group-hover:bg-[#D5A63C] group-hover:text-[#102B50]">
                  <Icon size={26} />
                </div>

                <h3 className="mt-7 text-lg font-extrabold text-[#102B50]">
                  {method.title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {method.description}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-[#D5A63C] transition-all duration-500 group-hover:w-full" />
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Student Development */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl bg-[#102B50] p-9 text-white shadow-xl sm:p-12">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#D5A63C]/15 blur-2xl" />

            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D5A63C] text-[#102B50]">
                <GraduationCap size={30} />
              </div>

              <h2 className="mt-8 text-3xl font-extrabold">
                Education for Overall Development
              </h2>

              <p className="mt-5 leading-8 text-blue-100">
                Academic learning is an important part of a child's journey.
                We also value the development of communication, creativity,
                discipline and confidence.
              </p>

              <div className="mt-8 space-y-5">
                {[
                  "Confidence and self-expression",
                  "Teamwork and cooperation",
                  "Positive habits and responsibility",
                  "Creativity and independent thinking",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-1 shrink-0 text-[#EAC66F]"
                      size={20}
                    />
                    <span className="text-sm font-medium text-blue-50">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18425]">
              Beyond Academics
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#102B50] sm:text-4xl">
              Helping Every Child Discover Their Potential
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Every student has different strengths and interests. A positive
              learning environment gives children opportunities to explore
              their abilities and develop skills that support them in everyday
              life.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {developmentAreas.map((area) => {
                const Icon = area.icon;

                return (
                  <div
                    key={area.title}
                    className="rounded-2xl border border-slate-200 p-5 transition-all duration-300 hover:border-[#D5A63C] hover:shadow-lg"
                  >
                    <Icon className="text-[#B18425]" size={26} />
                    <h3 className="mt-4 font-bold text-[#102B50]">
                      {area.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {area.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 7. Assessment & Progress */}
      <section className="bg-[#F5F7FA] px-6 py-24 lg:px-8">
        <SectionHeading
          badge="Assessment & Progress"
          title="Recognising Progress at Every Step"
          description="Regular learning reviews and constructive feedback help students understand their progress and identify areas for improvement."
        />

        <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173"
              alt="Student studying and completing academic work"
              className="h-[390px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#102B50]/70 to-transparent" />

            <div className="absolute bottom-7 left-7 text-white">
              <p className="text-sm font-semibold uppercase tracking-widest text-[#EAC66F]">
                Learn. Review. Improve.
              </p>
              <h3 className="mt-2 text-2xl font-bold">
                Every Step Matters
              </h3>
            </div>
          </div>

          <div>
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#102B50] text-[#EAC66F]">
              <ClipboardCheck size={30} />
            </div>

            <h3 className="mt-7 text-2xl font-extrabold text-[#102B50]">
              Understanding Student Progress
            </h3>

            <p className="mt-4 leading-8 text-slate-600">
              Assessment is intended to support learning, recognise student
              strengths and provide guidance for improvement. Activities and
              evaluation methods can be adapted to different class levels.
            </p>

            <div className="mt-7 space-y-4">
              {assessmentMethods.map((item, index) => (
                <div key={item} className="flex items-center gap-4">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#D5A63C]/15 text-sm font-extrabold text-[#9A7018]">
                    0{index + 1}
                  </span>
                  <span className="font-semibold text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 8. Admissions CTA */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#102B50] via-[#173B66] to-[#0B203C] px-8 py-16 text-center shadow-2xl sm:px-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-[#D5A63C]/15 blur-3xl" />
          <div className="absolute -bottom-28 -left-20 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

          <div className="relative mx-auto max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-[#EAC66F]/40 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#EAC66F]">
              <GraduationCap size={16} />
              Admissions Enquiry
            </span>

            <h2 className="mt-7 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Start Your Child's
              <span className="block text-[#EAC66F]">
                Learning Journey With Us
              </span>
            </h2>

            <p className="mt-6 leading-8 text-blue-100">
              Explore an educational environment focused on strong academic
              foundations, confidence, discipline and overall development.
              Enquire about admissions from LKG to Class 8.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Link
                href="/admissions"
                className="inline-flex items-center gap-3 rounded-xl bg-[#D5A63C] px-7 py-4 font-bold text-[#102B50] transition-all hover:-translate-y-1 hover:bg-[#EAC66F]"
              >
                Explore Admissions
                <ArrowRight size={18} />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl border border-white/30 px-7 py-4 font-bold text-white transition-all hover:bg-white hover:text-[#102B50]"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
