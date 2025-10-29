import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import RouteTransition from "@/components/RouteTransition";
import Landing from "./pages/Landing";
import Index from "./pages/Index";
import About from "./pages/About";
import Services from "./pages/Services";
import Consultancy from "./pages/Consultancy";
import Internship from "./pages/Internship";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showLanding, setShowLanding] = useState(true);

  const handlePreloaderComplete = () => {
    setIsLoading(false);
    // Auto-redirect to home after 3 seconds on landing page
    setTimeout(() => {
      setShowLanding(false);
    }, 8000); // Show landing for 8 seconds
  };

  const handleSkipToHome = () => {
    setShowLanding(false);
  };

  return (
    <>
      <Preloader onComplete={handlePreloaderComplete} />
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {/* Main content - only show after preloader */}
            <div className={`transition-opacity duration-500 ${isLoading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
              <div className="min-h-screen">
                {showLanding ? (
                  /* Landing Page - no navbar/footer */
                  <main>
                    <RouteTransition>
                      <Routes>
                        <Route path="/" element={<Landing onSkip={handleSkipToHome} />} />
                        <Route path="*" element={<Landing onSkip={handleSkipToHome} />} />
                      </Routes>
                    </RouteTransition>
                  </main>
                ) : (
                  /* Regular App with navbar/footer */
                  <>
                    <Navbar />
                    <main>
                      <RouteTransition>
                        <Routes>
                          <Route path="/" element={<Index />} />
                          <Route path="/about" element={<About />} />
                          <Route path="/services" element={<Services />} />
                          <Route path="/consultancy" element={<Consultancy />} />
                          <Route path="/internship" element={<Internship />} />
                          <Route path="/contact" element={<Contact />} />
                          {/* Catch-all */}
                          <Route path="*" element={<NotFound />} />
                        </Routes>
                      </RouteTransition>
                    </main>
                    <Footer />
                  </>
                )}
              </div>
            </div>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
