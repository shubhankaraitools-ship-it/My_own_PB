import HeroSection from "@/components/HeroSection";
import EcommerceCatalogSection from "@/components/EcommerceCatalogSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ProductFeaturesSection from "@/components/ProductFeaturesSection";
import TravelPackSection from "@/components/TravelPackSection";
import FreeSampleSection from "@/components/FreeSampleSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import MobileStickyCTA from "@/components/MobileStickyCTA";

export default function Home() {
  return (
    <>
      <HeroSection />
      <EcommerceCatalogSection />   {/* ← Moved up: right after hero */}
      <ProblemSolutionSection />
      <ProductFeaturesSection />
      <TravelPackSection />
      <FreeSampleSection />
      <TestimonialsSection />
      <FAQSection />
      <MobileStickyCTA />
    </>
  );
}
