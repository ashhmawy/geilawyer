import React from 'react';
import { Gavel, Briefcase, Scale, Users, Building, FileText, Globe, HeartHandshake } from 'lucide-react';
import { Section, Button } from '../components/UI';
import { PageId } from '../types';

interface ServicesProps {
  onNavigate: (page: PageId) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services = [
    { icon: Gavel, title: "Criminal Defense", desc: "From DUI to federal crimes, we provide aggressive defense strategies to protect your liberty." },
    { icon: Users, title: "Family Law", desc: "Navigating divorce, custody, and support with compassion and strong advocacy for your future." },
    { icon: Briefcase, title: "Business Law", desc: "Corporate formation, contract disputes, and liability protection for enterprises of all sizes." },
    { icon: Globe, title: "Immigration", desc: "Helping families and businesses navigate complex immigration laws and visa requirements." },
    { icon: Scale, title: "Civil Litigation", desc: "Representing plaintiffs and defendants in complex civil disputes and torts." },
    { icon: Building, title: "Real Estate", desc: "Commercial and residential transactions, zoning disputes, and property litigation." },
    { icon: FileText, title: "Estate Planning", desc: "Wills, trusts, and probate services to secure your legacy for future generations." },
    { icon: HeartHandshake, title: "Mediation", desc: "Alternative dispute resolution services to settle matters outside the courtroom efficiently." },
  ];

  return (
    <div className="pt-20 animate-fade-in">
      {/* Header */}
      <div className="bg-navy-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Practice Areas</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Comprehensive legal expertise tailored to your unique needs. We specialize in high-stakes environments where precision matters.
          </p>
        </div>
      </div>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((service, idx) => (
            <div key={idx} className="flex flex-col h-full p-6 rounded-sm hover:bg-slate-50 transition-colors duration-300 border-b border-slate-100 hover:border-gold-500">
              <div className="mb-6 inline-block p-4 bg-navy-900 w-fit">
                <service.icon className="w-8 h-8 text-gold-500" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-navy-900 mb-4">{service.title}</h3>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                {service.desc}
              </p>
              <Button 
                variant="text" 
                onClick={() => onNavigate(PageId.CONTACT)}
                className="self-start"
              >
                Book Appointment &rarr;
              </Button>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section background="dark" className="text-center">
        <h2 className="font-serif text-3xl text-white font-bold mb-6">Not sure which service you need?</h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          Legal issues often overlap. Schedule a general consultation and we will guide you to the right expert within our firm.
        </p>
        <Button variant="primary" onClick={() => onNavigate(PageId.CONTACT)}>
          Schedule Appointment
        </Button>
      </Section>
    </div>
  );
};