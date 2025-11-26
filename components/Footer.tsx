import React from 'react';
import { Scale, Mail, Phone, MapPin, Linkedin, Printer } from 'lucide-react';
import { PageId } from '../types';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-navy-950 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-6">
              <Scale className="text-gold-500 w-8 h-8 mr-3" />
              <span className="font-serif text-xl font-bold text-white tracking-wide uppercase">Jafer Lawyers</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Serving the community for over 30 years. We provide elite legal representation with unwavering integrity and precision.
            </p>
            <div className="flex space-x-4">
              <span className="text-gold-500 text-xs font-bold tracking-widest uppercase border border-gold-500 px-2 py-1">Est. 1990s</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3 text-sm">
              {[
                'Commercial Law & Leasing',
                'Property Law',
                'Litigation & Dispute Resolution',
                'Family Law',
                'Wills & Estates',
                'Criminal Law'
              ].map(item => (
                <li key={item}>
                   <button onClick={() => onNavigate(PageId.SERVICES)} className="hover:text-gold-500 transition-colors text-left">{item}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-6">Firm</h3>
            <ul className="space-y-3 text-sm">
              {[
                { l: 'Home', p: PageId.HOME }, 
                { l: 'About Us', p: PageId.ABOUT }, 
                { l: 'Our Team', p: PageId.ABOUT }, 
                { l: 'Contact Us', p: PageId.CONTACT }
              ].map(item => (
                <li key={item.l}>
                  <button onClick={() => onNavigate(item.p)} className="hover:text-gold-500 transition-colors">{item.l}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-gold-500 mr-3 mt-0.5 shrink-0" />
                <span>56 Pascoe Vale Rd<br />Moonee Ponds, VIC 3039</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gold-500 mr-3 shrink-0" />
                <span>(03) 9375 7722</span>
              </li>
              <li className="flex items-center">
                <Printer className="w-5 h-5 text-gold-500 mr-3 shrink-0" />
                <span>(03) 9375 7733 (Fax)</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gold-500 mr-3 shrink-0" />
                <span className="break-all">info@jaflaw.com.au</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} Jafer Lawyers. All Rights Reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};