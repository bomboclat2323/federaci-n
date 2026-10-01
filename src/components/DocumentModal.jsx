import React, { useState } from 'react';
import { X, FileText, Download, CheckCircle2, Calendar, ShieldCheck, UserCheck, HardDrive, Printer } from 'lucide-react';
import { FEDERATION_INFO } from '../data/federationData';

export default function DocumentModal({ document, isOpen, onClose }) {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen || !document) return null;

  const handleDownload = () => {
    setDownloaded(true);
    setTimeout(() => {
      // Simulate download feedback
      alert(`[Oficiální dokument "${document.title}" byl připraven k exportu a stažení v elektronické podobě.]`);
    }, 400);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 animate-fadeIn">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-900 flex items-center justify-center text-blue-300">
              <FileText className="w-4 h-4" />
            </div>
            <div>
              <span className="text-xs text-blue-300 uppercase tracking-wider font-semibold">
                Oficiální spis a dokument
              </span>
              <h3 className="font-bold text-sm text-white line-clamp-1">
                {document.title}
              </h3>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="text-slate-400 hover:text-white p-1 rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Zavřít"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-5">
          <div>
            <span className="inline-block bg-blue-100 text-blue-900 text-xs font-semibold px-2.5 py-1 rounded mb-2">
              {document.category}
            </span>
            <h4 className="text-lg font-bold text-slate-900">
              {document.title}
            </h4>
            <p className="text-xs text-slate-600 mt-2 leading-relaxed bg-slate-50 p-3 rounded-lg border border-slate-200/80">
              {document.description}
            </p>
          </div>

          {/* Document metadata table */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <span className="text-slate-500 block mb-1 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-blue-800" />
                Datum schválení
              </span>
              <span className="font-semibold text-slate-900">{document.approvedDate}</span>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <span className="text-slate-500 block mb-1 flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-blue-800" />
                Verze dokumentu
              </span>
              <span className="font-semibold text-slate-900">{document.version}</span>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <span className="text-slate-500 block mb-1 flex items-center gap-1">
                <HardDrive className="w-3.5 h-3.5 text-blue-800" />
                Formát a velikost
              </span>
              <span className="font-semibold text-slate-900">{document.fileType} ({document.size})</span>
            </div>

            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100">
              <span className="text-slate-500 block mb-1 flex items-center gap-1">
                <UserCheck className="w-3.5 h-3.5 text-blue-800" />
                Schvalující orgán
              </span>
              <span className="font-semibold text-slate-900">{document.approvedBy}</span>
            </div>
          </div>

          <div className="bg-amber-50/80 border border-amber-200 text-amber-900 p-3 rounded-lg text-xs leading-relaxed">
            [Upozornění pro vedení: Tento dokument představuje právně závazný vnitřní předpis federace. Elektronicky podepsáno certifikátem statutárního zástupce.]
          </div>

          {/* Action buttons */}
          <div className="space-y-2 pt-2">
            <button
              type="button"
              onClick={handleDownload}
              className="w-full bg-blue-950 text-white font-semibold py-2.5 px-4 rounded-lg text-sm hover:bg-blue-900 transition-colors shadow flex items-center justify-center gap-2 cursor-pointer"
            >
              {downloaded ? (
                <>
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>[Dokument stažen do zařízení]</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4" />
                  <span>Stáhnout oficiální znění ({document.fileType})</span>
                </>
              )}
            </button>

            <button
              type="button"
              onClick={() => window.print()}
              className="w-full bg-slate-100 text-slate-700 font-semibold py-2 px-4 rounded-lg text-xs hover:bg-slate-200 transition-colors flex items-center justify-center gap-2"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Vytisknout spisový přehled</span>
            </button>
          </div>
        </div>

        {/* Footer info */}
        <div className="bg-slate-100 px-6 py-2.5 border-t border-slate-200 text-[11px] text-slate-500 text-center">
          {FEDERATION_INFO.legalName} • Spisová značka dokumentu: {document.id.toUpperCase()}-2026
        </div>

      </div>
    </div>
  );
}
