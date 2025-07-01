
import { useState } from "react";
import { ArrowRight, Bot, Code, Zap, Users, Star, CheckCircle2, Mail, Phone, MessageCircle, Linkedin, Instagram, Github } from "lucide-react";
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
    <div className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-500/20 via-transparent to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-purple-500/20 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20">
              <span className="text-cyan-400 text-sm font-medium">🔮 Welcome to the Future of Digital Innovation</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-cyan-200 to-purple-300 bg-clip-text text-transparent leading-tight">
              Build Smarter.<br />
              Market Better.<br />
              <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                Lead the Future
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Empowering businesses with AI-driven digital strategies, full-stack development, and career-ready tech internships.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25">
                Get a Free Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105">
                Apply for Internship
              </Button>
            </div>
          </div>
        </div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </section>

      {/* Who We Are */}
      <section className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              ✨ Welcome to Zidi Digitals
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              At Zidi Digitals, we blend creativity, code, and AI to craft next-generation digital experiences. 
              Whether you're building a brand, launching an app, or beginning your tech career—we're your trusted partner.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              🛠️ Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything your business or career needs, all under one roof.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Zap, title: "Digital Marketing", desc: "AI-powered campaigns that convert" },
              { icon: Code, title: "Web & Mobile Apps", desc: "Scalable, user-centric development" },
              { icon: Bot, title: "AI Integration", desc: "Smart automation and insights" },
              { icon: Users, title: "Internship Programs", desc: "Real-world tech career training" }
            ].map((service, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/10">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
                    <service.icon className="h-8 w-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                  <p className="text-gray-400">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-6">
          <div className="space-y-20">
            {/* Digital Marketing */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  📈 Digital Marketing
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  From content creation to paid ads and SEO, we use AI to drive smarter campaigns, better reach, and higher ROI.
                </p>
                <ul className="space-y-3">
                  {["AI-powered ad targeting", "SEO optimization", "Content strategy", "Social media management"].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-2xl p-8 border border-cyan-500/20">
                <div className="text-center">
                  <div className="text-4xl mb-4">📊</div>
                  <p className="text-gray-300">Smart Analytics Dashboard</p>
                </div>
              </div>
            </div>

            {/* App Development */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-purple-500/20">
                <div className="text-center">
                  <div className="text-4xl mb-4">📱</div>
                  <p className="text-gray-300">Cross-Platform Development</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                  📱 App & Web Development
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  We craft user-centric, scalable websites and mobile apps (Android & iOS) tailored to your goals and audience.
                </p>
                <ul className="space-y-3">
                  {["React & React Native", "Full-stack solutions", "Cloud deployment", "Performance optimization"].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* AI Integration */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-green-400 to-cyan-500 bg-clip-text text-transparent">
                  🤖 AI Integration
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Integrate cutting-edge AI into your apps and marketing. Features like chatbots, recommendation systems, smart analytics, and automation.
                </p>
                <ul className="space-y-3">
                  {["Custom chatbots", "Predictive analytics", "Automation workflows", "Machine learning models"].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 rounded-2xl p-8 border border-green-500/20">
                <div className="text-center">
                  <div className="text-4xl mb-4">🧠</div>
                  <p className="text-gray-300">AI-Powered Solutions</p>
                </div>
              </div>
            </div>

            {/* Internships */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1 bg-gradient-to-br from-purple-500/10 to-cyan-500/10 rounded-2xl p-8 border border-purple-500/20">
                <div className="text-center">
                  <div className="text-4xl mb-4">🎓</div>
                  <p className="text-gray-300">Career Development Program</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h3 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                  🎓 Internship Programs
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Gain hands-on experience in real-world projects across development, marketing, and AI — mentored by our expert team.
                </p>
                <ul className="space-y-3">
                  {["Real project experience", "Expert mentorship", "Industry certifications", "Job placement support"].map((item, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle2 className="h-5 w-5 text-green-400 mr-3" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Zidi */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              💡 Why Choose Zidi?
            </h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { title: "AI-Powered Everything", desc: "Every solution leverages cutting-edge AI technology" },
              { title: "Real-Time Project Internships", desc: "Learn by working on actual client projects" },
              { title: "Agile Delivery", desc: "Fast, iterative development with transparent pricing" },
              { title: "End-to-End Solutions", desc: "From concept to deployment and beyond" },
              { title: "Expert Team", desc: "Experienced professionals in every domain" },
              { title: "Future-Ready", desc: "Built for tomorrow's technology landscape" }
            ].map((item, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600 hover:border-cyan-500/50 transition-all duration-300">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-cyan-400">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-b from-slate-900 to-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              🌟 Success Stories
            </h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { text: "Our app was built in 3 weeks, and the response was incredible!", author: "Sarah Chen, Startup Founder" },
              { text: "The AI marketing doubled our traffic in just 2 months.", author: "Mike Rodriguez, E-commerce Owner" },
              { text: "Interning at Zidi Digitals taught me more than 4 years of college!", author: "Priya Sharma, Software Developer" }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                  <p className="text-cyan-400 font-semibold">— {testimonial.author}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-slate-950">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              📬 Get In Touch with Zidi Digitals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Let's talk about how we can help your business grow or how you can launch your tech career with us.
            </p>
          </div>
          
          <div className="max-w-2xl mx-auto">
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 border-slate-600">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                      <Input 
                        placeholder="Your name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                      <Input 
                        type="email"
                        placeholder="your@email.com"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Phone</label>
                      <Input 
                        placeholder="Your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">Service</label>
                      <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                        <SelectTrigger className="bg-slate-700 border-slate-600 text-white">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-700 border-slate-600">
                          <SelectItem value="marketing">Digital Marketing</SelectItem>
                          <SelectItem value="development">App Development</SelectItem>
                          <SelectItem value="ai">AI Integration</SelectItem>
                          <SelectItem value="internship">Internship Program</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                    <Textarea 
                      placeholder="Tell us about your project or career goals..."
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-slate-700 border-slate-600 text-white placeholder:text-gray-400 min-h-[120px]"
                    />
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button type="submit" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white flex-1">
                      <Mail className="mr-2 h-4 w-4" />
                      Submit
                    </Button>
                    <Button type="button" className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white flex-1">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      WhatsApp Us Now
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 border-t border-slate-800">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-4">
                Zidi Digitals
              </h3>
              <p className="text-gray-400 mb-4">
                Building the future of digital innovation, one project at a time.
              </p>
              <div className="flex space-x-4">
                {[Linkedin, Instagram, Github].map((Icon, index) => (
                  <div key={index} className="w-10 h-10 bg-gradient-to-r from-slate-700 to-slate-600 rounded-full flex items-center justify-center hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 cursor-pointer">
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {["Home", "Services", "Internships", "Contact"].map((link, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                {["Digital Marketing", "Web Development", "Mobile Apps", "AI Integration"].map((service, index) => (
                  <li key={index}>
                    <a href="#" className="text-gray-400 hover:text-cyan-400 transition-colors">
                      {service}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Zidi Digitals. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
