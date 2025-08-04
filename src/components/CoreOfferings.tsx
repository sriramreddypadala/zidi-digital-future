import { ArrowRight, Package, Settings, Target, GraduationCap, Zap, Users, Star, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export const CoreOfferings = () => {
  const offerings = [
    {
      icon: Package,
      title: "Product-Based Solutions",
      subtitle: "Ready-to-Deploy Software Products",
      description: "From SaaS platforms to mobile applications, our pre-built products are designed to solve real business challenges with minimal setup time.",
      features: ["SaaS Applications", "Mobile App Templates", "E-commerce Solutions", "Business Automation Tools"],
      gradient: "from-neon-cyan-500/20 to-cyber-blue-500/20",
      iconColor: "text-neon-cyan-400",
      borderColor: "hover:border-neon-cyan-500/50",
      ctaText: "Explore Products",
      visual: "🎯"
    },
    {
      icon: Settings,
      title: "Service-Based Solutions",
      subtitle: "Custom Development & Consulting",
      description: "Tailored solutions built from the ground up to meet your unique business requirements with full-stack expertise.",
      features: ["Custom Web Development", "Mobile App Development", "Cloud Solutions", "Technical Consulting"],
      gradient: "from-electric-purple-500/20 to-cyber-blue-500/20",
      iconColor: "text-electric-purple-400",
      borderColor: "hover:border-electric-purple-500/50",
      ctaText: "Get Custom Solution",
      visual: "⚙️"
    },
    {
      icon: Target,
      title: "Digital Marketing",
      subtitle: "AI-Powered Growth Strategies",
      description: "Data-driven marketing campaigns that convert visitors into customers using cutting-edge AI and automation technologies.",
      features: ["SEO & Content Marketing", "Social Media Management", "PPC Advertising", "Analytics & Optimization"],
      gradient: "from-cyber-blue-500/20 to-neon-cyan-500/20",
      iconColor: "text-cyber-blue-400",
      borderColor: "hover:border-cyber-blue-500/50",
      ctaText: "Boost Your Growth",
      visual: "📊"
    },
    {
      icon: GraduationCap,
      title: "Internship Opportunities",
      subtitle: "Launch Your Tech Career",
      description: "Comprehensive training programs with real-world project experience, mentorship, and industry connections to jumpstart your career.",
      features: ["Full-Stack Development", "Digital Marketing Training", "AI/ML Workshops", "Career Mentorship"],
      gradient: "from-electric-purple-500/20 to-neon-cyan-500/20",
      iconColor: "text-electric-purple-400",
      borderColor: "hover:border-electric-purple-500/50",
      ctaText: "Apply for Internship",
      visual: "🚀"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-electric-purple-900/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-electric-purple-500/10 to-neon-cyan-500/10 border border-electric-purple-500/20 mb-6">
            <Star className="h-5 w-5 text-electric-purple-400 mr-2" />
            <span className="text-electric-purple-300 text-sm font-medium font-futuristic">OUR CORE OFFERINGS</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-futuristic bg-gradient-to-r from-neon-cyan-400 to-electric-purple-500 bg-clip-text text-transparent">
            Four Pillars of Success
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Whether you need ready-made products, custom solutions, powerful marketing, or career growth—we've got you covered.
          </p>
        </div>

        {/* Core Offerings Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {offerings.map((offering, index) => (
            <Card 
              key={index} 
              className={`bg-gradient-to-br ${offering.gradient} border-slate-600 ${offering.borderColor} transition-all duration-500 transform hover:scale-[1.02] hover:shadow-2xl backdrop-blur-sm animate-scale-in group overflow-hidden`} 
              style={{animationDelay: `${index * 150}ms`}}
            >
              <CardContent className="p-8">
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${offering.gradient} border border-slate-600`}>
                      <offering.icon className={`h-8 w-8 ${offering.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white font-futuristic mb-1">{offering.title}</h3>
                      <p className="text-sm text-gray-400 font-medium">{offering.subtitle}</p>
                    </div>
                  </div>
                  <div className="text-4xl opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    {offering.visual}
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  {offering.description}
                </p>

                {/* Features */}
                <div className="grid md:grid-cols-2 gap-3 mb-8">
                  {offering.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle2 className={`h-4 w-4 ${offering.iconColor} mr-3 flex-shrink-0`} />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button 
                  size="lg" 
                  className={`w-full bg-gradient-to-r ${offering.gradient} border border-slate-600 text-white hover:brightness-110 transition-all duration-300 font-semibold rounded-xl group-hover:shadow-lg`}
                >
                  {offering.ctaText}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid md:grid-cols-4 gap-8 mt-16">
          {[
            { number: "100+", label: "Successful Projects", icon: Target },
            { number: "50+", label: "Happy Clients", icon: Users },
            { number: "25+", label: "Career Launches", icon: GraduationCap },
            { number: "24/7", label: "Support Available", icon: Zap }
          ].map((stat, index) => (
            <Card key={index} className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 border-slate-600/50 backdrop-blur-sm text-center p-6 hover:border-neon-cyan-500/50 transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 100}ms`}}>
              <stat.icon className="h-6 w-6 text-neon-cyan-400 mx-auto mb-3" />
              <div className="text-2xl font-bold text-white font-futuristic mb-1">{stat.number}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};