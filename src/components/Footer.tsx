import { Linkedin, Instagram, Github, Mail } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">Zidi Digital Solutions</h3>
            <p className="text-muted-foreground mt-3 max-w-md">
              Empowering the digital future with product innovation, service excellence, and next‑gen talent development.
            </p>
            <a href="mailto:zididigitals@gmail.com" className="inline-flex items-center gap-2 text-sm text-foreground mt-4">
              <Mail className="h-4 w-4" /> zididigitals@gmail.com
            </a>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About</Link></li>
              <li><Link to="/services" className="hover:text-foreground transition-colors">Services</Link></li>
              <li><Link to="/consultancy" className="hover:text-foreground transition-colors">Consultancy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold mb-3">Connect</h4>
            <div className="flex gap-4 text-muted-foreground">
              <a href="#" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="h-5 w-5"/></a>
              <a href="#" aria-label="Instagram" className="hover:text-primary"><Instagram className="h-5 w-5"/></a>
              <a href="#" aria-label="GitHub" className="hover:text-primary"><Github className="h-5 w-5"/></a>
            </div>
          </div>
        </div>

        <div className="pt-6 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">© {new Date().getFullYear()} Zidi Digital Solutions. All rights reserved.</p>
          <div className="text-xs text-muted-foreground">Built with care and innovation.</div>
        </div>
      </div>
    </footer>
  );
}
