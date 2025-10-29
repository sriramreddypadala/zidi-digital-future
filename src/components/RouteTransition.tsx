import { useEffect, useState } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

interface RouteTransitionProps {
  children: React.ReactNode;
}

const RouteTransition = ({ children }: RouteTransitionProps) => {
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [currentPath, setCurrentPath] = useState("/");
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // Detect route change
    if (location.pathname !== currentPath) {
      setIsTransitioning(true);
      
      // Show transition video for 1.5 seconds
      const transitionTimer = setTimeout(() => {
        setCurrentPath(location.pathname);
        setIsTransitioning(false);
      }, 1500);

      return () => clearTimeout(transitionTimer);
    }
  }, [location.pathname, currentPath]);

  return (
    <>
      {/* Route Transition Overlay */}
      {isTransitioning && (
        <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
          {/* Video Background */}
          <div className="absolute inset-0 overflow-hidden">
            <video
              autoPlay
              muted
              playsInline
              className="w-full h-full object-cover opacity-60 scale-110"
            >
              <source src="/brand-video.mp4" type="video/mp4" />
            </video>
            
            {/* Professional gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-background/85 via-background/70 to-background/85">
              <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-b from-background/15 to-transparent"></div>
            </div>
          </div>

          {/* Transition Content */}
          <div className="relative z-10 text-center">
            {/* Animated Logo */}
            <div className="mb-6 flex justify-center">
              <div className="relative">
                <img 
                  src="/logo.jpeg" 
                  alt="Zidi Digital Solutions | IT Consultancy Services India | Divyesh Bondapalli Founder" 
                  className="h-24 w-auto object-contain animate-pulse"
                />
                {/* Glow effect */}
                <div className="absolute inset-0 blur-3xl bg-primary/30 scale-150 animate-pulse"></div>
              </div>
            </div>

            {/* Navigation Message */}
            <div className="space-y-3">
              <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
                {navigationType === "POP" ? "Returning to Excellence" : "Navigating to Excellence"}
              </h2>
              <p className="text-muted-foreground">
                {navigationType === "POP" ? "Welcome back to amazing digital solutions..." : "Discovering amazing digital solutions..."}
              </p>
            </div>

            {/* Loading Dots */}
            <div className="mt-8 flex justify-center space-x-2">
              <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
              <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
              <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
            </div>

            {/* Progress Bar */}
            <div className="mt-6 w-64 mx-auto">
              <div className="h-1 bg-secondary rounded-full overflow-hidden">
                <div className="h-full bg-gradient-primary animate-shimmer rounded-full"></div>
              </div>
              <p className="text-xs text-muted-foreground mt-2">
                Loading {location.pathname === "/" ? "Home" : 
                       location.pathname === "/about" ? "About Us" :
                       location.pathname === "/services" ? "Our Services" :
                       location.pathname === "/consultancy" ? "Consultancy" :
                       location.pathname === "/internship" ? "Internship Program" :
                       location.pathname === "/contact" ? "Contact" : "Page"}...
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Page Content */}
      <div className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        {children}
      </div>
    </>
  );
};

export default RouteTransition;
