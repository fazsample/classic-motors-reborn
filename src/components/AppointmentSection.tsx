import { useState, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Calendar, Clock, User, Phone } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AppointmentSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: ''
  });
  
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useScrollAnimation(ref);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle appointment submission
    const message = `Hi, I would like to book an appointment.\nName: ${formData.name}\nPhone: ${formData.phone}\nDate: ${formData.date}\nTime: ${formData.time}`;
    window.open(`https://api.whatsapp.com/send?phone=919496000445&text=${encodeURIComponent(message)}`);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div 
      ref={ref}
      className={`w-full max-w-md mx-auto bg-card rounded-3xl p-8 shadow-[var(--card-shadow)] mb-6 transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-secondary mb-2">Appointment</h2>
        <div className="w-20 h-0.5 bg-secondary"></div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '200ms' }}>
          <Label htmlFor="name" className="text-card-foreground mb-2 flex items-center gap-2">
            <User className="w-4 h-4 text-secondary" />
            Name:
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            className="bg-muted border-secondary/30 text-card-foreground placeholder:text-muted-foreground"
            required
          />
        </div>

        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '300ms' }}>
          <Label htmlFor="phone" className="text-card-foreground mb-2 flex items-center gap-2">
            <Phone className="w-4 h-4 text-secondary" />
            Phone:
          </Label>
          <Input
            id="phone"
            name="phone"
            placeholder="Contact number"
            value={formData.phone}
            onChange={handleChange}
            className="bg-muted border-secondary/30 text-card-foreground placeholder:text-muted-foreground"
            required
          />
        </div>

        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '400ms' }}>
          <Label htmlFor="date" className="text-card-foreground mb-2 flex items-center gap-2">
            <Calendar className="w-4 h-4 text-secondary" />
            Date:
          </Label>
          <Input
            id="date"
            name="date"
            type="date"
            value={formData.date}
            onChange={handleChange}
            className="bg-muted border-secondary/30 text-card-foreground"
            required
          />
        </div>

        <div className={`transition-all duration-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ transitionDelay: '500ms' }}>
          <Label htmlFor="time" className="text-card-foreground mb-2 flex items-center gap-2">
            <Clock className="w-4 h-4 text-secondary" />
            Time:
          </Label>
          <Input
            id="time"
            name="time"
            type="time"
            value={formData.time}
            onChange={handleChange}
            className="bg-muted border-secondary/30 text-card-foreground"
            required
          />
        </div>

        <Button
          type="submit"
          className={`w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground py-3 transition-all duration-500 hover:scale-105 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          Submit Appointment
        </Button>
      </form>
    </div>
  );
};

export default AppointmentSection;