import { useState } from 'react';
import LoadingScreen from '@/components/LoadingScreen';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import ContactCard from '@/components/ContactCard';
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
      <div className="max-w-lg mx-auto">
        {/* YouTube Video */}
        <YouTubeEmbed />
        
        {/* Contact Card */}
        <ContactCard />
        
        {/* Language Selector */}
        <LanguageSelector />
      </div>
    </div>
  );
};

export default Index;
