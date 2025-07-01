
import { useState } from "react";
import { ArrowRight, Bot, Code, Zap, Users, Star, CheckCircle2, Mail, Phone, MessageCircle, Linkedin, Instagram, Github, Target, Sparkles, Brain, Rocket, Award, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Index = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden font-sans">
      {/* Hero Section - Enhanced with better typography and visuals */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-cyber-blue-900 to-electric-purple-900">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyber-blue-500/30 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-electric-purple-500/30 via-transparent to-transparent"></div>
        
        {/* Animated background elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-neon-cyan-500/20 rounded-full blur-xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-electric-purple-500/20 rounded-full blur-xl animate-float delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyber-blue-500/20 rounded-full blur-xl animate-float delay-500"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-6xl mx-auto animate-fade-in">
            {/* Brand badge */}
            <div className="mb-8 inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-neon-cyan-500/20 to-electric-purple-500/20 border border-neon-cyan-500/30 backdrop-blur-sm">
              <span className="text-neon-cyan-300 text-sm font-medium font-futuristic tracking-wide">🔮 WELCOME TO THE FUTURE OF DIGITAL INNOVATION</span>
            </div>
            
            {/* Main heading with enhanced typography */}
            <h1 className="text-6xl md:text-8xl font-bold mb-8 font-futuristic leading-tight">
              <span className="bg-gradient-to-r from-white via-neon-cyan-200 to-electric-purple-300 bg-clip-text text-transparent">
                Build Smarter.
              </span>
              <br />
              <span className="bg-gradient-to-r from-neon-cyan-200 via-white to-electric-purple-300 bg-clip-text text-transparent">
                Market Better.
              </span>
              <br />
              <span className="bg-gradient-to-r from-neon-cyan-400 to-electric-purple-500 bg-clip-text text-transparent animate-glow">
                Lead the Future
              </span>
            </h1>
            
            {/* Enhanced subheading */}
            <p className="text-xl md:text-3xl text-gray-300 mb-12 max-w-5xl mx-auto leading-relaxed font-light">
              Empowering businesses with <span className="text-neon-cyan-400 font-semibold">AI-driven digital strategies</span>, 
              <span className="text-electric-purple-400 font-semibold"> full-stack development</span>, and 
              <span className="text-cyber-blue-400 font-semibold"> career-ready tech internships</span>.
            </p>
            
            {/* Enhanced CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-neon-cyan-500 to-cyber-blue-600 hover:from-neon-cyan-600 hover:to-cyber-blue-700 text-white px-10 py-5 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-neon-cyan-500/40 animate-glow">
                Get a Free Quote
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
              <Button size="lg" variant="outline" className="border-2 border-electric-purple-500 text-electric-purple-300 hover:bg-electric-purple-500 hover:text-white px-10 py-5 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
                Apply for Internship
                <Rocket className="ml-3 h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are - Enhanced with better visuals */}
      <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-electric-purple-900/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20 animate-fade-in">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-electric-purple-500/10 to-neon-cyan-500/10 border border-electric-purple-500/20 mb-6">
              <Sparkles className="h-5 w-5 text-electric-purple-400 mr-2" />
              <span className="text-electric-purple-300 text-sm font-medium font-futuristic">ABOUT ZIDI DIGITALS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-futuristic bg-gradient-to-r from-neon-cyan-400 to-electric-purple-500 bg-clip-text text-transparent">
              Welcome to Zidi Digitals
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-5xl mx-auto leading-relaxed">
              At <span className="text-neon-cyan-400 font-semibold">Zidi Digitals</span>, we blend creativity, code, and AI to craft next-generation digital experiences. 
              Whether you're building a brand, launching an app, or beginning your tech career—we're your trusted partner in the digital revolution.
            </p>
          </div>
          
          {/* Stats section */}
          <div className="grid md:grid-cols-4 gap-8 mt-16">
            {[
              { number: "50+", label: "Projects Delivered", icon: Target },
              { number: "100+", label: "Happy Clients", icon: Users },
              { number: "25+", label: "Interns Trained", icon: Award },
              { number: "99%", label: "Success Rate", icon: Shield }
            ].map((stat, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 border-slate-600/50 backdrop-blur-sm text-center p-8 hover:border-neon-cyan-500/50 transition-all duration-300 animate-scale-in" style={{animationDelay: `${index * 100}ms`}}>
                <stat.icon className="h-8 w-8 text-neon-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white font-futuristic mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview - Enhanced cards */}
      <section className="py-24 bg-slate-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-cyber-blue-900/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyber-blue-500/10 to-neon-cyan-500/10 border border-cyber-blue-500/20 mb-6">
              <Code className="h-5 w-5 text-cyber-blue-400 mr-2" />
              <span className="text-cyber-blue-300 text-sm font-medium font-futuristic">OUR SERVICES</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-futuristic bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              Our Core Services
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Everything your business or career needs, all under one innovative roof.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: Zap, 
                title: "Digital Marketing", 
                desc: "AI-powered campaigns that convert visitors into customers",
                gradient: "from-neon-cyan-500/20 to-cyber-blue-500/20",
                iconColor: "text-neon-cyan-400",
                borderColor: "hover:border-neon-cyan-500/50"
              },
              { 
                icon: Code, 
                title: "Web & Mobile Apps", 
                desc: "Scalable, user-centric development for all platforms",
                gradient: "from-electric-purple-500/20 to-cyber-blue-500/20",
                iconColor: "text-electric-purple-400",
                borderColor: "hover:border-electric-purple-500/50"
              },
              { 
                icon: Bot, 
                title: "AI Integration", 
                desc: "Smart automation and intelligent insights for your business",
                gradient: "from-cyber-blue-500/20 to-neon-cyan-500/20",
                iconColor: "text-cyber-blue-400",
                borderColor: "hover:border-cyber-blue-500/50"
              },
              { 
                icon: Users, 
                title: "Internship Programs", 
                desc: "Real-world tech career training with industry mentorship",
                gradient: "from-electric-purple-500/20 to-neon-cyan-500/20",
                iconColor: "text-electric-purple-400",
                borderColor: "hover:border-electric-purple-500/50"
              }
            ].map((service, index) => (
              <Card key={index} className={`bg-gradient-to-br ${service.gradient} border-slate-600 ${service.borderColor} transition-all duration-300 transform hover:scale-105 hover:shadow-xl backdrop-blur-sm animate-scale-in`} style={{animationDelay: `${index * 150}ms`}}>
                <CardContent className="p-8 text-center">
                  <div className={`mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r ${service.gradient} border border-slate-600`}>
                    <service.icon className={`h-10 w-10 ${service.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white font-futuristic">{service.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services - Enhanced with better layouts */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_var(--tw-gradient-stops))] from-electric-purple-900/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="space-y-32">
            {/* Digital Marketing */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-neon-cyan-500/10 to-cyber-blue-500/10 border border-neon-cyan-500/20">
                  <Target className="h-5 w-5 text-neon-cyan-400 mr-2" />
                  <span className="text-neon-cyan-300 text-sm font-medium font-futuristic">DIGITAL MARKETING</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold font-futuristic bg-gradient-to-r from-neon-cyan-400 to-cyber-blue-500 bg-clip-text text-transparent">
                  AI-Powered Marketing Excellence
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  From content creation to paid ads and SEO, we use cutting-edge AI to drive smarter campaigns, 
                  better reach, and significantly higher ROI for your business.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {["AI-powered ad targeting", "Advanced SEO optimization", "Content strategy & creation", "Social media management", "Analytics & reporting", "Conversion optimization"].map((item, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-neon-cyan-400 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-neon-cyan-500/10 to-cyber-blue-500/10 rounded-3xl p-12 border border-neon-cyan-500/20 backdrop-blur-sm animate-float">
                <div className="text-center space-y-6">
                  <div className="text-6xl mb-6">📊</div>
                  <h4 className="text-2xl font-bold text-white font-futuristic">Smart Analytics Dashboard</h4>
                  <p className="text-gray-300">Real-time insights and AI-driven recommendations to optimize your marketing performance.</p>
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-neon-cyan-400">300%</div>
                      <div className="text-sm text-gray-400">ROI Increase</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyber-blue-400">85%</div>
                      <div className="text-sm text-gray-400">Click Rate</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-electric-purple-400">24/7</div>
                      <div className="text-sm text-gray-400">Monitoring</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* App Development */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-electric-purple-500/10 to-neon-cyan-500/10 rounded-3xl p-12 border border-electric-purple-500/20 backdrop-blur-sm animate-float">
                <div className="text-center space-y-6">
                  <div className="text-6xl mb-6">📱</div>
                  <h4 className="text-2xl font-bold text-white font-futuristic">Cross-Platform Excellence</h4>
                  <p className="text-gray-300">Building responsive, scalable applications that work seamlessly across all devices and platforms.</p>
                  <div className="flex justify-center space-x-8 mt-8">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-electric-purple-500/20 to-neon-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl">🌐</span>
                      </div>
                      <div className="text-sm text-gray-400">Web Apps</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-electric-purple-500/20 to-neon-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl">📱</span>
                      </div>
                      <div className="text-sm text-gray-400">Mobile Apps</div>
                    </div>
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-br from-electric-purple-500/20 to-neon-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-2">
                        <span className="text-2xl">☁️</span>
                      </div>
                      <div className="text-sm text-gray-400">Cloud</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-8 animate-fade-in">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-electric-purple-500/10 to-neon-cyan-500/10 border border-electric-purple-500/20">
                  <Code className="h-5 w-5 text-electric-purple-400 mr-2" />
                  <span className="text-electric-purple-300 text-sm font-medium font-futuristic">DEVELOPMENT</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold font-futuristic bg-gradient-to-r from-electric-purple-400 to-neon-cyan-500 bg-clip-text text-transparent">
                  Full-Stack Development Mastery
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  We craft user-centric, scalable websites and mobile apps (Android & iOS) tailored to your specific 
                  goals and audience, using the latest technologies and best practices.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {["React & React Native", "Full-stack solutions", "Cloud deployment", "Performance optimization", "UI/UX design", "Quality assurance"].map((item, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-electric-purple-400 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* AI Integration */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8 animate-fade-in">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyber-blue-500/10 to-neon-cyan-500/10 border border-cyber-blue-500/20">
                  <Brain className="h-5 w-5 text-cyber-blue-400 mr-2" />
                  <span className="text-cyber-blue-300 text-sm font-medium font-futuristic">AI INTEGRATION</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold font-futuristic bg-gradient-to-r from-cyber-blue-400 to-neon-cyan-500 bg-clip-text text-transparent">
                  Next-Gen AI Solutions
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Integrate cutting-edge AI into your apps and marketing strategies. Features like intelligent chatbots, 
                  recommendation systems, smart analytics, and powerful automation workflows.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {["Custom AI chatbots", "Predictive analytics", "Automation workflows", "Machine learning models", "Natural language processing", "Computer vision"].map((item, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-cyber-blue-400 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-gradient-to-br from-cyber-blue-500/10 to-neon-cyan-500/10 rounded-3xl p-12 border border-cyber-blue-500/20 backdrop-blur-sm animate-float">
                <div className="text-center space-y-6">
                  <div className="text-6xl mb-6">🤖</div>
                  <h4 className="text-2xl font-bold text-white font-futuristic">AI-Powered Intelligence</h4>
                  <p className="text-gray-300">Harness the power of artificial intelligence to automate processes and gain valuable insights.</p>
                  <div className="space-y-4 mt-8">
                    <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-gray-300">Processing Speed</span>
                      <span className="text-cyber-blue-400 font-bold">10x Faster</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-gray-300">Accuracy Rate</span>
                      <span className="text-neon-cyan-400 font-bold">99.9%</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg">
                      <span className="text-gray-300">Cost Reduction</span>
                      <span className="text-electric-purple-400 font-bold">65%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Internships */}
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-electric-purple-500/10 to-cyber-blue-500/10 rounded-3xl p-12 border border-electric-purple-500/20 backdrop-blur-sm animate-float">
                <div className="text-center space-y-6">
                  <div className="text-6xl mb-6">🎓</div>
                  <h4 className="text-2xl font-bold text-white font-futuristic">Career Acceleration Program</h4>
                  <p className="text-gray-300">Transform your passion for technology into a thriving career with our comprehensive internship program.</p>
                  <div className="grid grid-cols-2 gap-6 mt-8">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-electric-purple-400 font-futuristic">12</div>
                      <div className="text-sm text-gray-400">Week Program</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyber-blue-400 font-futuristic">95%</div>
                      <div className="text-sm text-gray-400">Job Placement</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-neon-cyan-400 font-futuristic">1:1</div>
                      <div className="text-sm text-gray-400">Mentorship</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-electric-purple-400 font-futuristic">5+</div>
                      <div className="text-sm text-gray-400">Live Projects</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-8 animate-fade-in">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-electric-purple-500/10 to-cyber-blue-500/10 border border-electric-purple-500/20">
                  <Rocket className="h-5 w-5 text-electric-purple-400 mr-2" />
                  <span className="text-electric-purple-300 text-sm font-medium font-futuristic">INTERNSHIPS</span>
                </div>
                <h3 className="text-4xl md:text-5xl font-bold font-futuristic bg-gradient-to-r from-electric-purple-400 to-cyber-blue-400 bg-clip-text text-transparent">
                  Launch Your Tech Career
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Gain hands-on experience in real-world projects across development, marketing, and AI — 
                  mentored by our expert team of industry professionals.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  {["Real project experience", "Expert mentorship", "Industry certifications", "Job placement support", "Portfolio development", "Network building"].map((item, index) => (
                    <div key={index} className="flex items-center text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-electric-purple-400 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Zidi - Enhanced */}
      <section className="py-24 bg-slate-900 relative">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neon-cyan-900/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-neon-cyan-500/10 to-electric-purple-500/10 border border-neon-cyan-500/20 mb-6">
              <Award className="h-5 w-5 text-neon-cyan-400 mr-2" />
              <span className="text-neon-cyan-300 text-sm font-medium font-futuristic">WHY CHOOSE US</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-futuristic bg-gradient-to-r from-neon-cyan-400 to-electric-purple-500 bg-clip-text text-transparent">
              Why Choose Zidi Digitals?
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We're not just another digital agency. We're your partners in digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: "AI-Powered Everything", 
                desc: "Every solution leverages cutting-edge AI technology for superior results",
                icon: Brain,
                gradient: "from-cyber-blue-500/10 to-neon-cyan-500/10",
                iconColor: "text-cyber-blue-400"
              },
              { 
                title: "Real-Time Project Internships", 
                desc: "Learn by working on actual client projects with industry mentorship",
                icon: Users,
                gradient: "from-electric-purple-500/10 to-cyber-blue-500/10",
                iconColor: "text-electric-purple-400"
              },
              { 
                title: "Agile Delivery", 
                desc: "Fast, iterative development with transparent pricing and timelines",
                icon: Zap,
                gradient: "from-neon-cyan-500/10 to-electric-purple-500/10",
                iconColor: "text-neon-cyan-400"
              },
              { 
                title: "End-to-End Solutions", 
                desc: "From concept to deployment, maintenance, and scaling - we handle it all",
                icon: Target,
                gradient: "from-electric-purple-500/10 to-neon-cyan-500/10",
                iconColor: "text-electric-purple-400"
              },
              { 
                title: "Expert Team", 
                desc: "Experienced professionals with proven track records in every technology domain",
                icon: Award,
                gradient: "from-cyber-blue-500/10 to-electric-purple-500/10",
                iconColor: "text-cyber-blue-400"
              },
              { 
                title: "Future-Ready Technology", 
                desc: "Built for tomorrow's technology landscape with scalable, modern architectures",
                icon: Rocket,
                gradient: "from-neon-cyan-500/10 to-cyber-blue-500/10",
                iconColor: "text-neon-cyan-400"
              }
            ].map((item, index) => (
              <Card key={index} className={`bg-gradient-to-br ${item.gradient} border-slate-600 hover:border-${item.iconColor.split('-')[1]}-500/50 transition-all duration-300 transform hover:scale-105 backdrop-blur-sm animate-scale-in`} style={{animationDelay: `${index * 100}ms`}}>
                <CardContent className="p-8">
                  <div className={`mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r ${item.gradient} border border-slate-600`}>
                    <item.icon className={`h-8 w-8 ${item.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-white font-futuristic">{item.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric-purple-900/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-electric-purple-500/10 to-neon-cyan-500/10 border border-electric-purple-500/20 mb-6">
              <Star className="h-5 w-5 text-electric-purple-400 mr-2" />
              <span className="text-electric-purple-300 text-sm font-medium font-futuristic">TESTIMONIALS</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-futuristic bg-gradient-to-r from-electric-purple-400 to-neon-cyan-500 bg-clip-text text-transparent">
              Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Hear from our satisfied clients and successful interns about their transformative experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                text: "Zidi Digitals transformed our business with their AI-powered marketing. Our app was built in just 3 weeks, and the response from users has been absolutely incredible!", 
                author: "Sarah Chen", 
                role: "Startup Founder",
                rating: 5,
                gradient: "from-neon-cyan-500/10 to-cyber-blue-500/10"
              },
              { 
                text: "The AI marketing strategies they implemented doubled our website traffic in just 2 months. Their team's expertise in digital transformation is unmatched.", 
                author: "Mike Rodriguez", 
                role: "E-commerce Owner",
                rating: 5,
                gradient: "from-electric-purple-500/10 to-neon-cyan-500/10"
              },
              { 
                text: "Interning at Zidi Digitals taught me more practical skills than 4 years of college! I landed my dream job immediately after the program.", 
                author: "Priya Sharma", 
                role: "Software Developer",
                rating: 5,
                gradient: "from-cyber-blue-500/10 to-electric-purple-500/10"
              }
            ].map((testimonial, index) => (
              <Card key={index} className={`bg-gradient-to-br ${testimonial.gradient} border-slate-600 backdrop-blur-sm animate-scale-in`} style={{animationDelay: `${index * 150}ms`}}>
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic text-lg leading-relaxed">"{testimonial.text}"</p>
                  <div className="border-t border-slate-600 pt-4">
                    <p className="text-neon-cyan-400 font-semibold font-futuristic">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section - Enhanced */}
      <section className="py-24 bg-slate-950 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neon-cyan-900/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-neon-cyan-500/10 to-electric-purple-500/10 border border-neon-cyan-500/20 mb-6">
              <MessageCircle className="h-5 w-5 text-neon-cyan-400 mr-2" />
              <span className="text-neon-cyan-300 text-sm font-medium font-futuristic">GET IN TOUCH</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 font-futuristic bg-gradient-to-r from-neon-cyan-400 to-electric-purple-500 bg-clip-text text-transparent">
              Let's Build the Future Together
            </h2>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Ready to transform your business or launch your tech career? Let's discuss how we can make it happen.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 border-slate-600 backdrop-blur-sm">
              <CardContent className="p-10">
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3 font-futuristic">Full Name</label>
                      <Input 
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 h-12 rounded-xl backdrop-blur-sm focus:border-neon-cyan-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3 font-futuristic">Email Address</label>
                      <Input 
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 h-12 rounded-xl backdrop-blur-sm focus:border-electric-purple-500 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3 font-futuristic">Phone Number</label>
                      <Input 
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 h-12 rounded-xl backdrop-blur-sm focus:border-cyber-blue-500 transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-3 font-futuristic">Service Interest</label>
                      <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                        <SelectTrigger className="bg-slate-700/50 border-slate-600 text-white h-12 rounded-xl backdrop-blur-sm">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-700 border-slate-600 backdrop-blur-sm">
                          <SelectItem value="marketing">Digital Marketing</SelectItem>
                          <SelectItem value="development">App Development</SelectItem>
                          <SelectItem value="ai">AI Integration</SelectItem>
                          <SelectItem value="internship">Internship Program</SelectItem>
                          <SelectItem value="consultation">Free Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-3 font-futuristic">Tell Us About Your Project</label>
                    <Textarea 
                      placeholder="Describe your project goals, challenges, or career aspirations..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-slate-700/50 border-slate-600 text-white placeholder:text-gray-400 min-h-[140px] rounded-xl backdrop-blur-sm focus:border-neon-cyan-500 transition-colors resize-none"
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" className="bg-gradient-to-r from-neon-cyan-500 to-cyber-blue-600 hover:from-neon-cyan-600 hover:to-cyber-blue-700 text-white flex-1 h-14 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                      <Mail className="mr-3 h-5 w-5" />
                      Send Message
                    </Button>
                    <Button type="button" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white flex-1 h-14 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105">
                      <MessageCircle className="mr-3 h-5 w-5" />
                      WhatsApp Chat
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="py-16 bg-slate-900 border-t border-slate-800 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-900"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="md:col-span-2 space-y-6">
              <h3 className="text-3xl font-bold font-futuristic bg-gradient-to-r from-neon-cyan-400 to-electric-purple-500 bg-clip-text text-transparent">
                Zidi Digitals
              </h3>
              <p className="text-gray-400 text-lg leading-relaxed max-w-md">
                Building the future of digital innovation, one project at a time. 
                Empowering businesses and careers through cutting-edge technology.
              </p>
              <div className="flex space-x-6">
                {[
                  { icon: Linkedin, label: "LinkedIn" },
                  { icon: Instagram, label: "Instagram" },
                  { icon: Github, label: "GitHub" }
                ].map((social, index) => (
                  <div key={index} className="group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full flex items-center justify-center hover:from-neon-cyan-500 hover:to-electric-purple-500 transition-all duration-300 transform hover:scale-110">
                      <social.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-white font-semibold text-lg font-futuristic">Quick Links</h4>
              <ul className="space-y-3">
                {["Home", "Services", "Internships", "About Us", "Contact"].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-neon-cyan-400 transition-colors duration-200 hover:underline">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="space-y-6">
              <h4 className="text-white font-semibold text-lg font-futuristic">Our Services</h4>
              <ul className="space-y-3">
                {["Digital Marketing", "Web Development", "Mobile Apps", "AI Integration", "Internship Programs"].map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-electric-purple-400 transition-colors duration-200 hover:underline">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-center md:text-left">
              © 2025 Zidi Digitals. All rights reserved. Built with ❤️ for the future.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
