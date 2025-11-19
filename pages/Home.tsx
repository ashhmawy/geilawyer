
import React from 'react';
import { ArrowRight, Gavel, Shield, Briefcase, Scale, Users } from 'lucide-react';
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
            <span className="block text-gold-500 font-bold tracking-[0.3em] uppercase mb-4 text-sm md:text-base">
              Premier Legal Counsel
            </span>
            <h1 className="font-serif text-5xl md:text-7xl font-bold text-white leading-tight mb-8">
              Integrity. Precision. <br />
              <span className="text-slate-300 italic">Relentless Advocacy.</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl border-l-4 border-gold-600 pl-6">
              George E. Ibrahim & Co. provides elite representation for those who demand the very best. We protect what matters most to you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" onClick={() => onNavigate(PageId.CONTACT)}>
                Book Appointment
              </Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white hover:text-navy-900 hover:border-white" onClick={() => onNavigate(PageId.SERVICES)}>
                Explore Services
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Practice Areas Preview */}
      <Section background="white">
        <SectionHeading 
          title="Areas of Practice" 
          subtitle="How we can help" 
          center 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Gavel, title: "Criminal Defense", desc: "Aggressive representation for those facing criminal charges. We protect your rights." },
            { icon: Briefcase, title: "Business Law", desc: "Strategic counsel for mergers, acquisitions, and corporate governance." },
            { icon: Scale, title: "Civil Litigation", desc: "Resolving complex disputes with skilled negotiation and trial advocacy." }
          ].map((service, idx) => (
            <div key={idx} className="group p-8 bg-slate-50 border border-slate-100 hover:border-gold-500/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <service.icon className="w-12 h-12 text-navy-900 mb-6 group-hover:text-gold-600 transition-colors" />
              <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.desc}
              </p>
              <button onClick={() => onNavigate(PageId.SERVICES)} className="flex items-center text-gold-600 font-bold tracking-wide uppercase text-sm group-hover:translate-x-2 transition-transform">
                Learn More <ArrowRight className="ml-2 w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" onClick={() => onNavigate(PageId.SERVICES)}>View All Practice Areas</Button>
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
            <SectionHeading title="Unwavering Commitment to Justice" subtitle="Who We Are" />
            <p className="text-lg text-slate-700 mb-6 leading-relaxed">
              At George E. Ibrahim & Co., we believe that every client deserves representation defined by integrity, precision, and relentless advocacy. Founded by senior partner George E. Ibrahim, our firm has secured millions in settlements and successfully defended high-profile cases across Victoria.
            </p>
            <p className="text-lg text-slate-700 mb-8 leading-relaxed">
              We do not just interpret the law; we master it to your advantage. Whether you are a corporation facing litigation or an individual in need of defense, we stand by your side.
            </p>
            <Button onClick={() => onNavigate(PageId.ABOUT)}>Meet Our Team</Button>
          </div>
        </div>
      </Section>

      {/* Testimonials */}
      <Section background="dark">
        <div className="text-center mb-16">
          <Scale className="w-12 h-12 text-gold-500 mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">Client Testimonials</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">Our track record speaks for itself. Here is what our clients have to say about our dedication and results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { q: "I was facing the most difficult time of my life. The firm not only represented me but gave me my life back.", a: "Michael R.", r: "Criminal Defense Client" },
            { q: "Their strategic approach to our corporate merger was flawless. Highly recommended for any business legal needs.", a: "Sarah J.", r: "CEO, Tech Solutions" },
            { q: "Compassionate, professional, and incredibly sharp. They fought for my family when no one else would.", a: "David L.", r: "Family Law Client" },
          ].map((t, i) => (
            <div key={i} className="bg-navy-800 p-10 border border-slate-700 relative">
              <div className="text-gold-600 text-6xl font-serif absolute top-4 left-6 opacity-30">"</div>
              <p className="text-slate-300 italic mb-6 relative z-10 leading-relaxed min-h-[80px]">
                {t.q}
              </p>
              <div>
                <h4 className="text-white font-bold font-serif text-lg">{t.a}</h4>
                <p className="text-gold-500 text-sm uppercase tracking-wider">{t.r}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Strip */}
      <div className="bg-gold-600 py-16">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Discuss Your Case?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Time is often a critical factor in legal matters. Schedule an appointment today for a confidential consultation with one of our senior attorneys.
          </p>
          <button 
            onClick={() => onNavigate(PageId.CONTACT)}
            className="bg-navy-950 text-white px-10 py-4 text-lg font-bold uppercase tracking-widest hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-xl"
          >
            Schedule Appointment
          </button>
        </div>
      </div>
    </div>
  );
};
