import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface PreloaderProps {
  onComplete?: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);

  useEffect(() => {
    // Simulate loading process
    const loadingTimer = setTimeout(() => {
      setProgress(100);
      setTimeout(() => {
        setIsLoading(false);
        onComplete?.();
      }, 800);
    }, 4000); // Extended to 4 seconds for better brand exposure

    // Progress animation
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 95) return prev;
        return prev + Math.random() * 10;
      });
    }, 300);

    return () => {
      clearTimeout(loadingTimer);
      clearInterval(progressInterval);
    };
  }, [onComplete]);

  const handleVideoLoaded = () => {
    setVideoLoaded(true);
  };

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 bg-background flex items-center justify-center">
      {/* Video Background */}
      <div className="absolute inset-0 overflow-hidden">
        <video
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover opacity-50 transition-opacity duration-1000 scale-110"
          onLoadedData={handleVideoLoaded}
          onEnded={() => {
            setProgress(100);
            setTimeout(() => setIsLoading(false), 800);
          }}
        >
          <source src="/brand-video.mp4" type="video/mp4" />
        </video>
        
        {/* Professional gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/75 to-background/90">
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-background/20 to-transparent"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center">
        {/* Animated Logo */}
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <img 
              src="/logo.jpeg" 
              alt="Zidi Digital Solutions – Internship Programs India | Career Development by Divyesh Bondapalli" 
              className={`h-32 w-auto object-contain transition-all duration-1000 ${videoLoaded ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}
            />
            {/* Glow effect */}
            <div className="absolute inset-0 blur-3xl bg-primary/30 scale-150 animate-pulse"></div>
          </div>
        </div>

        {/* Brand Messaging */}
        <div className="mb-12 space-y-4">
          <h1 className={`text-3xl md:text-4xl font-bold bg-gradient-primary bg-clip-text text-transparent transition-all duration-1000 delay-300 ${videoLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            Zidi Digital Solutions
          </h1>
          <p className={`text-lg md:text-xl text-muted-foreground transition-all duration-1000 delay-500 ${videoLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            Transforming Ideas Into Digital Success
          </p>
          <div className={`inline-flex items-center px-4 py-2 rounded-full bg-primary/10 border border-primary/20 transition-all duration-1000 delay-700 ${videoLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
            <span className="text-primary text-sm font-medium tracking-wide">
              🚀 INNOVATION • TRUST • EXCELLENCE
            </span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className={`w-80 mx-auto transition-all duration-1000 delay-1000 ${videoLoaded ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}>
          <div className="h-2 bg-secondary rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-primary transition-all duration-300 ease-out rounded-full relative"
              style={{ width: `${progress}%` }}
            >
              {/* Animated shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"></div>
            </div>
          </div>
          <div className="mt-3 flex justify-between items-center">
            <p className="text-xs text-muted-foreground">
              {progress < 30 ? 'Initializing amazing experiences...' : 
               progress < 60 ? 'Loading digital solutions...' : 
               progress < 90 ? 'Almost ready...' : 
               'Welcome to your digital future!'}
            </p>
            <p className="text-xs text-primary font-medium">
              {Math.round(progress)}%
            </p>
          </div>
        </div>

        {/* Loading Dots */}
        <div className={`mt-8 flex justify-center space-x-2 transition-all duration-1000 delay-1200 ${videoLoaded ? 'opacity-100' : 'opacity-0'}`}>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
          <div className="w-3 h-3 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
          <div className="w-3 h-3 bg-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
        </div>
      </div>

      {/* Skip button for impatient users */}
      <button
        onClick={() => {
          setProgress(100);
          setTimeout(() => setIsLoading(false), 300);
        }}
        className="absolute bottom-8 right-8 text-xs text-muted-foreground hover:text-foreground transition-colors z-20"
      >
        Skip Intro →
      </button>
    </div>
  );
};

export default Preloader;
