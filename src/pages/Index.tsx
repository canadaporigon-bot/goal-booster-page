import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import ProductsSection from "@/components/ProductsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import UrgencySection from "@/components/UrgencySection";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";

const Index = () => (
  <>
    <Header />
    <main>
      <HeroSection />
      <BenefitsSection />
      <ProductsSection />
      <TestimonialsSection />
      <UrgencySection />
      <DifferentialsSection />
      <FinalCTA />
    </main>
    <Footer />
    <WhatsAppFloat />
  </>
);

export default Index;
