import { useState, useRef } from 'react';
import { QrCode, Share2, Download, Copy } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const QRCodeSection = () => {
  const [phoneNumber, setPhoneNumber] = useState('+91');
  const [countryCode, setCountryCode] = useState('+91');
  
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  const currentUrl = "https://Classic-Motors.limeio.in";

  const handleShare = () => {
    const message = `Check out Classic Motors - Piaggio Official Dealer: ${currentUrl}`;
    window.open(`https://api.whatsapp.com/send?phone=${phoneNumber.replace(/\D/g, '')}&text=${encodeURIComponent(message)}`);
  };

  const handleCopyUrl = () => {
    navigator.clipboard.writeText(currentUrl);
    alert('URL copied to clipboard!');
  };

  const handleDownloadPDF = () => {
    // Generate PDF card functionality
    alert('PDF Card download feature - Contact developer for implementation');
  };

  const handleShareGeneral = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Classic Motors',
        text: 'Piaggio Official Dealer',
        url: currentUrl,
      });
    } else {
      handleCopyUrl();
    }
  };

  return (
    <div 
      ref={ref}
      className={`w-full max-w-md mx-auto bg-card rounded-3xl p-8 shadow-[var(--card-shadow)] mb-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-secondary mb-2">Scan QR Code to go to Visiting Card</h2>
        <div className="w-20 h-0.5 bg-secondary"></div>
      </div>

      {/* QR Code Display */}
      <div className={`text-center mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-75'}`} style={{ transitionDelay: '200ms' }}>
        <div className="bg-white p-4 rounded-2xl shadow-lg inline-block">
          <div className="w-48 h-48 bg-gray-100 rounded-lg flex items-center justify-center">
            {/* QR Code placeholder - in real implementation, use a QR code library */}
            <div className="w-40 h-40 bg-black relative">
              <div className="absolute inset-2 bg-white"></div>
              <div className="absolute inset-4 bg-black grid grid-cols-8 gap-1 p-2">
                {Array.from({ length: 32 }).map((_, i) => (
                  <div key={i} className={`aspect-square ${Math.random() > 0.5 ? 'bg-white' : 'bg-black'}`}></div>
                ))}
              </div>
              {/* Limeio logo in center */}
              <div className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primary rounded flex items-center justify-center">
                <span className="text-white text-xs font-bold">L</span>
              </div>
            </div>
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-secondary mt-4">CLASSIC MOTORS</h3>
      </div>

      {/* URL Display */}
      <div className={`mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '400ms' }}>
        <div className="bg-card-foreground rounded-lg p-3 flex items-center justify-between">
          <span className="text-card text-sm font-medium">{currentUrl}</span>
          <Button
            onClick={handleCopyUrl}
            size="sm"
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <Copy className="w-4 h-4" />
          </Button>
        </div>
      </div>

      {/* WhatsApp Share */}
      <div className={`mb-6 transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`} style={{ transitionDelay: '500ms' }}>
        <div className="flex gap-2">
          <select 
            value={countryCode}
            onChange={(e) => setCountryCode(e.target.value)}
            className="bg-muted text-card-foreground border border-border rounded px-3 py-2"
          >
            <option value="+91">🇮🇳 +91</option>
            <option value="+1">🇺🇸 +1</option>
            <option value="+44">🇬🇧 +44</option>
          </select>
          <Input
            placeholder="WhatsApp Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="flex-1 bg-muted border-border text-card-foreground"
          />
          <Button
            onClick={handleShare}
            className="bg-green-600 hover:bg-green-700 text-white px-6"
          >
            Share on WhatsApp
          </Button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={`flex gap-3 transition-all duration-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ transitionDelay: '600ms' }}>
        <Button
          onClick={handleShareGeneral}
          className="flex-1 bg-muted hover:bg-muted/80 text-card-foreground"
        >
          <Share2 className="w-4 h-4 mr-2" />
          Share
        </Button>
        
        <Button
          onClick={handleDownloadPDF}
          className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
        >
          <Download className="w-4 h-4 mr-2" />
          Download PDF Card
        </Button>
      </div>
    </div>
  );
};

export default QRCodeSection;