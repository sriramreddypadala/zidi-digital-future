import { useSEO } from "@/hooks/useSEO";
import { Hero } from "@/components/Hero";
import { CoreOfferings } from "@/components/CoreOfferings";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  useSEO({
    title: "Zidi Digital Solutions — Empowering the Digital Future",
    description: "Product innovation, service excellence, digital marketing, and internships.",
    canonicalPath: "/",
  });

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Hero />
      <CoreOfferings />
      <ContactSection />
    </div>
  );
};

export default Index;
