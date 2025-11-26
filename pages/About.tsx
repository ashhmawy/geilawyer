import React from 'react';
import { CheckCircle2, Award, BookOpen } from 'lucide-react';
import { Section, SectionHeading } from '../components/UI';

export const About: React.FC = () => {
  return (
    <div className="pt-20 animate-fade-in">
      {/* Header */}
      <div className="bg-navy-900 text-white py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 opacity-10">
           <BookOpen size={400} />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Jafer Lawyers has been serving the community for over 30 years with dedication and expertise.
          </p>
        </div>
      </div>

      {/* Lead Lawyer Profile */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-5">
            <div className="relative">
              <img 
                src="https://picsum.photos/seed/lawyer_headshot/800/1000" 
                alt="Principal Lawyer" 
                className="w-full h-auto shadow-2xl" 
              />
              <div className="absolute bottom-0 left-0 bg-white p-6 shadow-lg max-w-[80%]">
                <p className="font-serif text-2xl font-bold text-navy-900">Jafer Lawyers</p>
                <p className="text-gold-600 uppercase tracking-widest text-sm font-bold">Est. 1990s</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7">
            <SectionHeading title="A Legacy of Excellence" subtitle="Our History" />
            <p className="text-slate-700 mb-6 leading-relaxed">
              With over 30 years in business, Jafer Lawyers has established a reputation for reliability and success. We pride ourselves on building long-term relationships with our clients, guiding them through life's legal challenges with confidence.
            </p>
            <p className="text-slate-700 mb-8 leading-relaxed">
              Our firm specializes in Property Law, Commercial Law, Family Law, and Litigation, offering a comprehensive suite of services to meet the diverse needs of the Moonee Ponds community and greater Victoria.
            </p>

            <div className="bg-slate-50 p-8 border-l-4 border-gold-600">
              <h4 className="font-serif text-xl font-bold text-navy-900 mb-4">Core Values</h4>
              <ul className="space-y-3">
                {['Experience You Can Trust', 'Client-Focused Results', 'Integrity & Transparency'].map((item, i) => (
                  <li key={i} className="flex items-center text-slate-700">
                    <CheckCircle2 className="text-gold-500 w-5 h-5 mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};