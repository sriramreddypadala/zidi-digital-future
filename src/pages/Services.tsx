import { 
  Package, 
  Code, 
  TrendingUp, 
  GraduationCap, 
  Smartphone, 
  Globe, 
  Cloud, 
  Search,
  Share2,
  PenTool,
  Users,
  Award,
  ArrowRight,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Package,
      title: "Product Development",
      description: "End-to-end product development from concept to launch",
      features: [
        "Custom Software Solutions",
        "SaaS Product Design & Launch", 
        "Mobile App Development (Android/iOS)",
        "Web Application Development"
      ],
      color: "text-primary"
    },
    {
      icon: Code,
      title: "Software & Web Development", 
      description: "Comprehensive development services for all your technical needs",
      features: [
        "Business Websites & eCommerce",
        "Web Portals & Dashboards",
        "Cloud Integration",
        "API Development & Automation"
      ],
      color: "text-secondary"
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing & Branding",
      description: "Strategic marketing solutions to grow your digital presence",
      features: [
        "SEO & SEM",
        "Social Media Marketing",
        "Content Creation & Management",
        "Branding & Identity Design"
      ],
      color: "text-accent"
    },
    {
      icon: GraduationCap,
      title: "Internship & Training Programs",
      description: "Comprehensive career development and skill building programs",
      features: [
        "Web & App Development Training",
        "Live Project Internships",
        "Digital Marketing Internships",
        "Certification & Mentorship"
      ],
      color: "text-primary"
    }
  ];

  const subServices = [
    { icon: Smartphone, title: "Mobile Development", category: "Product" },
    { icon: Globe, title: "Web Development", category: "Development" },
    { icon: Cloud, title: "Cloud Solutions", category: "Development" },
    { icon: Search, title: "SEO Optimization", category: "Marketing" },
    { icon: Share2, title: "Social Media", category: "Marketing" },
    { icon: PenTool, title: "Content Creation", category: "Marketing" },
    { icon: Users, title: "Team Training", category: "Training" },
    { icon: Award, title: "Certification", category: "Training" },
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="text-primary text-sm font-medium tracking-wide">OUR SERVICES</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Comprehensive{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Digital Solutions
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              From cutting-edge product development to strategic marketing and career development, 
              we provide end-to-end solutions for your success.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/20 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg group"
              >
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20`}>
                      <service.icon className={`h-7 w-7 ${service.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-card-foreground mb-2">
                        {service.title}
                      </CardTitle>
                      <p className="text-muted-foreground">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-card-foreground">
                        <CheckCircle2 className="h-4 w-4 text-primary mr-3 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button 
                    className="w-full bg-gradient-primary hover:opacity-90 text-white"
                    asChild
                  >
                    <Link to="/contact">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Sub Services */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Specialized Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our comprehensive range of specialized services ensures we can handle 
              every aspect of your digital transformation journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {subServices.map((subService, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/20 transition-all duration-300 transform hover:scale-105 hover:shadow-md group"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 mb-4">
                    <subService.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {subService.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {subService.category}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Our Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We follow a proven methodology to ensure project success and client satisfaction
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {["Discovery", "Strategy", "Development", "Launch"].map((step, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-primary text-white font-bold text-xl mb-4">
                  {index + 1}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step}</h3>
                <p className="text-muted-foreground">
                  {index === 0 && "Understanding your needs and objectives"}
                  {index === 1 && "Creating a roadmap for success"}
                  {index === 2 && "Building with precision and care"}
                  {index === 3 && "Delivering and supporting your solution"}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Let's discuss your project and find the perfect solution for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white text-primary border-white hover:bg-white/90"
              asChild
            >
              <Link to="/contact">
                Get a Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/contact">
                Apply for Internship
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;