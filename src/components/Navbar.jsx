import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Building2, 
  Menu, 
  X, 
  LogIn, 
  Phone, 
  ChevronRight
} from 'lucide-react';
import { FEDERATION_INFO } from '../data/federationData';

export default function Navbar({ onOpenMemberModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Úvod', path: '/' },
    { name: 'O federaci', path: '/o-federaci' },
    { name: 'Členové', path: '/clenove' },
    { name: 'Dokumenty', path: '/dokumenty' },
    { name: 'Aktuality', path: '/aktuality' },
    { name: 'Kontakt', path: '/kontakt' },
  ];

  return (
    <header 
      className={`sticky top-0 z-40 transition-all duration-200 bg-white ${
        scrolled 
          ? 'border-b border-slate-200/80 shadow-xs' 
          : 'border-b border-slate-100'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-18">
          
          {/* Minimal Brand Logo & Title */}
          <Link to="/" className="flex items-center gap-3 group text-left">
            <div className="w-9 h-9 rounded-lg bg-slate-900 text-white flex items-center justify-center transition-colors group-hover:bg-slate-800">
              <Building2 className="w-4.5 h-4.5 text-slate-200" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-bold text-slate-900 tracking-tight leading-tight">
                {FEDERATION_INFO.name}
              </span>
              <span className="text-[11px] text-slate-500 font-normal">
                Těšínské Slezsko · Euroregion
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                    isActive
                      ? 'text-slate-900 bg-slate-100 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Action Area */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+48608031289" 
              className="text-xs text-slate-500 hover:text-slate-900 transition-colors flex items-center gap-1.5"
            >
              <Phone className="w-3.5 h-3.5 text-slate-400" />
              <span>+48 608 031 289</span>
            </a>

            <button
              type="button"
              onClick={onOpenMemberModal}
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-xs font-medium px-3.5 py-2 rounded-lg transition-colors cursor-pointer"
              title="Vstup do členské zóny"
            >
              <LogIn className="w-3.5 h-3.5" />
              <span>Členská zóna</span>
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              type="button"
              onClick={onOpenMemberModal}
              className="md:hidden inline-flex items-center p-2 rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200"
              title="Členská zóna"
            >
              <LogIn className="w-4 h-4 text-slate-700" />
            </button>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Menu"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${
                    isActive
                      ? 'text-slate-900 bg-slate-100 font-semibold'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`
                }
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </NavLink>
            ))}

            <div className="pt-3 mt-2 border-t border-slate-100">
              <button
                type="button"
                onClick={() => {
                  setIsOpen(false);
                  onOpenMemberModal();
                }}
                className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white font-medium py-2.5 px-4 rounded-lg text-xs hover:bg-slate-800 transition-colors"
              >
                <LogIn className="w-3.5 h-3.5" />
                <span>Členská zóna</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
