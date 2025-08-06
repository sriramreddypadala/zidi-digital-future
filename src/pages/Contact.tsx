import { useState } from "react";
import { Mail, Phone, MapPin, Send, ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email Us",
      details: "zididigitals@gmail.com",
      subtext: "We'll respond within 24 hours"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91 XXX XXX XXXX",
      subtext: "Mon-Fri, 9AM-6PM IST"
    },
    {
      icon: MapPin,
      title: "Visit Us",
      details: "India",
      subtext: "Schedule an appointment"
    }
  ];

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <span className="text-primary text-sm font-medium tracking-wide">CONTACT US</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-foreground tracking-tight">
              Let's Build Something{" "}
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Great Together
              </span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Ready to transform your ideas into reality? Whether you're looking for innovative solutions 
              or career opportunities, we're here to help you succeed.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold mb-8 text-foreground">
                Get in Touch
              </h2>
              <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
                Have a project in mind or looking to join our team? We'd love to hear from you. 
                Reach out using any of the methods below or fill out our contact form.
              </p>

              <div className="space-y-6 mb-12">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-card border-border hover:border-primary/20 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 border border-primary/20">
                          <info.icon className="h-6 w-6 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-card-foreground mb-1">
                            {info.title}
                          </h3>
                          <p className="text-foreground font-medium mb-1">{info.details}</p>
                          <p className="text-sm text-muted-foreground">{info.subtext}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* WhatsApp CTA */}
              <Card className="bg-gradient-primary text-white border-0">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-xl font-bold mb-2">WhatsApp Us Now</h3>
                      <p className="text-white/90">Quick response guaranteed</p>
                    </div>
                    <Button 
                      size="lg" 
                      variant="outline"
                      className="bg-white text-primary border-white hover:bg-white/90"
                    >
                      <MessageCircle className="mr-2 h-5 w-5" />
                      Chat Now
                    </Button>
                  </div>
                  <div className="mt-4 text-sm text-white/80">
                    💬 Usually responds within 1 hour
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="bg-card border-border shadow-lg">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-card-foreground">
                    Send us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name" className="text-sm font-medium text-card-foreground">
                          Full Name *
                        </Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({...formData, name: e.target.value})}
                          placeholder="Enter your full name"
                          className="mt-1"
                          required
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-sm font-medium text-card-foreground">
                          Email Address *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({...formData, email: e.target.value})}
                          placeholder="Enter your email"
                          className="mt-1"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium text-card-foreground">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="Enter your phone number"
                        className="mt-1"
                      />
                    </div>

                    <div>
                      <Label htmlFor="service" className="text-sm font-medium text-card-foreground">
                        Service Interest *
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => setFormData({...formData, service: value})}>
                        <SelectTrigger className="mt-1">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="product-development">Product Development</SelectItem>
                          <SelectItem value="web-development">Web Development</SelectItem>
                          <SelectItem value="mobile-development">Mobile App Development</SelectItem>
                          <SelectItem value="digital-marketing">Digital Marketing</SelectItem>
                          <SelectItem value="internship">Internship Program</SelectItem>
                          <SelectItem value="consultation">General Consultation</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-sm font-medium text-card-foreground">
                        Project Details *
                      </Label>
                      <Textarea
                        id="message"
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({...formData, message: e.target.value})}
                        placeholder="Tell us about your project, goals, timeline, or any specific requirements..."
                        className="mt-1 resize-none"
                        required
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-primary hover:opacity-90 text-white font-medium"
                    >
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-secondary">
        <div className="container mx-auto px-6 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join the growing list of businesses and professionals who have chosen 
            Zidi Digital Solutions as their trusted technology partner.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-gradient-primary hover:opacity-90">
              Get a Quote
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline">
              Apply for Internship
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;