import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import VideoSection from "@/components/VideoSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import ReportPreviewSection from "@/components/ReportPreviewSection";
import CategoriesSection from "@/components/CategoriesSection";
import AudienceSection from "@/components/AudienceSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <VideoSection />
        <HowItWorksSection />
        <FeaturesSection />
        <ReportPreviewSection />
        <CategoriesSection />
        <AudienceSection />
      </main>
      <FooterSection />
    </>
  );
}
