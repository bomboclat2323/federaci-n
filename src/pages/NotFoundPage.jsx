import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowLeft, Home } from 'lucide-react';
import { FEDERATION_INFO } from '../data/federationData';

export default function NotFoundPage() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-20 px-4 bg-slate-50">
      <div className="max-w-md w-full text-center space-y-6 bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
        <div className="w-16 h-16 bg-blue-50 text-blue-900 rounded-full flex items-center justify-center mx-auto border border-blue-100">
          <Building2 className="w-8 h-8" />
        </div>
        
        <div>
          <span className="text-3xl font-extrabold text-blue-950 font-mono">404</span>
          <h1 className="text-xl font-bold text-slate-900 mt-2">
            Stránka nebyla nalezena
          </h1>
          <p className="text-xs text-slate-500 mt-2 leading-relaxed">
            [Požadovaný dokument nebo stránka oficiálního portálu {FEDERATION_INFO.name} neexistuje nebo byla přesunuta do archivu.]
          </p>
        </div>

        <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 bg-blue-950 text-white font-semibold px-4 py-2.5 rounded-lg text-xs hover:bg-blue-900 transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>Návrat na úvod</span>
          </Link>
          <Link
            to="/kontakt"
            className="inline-flex items-center justify-center gap-2 bg-slate-100 text-slate-700 font-semibold px-4 py-2.5 rounded-lg text-xs hover:bg-slate-200 transition-colors"
          >
            <span>Kontaktovat sekretariát</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
