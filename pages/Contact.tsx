
import React, { useState } from 'react';
import { MapPin, Phone, Mail, CheckCircle2, Send, Loader2 } from 'lucide-react';
import { Section, SectionHeading, Button } from '../components/UI';

export const Contact: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Construct email details
    const subject = `Consultation Request: ${formData.service} - ${formData.name}`;
    const body = `
New Legal Consultation Request
------------------------------
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Service Area: ${formData.service}

Message:
${formData.message}

------------------------------
Sent from Ibrahim Legal Website
    `;

    // Create and click a hidden link - this is the most reliable method for Mobile Safari/Chrome
    const mailtoUrl = `mailto:contact@ibrahimlegal.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.target = '_top'; 
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Show success state
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  return (
    <div className="pt-20 animate-fade-in">
      {/* Header */}
      <div className="bg-navy-900 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h1 className="font-serif text-4xl md:text-6xl font-bold mb-6">Contact & Appointments</h1>
          <p className="text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
            Visit our Moonee Ponds office or submit an enquiry below to request a consultation with our senior legal team.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: Contact Information */}
          <div className="lg:col-span-4 order-2 lg:order-1">
            <div className="bg-slate-50 p-8 border border-slate-200 rounded-sm sticky top-28">
              <SectionHeading title="Get In Touch" subtitle="Office Info" />
              
              <div className="space-y-8">
                <div className="flex items-start group">
                  <div className="bg-white p-3 shadow-sm mr-4 border border-slate-200 group-hover:border-gold-500 transition-colors">
                    <MapPin className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-navy-900 mb-1">Visit Us</h4>
                    <p className="text-slate-600 leading-relaxed">
                      5 Everage St<br />
                      Moonee Ponds VIC 3039
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start group">
                  <div className="bg-white p-3 shadow-sm mr-4 border border-slate-200 group-hover:border-gold-500 transition-colors">
                    <Phone className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-navy-900 mb-1">Call Us</h4>
                    <a href="tel:0393292733" className="text-slate-600 font-semibold text-lg hover:text-gold-600">03 9329 2733</a>
                    <p className="text-xs text-slate-400 mt-1">Mon-Fri, 9am-5pm</p>
                  </div>
                </div>

                <div className="flex items-start group">
                  <div className="bg-white p-3 shadow-sm mr-4 border border-slate-200 group-hover:border-gold-500 transition-colors">
                    <Mail className="w-6 h-6 text-gold-600" />
                  </div>
                  <div>
                    <h4 className="font-serif text-lg font-bold text-navy-900 mb-1">Email</h4>
                    <a href="mailto:contact@ibrahimlegal.com.au" className="text-slate-600 hover:text-gold-600 transition-colors break-all">
                      contact@ibrahimlegal.com.au
                    </a>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-slate-200">
                <h4 className="font-serif text-lg font-bold text-navy-900 mb-4">Why Choose Us?</h4>
                <ul className="space-y-3">
                  {[
                    'Strict Confidentiality',
                    'Experienced Advocacy',
                    'Strategic Counsel',
                    'Clear Communication'
                  ].map((item, i) => (
                    <li key={i} className="flex items-center text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-gold-600 mr-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* RIGHT: Contact Form */}
          <div className="lg:col-span-8 order-1 lg:order-2">
             <div className="bg-white border border-slate-200 shadow-2xl rounded-sm overflow-hidden h-full">
                <div className="p-6 md:p-12 h-full flex flex-col justify-center">
                  {isSubmitted ? (
                    <div className="flex flex-col items-center justify-center text-center animate-fade-in py-12">
                      <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6">
                        <CheckCircle2 className="w-12 h-12 text-green-600" />
                      </div>
                      <h3 className="font-serif text-3xl font-bold text-navy-900 mb-4">Email Generated</h3>
                      <p className="text-slate-600 mb-8 max-w-md text-lg">
                        Your email client should have opened with your request. Please hit "Send" to finalize your inquiry.
                      </p>
                      <Button onClick={() => { setIsSubmitted(false); setFormData({ ...formData, message: '' }); }} variant="outline">
                        Send Another Request
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
                      <div className="mb-6">
                         <h3 className="font-serif text-2xl font-bold text-navy-900 mb-2">Request a Callback</h3>
                         <p className="text-slate-500">Fill out the details below and we will get back to you shortly to confirm your appointment.</p>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Full Name *</label>
                          <input 
                            required
                            name="name"
                            type="text" 
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full border border-slate-300 p-4 rounded-sm focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-600 transition-all bg-slate-50 focus:bg-white"
                            placeholder="e.g. John Smith"
                          />
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Phone Number *</label>
                          <input 
                            required
                            name="phone"
                            type="tel" 
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full border border-slate-300 p-4 rounded-sm focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-600 transition-all bg-slate-50 focus:bg-white"
                            placeholder="e.g. 0400 000 000"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Email Address *</label>
                        <input 
                          required
                          name="email"
                          type="email" 
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full border border-slate-300 p-4 rounded-sm focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-600 transition-all bg-slate-50 focus:bg-white"
                          placeholder="e.g. john@example.com"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Legal Matter *</label>
                        <div className="relative">
                          <select 
                            required
                            name="service"
                            value={formData.service}
                            onChange={handleChange}
                            className="w-full border border-slate-300 p-4 rounded-sm focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-600 transition-all bg-slate-50 focus:bg-white appearance-none"
                          >
                            <option value="" disabled>Select a Practice Area</option>
                            <option value="Criminal Defense">Criminal Defense</option>
                            <option value="Family Law">Family Law</option>
                            <option value="Business Law">Business Law</option>
                            <option value="Civil Litigation">Civil Litigation</option>
                            <option value="Immigration">Immigration</option>
                            <option value="Estate Planning">Estate Planning</option>
                            <option value="Other">Other / General Inquiry</option>
                          </select>
                          <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20"><path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"/></svg>
                          </div>
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-navy-900 uppercase tracking-wider mb-2">Message / Case Details</label>
                        <textarea 
                          name="message"
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full border border-slate-300 p-4 rounded-sm focus:outline-none focus:border-gold-600 focus:ring-1 focus:ring-gold-600 transition-all resize-none bg-slate-50 focus:bg-white"
                          placeholder="Please provide a brief overview of your legal situation..."
                        />
                      </div>

                      <div className="pt-4">
                        <Button 
                          type="submit" 
                          size="lg"
                          disabled={isSubmitting}
                          className="w-full flex items-center justify-center shadow-lg hover:shadow-xl"
                        >
                          {isSubmitting ? (
                            <>Opening Email App... <Loader2 className="ml-2 animate-spin" /></>
                          ) : (
                            <>Request Consultation <Send className="ml-2 w-4 h-4" /></>
                          )}
                        </Button>
                        <p className="text-xs text-slate-400 text-center mt-4">
                          This will open your default email client to send the request securely.
                        </p>
                      </div>
                    </form>
                  )}
                </div>
             </div>
          </div>

        </div>
      </Section>
    </div>
  );
};
