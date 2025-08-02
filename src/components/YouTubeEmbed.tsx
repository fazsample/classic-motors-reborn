import { useState } from 'react';
import { Play } from 'lucide-react';

const YouTubeEmbed = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const videoId = "WBdC35JLMiE"; // Piaggio Apé Electrik FX Range video

  const loadVideo = () => {
    setIsLoaded(true);
  };

  return (
    <div className="w-full max-w-md mx-auto mb-6 animate-slideUp">
      <div className="relative bg-card rounded-2xl overflow-hidden shadow-[var(--card-shadow)]">
        {!isLoaded ? (
          <div 
            className="relative cursor-pointer group"
            onClick={loadVideo}
          >
            <img
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt="Piaggio Apé Electrik FX Range"
              className="w-full h-48 object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center group-hover:bg-black/40 transition-colors">
              <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                <Play className="w-6 h-6 text-white ml-1" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
              <p className="text-white text-sm font-medium">
                Piaggio Apé Electrik FX Range - Apé goes Electric, India goes Electric
              </p>
              <p className="text-white/80 text-xs">
                View: 3086
              </p>
            </div>
          </div>
        ) : (
          <iframe
            width="100%"
            height="240"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
            title="Piaggio Apé Electrik FX Range"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full"
          />
        )}
      </div>
    </div>
  );
};

export default YouTubeEmbed;