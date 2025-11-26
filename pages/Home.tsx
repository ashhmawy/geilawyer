
import React from 'react';
import { ArrowRight, Gavel, Building, Scale, Briefcase } from 'lucide-react';
import { Button, Section, SectionHeading } from '../components/UI';
import { PageId } from '../types';

interface HomeProps {
  onNavigate: (page: PageId) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <div className="relative h-screen min-h-[600px] flex items-center">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
            <img 
              src="https://images.unsplash.com/photo-1464039397811-476f652a343b?auto=format&fit=crop&q=80&w=1920" 
              alt="Luxury Law Office" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-navy-950/80 mix-blend-multiply"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-transparent to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-20">
          <div className="max-w-3xl fade-in-up">
            <div className="inline-block border border-gold-500 px-4 py-1 mb-6 bg-navy-900/50 backdrop-blur-sm">
               <span className="text-gold-500 font-bold tracking-[0.2em] uppercase text-xs md:text-sm">
                Over 30 Years In Business
              </span>
            </div>
            
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Jafer Lawyers <br />
              <span className="text-slate-300 text-3xl md:text-5xl italic font-normal block mt-2">Trusted Legal Solutions.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl border-l-4 border-gold-600 pl-6">
              Providing expert legal counsel in Moonee Ponds and beyond. We protect what matters most to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => onNavigate(PageId.CONTACT)}>
                Book Appointment
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-navy-900 hover:border-white" onClick={() => onNavigate(PageId.SERVICES)}>
                View Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Areas Preview */}
      <Section background="white">
        <SectionHeading 
          title="Our Services" 
          subtitle="How we can help" 
          center 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Briefcase, title: "Commercial Law", desc: "Leasing, contracts, and business advice for your enterprise." },
            { icon: Building, title: "Property Law", desc: "Expert conveyancing and property transaction services." },
            { icon: Scale, title: "Litigation", desc: "Resolving complex disputes with skilled negotiation." }
          ].map((service, idx) => (
            <div key={idx} className="group p-8 bg-slate-50 border border-slate-100 hover:border-gold-500/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <service.icon className="w-12 h-12 text-navy-900 mb-6 group-hover:text-gold-600 transition-colors" />
              <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <button onClick={() => onNavigate(PageId.SERVICES)} className="flex items-center text-gold-600 font-bold tracking-wide uppercase text-sm group-hover:translate-x-2 transition-transform">
                View All Services <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" onClick={() => onNavigate(PageId.SERVICES)}>See All Practice Areas</Button>
        </div>
      </Section>

      {/* About Snippet */}
      <Section background="light" className="relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="order-2 lg:order-1 relative">
             <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-gold-600"></div>
             <img 
              src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=800" 
              alt="Lead Attorney" 
              className="w-full h-auto object-cover shadow-xl relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
             />
             <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-gold-600 z-20"></div>
          </div>
          
          <div className="order-1 lg:order-2">
            <SectionHeading title="Over 30 Years in Business" subtitle="Who We Are" />
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              At Jafer Lawyers, we have built a legacy of trust and results over three decades. Our firm is dedicated to providing clear, practical advice to help you navigate legal challenges.
            </p>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              Whether you need assistance with a commercial lease, a family matter, or a property settlement, our experienced team is here to guide you every step of the way.
            </p>
            <Button onClick={() => onNavigate(PageId.ABOUT)}>Learn More About Us</Button>
          </div>
        </div>
      </Section>

      {/* CTA Strip */}
      <div className="bg-gold-600 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Need Legal Advice?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Contact our Moonee Ponds office today to speak with an experienced solicitor.
          </p>
          <button 
            onClick={() => onNavigate(PageId.CONTACT)}
            className="bg-navy-950 text-white px-10 py-4 text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-xl"
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};
