import { 
  Zap, 
  Users, 
  Target, 
  GraduationCap, 
  CheckCircle, 
  Eye,
  Award,
  Clock,
  Shield,
  Lightbulb,
  TrendingUp,
  Heart,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  const mainReasons = [
    {
      icon: Zap,
      title: "Cutting-Edge Technology",
      description: "We leverage the latest technologies and frameworks to build future-ready solutions that give you a competitive advantage.",
      benefits: ["Latest Tech Stack", "Scalable Architecture", "Future-Proof Solutions", "Performance Optimized"]
    },
    {
      icon: Users,
      title: "Dedicated Team of Experts",
      description: "Our passionate team combines technical excellence with creative problem-solving to deliver exceptional results.",
      benefits: ["Experienced Professionals", "Diverse Skill Sets", "Collaborative Approach", "Continuous Learning"]
    },
    {
      icon: Target,
      title: "Product + Service Synergy",
      description: "Unique combination of product development expertise and service delivery excellence for comprehensive solutions.",
      benefits: ["End-to-End Solutions", "Integrated Approach", "Faster Time to Market", "Seamless Experience"]
    },
    {
      icon: GraduationCap,
      title: "Student-First Internship Culture",
      description: "We're committed to nurturing the next generation of tech leaders through comprehensive mentorship programs.",
      benefits: ["Real Project Experience", "Industry Mentorship", "Career Development", "Skill Certification"]
    },
    {
      icon: CheckCircle,
      title: "End-to-End Project Execution",
      description: "From initial concept to final deployment and ongoing support, we handle every aspect of your project.",
      benefits: ["Complete Project Lifecycle", "Quality Assurance", "Post-Launch Support", "Maintenance & Updates"]
    },
    {
      icon: Eye,
      title: "Transparent Process, Real Results",
      description: "Clear communication, regular updates, and measurable outcomes ensure you're always in control.",
      benefits: ["Regular Updates", "Clear Milestones", "Measurable ROI", "Open Communication"]
    }
  ];

  const additionalBenefits = [
    { icon: Award, title: "Proven Track Record", description: "100+ successful projects delivered" },
    { icon: Clock, title: "On-Time Delivery", description: "95% projects completed on schedule" },
    { icon: Shield, title: "Quality Assurance", description: "Rigorous testing and QA processes" },
    { icon: Lightbulb, title: "Innovation Focus", description: "Always exploring new possibilities" },
    { icon: TrendingUp, title: "Growth Partnership", description: "We grow as your business grows" },
    { icon: Heart, title: "Client-Centric", description: "Your success is our success" }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="text-primary text-sm font-medium tracking-wide">WHY CHOOSE US</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Why Partner with{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Zidi Digital Solutions?
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              We combine innovation, expertise, and dedication to deliver solutions that 
              drive real business growth and create meaningful opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Main Reasons */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-8">
            {mainReasons.map((reason, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/20 transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg group"
              >
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                      <reason.icon className="h-7 w-7 text-primary group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-card-foreground mb-2">
                        {reason.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {reason.description}
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    {reason.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm">
                        <CheckCircle className="h-4 w-4 text-primary mr-2 flex-shrink-0" />
                        <span className="text-card-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Benefits */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Additional Benefits
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              More reasons why businesses and students choose us as their trusted technology partner
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalBenefits.map((benefit, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/20 transition-all duration-300 transform hover:scale-105 hover:shadow-md group"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 mb-4 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <benefit.icon className="h-6 w-6 text-primary group-hover:text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {benefit.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Our Track Record Speaks
            </h2>
            <p className="text-lg text-muted-foreground">
              Numbers that demonstrate our commitment to excellence
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { number: "100+", label: "Projects Delivered", sublabel: "Successful implementations" },
              { number: "50+", label: "Happy Clients", sublabel: "Long-term partnerships" },
              { number: "25+", label: "Careers Launched", sublabel: "Professional growth stories" },
              { number: "24/7", label: "Support Available", sublabel: "Always here when you need us" }
            ].map((stat, index) => (
              <Card key={index} className="bg-card border-border text-center p-8 hover:border-primary/20 transition-all duration-300">
                <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
                <div className="text-lg font-semibold text-card-foreground mb-1">{stat.label}</div>
                <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial Preview */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            "The Perfect Technology Partner"
          </h2>
          <p className="text-xl text-white/90 mb-6">
            "Zidi Digital Solutions combines technical excellence with genuine care for client success. 
            Their team doesn't just deliver projects – they deliver solutions that transform businesses."
          </p>
          <p className="text-white/80 mb-8">— Happy Client</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white text-primary border-white hover:bg-white/90"
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
              className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/contact">
                Join Our Team
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhyChooseUs;