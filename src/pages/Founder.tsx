import { Linkedin, Mail, Award, Users, Target, Lightbulb, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const Founder = () => {
  const achievements = [
    {
      icon: Award,
      title: "Technical Excellence",
      description: "Deep expertise in modern technologies and software architecture"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Proven track record of building and leading high-performing teams"
    },
    {
      icon: Target,
      title: "Business Acumen",
      description: "Strategic vision combined with practical execution capabilities"
    },
    {
      icon: Lightbulb,
      title: "Innovation Focus",
      description: "Passionate about creating solutions that drive real business value"
    }
  ];

  const experience = [
    {
      role: "Founder & Managing Director",
      company: "Zidi Digital Solutions",
      period: "2021 - Present",
      description: "Leading the company's vision and strategic direction while maintaining hands-on involvement in technical projects."
    },
    {
      role: "Senior Software Engineer",
      company: "Previous Organizations",
      period: "2018 - 2021",
      description: "Developed expertise in full-stack development and gained valuable industry experience."
    },
    {
      role: "Technology Consultant",
      company: "Freelance",
      period: "2017 - 2018",
      description: "Provided technical consulting services to various startups and small businesses."
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
                <span className="text-primary text-sm font-medium tracking-wide">MEET OUR FOUNDER</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
                Divyesh Bondapalli
              </h1>
              <p className="text-2xl text-primary font-medium mb-6">
                Visionary. Technophile. Entrepreneur.
              </p>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Founder & Managing Director with a passion for creating innovative digital solutions 
                that transform businesses and empower the next generation of tech leaders.
              </p>
              <div className="flex gap-4">
                <Button size="lg" className="bg-gradient-primary hover:opacity-90" asChild>
                  <Link to="/contact">
                    Get in Touch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-primary rounded-2xl p-8 text-center">
                {/* Placeholder for professional headshot */}
                <div className="w-48 h-48 mx-auto rounded-full bg-white/20 border-4 border-white/30 flex items-center justify-center mb-6">
                  <div className="text-white/60 text-sm">Professional Photo</div>
                </div>
                <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                  <h3 className="text-xl font-bold text-white mb-2">Contact Information</h3>
                  <div className="space-y-2 text-white/90">
                    <div className="flex items-center justify-center gap-2">
                      <Mail className="h-4 w-4" />
                      <span className="text-sm">zididigitals@gmail.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground text-center">
              Leadership Philosophy
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                Divyesh Bondapalli founded Zidi Digital Solutions with a clear vision: to bridge the gap 
                between cutting-edge technology and practical business solutions. His unique combination of 
                deep technical expertise and entrepreneurial acumen has positioned the company as a trusted 
                partner for organizations seeking digital transformation.
              </p>
              <p>
                With a background in software engineering and a passion for innovation, Divyesh brings 
                a hands-on approach to leadership. He believes that the best solutions emerge from a 
                deep understanding of both technology and business needs, ensuring that every project 
                delivers real value to clients.
              </p>
              <p>
                Beyond building successful businesses, Divyesh is deeply committed to nurturing talent 
                and creating opportunities for the next generation of tech professionals. Through Zidi's 
                comprehensive internship programs, he has mentored numerous students and helped launch 
                careers in the technology industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Key Strengths */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Key Strengths & Expertise
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              The combination of technical expertise and business vision that drives our success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card 
                key={index}
                className="bg-card border-border hover:border-primary/20 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                <CardContent className="p-6 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 border border-primary/20 mb-4">
                    <achievement.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-3">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {achievement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Professional Journey
            </h2>
            <p className="text-lg text-muted-foreground">
              A timeline of growth, learning, and achievement
            </p>
          </div>

          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="bg-card border-border">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-card-foreground mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-primary font-medium mb-2">{exp.company}</p>
                      <p className="text-muted-foreground">{exp.description}</p>
                    </div>
                    <div className="md:text-right">
                      <span className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
                        {exp.period}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-primary">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Let's Build Something Great Together
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Ready to discuss your project or explore career opportunities? 
            I'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline"
              className="bg-white text-primary border-white hover:bg-white/90"
              asChild
            >
              <Link to="/contact">
                Start a Conversation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="bg-transparent text-white border-white hover:bg-white hover:text-primary"
              asChild
            >
              <Link to="/services">
                Explore Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Founder;