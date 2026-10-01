import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Mail, 
  Phone, 
  MapPin, 
  ShieldCheck, 
  FileText, 
  ExternalLink,
  CreditCard,
  Lock,
  ChevronRight
} from 'lucide-react';
import { FEDERATION_INFO } from '../data/federationData';

export default function Footer({ onOpenMemberModal }) {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-12 border-t-4 border-blue-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 4 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-slate-800">
          
          {/* Col 1: Legal Identity & Summary */}
          <div className="space-y-4 lg:col-span-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-900/60 border border-blue-700/50 flex items-center justify-center text-white">
                <Building2 className="w-5 h-5 text-blue-300" />
              </div>
              <span className="font-bold text-white tracking-tight text-base">
                {FEDERATION_INFO.name}
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              {FEDERATION_INFO.legalName}
            </p>
            
            <div className="text-xs text-slate-400 space-y-1.5 pt-1">
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{FEDERATION_INFO.ico}</span>
              </div>
              <div className="flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{FEDERATION_INFO.dic}</span>
              </div>
              <p className="text-[11px] text-slate-500 leading-normal pt-1">
                {FEDERATION_INFO.registryInfo}
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Navigace portálu
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  Úvodní stránka
                </Link>
              </li>
              <li>
                <Link to="/o-federaci" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  O federaci a struktura
                </Link>
              </li>
              <li>
                <Link to="/clenove" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  Seznam členských organizací
                </Link>
              </li>
              <li>
                <Link to="/dokumenty" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  Oficiální dokumenty a stanovy
                </Link>
              </li>
              <li>
                <Link to="/aktuality" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  Aktuality a tiskové zprávy
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3.5 h-3.5 text-blue-400" />
                  Sídlo a kontakty
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Documents, Transparency & GDPR */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Transparentnost a řády
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li>
                <Link to="/dokumenty" className="hover:text-blue-300 transition-colors flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>[Stanovy federace (platné znění)]</span>
                </Link>
              </li>
              <li>
                <Link to="/dokumenty" className="hover:text-blue-300 transition-colors flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>[Jednací řád a volební řád]</span>
                </Link>
              </li>
              <li>
                <Link to="/dokumenty" className="hover:text-blue-300 transition-colors flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>[Zápisy z valné hromady]</span>
                </Link>
              </li>
              <li>
                <Link to="/dokumenty" className="hover:text-blue-300 transition-colors flex items-center gap-2">
                  <FileText className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                  <span>[Výroční zpráva a hospodaření]</span>
                </Link>
              </li>
              <li className="pt-2 border-t border-slate-800/80">
                <span className="text-slate-300 font-medium block mb-1">
                  [Ochrana osobních údajů a GDPR]
                </span>
                <span className="text-[11px] text-slate-500 leading-relaxed block">
                  [Zpracování probíhá striktně v souladu s Nařízením EP a Rady EU 2016/679 (GDPR).]
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Official Headquarters & Banking */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 border-b border-slate-800 pb-2">
              Oficiální sídlo a spojení
            </h4>
            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{FEDERATION_INFO.address}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <CreditCard className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{FEDERATION_INFO.bankAccount}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <span>{FEDERATION_INFO.datovaSchranka}</span>
              </div>
              <div className="pt-3">
                <button
                  type="button"
                  onClick={onOpenMemberModal}
                  className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-blue-200 border border-slate-700/80 px-3.5 py-2 rounded-lg font-medium text-xs transition-colors"
                >
                  <Lock className="w-3.5 h-3.5 text-blue-400" />
                  <span>Klientská zóna / Přihlášení</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Mandatory Legal Footer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div>
            <p>© 2026 {FEDERATION_INFO.name}. Všechna práva vyhrazena.</p>
            <p className="text-[11px] text-slate-600 mt-0.5">
              [Oficiální internetová prezentace svazu — vytvořeno v souladu s právním řádem ČR]
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-xs text-slate-400">
            <Link to="/dokumenty" className="hover:text-white transition-colors">
              [Stanovy federace]
            </Link>
            <span>•</span>
            <span className="hover:text-white cursor-pointer" title="Zásady GDPR">
              [Zásady ochrany osobních údajů (GDPR)]
            </span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer" title="Mapa stránek portálu">
              [Mapa stránek portálu]
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
