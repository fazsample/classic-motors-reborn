import { Phone, Mail, MapPin, Download, CreditCard } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logoImage from '@/assets/classic-motors-logo.png';

interface ContactInfo {
  name: string;
  title: string;
  company: string;
  phone: string;
  email: string;
  address: string;
}

const contactInfo: ContactInfo = {
  name: "BIJU",
  title: "General Manager",
  company: "Classic Motors",
  phone: "+91-9496000445",
  email: "gmsales@classicmtrs.in",
  address: "8/4,Chungam, Feroke, Kozhikode, 633631."
};

const ContactCard = () => {
  const handleCall = () => {
    window.open(`tel:${contactInfo.phone.replace(/\D/g, '')}`);
  };

  const handleWhatsApp = () => {
    const message = "Hi, Classic Motors";
    window.open(`https://api.whatsapp.com/send?phone=${contactInfo.phone.replace(/\D/g, '')}&text=${encodeURIComponent(message)}`);
  };

  const handleEmail = () => {
    window.open(`mailto:${contactInfo.email}`);
  };

  const handleLocation = () => {
    const encodedAddress = encodeURIComponent(contactInfo.address);
    window.open(`https://maps.google.com/?q=${encodedAddress}`);
  };

  const saveToContacts = () => {
    // Create vCard data
    const vCard = `BEGIN:VCARD
VERSION:3.0
FN:${contactInfo.name}
ORG:${contactInfo.company}
TITLE:${contactInfo.title}
TEL:${contactInfo.phone}
EMAIL:${contactInfo.email}
ADR:;;${contactInfo.address};;;;
END:VCARD`;

    const blob = new Blob([vCard], { type: 'text/vcard' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${contactInfo.name}-${contactInfo.company}.vcf`;
    a.click();
    window.URL.revokeObjectURL(url);
  };

  return (
    <div className="w-full max-w-md mx-auto bg-card rounded-3xl p-8 shadow-[var(--card-shadow)] animate-fadeIn">
      {/* Header with Logo and Info */}
      <div className="text-center mb-8">
        <div className="w-20 h-20 mx-auto mb-4 bg-primary-foreground rounded-2xl p-3 shadow-lg">
          <img 
            src={logoImage} 
            alt="Classic Motors Logo" 
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
              e.currentTarget.nextElementSibling?.removeAttribute('style');
            }}
          />
          <div className="hidden w-full h-full flex items-center justify-center">
            <span className="text-primary text-lg font-bold">CM</span>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-card-foreground mb-1">
          {contactInfo.company}
        </h1>
        <h2 className="text-xl font-semibold text-card-foreground mb-1">
          {contactInfo.name}
        </h2>
        <p className="text-secondary text-sm font-medium">
          {contactInfo.title}
        </p>
        <p className="text-muted-foreground text-xs mt-2">
          Piaggio
        </p>
      </div>

      {/* Contact Action Grid */}
      <div className="grid grid-cols-2 gap-4 mb-8">
        {/* Phone Call */}
        <Button
          onClick={handleCall}
          className="h-16 bg-muted hover:bg-muted/80 text-card-foreground flex-col gap-2 transition-all duration-300 hover:scale-105"
        >
          <Phone className="w-5 h-5 text-secondary" />
          <span className="text-xs">{contactInfo.phone}</span>
        </Button>

        {/* WhatsApp */}
        <Button
          onClick={handleWhatsApp}
          className="h-16 bg-muted hover:bg-muted/80 text-card-foreground flex-col gap-2 transition-all duration-300 hover:scale-105"
        >
          <Phone className="w-5 h-5 text-secondary" />
          <span className="text-xs">{contactInfo.phone}</span>
        </Button>

        {/* Email */}
        <Button
          onClick={handleEmail}
          className="h-16 bg-muted hover:bg-muted/80 text-card-foreground flex-col gap-2 transition-all duration-300 hover:scale-105"
        >
          <Mail className="w-5 h-5 text-secondary" />
          <span className="text-xs">{contactInfo.email}</span>
        </Button>

        {/* Location */}
        <Button
          onClick={handleLocation}
          className="h-16 bg-muted hover:bg-muted/80 text-card-foreground flex-col gap-2 transition-all duration-300 hover:scale-105"
        >
          <MapPin className="w-5 h-5 text-secondary" />
          <span className="text-xs text-center leading-tight">{contactInfo.address}</span>
        </Button>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-4">
        <Button
          onClick={saveToContacts}
          className="flex-1 bg-muted hover:bg-muted/80 text-card-foreground py-3 transition-all duration-300 hover:scale-105"
        >
          <Download className="w-4 h-4 mr-2" />
          Save to Contacts
        </Button>
        
        <Button
          onClick={saveToContacts}
          className="flex-1 bg-secondary hover:bg-secondary/90 text-secondary-foreground py-3 transition-all duration-300 hover:scale-105"
        >
          <CreditCard className="w-4 h-4 mr-2" />
          Save Card
        </Button>
      </div>
    </div>
  );
};

export default ContactCard;