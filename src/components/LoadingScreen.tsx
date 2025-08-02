import { useEffect, useState } from 'react';

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const newProgress = oldProgress + 1;
        if (newProgress === 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500); // Small delay before showing main content
        }
        return newProgress;
      });
    }, 100); // 10 seconds total (100ms * 100 = 10000ms)

    return () => {
      clearInterval(timer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="text-center animate-fadeIn">
        {/* Logo */}
        <div className="mb-8 animate-bounce">
          <div className="w-24 h-24 mx-auto bg-primary rounded-full flex items-center justify-center shadow-lg">
            <span className="text-2xl font-bold text-primary-foreground">CM</span>
          </div>
        </div>

        {/* Brand Name */}
        <h1 className="text-4xl font-bold text-card mb-2 animate-slideUp">
          Classic Motors
        </h1>
        <p className="text-lg text-card/80 mb-8 animate-slideUp">
          Piaggio Official Dealer
        </p>

        {/* Loading Bar */}
        <div className="w-64 mx-auto">
          <div className="w-full bg-card/20 rounded-full h-2 mb-4">
            <div 
              className="bg-secondary h-2 rounded-full transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-card/70 text-sm">
            Loading... {progress}%
          </p>
        </div>

        {/* Spinning Loader */}
        <div className="mt-8">
          <div className="w-8 h-8 border-2 border-card/20 border-t-secondary rounded-full animate-spin mx-auto" />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;