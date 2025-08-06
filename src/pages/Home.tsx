import { ArrowRight, Rocket, Users, Target, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Home = () => {
  const features = [
    {
      icon: Rocket,
      title: "Innovation First",
      description: "Cutting-edge technology solutions that drive your business forward"
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Dedicated professionals with deep technical expertise"
    },
    {
      icon: Target,
      title: "Results Driven",
      description: "Focused on delivering measurable business outcomes"
    },
    {
      icon: Trophy,
      title: "Proven Success",
      description: "Track record of successful projects and satisfied clients"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse-glow"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-6 relative z-10 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            {/* Hero Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
              <span className="text-primary text-sm font-medium tracking-wide">
                ZIDI DIGITAL SOLUTIONS
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground tracking-tight animate-fade-in-up">
              Empowering the{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Digital Future
              </span>
            </h1>

            {/* Subheadline */}
            <h2 className="text-xl md:text-2xl lg:text-3xl font-medium mb-8 text-muted-foreground animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              One Solution at a Time
            </h2>

            {/* Description */}
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-12 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              We are a forward-thinking technology company specializing in product-based innovations and service-driven solutions. From startups to enterprises, we're your trusted partner in digital transformation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 text-white border-0 font-medium px-8 py-4 text-lg rounded-xl shadow-primary transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white font-medium px-8 py-4 text-lg rounded-xl transform hover:scale-105 transition-all duration-300"
                asChild
              >
                <Link to="/contact">
                  Apply for Internship
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Why Choose Zidi Digital Solutions?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine innovation, expertise, and dedication to deliver exceptional results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                    <feature.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-overlay opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals with our innovative solutions and expert team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white text-primary border-white hover:bg-white/90 font-medium px-8 py-4 text-lg rounded-xl"
              asChild
            >
              <Link to="/contact">
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-primary font-medium px-8 py-4 text-lg rounded-xl"
              asChild
            >
              <Link to="/services">
                Explore Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;