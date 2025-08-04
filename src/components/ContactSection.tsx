import { useState } from "react";
import { Mail, Phone, MessageCircle, Send, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export const ContactSection = () => {
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

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "hello@zididigitals.com",
      subtext: "24/7 response time"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      subtext: "Mon-Fri 9AM-6PM"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "123 Innovation Hub, Tech City",
      subtext: "Modern co-working space"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-slate-900 to-slate-950 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-electric-purple-900/20 via-transparent to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 animate-fade-in">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-neon-cyan-500/10 to-electric-purple-500/10 border border-neon-cyan-500/20 mb-6">
            <MessageCircle className="h-5 w-5 text-neon-cyan-400 mr-2" />
            <span className="text-neon-cyan-300 text-sm font-medium font-futuristic">GET IN TOUCH</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-8 font-futuristic bg-gradient-to-r from-neon-cyan-400 to-electric-purple-500 bg-clip-text text-transparent">
            Let's Build Something Amazing Together
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Ready to transform your ideas into reality? Get in touch and let's discuss how we can help your business grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-8">
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 border-slate-600/50 backdrop-blur-sm hover:border-neon-cyan-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-neon-cyan-500/20 to-electric-purple-500/20 border border-neon-cyan-500/30">
                        <info.icon className="h-6 w-6 text-neon-cyan-400" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-white font-futuristic mb-1">{info.title}</h3>
                        <p className="text-gray-300 font-medium">{info.details}</p>
                        <p className="text-sm text-gray-400">{info.subtext}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Quick Actions */}
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp Us Now
              </Button>
              <div className="text-center">
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyber-blue-500/10 to-neon-cyan-500/10 border border-cyber-blue-500/20">
                  <Clock className="h-4 w-4 text-cyber-blue-400 mr-2" />
                  <span className="text-cyber-blue-300 text-sm font-medium">Usually responds within 1 hour</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-gradient-to-br from-slate-800/60 to-slate-700/60 border-slate-600/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 font-futuristic">Full Name</label>
                      <Input
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-neon-cyan-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 font-futuristic">Email Address</label>
                      <Input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-neon-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  {/* Phone & Service Row */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 font-futuristic">Phone Number</label>
                      <Input
                        placeholder="Enter your phone number"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-neon-cyan-500 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300 font-futuristic">Service Interest</label>
                      <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                        <SelectTrigger className="bg-slate-900/50 border-slate-600 text-white focus:border-neon-cyan-500">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-800 border-slate-600">
                          <SelectItem value="product-solutions">Product-Based Solutions</SelectItem>
                          <SelectItem value="service-solutions">Service-Based Solutions</SelectItem>
                          <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                          <SelectItem value="internship">Internship Program</SelectItem>
                          <SelectItem value="consultation">Free Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300 font-futuristic">Project Details</label>
                    <Textarea
                      placeholder="Tell us about your project, goals, or questions..."
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="bg-slate-900/50 border-slate-600 text-white placeholder:text-gray-400 focus:border-neon-cyan-500 transition-colors resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    size="lg" 
                    className="w-full bg-gradient-to-r from-neon-cyan-500 to-cyber-blue-600 hover:from-neon-cyan-600 hover:to-cyber-blue-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] shadow-xl hover:shadow-neon-cyan-500/40"
                  >
                    Send Message & Get Free Quote
                    <Send className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};