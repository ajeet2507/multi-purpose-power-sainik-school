
import HeroSection from "@/components/sections/HeroSection";
import SchoolIntroduction from "@/components/sections/SchoolIntroduction";
import SchoolHighlights from "@/components/sections/SchoolHighlights";
import AcademicsSection from "@/components/sections/AcademicsSection";
import ActivitiesSection from "@/components/sections/ActivitiesSection";
import WhyChooseSection from "@/components/sections/WhyChooseSection";
import AdmissionCTA from "@/components/sections/AdmissionCTA";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <SchoolIntroduction />
      <SchoolHighlights />
      <AcademicsSection />
      <ActivitiesSection />
      <WhyChooseSection />
      <AdmissionCTA />
    </>
  );
}
