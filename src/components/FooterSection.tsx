import { useRef } from 'react';
import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const FooterSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  const handleCreateCard = () => {
    window.open('https://limeio.in', '_blank');
  };

  return (
    <div 
      ref={ref}
      className={`w-full max-w-md mx-auto text-center py-8 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '200ms' }}>
        <Button
          onClick={handleCreateCard}
          className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
        >
          <ExternalLink className="w-4 h-4 mr-2" />
          Create Your Card / Become Franchisee
        </Button>
      </div>

      <div className={`mt-6 text-card/60 text-sm transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
        <p>Click here</p>
      </div>

      {/* Powered by */}
      <div className={`mt-8 text-card/40 text-xs transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '600ms' }}>
        <p>Powered by LimeIO Digital Business Cards</p>
      </div>
    </div>
  );
};

export default FooterSection;