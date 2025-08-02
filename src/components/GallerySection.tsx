import { useRef } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const GallerySection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  // Sample gallery data based on the original website
  const galleryItems = [
    {
      id: 1,
      title: "Piaggio Apé Auto",
      description: "Starting from ₹2,50,000",
      color: "bg-gradient-to-br from-green-400 to-green-600"
    },
    {
      id: 2,
      title: "Electric Range",
      description: "Eco-friendly solutions",
      color: "bg-gradient-to-br from-blue-400 to-blue-600"
    },
    {
      id: 3,
      title: "Commercial Vehicles",
      description: "Business solutions",
      color: "bg-gradient-to-br from-orange-400 to-orange-600"
    },
    {
      id: 4,
      title: "Three Wheeler",
      description: "Reliable transport",
      color: "bg-gradient-to-br from-purple-400 to-purple-600"
    },
    {
      id: 5,
      title: "Apé City+",
      description: "Urban mobility",
      color: "bg-gradient-to-br from-teal-400 to-teal-600"
    },
    {
      id: 6,
      title: "Special Offers",
      description: "Limited time deals",
      color: "bg-gradient-to-br from-red-400 to-red-600"
    }
  ];

  return (
    <div 
      ref={ref}
      className={`w-full max-w-md mx-auto bg-card rounded-3xl p-8 shadow-[var(--card-shadow)] mb-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-secondary mb-2">Gallery</h2>
        <div className="w-20 h-0.5 bg-secondary"></div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            className={`${item.color} rounded-xl p-4 h-32 flex flex-col justify-between text-white shadow-lg cursor-pointer transition-all duration-500 hover:scale-105 hover:shadow-xl ${
              isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-4 -rotate-2'
            }`}
            style={{ 
              transitionDelay: `${200 + index * 100}ms`,
              transformOrigin: 'center'
            }}
          >
            <div>
              <h3 className="font-bold text-sm mb-1">{item.title}</h3>
              <p className="text-xs opacity-90">{item.description}</p>
            </div>
            
            {/* Piaggio logo placeholder */}
            <div className="text-right">
              <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center text-xs font-bold">
                P
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* View All Button */}
      <div className={`mt-6 text-center transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '800ms' }}>
        <button className="text-secondary hover:text-secondary/80 text-sm font-medium transition-colors">
          View All Gallery →
        </button>
      </div>
    </div>
  );
};

export default GallerySection;