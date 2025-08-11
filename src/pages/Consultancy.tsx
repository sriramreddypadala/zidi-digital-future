import { useSEO } from "@/hooks/useSEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Lightbulb, BarChart3, Cloud, Palette, Route } from "lucide-react";
import { Link } from "react-router-dom";

export default function Consultancy() {
  useSEO({
    title: "Consultancy Program | Zidi Digital Solutions",
    description: "Expert guidance and tailored solutions: strategy, tech, UX, cloud, and roadmap.",
    canonicalPath: "/consultancy",
  });

  return (
    <main>
      <section className="bg-gradient-hero">
        <div className="container max-w-6xl mx-auto px-6 py-20">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Expert Guidance. Tailored Solutions.</h1>
          <p className="text-muted-foreground mt-4 max-w-2xl">From discovery to delivery, we align product strategy, technology, and design to unlock growth.</p>
          <div className="mt-6 flex gap-3">
            <Button asChild>
              <Link to="/contact">Schedule Your Consultation Today</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="container max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>What We Offer</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><Target className="h-4 w-4 text-accent"/> Business Strategy & Digital Transformation</li>
              <li className="flex items-center gap-2"><Lightbulb className="h-4 w-4 text-accent"/> Technology Stack Consultation</li>
              <li className="flex items-center gap-2"><Route className="h-4 w-4 text-accent"/> Product & MVP Roadmapping</li>
              <li className="flex items-center gap-2"><Palette className="h-4 w-4 text-accent"/> UI/UX Audit & Enhancement</li>
              <li className="flex items-center gap-2"><Cloud className="h-4 w-4 text-accent"/> Cloud Infrastructure & Scalability</li>
              <li className="flex items-center gap-2"><BarChart3 className="h-4 w-4 text-accent"/> Data‑backed Decision Making</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Why Our Consultancy Works</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Decades of combined industry experience</li>
              <li>Proven track record with startups & enterprises</li>
              <li>Actionable plans with measurable outcomes</li>
              <li>End‑to‑end support through implementation</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      <section className="container max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold">How It Works</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {[
            { title: "1. Discovery Call", desc: "Understand your goals, context, and constraints." },
            { title: "2. Tailored Action Plan", desc: "Clear roadmap with priorities, scope, and timelines." },
            { title: "3. End‑to‑End Support", desc: "We guide execution with reviews and iteration." },
          ].map((s) => (
            <Card key={s.title} className="animate-fade-in-up">
              <CardHeader><CardTitle className="text-lg">{s.title}</CardTitle></CardHeader>
              <CardContent className="text-muted-foreground">{s.desc}</CardContent>
            </Card>
          ))}
        </div>
      </section>
    </main>
  );
}
