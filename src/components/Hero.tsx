import { ArrowRight, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-950 via-cyber-blue-900 to-electric-purple-900">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyber-blue-500/30 via-transparent to-transparent"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-electric-purple-500/30 via-transparent to-transparent"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-neon-cyan-500/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-electric-purple-500/20 rounded-full blur-xl animate-float delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-cyber-blue-500/20 rounded-full blur-xl animate-float delay-500"></div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-6xl mx-auto animate-fade-in">
          {/* Mission statement badge */}
          <div className="mb-8 inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-neon-cyan-500/20 to-electric-purple-500/20 border border-neon-cyan-500/30 backdrop-blur-sm">
            <span className="text-neon-cyan-300 text-sm font-medium font-futuristic tracking-wide">
              🚀 INNOVATION • TRUST • EXCELLENCE
            </span>
          </div>
          
          {/* Main mission-driven headline */}
          <h1 className="text-5xl md:text-7xl font-bold mb-8 font-futuristic leading-tight">
            <span className="bg-gradient-to-r from-white via-neon-cyan-200 to-electric-purple-300 bg-clip-text text-transparent">
              Transforming Ideas Into
            </span>
            <br />
            <span className="bg-gradient-to-r from-neon-cyan-400 to-electric-purple-500 bg-clip-text text-transparent animate-glow">
              Digital Success Stories
            </span>
          </h1>
          
          {/* Clear mission subheadline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
            We deliver <span className="text-neon-cyan-400 font-semibold">cutting-edge products</span>, 
            <span className="text-electric-purple-400 font-semibold"> comprehensive services</span>, 
            <span className="text-cyber-blue-400 font-semibold"> powerful marketing</span>, and 
            <span className="text-neon-cyan-400 font-semibold"> career opportunities</span> that drive real results.
          </p>
          
          {/* Strong CTAs */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Button size="lg" className="bg-gradient-to-r from-neon-cyan-500 to-cyber-blue-600 hover:from-neon-cyan-600 hover:to-cyber-blue-700 text-white px-10 py-5 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-neon-cyan-500/40 animate-glow">
              Start Your Project
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-electric-purple-500 text-electric-purple-300 hover:bg-electric-purple-500 hover:text-white px-10 py-5 text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 backdrop-blur-sm">
              Join Our Team
              <Rocket className="ml-3 h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};