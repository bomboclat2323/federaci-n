import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  MapPin, 
  Mail, 
  Phone,
  Lock,
  ChevronRight
} from 'lucide-react';
import { FEDERATION_INFO } from '../data/federationData';

export default function Footer({ onOpenMemberModal }) {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-14 pb-10 border-t border-slate-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: 4 Clean Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-10 border-b border-slate-800">
          
          {/* Col 1: Identity */}
          <div className="space-y-3">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md bg-slate-800 flex items-center justify-center text-white">
                <Building2 className="w-4 h-4 text-slate-300" />
              </div>
              <span className="font-bold text-white text-sm tracking-tight">
                {FEDERATION_INFO.name}
              </span>
            </div>
            
            <p className="text-xs text-slate-400 leading-relaxed">
              {FEDERATION_INFO.legalName}
            </p>
            
            <div className="text-xs text-slate-500 space-y-1 pt-1">
              <p>KRS: {FEDERATION_INFO.krs}</p>
              <p>NIP: {FEDERATION_INFO.nip} · REGON: {FEDERATION_INFO.regon}</p>
              <p className="text-[11px] text-slate-500 pt-1">
                {FEDERATION_INFO.registryInfo}
              </p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Navigace
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Úvodní stránka
                </Link>
              </li>
              <li>
                <Link to="/o-federaci" className="hover:text-white transition-colors">
                  O federaci a struktura
                </Link>
              </li>
              <li>
                <Link to="/clenove" className="hover:text-white transition-colors">
                  Členské organizace
                </Link>
              </li>
              <li>
                <Link to="/dokumenty" className="hover:text-white transition-colors">
                  Oficiální dokumenty
                </Link>
              </li>
              <li>
                <Link to="/aktuality" className="hover:text-white transition-colors">
                  Aktuality a komuniké
                </Link>
              </li>
              <li>
                <Link to="/kontakt" className="hover:text-white transition-colors">
                  Kontakt a sídlo
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Documents & Transparency */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Dokumenty
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <Link to="/dokumenty" className="hover:text-white transition-colors">
                  Stanovy federace CFOP
                </Link>
              </li>
              <li>
                <Link to="/dokumenty" className="hover:text-white transition-colors">
                  Jednací a volební řád
                </Link>
              </li>
              <li>
                <Link to="/dokumenty" className="hover:text-white transition-colors">
                  Výroční zprávy a hospodaření
                </Link>
              </li>
              <li className="pt-2">
                <span className="text-[11px] text-slate-500 block leading-relaxed">
                  Zpracování osobních údajů probíhá v souladu s nařízením GDPR (EU 2016/679).
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Secretariat */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3">
              Sekretariát
            </h4>
            <div className="space-y-2 text-xs text-slate-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                <span>{FEDERATION_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>+48 608 031 289</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                <span>cfoppes@gmail.com</span>
              </div>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onOpenMemberModal}
                  className="inline-flex items-center gap-1.5 bg-slate-800 hover:bg-slate-700 text-slate-200 px-3 py-1.5 rounded-md text-xs font-medium transition-colors"
                >
                  <Lock className="w-3 h-3" />
                  <span>Členská zóna</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Clean & Minimal */}
        <div className="pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] text-slate-500">
          <div>
            <p>© 2026 {FEDERATION_INFO.name}. Všechna práva vyhrazena.</p>
          </div>

          <div className="flex items-center gap-4 text-slate-400">
            <Link to="/dokumenty" className="hover:text-white transition-colors">
              Stanovy federace
            </Link>
            <span>•</span>
            <span className="hover:text-white cursor-pointer">
              Ochrana osobních údajů
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
