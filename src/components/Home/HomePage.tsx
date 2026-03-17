import HeroSection from "./HeroSection/HeroSection";
import VideoSection from "./VideoSection/VideoSection";
import HowItWorksSection from "./HowItWorksSection/HowItWorksSection";
import FeaturesSection from "./FeaturesSection/FeaturesSection";
import ReportPreviewSection from "./ReportPreviewSection/ReportPreviewSection";
import CategoriesSection from "./CategoriesSection/CategoriesSection";
import AudienceSection from "./AudienceSection/AudienceSection";
import FooterSection from "../Common/Footer/Footer";
import Header from "../Common/Header/Header";

export default function HomePage() {
  return (
    <>
      <Header />
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
