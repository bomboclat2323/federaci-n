import React from 'react';
import { X, Calendar, Clock, User, Share2, Tag, ShieldAlert, FileText, Check } from 'lucide-react';
import { FEDERATION_INFO } from '../data/federationData';

export default function NewsModal({ article, isOpen, onClose }) {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/75 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full overflow-hidden border border-slate-200 animate-fadeIn">
        
        {/* Top Header */}
        <div className="bg-slate-900 text-white px-6 py-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-2.5">
            <span className="bg-blue-900/80 text-blue-300 text-xs font-semibold px-2.5 py-1 rounded">
              {article.category}
            </span>
            <span className="text-xs text-slate-400">
              Oficiální sdělení federace
            </span>
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

        {/* Content */}
        <div className="p-6 md:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Metadata bar */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 border-b border-slate-100 pb-3">
            <span className="flex items-center gap-1.5 font-medium text-slate-700">
              <Calendar className="w-3.5 h-3.5 text-blue-900" />
              {article.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-slate-400" />
              {article.readTime} čtení
            </span>
            <span className="flex items-center gap-1.5 text-slate-600">
              <User className="w-3.5 h-3.5 text-slate-400" />
              {article.author}
            </span>
          </div>

          {/* Title */}
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
            {article.title}
          </h2>

          {/* Anotace / Executive summary */}
          <div className="p-4 bg-slate-50 rounded-xl border-l-4 border-blue-900 text-slate-700 text-sm font-medium leading-relaxed">
            {article.summary}
          </div>

          {/* Full content */}
          <div className="prose prose-slate max-w-none text-sm text-slate-700 leading-relaxed space-y-4">
            <p className="whitespace-pre-line">
              {article.content}
            </p>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-xs text-slate-600">
              <strong className="text-slate-900 block mb-1">[Pokyn pro tisk a média]:</strong>
              Veškeré citace statutárních zástupců a oficiální stanoviska podléhají autorizaci tiskového oddělení {FEDERATION_INFO.name}. Pro doplňující komentáře kontaktujte tiskového mluvčího.
            </div>
          </div>

          {/* Official stamp & attachments */}
          <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div className="text-slate-500">
              Vydáno: {FEDERATION_INFO.legalName}
            </div>
            <button
              type="button"
              onClick={() => alert('[Odkaz na oficiální sdělení byl zkopírován do schránky.]')}
              className="inline-flex items-center gap-1.5 text-blue-900 font-semibold hover:text-blue-950"
            >
              <Share2 className="w-4 h-4" />
              <span>Sdílet oficiální sdělení</span>
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="bg-slate-900 text-white text-xs font-semibold px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors"
          >
            Zavřít sdělení
          </button>
        </div>

      </div>
    </div>
  );
}
