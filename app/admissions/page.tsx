
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  ClipboardList,
  FileText,
  GraduationCap,
  HeartHandshake,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Users,
  CalendarDays,
  BookOpen,
  type LucideIcon,
} from "lucide-react";

const admissionSteps = [
  {
    number: "01",
    icon: MessageCircle,
    title: "Make an Enquiry",
    description:
      "Connect with the school to understand the admission process and get information about the required documents.",
  },
  {
    number: "02",
    icon: FileText,
    title: "Submit Application",
    description:
      "Complete the admission application form and submit the required student and parent information.",
  },
  {
    number: "03",
    icon: UserCheck,
    title: "Interaction & Assessment",
    description:
      "The school may conduct an age-appropriate interaction or assessment, depending on the class applied for.",
  },
  {
    number: "04",
    icon: CheckCircle2,
    title: "Admission Confirmation",
    description:
      "Complete the remaining formalities and receive admission confirmation from the school.",
  },
];

const classGroups = [
  {
    level: "Pre-Primary",
    classes: "LKG",
    description:
      "A welcoming beginning focused on foundational learning, communication, creativity and joyful classroom experiences.",
    icon: Sparkles,
  },
  {
    level: "Primary School",
    classes: "Classes 1–5",
    description:
      "A structured learning environment that develops literacy, numeracy, curiosity and essential learning skills.",
    icon: BookOpen,
  },
  {
    level: "Middle School",
    classes: "Classes 6–8",
    description:
      "An engaging academic journey that encourages independent thinking, subject understanding and responsibility.",
    icon: GraduationCap,
  },
];

const documentItems = [
  "Student's birth certificate",
  "Previous school's report card, if applicable",
  "Transfer Certificate, if applicable",
  "Recent passport-size photographs",
  "Parent or guardian identity proof",
  "Residential address proof",
];

const admissionFeatures = [
  {
    icon: Users,
    title: "Student-Centred Approach",
    description:
      "Understanding each child's learning needs and supporting their development.",
  },
  {
    icon: ShieldCheck,
    title: "Guided Admission Process",
    description:
      "Clear communication and guidance throughout the admission journey.",
  },
  {
    icon: HeartHandshake,
    title: "Parent Partnership",
    description:
      "Encouraging open communication between parents and the school.",
  },
];

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
      <span className="inline-flex items-center gap-2 rounded-full border border-[#D5A63C]/30 bg-[#D5A63C]/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#9B741E]">
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

function IconCard({
  icon: Icon,
  title,
  description,
}: {
  icon: LucideIcon;
  title: string;
  description: string;
}) {
  return (
    <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#D5A63C]/60 hover:shadow-xl">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102B50] text-[#EAC66F] transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
        <Icon size={27} />
      </div>

      <h3 className="text-xl font-bold text-[#102B50]">{title}</h3>

      <p className="mt-3 text-sm leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}

export default function AdmissionsPage() {
  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative isolate overflow-hidden bg-[#102B50]">
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=2000&q=85"
            alt="Students learning in a classroom"
            className="h-full w-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07182E] via-[#102B50]/95 to-[#102B50]/75" />
        </div>

        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full border border-[#D5A63C]/20" />
        <div className="absolute -bottom-40 -left-20 h-96 w-96 rounded-full border border-[#D5A63C]/20" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-6 py-24 sm:px-10 lg:grid-cols-2 lg:py-32">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#EAC66F]/30 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#EAC66F]">
              <GraduationCap size={16} />
              Admissions
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
              Begin Your Child's
              <span className="mt-2 block text-[#EAC66F]">
                Learning Journey
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-slate-200 sm:text-lg">
              Every great journey begins with a strong foundation. Explore
              admission opportunities at Multi Purpose Power Sainik School
              for LKG to Class 8.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl bg-[#D5A63C] px-7 py-4 font-bold text-[#102B50] shadow-lg shadow-black/20 transition-all hover:-translate-y-1 hover:bg-[#EAC66F]"
              >
                Enquire Now
                <ArrowRight size={18} />
              </Link>

              <a
                href="#admission-process"
                className="inline-flex items-center gap-3 rounded-xl border border-white/30 px-7 py-4 font-bold text-white transition-all hover:border-[#EAC66F] hover:bg-white/10"
              >
                Explore Process
              </a>
            </div>

            <div className="mt-12 flex flex-wrap gap-8 border-t border-white/15 pt-8">
              <div>
                <p className="text-3xl font-extrabold text-[#EAC66F]">
                  LKG
                </p>
                <p className="mt-1 text-sm text-slate-300">Starting Class</p>
              </div>

              <div className="h-12 w-px bg-white/20" />

              <div>
                <p className="text-3xl font-extrabold text-[#EAC66F]">
                  8th
                </p>
                <p className="mt-1 text-sm text-slate-300">Highest Class</p>
              </div>

              <div className="h-12 w-px bg-white/20" />

              <div>
                <p className="text-3xl font-extrabold text-[#EAC66F]">
                  CBSE
                </p>
                <p className="mt-1 text-sm text-slate-300">
                  Curriculum Focus
                </p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-[2rem] border border-[#EAC66F]/30" />

            <div className="relative overflow-hidden rounded-[1.7rem] border border-white/20 bg-white/10 p-3 shadow-2xl backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1000&q=85"
                alt="School children studying together"
                className="h-[420px] w-full rounded-[1.3rem] object-cover"
              />

              <div className="absolute bottom-7 left-7 right-7 rounded-2xl border border-white/30 bg-[#102B50]/90 p-5 text-white shadow-xl backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#D5A63C] text-[#102B50]">
                    <GraduationCap size={25} />
                  </div>
                  <div>
                    <p className="font-bold">A Foundation for Tomorrow</p>
                    <p className="mt-1 text-xs text-slate-200">
                      Learning, growth and development
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="bg-[#F5F7FA] px-6 py-24 sm:px-10">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -left-5 -top-5 h-32 w-32 rounded-tl-[2rem] border-l-4 border-t-4 border-[#D5A63C]" />

            <img
              src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=1100&q=85"
              alt="Welcoming school learning environment"
              className="relative h-[420px] w-full rounded-3xl object-cover shadow-xl"
            />

            <div className="absolute -bottom-7 -right-5 rounded-2xl bg-[#D5A63C] p-6 text-[#102B50] shadow-xl sm:right-5">
              <GraduationCap size={30} />
              <p className="mt-2 text-lg font-extrabold">
                LKG – Class 8
              </p>
              <p className="text-xs font-semibold">School Education</p>
            </div>
          </div>

          <div className="pt-5 lg:pt-0">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B38626]">
              Welcome to Our School
            </span>

            <h2 className="mt-4 text-3xl font-extrabold leading-tight text-[#102B50] sm:text-4xl">
              The Right Beginning for a Bright Future
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Choosing the right school is an important decision for every
              parent. At Multi Purpose Power Sainik School, our aim is to
              provide children with an encouraging environment where they
              can learn, explore and develop their abilities.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              We welcome enquiries for admission from LKG to Class 8.
              Parents are encouraged to connect with the school to understand
              the admission requirements and process.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Learning opportunities for different age groups",
                "Focus on academic and personal development",
                "Guidance for parents throughout the admission process",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2
                    size={21}
                    className="mt-1 shrink-0 text-[#B38626]"
                  />
                  <p className="text-sm font-medium text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Class Groups */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Classes Offered"
            title="Admissions from LKG to Class 8"
            description="Explore the learning stages offered at our school. Contact the school to confirm current seat availability for your preferred class."
          />

          <div className="grid gap-7 md:grid-cols-3">
            {classGroups.map((group, index) => {
              const Icon = group.icon;

              return (
                <div
                  key={group.level}
                  className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                >
                  <div className="absolute right-0 top-0 h-32 w-32 rounded-bl-full bg-[#F5F7FA] transition-colors group-hover:bg-[#D5A63C]/15" />

                  <div className="relative">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-extrabold tracking-widest text-[#D5A63C]">
                        0{index + 1}
                      </span>
                      <Icon
                        size={34}
                        className="text-[#102B50] transition-transform group-hover:scale-110"
                      />
                    </div>

                    <span className="mt-9 inline-block rounded-full bg-[#102B50] px-4 py-2 text-xs font-bold text-[#EAC66F]">
                      {group.classes}
                    </span>

                    <h3 className="mt-5 text-2xl font-extrabold text-[#102B50]">
                      {group.level}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {group.description}
                    </p>

                    <Link
                      href="/contact"
                      className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-[#9B741E] transition-all group-hover:gap-4"
                    >
                      Enquire About Admission
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Admission Process */}
      <section
        id="admission-process"
        className="bg-[#F5F7FA] px-6 py-24 sm:px-10"
      >
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="How It Works"
            title="Our Admission Process"
            description="A simple step-by-step overview to help parents understand the admission journey."
          />

          <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {admissionSteps.map((step) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-4xl font-black text-[#D5A63C]/40">
                      {step.number}
                    </span>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#102B50] text-[#EAC66F] transition-transform group-hover:rotate-6">
                      <Icon size={23} />
                    </div>
                  </div>

                  <h3 className="mt-7 text-xl font-bold text-[#102B50]">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="mt-8 text-center text-sm text-slate-500">
            The exact steps and requirements may vary depending on the class
            and school admission policy.
          </p>
        </div>
      </section>

      {/* Documents */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-[#D5A63C]/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-[#9B741E]">
              <ClipboardList size={15} />
              Documents Checklist
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#102B50] sm:text-4xl">
              Documents Parents May Need
            </h2>

            <p className="mt-5 leading-8 text-slate-600">
              Keep the following documents ready when enquiring about
              admission. Please confirm the final document requirements
              directly with the school.
            </p>

            <div className="mt-9 space-y-4">
              {documentItems.map((item, index) => (
                <div
                  key={item}
                  className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 transition-all hover:border-[#D5A63C]/60 hover:shadow-md"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#102B50] text-sm font-bold text-[#EAC66F]">
                    {index + 1}
                  </span>

                  <p className="text-sm font-semibold text-slate-700">
                    {item}
                  </p>

                  <CheckCircle2
                    size={18}
                    className="ml-auto shrink-0 text-[#B38626]"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex flex-col justify-center overflow-hidden rounded-3xl bg-[#102B50] p-8 text-white shadow-2xl sm:p-12">
            <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#EAC66F]/20" />
            <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full border border-[#EAC66F]/20" />

            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D5A63C] text-[#102B50]">
                <CalendarDays size={32} />
              </div>

              <span className="mt-9 block text-xs font-bold uppercase tracking-[0.2em] text-[#EAC66F]">
                Admission Enquiry
              </span>

              <h3 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">
                Looking for the Right School for Your Child?
              </h3>

              <p className="mt-5 leading-8 text-slate-300">
                Contact our school to discuss class availability, admission
                requirements, important dates and other details.
              </p>

              <Link
                href="/contact"
                className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#D5A63C] px-7 py-4 font-bold text-[#102B50] transition-all hover:-translate-y-1 hover:bg-[#EAC66F]"
              >
                Contact the School
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Connect */}
      <section className="bg-[#F5F7FA] px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-7xl">
          <SectionHeading
            badge="Parent Support"
            title="We Are Here to Guide You"
            description="We believe that choosing a school should be an informed and comfortable experience for parents."
          />

          <div className="grid gap-7 md:grid-cols-3">
            {admissionFeatures.map((feature) => (
              <IconCard
                key={feature.title}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24 sm:px-10">
        <div className="mx-auto max-w-4xl">
          <SectionHeading
            badge="Frequently Asked Questions"
            title="Admission FAQs"
            description="Some common questions parents may have before starting the admission process."
          />

          <div className="space-y-4">
            {[
              {
                question: "Which classes are available at the school?",
                answer:
                  "The school caters to students from LKG to Class 8. Please contact the school to confirm availability for a particular class.",
              },
              {
                question: "How can I enquire about admission?",
                answer:
                  "You can use the Contact Us page to send an enquiry or connect with the school directly for admission information.",
              },
              {
                question: "What documents are required?",
                answer:
                  "Documents may include the child's birth certificate, photographs, previous school records where applicable, and parent identity and address proof. Please confirm the final list with the school.",
              },
              {
                question: "What is the admission fee?",
                answer:
                  "Fee details have not been published here. Please contact the school for the latest fee structure and payment information.",
              },
              {
                question: "Is admission subject to seat availability?",
                answer:
                  "Admission depends on the school's admission policy and availability of seats in the requested class. Please contact the school for confirmation.",
              },
            ].map((faq) => (
              <details
                key={faq.question}
                className="group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all open:border-[#D5A63C]/60 open:shadow-md"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-bold text-[#102B50] marker:hidden">
                  <span>{faq.question}</span>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#F5F7FA] text-xl text-[#9B741E] transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>

                <p className="mt-5 border-t border-slate-100 pt-4 text-sm leading-7 text-slate-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative overflow-hidden bg-[#102B50] px-6 py-20 sm:px-10">
        <div className="absolute -right-20 -top-32 h-80 w-80 rounded-full border border-[#EAC66F]/20" />
        <div className="absolute -bottom-40 -left-20 h-80 w-80 rounded-full border border-[#EAC66F]/20" />

        <div className="relative mx-auto max-w-4xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#EAC66F]/30 bg-white/10 px-5 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#EAC66F]">
            <GraduationCap size={16} />
            Take the First Step
          </span>

          <h2 className="mt-7 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
            Give Your Child a Strong Start
            <span className="block text-[#EAC66F]">
              for a Brighter Tomorrow
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-8 text-slate-300">
            Connect with Multi Purpose Power Sainik School and learn more
            about the admission process for LKG to Class 8.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#D5A63C] px-8 py-4 font-bold text-[#102B50] shadow-xl transition-all hover:-translate-y-1 hover:bg-[#EAC66F]"
          >
            Enquire About Admission
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </div>
  );
}
