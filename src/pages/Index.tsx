
import Layout from "@/components/layout/Layout";
import HeroSection from "@/components/sections/HeroSection";
import FeaturesSection from "@/components/sections/FeaturesSection";
import MenuPreviewSection from "@/components/sections/MenuPreviewSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <FeaturesSection />
      <MenuPreviewSection />
      <TestimonialsSection />
      <ContactSection />
    </Layout>
  );
};

export default Index;
