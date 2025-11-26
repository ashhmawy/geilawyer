import React from 'react';
import { Gavel, Briefcase, Scale, Users, Building, FileText } from 'lucide-react';
import { Section, Button } from '../components/UI';
import { PageId } from '../types';

interface ServicesProps {
  onNavigate: (page: PageId) => void;
}

export const Services: React.FC<ServicesProps> = ({ onNavigate }) => {
  const services = [
    { icon: Briefcase, title: "Commercial Law & Leasing", desc: "Expert advice on business leases, commercial contracts, and regulatory compliance for your enterprise." },
    { icon: Building, title: "Property Law", desc: "Comprehensive conveyancing and legal services for buying, selling, and developing property." },
    { icon: Scale, title: "Litigation & Dispute Resolution", desc: "Strategic representation in civil disputes to achieve the best possible outcome for your interests." },
    { icon: Users, title: "Family Law", desc: "Navigating divorce, property settlements, and parenting matters with compassion and strong advocacy." },
    { icon: FileText, title: "Wills & Estates", desc: "Drafting wills, powers of attorney, and managing probate to secure your legacy and protect your family." },
    { icon: Gavel, title: "Criminal Law", desc: "Defending your rights in summary and indictable matters with experienced legal counsel." },
  ];

  return (
    <div className="pt-20 animate-fade-in">
      {/* Header */}
      <div className="bg-navy-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Services</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Over 30 years of experience across a wide range of legal disciplines.
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
        <h2 className="font-serif text-3xl text-white font-bold mb-6">Legal expertise you can trust</h2>
        <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
          Contact us today to discuss your legal requirements with our experienced team.
        </p>
        <Button variant="primary" onClick={() => onNavigate(PageId.CONTACT)}>
          Contact Us
        </Button>
      </Section>
    </div>
  );
};