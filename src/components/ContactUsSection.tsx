import { useState, useRef } from 'react';
import { Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const ContactUsSection = () => {
  const [query, setQuery] = useState('');
  
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    
    // Send query via WhatsApp
    const message = `Hi, I have a query: ${query}`;
    window.open(`https://api.whatsapp.com/send?phone=919496000445&text=${encodeURIComponent(message)}`);
    setQuery('');
  };

  return (
    <div 
      ref={ref}
      className={`w-full max-w-md mx-auto bg-card rounded-3xl p-8 shadow-[var(--card-shadow)] mb-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-secondary mb-2 flex items-center gap-2">
          <MessageCircle className="w-6 h-6" />
          Contact Us
        </h2>
        <div className="w-20 h-0.5 bg-secondary"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '200ms' }}>
          <Textarea
            placeholder="Enter your query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="min-h-[120px] bg-card-foreground border-none text-card placeholder:text-muted-foreground resize-none"
            required
          />
        </div>

        <Button
          type="submit"
          className={`w-full bg-green-600 hover:bg-green-700 text-white py-3 transition-all duration-500 hover:scale-105 flex items-center justify-center gap-2 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <Send className="w-4 h-4" />
          Send
        </Button>
      </form>

      {/* Quick Contact Info */}
      <div className={`mt-6 p-4 bg-muted rounded-2xl transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '600ms' }}>
        <p className="text-card-foreground text-sm text-center mb-2">
          <strong>Quick Response via WhatsApp</strong>
        </p>
        <p className="text-muted-foreground text-xs text-center">
          We typically respond within 30 minutes during business hours
        </p>
      </div>
    </div>
  );
};

export default ContactUsSection;