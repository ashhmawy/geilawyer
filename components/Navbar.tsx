
import React, { useState, useEffect } from 'react';
import { Menu, X, Scale } from 'lucide-react';
import { NavItem, PageId } from '../types';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
}

const navItems: NavItem[] = [
  { label: 'Home', id: PageId.HOME },
  { label: 'About Firm', id: PageId.ABOUT },
  { label: 'Practice Areas', id: PageId.SERVICES },
  { label: 'Contact', id: PageId.CONTACT },
];

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: PageId) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
    window.scrollTo(0, 0);
  };

  // Determine if navbar should be transparent (Only on Home page when at top)
  const isTransparent = currentPage === PageId.HOME && !isScrolled && !isMobileMenuOpen;

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        !isTransparent
          ? 'bg-navy-950 shadow-lg py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center">
        {/* Logo */}
        <div 
          className="flex items-center cursor-pointer group z-50 relative" 
          onClick={() => handleNavClick(PageId.HOME)}
        >
          <div className="w-10 h-10 bg-gold-600 rounded-sm flex items-center justify-center mr-3 group-hover:bg-white transition-colors duration-300 shrink-0">
            <Scale className={`w-6 h-6 transition-colors duration-300 ${!isTransparent ? 'text-white group-hover:text-navy-900' : 'text-white group-hover:text-navy-900'}`} />
          </div>
          <div>
            <h1 className="font-serif text-xl md:text-2xl font-bold tracking-wide whitespace-nowrap text-white">
              GEORGE E. IBRAHIM
            </h1>
            <p className="text-[0.65rem] text-gold-500 uppercase tracking-[0.2em] font-bold">& Co. Legal Group</p>
          </div>
        </div>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-sm font-semibold tracking-wide transition-colors duration-300 uppercase ${
                currentPage === item.id
                  ? 'text-gold-500 border-b-2 border-gold-500 pb-1'
                  : 'text-slate-200 hover:text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <button
             onClick={() => handleNavClick(PageId.CONTACT)}
             className="bg-gold-600 text-white px-6 py-2 text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-navy-900 transition-all duration-300 shadow-lg"
          >
            Book Appointment
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-white z-50 relative"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-navy-950 z-40 flex flex-col items-center justify-center space-y-8 animate-fade-in">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavClick(item.id)}
              className={`text-2xl font-serif font-bold ${
                currentPage === item.id ? 'text-gold-500' : 'text-white'
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="pt-8">
            <button
               onClick={() => handleNavClick(PageId.CONTACT)}
               className="bg-gold-600 text-white px-10 py-4 text-lg font-bold uppercase tracking-wider shadow-xl"
            >
              Book Appointment
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};
