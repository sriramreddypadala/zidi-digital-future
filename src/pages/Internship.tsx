import { useSEO } from "@/hooks/useSEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, Star } from "lucide-react";

export default function Internship() {
  useSEO({
    title: "Internships | Zidi Digital Solutions",
    description: "Live projects, mentorship, and certifications to launch your tech career.",
    canonicalPath: "/internship",
  });

  return (
    <main className="container max-w-6xl mx-auto px-6 py-16">
      <header className="max-w-2xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Internship & Training Programs</h1>
        <p className="text-muted-foreground mt-4">Student‑first culture with real projects, structured learning paths, and mentorship.</p>
      </header>

      <section className="mt-10 grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Programs</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Web & App Development Training</li>
              <li>Live Project Internships</li>
              <li>Digital Marketing Internships</li>
              <li>Certification & Mentorship</li>
            </ul>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Testimonials</CardTitle>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground flex flex-col gap-4">
            {[1,2].map((i) => (
              <p key={i} className="flex items-start gap-2"><Star className="h-4 w-4 text-accent mt-1"/> “Great mentorship and real‑world exposure!”</p>
            ))}
          </CardContent>
        </Card>
      </section>

      <section className="mt-10">
        <Card>
          <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-2"><GraduationCap className="h-5 w-5 text-accent"/> <CardTitle>Apply Now</CardTitle></div>
            <Button asChild><a href="#apply">Start Application</a></Button>
          </CardHeader>
          <CardContent id="apply" className="text-sm text-muted-foreground">
            Send your resume and a short note to zididigitals@gmail.com with subject “Internship Application”. A simple form will be added soon.
          </CardContent>
        </Card>
      </section>
    </main>
  );
}
