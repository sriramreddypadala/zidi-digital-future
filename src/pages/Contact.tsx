import { useSEO } from "@/hooks/useSEO";
import { ContactSection } from "@/components/ContactSection";

export default function Contact() {
  useSEO({
    title: "Contact | Zidi Digital Solutions",
    description: "Let’s build something great together. Contact Zidi Digital Solutions.",
    canonicalPath: "/contact",
  });

  return (
    <main>
      <ContactSection />
    </main>
  );
}
