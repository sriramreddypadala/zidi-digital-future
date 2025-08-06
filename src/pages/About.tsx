import { Target, Users, Lightbulb, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Mission Driven",
      description: "Empowering businesses and individuals through innovative digital solutions that create lasting impact."
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of technology trends to deliver cutting-edge solutions that give you a competitive advantage."
    },
    {
      icon: Users,
      title: "People Focused",
      description: "Building strong relationships with clients and nurturing the next generation of tech leaders."
    },
    {
      icon: Award,
      title: "Excellence Always",
      description: "Committed to delivering high-quality solutions that exceed expectations and drive real results."
    }
  ];

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "25+", label: "Careers Launched" },
    { number: "3+", label: "Years Experience" }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="text-primary text-sm font-medium tracking-wide">ABOUT US</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Building the Future of{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Digital Innovation
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Zidi Digital Solutions is your trusted partner for digital transformation, 
              combining product-based innovations with comprehensive service solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
                Who We Are
              </h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Founded with a vision to bridge the gap between innovative technology and 
                  practical business solutions, Zidi Digital Solutions has emerged as a 
                  trusted innovation partner for organizations ranging from ambitious startups 
                  to established enterprises.
                </p>
                <p className="text-lg leading-relaxed">
                  Our unique approach combines product-based innovations with service-driven 
                  solutions, ensuring that every client receives not just a solution, but a 
                  strategic advantage in their digital journey.
                </p>
                <p className="text-lg leading-relaxed">
                  Beyond serving businesses, we're deeply committed to nurturing the next 
                  generation of tech leaders through our comprehensive internship and training 
                  programs, creating a ecosystem where learning and innovation thrive together.
                </p>
              </div>
              <Button className="mt-8 bg-gradient-primary hover:opacity-90" size="lg" asChild>
                <Link to="/founder">
                  Meet Our Founder
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-gradient-primary rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg opacity-90 mb-6">
                  To be the leading catalyst for digital transformation, creating innovative 
                  solutions that empower businesses and shape the future of technology.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="text-2xl font-bold">{stat.number}</div>
                      <div className="text-sm opacity-80">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Our Core Values
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These principles guide everything we do and shape how we serve our clients and community
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                    <value.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {value.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you're looking for innovative solutions or career opportunities, 
            we're here to help you succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90" asChild>
              <Link to="/contact">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link to="/services">
                View Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;