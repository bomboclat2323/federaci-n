import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Building2, 
  Menu, 
  X, 
  LogIn, 
  FileText, 
  Phone, 
  Mail, 
  ShieldCheck, 
  Globe, 
  ExternalLink,
  ChevronRight
} from 'lucide-react';
import { FEDERATION_INFO } from '../data/federationData';

export default function Navbar({ onOpenMemberModal }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
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
    <>
      {/* Top institutional utility bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-4 flex-wrap">
            <span className="flex items-center gap-1.5 text-slate-300 font-medium">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400"></span>
              [Oficiální portál neziskových a profesních organizací ČR]
            </span>
            <span className="hidden md:inline-block text-slate-500">|</span>
            <span className="hidden md:inline-flex items-center gap-1 text-slate-400">
              <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
              {FEDERATION_INFO.datovaSchranka}
            </span>
          </div>

          <div className="flex items-center gap-4 text-slate-400 ml-auto sm:ml-0">
            <span className="hidden lg:inline-flex items-center gap-1">
              <Phone className="w-3 h-3 text-slate-400" />
              +420 220 123 450
            </span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="bg-slate-800 text-slate-300 px-2 py-0.5 rounded text-[11px] font-semibold tracking-wider">
              CZ
            </span>
          </div>
        </div>
      </div>

      {/* Main sticky navigation header */}
      <header className={`sticky top-0 z-40 transition-all duration-200 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200' 
          : 'bg-white border-b border-slate-200'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            
            {/* Institutional Brand Logo & Name */}
            <Link to="/" className="flex items-center gap-3.5 group text-left">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-slate-900 via-blue-950 to-blue-900 text-white flex items-center justify-center shadow-md group-hover:shadow-blue-900/20 transition-all border border-blue-900">
                <Building2 className="w-6 h-6 text-blue-300 group-hover:scale-105 transition-transform" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-slate-900 tracking-tight leading-tight group-hover:text-blue-900 transition-colors">
                  {FEDERATION_INFO.name}
                </span>
                <span className="text-xs text-slate-500 font-medium tracking-wide">
                  [Oficiální portál členských subjektů a partnerů]
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3.5 py-2 text-sm font-semibold rounded-md transition-colors ${
                      isActive
                        ? 'text-blue-950 bg-blue-50/80 font-bold border-b-2 border-blue-900'
                        : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Quick Action Button for Member Portal / Client Zone */}
            <div className="hidden md:flex items-center gap-3">
              <button
                type="button"
                onClick={onOpenMemberModal}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-950 to-slate-900 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm hover:from-blue-900 hover:to-slate-800 hover:shadow-md transition-all border border-blue-950/20 active:scale-[0.99] cursor-pointer"
                title="Vstup do členské zóny nebo podání přihlášky"
              >
                <LogIn className="w-4 h-4 text-blue-300" />
                <span>Klientská zóna / Přihlášení pro členy</span>
              </button>
            </div>

            {/* Mobile menu trigger */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                type="button"
                onClick={onOpenMemberModal}
                className="md:hidden inline-flex items-center p-2 rounded-lg text-slate-700 bg-slate-100 hover:bg-slate-200"
                title="Klientská zóna"
              >
                <LogIn className="w-5 h-5 text-blue-900" />
              </button>
              <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="p-2.5 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-blue-900"
                aria-label="Přepnout navigaci"
              >
                {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white shadow-xl animate-fadeIn">
            <div className="px-4 pt-3 pb-6 space-y-1.5">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center justify-between px-3.5 py-2.5 text-base font-medium rounded-lg transition-colors ${
                      isActive
                        ? 'text-blue-950 bg-blue-50 font-bold border-l-4 border-blue-950'
                        : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                    }`
                  }
                >
                  <span>{link.name}</span>
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                </NavLink>
              ))}

              <div className="pt-4 mt-3 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    onOpenMemberModal();
                  }}
                  className="w-full flex items-center justify-center gap-2 bg-blue-950 text-white font-semibold py-3 px-4 rounded-lg shadow hover:bg-blue-900 transition-colors text-sm"
                >
                  <LogIn className="w-4 h-4 text-blue-300" />
                  <span>Klientská zóna / Přihlášení pro členy</span>
                </button>
                <p className="text-center text-xs text-slate-500 mt-2">
                  [Zabezpečený přístup pro pověřené zástupce organizací]
                </p>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
