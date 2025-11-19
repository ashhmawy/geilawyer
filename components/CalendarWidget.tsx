
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Clock, CheckCircle2, Loader2, Calendar as CalendarIcon } from 'lucide-react';
import { Button } from './UI';

interface CalendarWidgetProps {
  serviceName: string;
  duration: string;
  onBack: () => void;
}

type ViewState = 'calendar' | 'slots' | 'form' | 'confirmation';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
}

// --- MOCKED AVAILABILITY ---
// Simulates finding open slots
const fetchAvailableSlots = async (date: Date): Promise<TimeSlot[]> => {
  await new Promise(resolve => setTimeout(resolve, 600));
  const slots: TimeSlot[] = [];
  const startHour = 9;
  const endHour = 17;
  for (let i = startHour; i < endHour; i++) {
    slots.push({ id: `${i}-00`, time: `${i > 12 ? i - 12 : i}:00 ${i >= 12 ? 'PM' : 'AM'}`, available: Math.random() > 0.3 });
    slots.push({ id: `${i}-30`, time: `${i > 12 ? i - 12 : i}:30 ${i >= 12 ? 'PM' : 'AM'}`, available: Math.random() > 0.3 });
  }
  return slots;
};

export const CalendarWidget: React.FC<CalendarWidgetProps> = ({ serviceName, duration, onBack }) => {
  const [view, setView] = useState<ViewState>('calendar');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [slots, setSlots] = useState<TimeSlot[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay(); 
    const days = [];
    for (let i = 0; i < firstDayOfMonth; i++) days.push(null);
    for (let i = 1; i <= daysInMonth; i++) days.push(new Date(year, month, i));
    return days;
  };

  const days = getDaysInMonth(currentDate);
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const changeMonth = (offset: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + offset, 1);
    if (offset < 0 && newDate.getMonth() < new Date().getMonth() && newDate.getFullYear() === new Date().getFullYear()) return;
    setCurrentDate(newDate);
  };

  const handleDateClick = async (date: Date) => {
    setSelectedDate(date);
    setIsLoading(true);
    setView('slots');
    try {
      const fetchedSlots = await fetchAvailableSlots(date);
      setSlots(fetchedSlots);
    } catch (error) {
      console.error("Failed to fetch slots");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSlotSelect = (slot: TimeSlot) => {
    setSelectedSlot(slot);
    setView('form');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const formattedDate = selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' });
    
    // Construct Email Payload
    const subject = `Booking Request: ${serviceName} - ${formData.name}`;
    const body = `
New Appointment Request
-----------------------
Service: ${serviceName}
Duration: ${duration}
Requested Date: ${formattedDate}
Requested Time: ${selectedSlot?.time}

Client Details:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Notes: ${formData.notes}

-----------------------
Sent from Calendar Widget
    `;

    // Open Mail Client
    window.location.href = `mailto:contact@ibrahimlegal.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    setIsLoading(false);
    setView('confirmation');
  };

  // --- RENDER HELPERS ---

  if (view === 'calendar') {
    return (
      <div className="animate-fade-in h-full flex flex-col">
        <div className="flex items-center justify-between mb-8">
            <button onClick={() => changeMonth(-1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <ChevronLeft className="w-5 h-5 text-navy-900" />
            </button>
            <h3 className="font-serif text-xl font-bold text-navy-900">
                {monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h3>
            <button onClick={() => changeMonth(1)} className="p-2 hover:bg-slate-100 rounded-full transition-colors">
                <ChevronRight className="w-5 h-5 text-navy-900" />
            </button>
        </div>

        <div className="grid grid-cols-7 mb-4">
            {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(d => (
                <div key={d} className="text-center text-xs font-bold text-slate-400 uppercase tracking-wider py-2">
                    {d}
                </div>
            ))}
        </div>

        <div className="grid grid-cols-7 gap-2 flex-grow content-start">
            {days.map((date, idx) => {
                if (!date) return <div key={`empty-${idx}`} />;
                const isToday = new Date().toDateString() === date.toDateString();
                const isPast = date < new Date(new Date().setHours(0,0,0,0));
                
                return (
                    <button
                        key={idx}
                        disabled={isPast}
                        onClick={() => handleDateClick(date)}
                        className={`
                            h-12 rounded-sm flex items-center justify-center text-sm font-medium transition-all duration-300
                            ${isPast ? 'text-slate-300 cursor-not-allowed' : 'hover:bg-gold-600 hover:text-white hover:shadow-md text-navy-900'}
                            ${isToday ? 'bg-navy-50 font-bold text-gold-600 border border-gold-200' : ''}
                        `}
                    >
                        {date.getDate()}
                    </button>
                );
            })}
        </div>
        <div className="mt-4 pt-4 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-400">All times are in Australian Eastern Standard Time (AEST)</p>
        </div>
      </div>
    );
  }

  if (view === 'slots') {
    return (
        <div className="animate-fade-in h-full flex flex-col">
            <div className="flex items-center mb-6 pb-4 border-b border-slate-100">
                <button onClick={() => setView('calendar')} className="mr-4 hover:text-gold-600 transition-colors">
                    <ChevronLeft className="w-6 h-6 text-navy-900" />
                </button>
                <div>
                    <h3 className="font-serif text-xl font-bold text-navy-900">
                        {selectedDate?.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
                    </h3>
                    <p className="text-sm text-slate-500">Select a time for your {duration} consultation</p>
                </div>
            </div>

            {isLoading ? (
                <div className="flex-grow flex items-center justify-center">
                    <Loader2 className="w-8 h-8 text-gold-600 animate-spin" />
                </div>
            ) : (
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 overflow-y-auto max-h-[400px] pr-2 custom-scrollbar">
                    {slots.map(slot => (
                        <button
                            key={slot.id}
                            disabled={!slot.available}
                            onClick={() => handleSlotSelect(slot)}
                            className={`
                                py-3 px-2 rounded-sm border text-sm font-bold transition-all duration-300
                                ${slot.available 
                                    ? 'border-navy-100 text-navy-900 hover:border-gold-600 hover:bg-gold-600 hover:text-white hover:shadow-md' 
                                    : 'border-slate-100 text-slate-300 bg-slate-50 cursor-not-allowed decoration-slate-300 line-through'}
                            `}
                        >
                            {slot.time}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
  }

  if (view === 'form') {
      return (
        <div className="animate-fade-in h-full flex flex-col">
            <div className="flex items-center mb-6 pb-4 border-b border-slate-100">
                <button onClick={() => setView('slots')} className="mr-4 hover:text-gold-600 transition-colors">
                    <ChevronLeft className="w-6 h-6 text-navy-900" />
                </button>
                <div>
                    <h3 className="font-serif text-xl font-bold text-navy-900">Finalize Booking</h3>
                    <div className="flex items-center text-sm text-gold-600 font-bold mt-1">
                        <CalendarIcon className="w-3 h-3 mr-1" />
                        {selectedDate?.toLocaleDateString()} at {selectedSlot?.time}
                    </div>
                </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 overflow-y-auto pr-2 custom-scrollbar">
                <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Full Name</label>
                    <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full border border-slate-300 p-3 rounded-sm focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-600 transition-all"
                        placeholder="John Doe"
                    />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Email Address</label>
                        <input 
                            required
                            type="email" 
                            value={formData.email}
                            onChange={(e) => setFormData({...formData, email: e.target.value})}
                            className="w-full border border-slate-300 p-3 rounded-sm focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-600 transition-all"
                            placeholder="john@example.com"
                        />
                    </div>
                    <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Phone Number</label>
                        <input 
                            required
                            type="tel" 
                            value={formData.phone}
                            onChange={(e) => setFormData({...formData, phone: e.target.value})}
                            className="w-full border border-slate-300 p-3 rounded-sm focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-600 transition-all"
                            placeholder="(04) 0000 0000"
                        />
                    </div>
                </div>
                <div>
                    <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Case Description (Optional)</label>
                    <textarea 
                        rows={3}
                        value={formData.notes}
                        onChange={(e) => setFormData({...formData, notes: e.target.value})}
                        className="w-full border border-slate-300 p-3 rounded-sm focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-600 transition-all resize-none"
                        placeholder="Briefly describe your legal matter..."
                    />
                </div>
                
                <div className="pt-4">
                    <Button 
                        disabled={isLoading}
                        type="submit" 
                        className="w-full flex items-center justify-center"
                    >
                        {isLoading ? (
                            <>Processing <Loader2 className="ml-2 animate-spin" /></>
                        ) : (
                            "Confirm Appointment"
                        )}
                    </Button>
                    <p className="text-xs text-slate-400 text-center mt-3">
                        By booking, you agree to our Terms of Service and Privacy Policy.
                    </p>
                </div>
            </form>
        </div>
      );
  }

  if (view === 'confirmation') {
      return (
          <div className="animate-fade-in h-full flex flex-col items-center justify-center text-center p-6">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="font-serif text-3xl font-bold text-navy-900 mb-2">Booking Details Sent</h3>
              <p className="text-slate-600 mb-8 max-w-xs">
                  Please check your email application. We have generated an email with your booking request for <br/>
                  <span className="font-bold text-navy-900">{serviceName}</span>.
              </p>
              <p className="text-sm text-slate-500 mb-8 bg-slate-50 p-4 rounded-sm border border-slate-100">
                  Simply hit <strong>Send</strong> in your email app to finalize.
              </p>
              <Button onClick={onBack} variant="outline">Return to Home</Button>
          </div>
      );
  }

  return null;
};
