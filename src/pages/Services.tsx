import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Boxes, Megaphone, GraduationCap, Workflow } from "lucide-react";

const services = [
  {
    title: "Product Development",
    Icon: Boxes,
    items: [
      "Custom Software Solutions",
      "SaaS Product Design & Launch",
      "Mobile App Development",
      "Web Application Development",
    ],
  },
  {
    title: "Software & Web Development",
    Icon: Code2,
    items: [
      "Business Websites & eCommerce",
      "Web Portals & Dashboards",
      "Cloud Integration",
      "API Development & Automation",
    ],
  },
  {
    title: "Digital Marketing & Branding",
    Icon: Megaphone,
    items: [
      "SEO & SEM",
      "Social Media Marketing",
      "Content Creation & Management",
      "Branding & Identity Design",
    ],
  },
  {
    title: "Internship & Training Programs",
    Icon: GraduationCap,
    items: [
      "Web & App Development Training",
      "Live Project Internships",
      "Digital Marketing Internships",
      "Certification & Mentorship",
    ],
  },
  {
    title: "Consultancy Program",
    Icon: Workflow,
    items: [
      "Strategy & Digital Transformation",
      "Tech Stack Consultation",
      "MVP Roadmapping",
      "Cloud & Scalability Planning",
    ],
  },
];

export default function Services() {
  useSEO({
    title: "Services | Zidi Digital Solutions",
    description: "Product development, software & web, marketing, internships, and consultancy.",
    canonicalPath: "/services",
  });

  return (
    <main className="container max-w-6xl mx-auto px-6 py-16">
      <header className="max-w-2xl mb-10">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Our Services</h1>
        <p className="text-muted-foreground mt-4">End‑to‑end capabilities to plan, build, and grow digital products and brands.</p>
      </header>

      <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map(({ title, Icon, items }) => (
          <Card key={title} className="transition-transform hover:scale-[1.02] hover:shadow-primary">
            <CardHeader>
              <div className="flex items-center gap-3">
                <Icon className="h-6 w-6 text-accent" />
                <CardTitle>{title}</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                {items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </section>
    </main>
  );
}
