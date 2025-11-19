import React from 'react';
import { Scale, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';
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
              <span className="font-serif text-xl font-bold text-white tracking-wide uppercase">George E. Ibrahim <span className="text-gold-500">&</span> Co.</span>
            </div>
            <p className="text-sm leading-relaxed mb-6 text-slate-400">
              Providing elite legal representation with unwavering integrity and precision. We stand as your fiercest advocate in the pursuit of justice.
            </p>
            <div className="flex space-x-4">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <a key={i} href="#" className="text-slate-400 hover:text-gold-500 transition-colors">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-serif font-semibold text-lg mb-6">Practice Areas</h3>
            <ul className="space-y-3 text-sm">
              {['Corporate Law', 'Criminal Defense', 'Family Law', 'Civil Litigation', 'Estate Planning'].map(item => (
                <li key={item}>
                   <button onClick={() => onNavigate(PageId.SERVICES)} className="hover:text-gold-500 transition-colors">{item}</button>
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
                { l: 'Attorneys', p: PageId.ABOUT }, 
                { l: 'Book Appointment', p: PageId.CONTACT }
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
                <span>5 Everage St<br />Moonee Ponds VIC 3039</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-gold-500 mr-3 shrink-0" />
                <span>03 9329 2733</span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-gold-500 mr-3 shrink-0" />
                <span>contact@ibrahimlegal.com.au</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
          <p>&copy; {new Date().getFullYear()} George E. Ibrahim & Co. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  );
};