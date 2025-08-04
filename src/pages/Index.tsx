import { Linkedin, Instagram, Github } from "lucide-react";
import { Hero } from "@/components/Hero";
import { CoreOfferings } from "@/components/CoreOfferings";
import { ContactSection } from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <Hero />

      {/* Core Offerings - The main focus */}
      <CoreOfferings />

      {/* Contact Section */}
      <ContactSection />

      {/* Footer */}
      <footer className="py-16 bg-background border-t border-border">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="mb-6">
                <h3 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                  Zidi Digitals
                </h3>
                <p className="text-muted-foreground mt-2">Transforming ideas into digital success stories</p>
              </div>
              <p className="text-muted-foreground leading-relaxed max-w-md">
                We blend innovation, expertise, and passion to deliver exceptional digital solutions that drive real business growth and create meaningful career opportunities.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Home</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Our Services</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Products</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Career Programs</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>
            
            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Our Offerings</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Product Solutions</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Service Solutions</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Digital Marketing</a></li>
                <li><a href="#" className="text-muted-foreground hover:text-accent transition-colors">Career Programs</a></li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Bar */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm mb-4 md:mb-0">
              © 2025 Zidi Digitals. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;