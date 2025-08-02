import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import ContactCard from '@/components/ContactCard';
import AppointmentSection from '@/components/AppointmentSection';
import OurOffersSection from '@/components/OurOffersSection';
import GallerySection from '@/components/GallerySection';
import QRCodeSection from '@/components/QRCodeSection';
import LocationSection from '@/components/LocationSection';
import ContactUsSection from '@/components/ContactUsSection';
import FooterSection from '@/components/FooterSection';
import LanguageSelector from '@/components/LanguageSelector';

const Index = () => {
  const [showLoading, setShowLoading] = useState(true);

  const handleLoadingComplete = () => {
    setShowLoading(false);
  };

  if (showLoading) {
    return <LoadingScreen onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-lg mx-auto space-y-8">
        {/* YouTube Video */}
        <YouTubeEmbed />
        
        {/* Main Contact Card */}
        <ContactCard />
        
        {/* Language Selector */}
        <LanguageSelector />
        
        {/* Appointment Section */}
        <AppointmentSection />
        
        {/* Our Offers Section */}
        <OurOffersSection />
        
        {/* Gallery Section */}
        <GallerySection />
        
        {/* QR Code Section */}
        <QRCodeSection />
        
        {/* Location Section */}
        <LocationSection />
        
        {/* Contact Us Section */}
        <ContactUsSection />
        
        {/* Footer */}
        <FooterSection />
      </div>
    </div>
  );
};

export default Index;
