import Header, { HeroSection, BranchesSection, AboutSection, Footer } from "@/components/Layout";
import MenuSection from "@/components/MenuSection";
import OffersSection from "@/components/OffersSection";

const Index = () => {
  return (
    <div className="min-h-screen" dir="rtl">
      <Header />
      <HeroSection />
      <div className="container">
        <OffersSection />
        <MenuSection />
      </div>
      <AboutSection />
      <BranchesSection />
      <Footer />
    </div>
  );
};

export default Index;
