import { useState, useRef } from 'react';
import { Search, ShoppingCart } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const OurOffersSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [total, setTotal] = useState(0);
  
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle search functionality
    alert(`Searching for: ${searchQuery}`);
  };

  const handleContinueToCart = () => {
    // Handle cart functionality
    alert('Continue to Cart - Feature coming soon!');
  };

  return (
    <div 
      ref={ref}
      className={`w-full max-w-md mx-auto bg-card rounded-3xl p-8 shadow-[var(--card-shadow)] mb-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
      }`}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-secondary mb-2">Our Offers</h2>
        <div className="w-20 h-0.5 bg-secondary"></div>
      </div>

      {/* Search Section */}
      <form onSubmit={handleSearch} className={`mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} style={{ transitionDelay: '200ms' }}>
        <div className="relative">
          <Input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-card-foreground text-card pr-12 placeholder:text-muted-foreground border-none"
          />
          <Button
            type="submit"
            size="sm"
            className="absolute right-1 top-1 bottom-1 bg-muted hover:bg-muted/80 text-card-foreground px-3"
          >
            <Search className="w-4 h-4" />
          </Button>
        </div>
      </form>

      {/* Cart Section */}
      <div className={`bg-muted rounded-2xl p-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '400ms' }}>
        <div className="flex items-center justify-between mb-4">
          <span className="text-card-foreground font-semibold">Total:</span>
          <span className="text-card-foreground text-lg font-bold">₹{total} INR</span>
        </div>
        
        <Button
          onClick={handleContinueToCart}
          className="w-full bg-accent hover:bg-accent/90 text-accent-foreground py-3 transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
        >
          Continue to Cart
          <ShoppingCart className="w-4 h-4" />
        </Button>
      </div>

      {/* Info Badge */}
      <div className={`mt-4 text-center transition-all duration-500 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`} style={{ transitionDelay: '600ms' }}>
        <div className="inline-flex items-center justify-center w-6 h-6 bg-secondary text-secondary-foreground rounded-full text-xs font-bold">
          0
        </div>
      </div>
    </div>
  );
};

export default OurOffersSection;