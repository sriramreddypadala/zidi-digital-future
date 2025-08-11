import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Quote, Award, Rocket } from "lucide-react";
import placeholder from "/placeholder.svg";

export default function About() {
  useSEO({
    title: "About | Zidi Digital Solutions",
    description: "Product innovation and service excellence. Meet our team, mission, and journey.",
    canonicalPath: "/about",
  });

  return (
    <main>
      <section className="container max-w-6xl mx-auto px-6 py-16">
        <header className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Zidi Digital Solutions</h1>
          <p className="text-muted-foreground mt-4">We are a product + service technology company helping startups to enterprises launch, scale, and win in the digital era.</p>
        </header>

        <div className="mt-12 grid md:grid-cols-2 gap-8">
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Empowering the digital future through cutting‑edge solutions, thoughtful design, and reliable delivery.
            </CardContent>
          </Card>
          <Card className="shadow-md">
            <CardHeader>
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent className="text-muted-foreground">
              Become the most trusted innovation partner, and a launchpad for the next generation of tech leaders.
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-gradient-hero">
        <div className="container max-w-6xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-[280px,1fr] gap-8 items-start">
            <div className="rounded-xl border border-border bg-card shadow-md p-4">
              <img src={placeholder} alt="Divyesh Bondapalli headshot placeholder" className="w-full h-64 object-cover rounded-lg" />
            </div>
            <Card className="shadow-md">
              <CardHeader>
                <CardTitle>Divyesh Bondapalli — Founder & Managing Director</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Visionary. Technophile. Entrepreneur.</p>
                <blockquote className="text-lg flex gap-2 items-start">
                  <Quote className="h-5 w-5 text-primary mt-1" />
                  <span>
                    Building technology that accelerates growth and makes opportunities more accessible for everyone.
                  </span>
                </blockquote>
                <ul className="mt-6 grid sm:grid-cols-3 gap-4 text-sm">
                  <li className="flex items-center gap-2"><Award className="h-4 w-4 text-accent"/> 10+ large‑scale deliveries</li>
                  <li className="flex items-center gap-2"><Rocket className="h-4 w-4 text-accent"/> Startup mentor & product strategist</li>
                  <li className="flex items-center gap-2"><Award className="h-4 w-4 text-accent"/> Speaker & community builder</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold">Our Journey</h2>
        <p className="text-muted-foreground mt-2">A simple timeline of milestones. Animated reveals add delight.</p>
        <div className="mt-8 grid md:grid-cols-3 gap-4">
          {["2019", "2022", "2025"].map((year) => (
            <Card key={year} className="animate-fade-in-up" style={{ animationDelay: `${Math.random() * 0.2 + 0.1}s` }}>
              <CardHeader>
                <CardTitle>{year}</CardTitle>
              </CardHeader>
              <CardContent className="text-muted-foreground">Key milestone achieved with partners across industries.</CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
