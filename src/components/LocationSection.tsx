import { useRef } from 'react';
import { MapPin, Navigation } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const LocationSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  const address = "8/4, Chungam, Feroke, Kozhikode, 633631";
  const coordinates = "11.1695,75.8278"; // Approximate coordinates for Feroke, Kozhikode

  const handleGetDirections = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`);
  };

  const handleViewLargerMap = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`);
  };

  return (
    <div 
      ref={ref}
      className={`w-full max-w-md mx-auto bg-card rounded-3xl p-8 shadow-[var(--card-shadow)] mb-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-secondary mb-2">Location Address</h2>
        <div className="w-20 h-0.5 bg-secondary"></div>
      </div>

      {/* Address Info */}
      <div className={`mb-4 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '200ms' }}>
        <p className="text-card-foreground text-sm">
          Showing result: {address}
        </p>
      </div>

      {/* Map Container */}
      <div className={`mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ transitionDelay: '300ms' }}>
        <div className="relative bg-gray-200 rounded-2xl overflow-hidden h-64 shadow-lg">
          {/* Map Placeholder with styling similar to Google Maps */}
          <div className="w-full h-full bg-gradient-to-br from-blue-100 via-green-50 to-blue-50 relative">
            {/* Road lines */}
            <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,180 Q160,140 320,180" stroke="#9CA3AF" strokeWidth="3" fill="none" />
              <path d="M80,0 Q120,160 160,320" stroke="#9CA3AF" strokeWidth="2" fill="none" />
              <path d="M200,0 Q240,160 280,320" stroke="#D1D5DB" strokeWidth="2" fill="none" />
            </svg>
            
            {/* Location Pin */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-full">
              <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                <MapPin className="w-5 h-5 text-white" fill="currentColor" />
              </div>
              <div className="w-1 h-8 bg-red-500 mx-auto"></div>
            </div>

            {/* Location Label */}
            <div className="absolute top-1/3 left-1/4 bg-white rounded-lg px-3 py-2 shadow-md">
              <p className="text-xs font-semibold text-gray-800">Classic Motors</p>
              <p className="text-xs text-gray-600">Piaggio Dealer</p>
            </div>

            {/* Zoom Controls */}
            <div className="absolute bottom-4 right-4 bg-white rounded-lg shadow-md">
              <button className="block w-8 h-8 flex items-center justify-center border-b text-gray-600 hover:bg-gray-50">+</button>
              <button className="block w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50">−</button>
            </div>

            {/* Google Maps attribution */}
            <div className="absolute bottom-1 left-1 text-xs text-gray-500 bg-white/80 px-1 rounded">
              Map data ©2025
            </div>
          </div>

          {/* Directions Button */}
          <div className="absolute top-4 left-4">
            <Button
              onClick={handleGetDirections}
              size="sm"
              className="bg-blue-600 hover:bg-blue-700 text-white shadow-lg"
            >
              <Navigation className="w-4 h-4 mr-1" />
              Directions
            </Button>
          </div>
        </div>
      </div>

      {/* Map Actions */}
      <div className={`text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '500ms' }}>
        <Button
          onClick={handleViewLargerMap}
          variant="outline"
          className="text-primary border-primary hover:bg-primary/10"
        >
          View larger map
        </Button>
      </div>
    </div>
  );
};

export default LocationSection;