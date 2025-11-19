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
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6">Our Firm</h1>
          <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
            Founded on principles of integrity and excellence, George E. Ibrahim & Co. has established itself as a pillar of the legal community.
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
                alt="George E. Ibrahim" 
                className="w-full h-auto shadow-2xl" 
              />
              <div className="absolute bottom-0 left-0 bg-white p-6 shadow-lg max-w-[80%]">
                <p className="font-serif text-2xl font-bold text-navy-900">George E. Ibrahim</p>
                <p className="text-gold-600 uppercase tracking-widest text-sm font-bold">Principal Lawyer</p>
              </div>
            </div>
          </div>
          
          <div className="md:col-span-7">
            <SectionHeading title="A Legacy of Excellence" subtitle="Leadership" />
            <p className="text-slate-700 mb-6 leading-relaxed">
              With over 25 years of experience in high-stakes litigation, George E. Ibrahim has earned a reputation as a formidable advocate. He began his career with a drive to provide top-tier legal defense for his community before establishing his own practice.
            </p>
            <p className="text-slate-700 mb-8 leading-relaxed">
              George is recognized for his tactical precision in the courtroom and his compassionate approach to client relations. His firm holds the highest standards for legal ability and ethical practice.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start">
                <Award className="text-gold-600 w-6 h-6 mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-navy-900">Top 100 Trial Lawyers</h4>
                  <p className="text-sm text-slate-600">National Trial Lawyers Association</p>
                </div>
              </div>
              <div className="flex items-start">
                <Award className="text-gold-600 w-6 h-6 mr-3 mt-1 shrink-0" />
                <div>
                  <h4 className="font-bold text-navy-900">Best Law Firms 2024</h4>
                  <p className="text-sm text-slate-600">Independent Review Board</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 border-l-4 border-gold-600">
              <h4 className="font-serif text-xl font-bold text-navy-900 mb-4">Core Philosophy</h4>
              <ul className="space-y-3">
                {['Uncompromising Integrity', 'Client-Centric Strategy', 'Relentless Preparation'].map((item, i) => (
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

      {/* Experience Timeline */}
      <Section background="light">
        <SectionHeading title="Our History" subtitle="Milestones" center />
        <div className="max-w-4xl mx-auto">
          {[
            { year: '1998', title: 'Firm Established', desc: 'Founded as a boutique criminal defense practice in Moonee Ponds.' },
            { year: '2005', title: 'Expansion to Corporate Law', desc: 'Added a dedicated division for business litigation and mergers.' },
            { year: '2012', title: 'Landmark Victory', desc: 'Secured a major settlement in a high-profile civil suit.' },
            { year: '2024', title: 'Modernization', desc: 'Launched new digital services to better serve clients statewide.' },
          ].map((item, index) => (
            <div key={index} className="flex gap-6 mb-12 last:mb-0 group">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white border-2 border-gold-500 flex items-center justify-center text-gold-600 font-bold shadow-md z-10 group-hover:bg-gold-600 group-hover:text-white transition-colors duration-300">
                  {item.year}
                </div>
                {index !== 3 && <div className="w-px h-full bg-slate-300 -my-2"></div>}
              </div>
              <div className="pt-2 pb-8">
                <h3 className="font-serif text-2xl font-bold text-navy-900 mb-2">{item.title}</h3>
                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};