
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  Camera,
  CheckCircle2,
  Dumbbell,
  Heart,
  Music,
  Palette,
  ShieldCheck,
  Sparkles,
  Star,
  Target,
  Trophy,
  Users,
  Volleyball,
  Puzzle,
  Lightbulb,
  GraduationCap
} from "lucide-react";

const activityCards = [
  {
    icon: Dumbbell,
    number: "01",
    title: "Physical Fitness",
    description:
      "Encouraging healthy habits, physical activity, coordination and an active lifestyle.",
    image:
      "https://images.unsplash.com/photo-1517836357463-d25dfeac3438",
    alt: "Physical fitness and exercise",
  },
  {
    icon: Trophy,
    number: "02",
    title: "Outdoor Sports",
    description:
      "Introducing students to outdoor games that encourage teamwork, discipline and sportsmanship.",
    image:
      "https://images.unsplash.com/photo-1461896836934-ffe607ba8211",
    alt: "Students participating in outdoor sports",
  },
  {
    icon: Brain,
    number: "03",
    title: "Indoor Games",
    description:
      "Developing concentration, strategic thinking and problem-solving through indoor games.",
    image:
      "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09",
    alt: "Indoor board games",
  },
  {
    icon: Palette,
    number: "04",
    title: "Art & Creativity",
    description:
      "Providing opportunities for imagination, artistic expression and creative exploration.",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f",
    alt: "Creative art and painting activities",
  },
];

const sports = [
  {
    icon: Volleyball,
    title: "Team Games",
    description:
      "Learning cooperation, coordination and sportsmanship through group games.",
  },
  {
    icon: Target,
    title: "Skill-Based Games",
    description:
      "Developing focus, accuracy and confidence through engaging physical activities.",
  },
  {
    icon: Dumbbell,
    title: "Fitness Activities",
    description:
      "Encouraging movement, flexibility and healthy physical development.",
  },
];

const indoorActivities = [
  {
    icon: Brain,
    title: "Chess & Strategy Games",
    description:
      "Building concentration, planning and logical thinking.",
  },
  {
    icon: Puzzle,
    title: "Puzzles & Mind Games",
    description:
      "Encouraging reasoning, observation and problem-solving.",
  },
  {
    icon: BookOpen,
    title: "Reading Activities",
    description:
      "Developing reading interest, imagination and language skills.",
  },
];

const creativeActivities = [
  {
    icon: Music,
    title: "Music & Singing",
    description:
      "Encouraging musical interest, rhythm and creative expression.",
  },
  {
    icon: Palette,
    title: "Drawing & Painting",
    description:
      "Helping students explore imagination through colours and artwork.",
  },
  {
    icon: Camera,
    title: "Celebrations & Events",
    description:
      "Creating opportunities for participation, expression and shared experiences.",
  },
];

const developmentPoints = [
  "Confidence and communication",
  "Teamwork and cooperation",
  "Discipline and responsibility",
  "Creativity and self-expression",
  "Leadership and decision-making",
  "Respect and sportsmanship",
];

const cardClass =
  "group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_8px_30px_rgba(16,43,80,0.06)] transition-all duration-500 hover:-translate-y-2 hover:border-[#D5A63C] hover:shadow-[0_22px_50px_rgba(16,43,80,0.14)]";

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

function ActivityList({
  items,
}: {
  items: { icon: typeof Music; title: string; description: string }[];
}) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="group rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D5A63C] hover:shadow-xl"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#102B50] text-[#EAC66F] transition-all duration-300 group-hover:rotate-6 group-hover:bg-[#D5A63C] group-hover:text-[#102B50]">
              <Icon size={26} />
            </div>
            <h3 className="mt-5 text-lg font-extrabold text-[#102B50]">
              {item.title}
            </h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {item.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default function ActivitiesPage() {
  return (
    <div className="overflow-hidden">
      {/* 1. Activities Hero */}
      <section className="relative isolate overflow-hidden bg-[#102B50] py-24 text-white sm:py-32">
        <div className="absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-[#D5A63C]/20 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 -z-10 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-[#EAC66F]/40 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-[#EAC66F]">
              <Trophy size={16} />
              Activities & Sports
            </span>

            <h1 className="mt-7 text-4xl font-extrabold leading-tight sm:text-5xl lg:text-6xl">
              Discover Talents,
              <span className="block text-[#EAC66F]">
                Build Confidence.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-blue-100 sm:text-lg">
              Learning goes beyond the classroom. Activities, games and
              creative experiences help children explore their interests,
              develop confidence and enjoy learning.
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
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-[2rem] border border-[#EAC66F]/30" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/20 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5"
                alt="Children participating in group activities"
                className="h-[420px] w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#102B50]/85 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <p className="text-sm font-semibold uppercase tracking-widest text-[#EAC66F]">
                  Beyond the Classroom
                </p>
                <h3 className="mt-2 text-2xl font-bold text-white">
                  Explore. Participate. Excel.
                </h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Importance of Activities */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -bottom-5 -left-5 h-40 w-40 rounded-3xl bg-[#D5A63C]/15" />
            <img
              src="https://images.unsplash.com/photo-1503919005314-30d93d07d823"
              alt="Children enjoying learning and group activities"
              className="relative h-[430px] w-full rounded-3xl object-cover shadow-2xl"
            />
            <div className="absolute -right-3 bottom-8 rounded-2xl bg-[#102B50] p-6 text-white shadow-xl sm:-right-6">
              <Heart className="mb-3 text-[#EAC66F]" size={30} />
              <p className="text-lg font-bold">Learn with Joy</p>
              <p className="mt-1 text-sm text-blue-100">
                Grow with Confidence
              </p>
            </div>
          </div>

          <div>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B18425]">
              Learning Beyond Books
            </span>

            <h2 className="mt-5 text-3xl font-extrabold leading-tight text-[#102B50] sm:text-4xl">
              Every Child Has a Talent Waiting to Be Discovered
            </h2>

            <p className="mt-6 leading-8 text-slate-600">
              Co-curricular activities provide children with opportunities
              to discover their interests, interact with others and develop
              important life skills.
            </p>

            <p className="mt-4 leading-8 text-slate-600">
              Through sports, games, art and group activities, students can
              learn the importance of participation, effort, discipline and
              mutual respect.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "Encouraging active participation",
                "Discovering individual interests",
                "Building confidence through experiences",
                "Developing a positive attitude",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="shrink-0 text-[#C5962E]" size={21} />
                  <span className="font-semibold text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Activity Highlights */}
      <section className="bg-[#F5F7FA] px-6 py-24 lg:px-8">
        <SectionHeading
          badge="Activity Highlights"
          title="Opportunities to Explore & Participate"
          description="A variety of activity areas can help children discover their interests and develop skills through enjoyable experiences."
        />

        <div className="mx-auto grid max-w-7xl gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {activityCards.map((activity) => {
            const Icon = activity.icon;

            return (
              <article key={activity.number} className={cardClass}>
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={activity.image}
                    alt={activity.alt}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#102B50]/80 to-transparent" />

                  <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-[#102B50]">
                    ACTIVITY {activity.number}
                  </span>

                  <div className="absolute bottom-5 right-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#D5A63C] text-[#102B50] shadow-lg">
                    <Icon size={24} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-extrabold text-[#102B50]">
                    {activity.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {activity.description}
                  </p>
                  <div className="mt-6 h-1 w-10 rounded-full bg-[#D5A63C] transition-all duration-500 group-hover:w-full" />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* 4. Outdoor Sports */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <SectionHeading
          badge="Outdoor Activities"
          title="Building Energy, Fitness & Team Spirit"
          description="Outdoor activities encourage physical movement, cooperation, confidence and a healthy approach to everyday life."
        />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1471295253337-3ceaaedca402"
              alt="Outdoor sports field"
              className="h-[400px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102B50]/60 to-transparent" />
            <div className="absolute bottom-7 left-7">
              <span className="text-sm font-bold uppercase tracking-widest text-[#EAC66F]">
                Move & Play
              </span>
              <h3 className="mt-2 text-3xl font-extrabold text-white">
                Active Minds, Healthy Bodies
              </h3>
            </div>
          </div>

          <div className="grid gap-5">
            {sports.map((sport) => {
              const Icon = sport.icon;

              return (
                <div
                  key={sport.title}
                  className="group flex gap-5 rounded-2xl border border-slate-200 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D5A63C] hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#102B50] text-[#EAC66F] transition-all duration-300 group-hover:bg-[#D5A63C] group-hover:text-[#102B50]">
                    <Icon size={26} />
                  </div>

                  <div>
                    <h3 className="text-lg font-extrabold text-[#102B50]">
                      {sport.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {sport.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. Indoor Activities */}
      <section className="bg-[#F5F7FA] px-6 py-24 lg:px-8">
        <SectionHeading
          badge="Indoor Activities"
          title="Thinking, Learning & Exploring"
          description="Indoor games and learning activities can help children develop concentration, patience, imagination and logical thinking."
        />

        <div className="mx-auto max-w-7xl">
          <ActivityList items={indoorActivities} />
        </div>
      </section>

      {/* 6. Cultural & Creative Activities */}
      <section className="bg-white px-6 py-24 lg:px-8">
        <SectionHeading
          badge="Creative Expression"
          title="Celebrating Creativity & Talent"
          description="Creative activities give children opportunities to express themselves, discover interests and appreciate different forms of expression."
        />

        <div className="mx-auto max-w-7xl">
          <ActivityList items={creativeActivities} />
        </div>
      </section>

      {/* 7. Personality Development */}
      <section className="bg-[#102B50] px-6 py-24 text-white lg:px-8">
        <SectionHeading
          badge="Personality Development"
          title="Skills That Shape Tomorrow"
          description="Every activity can become a learning experience that supports confidence, teamwork, discipline and personal growth."
        />

        <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.06] p-9 backdrop-blur-sm sm:p-12">
            <div className="absolute -right-16 -top-16 h-64 w-64 rounded-full bg-[#D5A63C]/15 blur-2xl" />

            <div className="relative">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D5A63C] text-[#102B50]">
                <Award size={30} />
              </div>

              <h2 className="mt-8 text-3xl font-extrabold">
                Growing Together Through Experiences
              </h2>

              <p className="mt-5 leading-8 text-blue-100">
                Participation in different activities helps students
                understand themselves, work with others and appreciate the
                value of effort and positive behaviour.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {developmentPoints.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2
                      className="mt-1 shrink-0 text-[#EAC66F]"
                      size={19}
                    />
                    <span className="text-sm font-medium text-blue-50">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1529390079861-591de354faf5"
              alt="Children participating in group activities"
              className="h-[430px] w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#102B50]/70 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="text-sm font-bold uppercase tracking-widest text-[#EAC66F]">
                Learn Together
              </p>
              <h3 className="mt-2 text-3xl font-extrabold text-white">
                Stronger Through Teamwork
              </h3>
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
              Join Our Learning Community
            </span>

            <h2 className="mt-7 text-3xl font-extrabold leading-tight text-white sm:text-5xl">
              Every Child Has the
              <span className="block text-[#EAC66F]">
                Potential to Shine
              </span>
            </h2>

            <p className="mt-6 leading-8 text-blue-100">
              Discover an educational environment that values learning,
              creativity, participation and overall development. Enquire
              about admissions from LKG to Class 8.
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
