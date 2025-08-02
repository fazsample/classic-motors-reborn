import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';

const LanguageSelector = () => {
  const [showSelector, setShowSelector] = useState(false);

  const handleLanguageChange = () => {
    // For now, just show an alert since the full implementation would require i18n
    alert('Language selection feature - Contact developer for multi-language support');
  };

  return (
    <div className="text-center mt-6 animate-fadeIn">
      <Button
        onClick={handleLanguageChange}
        variant="outline"
        size="sm"
        className="bg-primary/10 border-primary/30 text-primary hover:bg-primary/20 transition-all duration-300"
      >
        <Globe className="w-4 h-4 mr-2" />
        Change Language 🌐
      </Button>
    </div>
  );
};

export default LanguageSelector;