import React, { useState, useMemo } from 'react';
import { 
  FileText, 
  Download, 
  Search, 
  Filter, 
  Calendar, 
  ShieldCheck, 
  HardDrive, 
  ExternalLink,
  Eye,
  CheckCircle2,
  FolderOpen
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { OFFICIAL_DOCUMENTS, FEDERATION_INFO } from '../data/federationData';

export default function DocumentsPage({ onSelectDoc }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const breadcrumbItems = [
    { label: 'Dokumenty a stanovy', path: '/dokumenty' }
  ];

  // Unique categories
  const categories = [
    { id: 'all', label: 'Všechny dokumenty' },
    { id: 'Základní právní dokumenty', label: 'Základní právní dokumenty' },
    { id: 'Vnitřní předpisy', label: 'Vnitřní předpisy a řády' },
    { id: 'Zápisy a usnesení', label: 'Zápisy z valné hromady' },
    { id: 'Výroční zprávy a audit', label: 'Výroční zprávy a hospodaření' },
    { id: 'Členská agenda', label: 'Členské formuláře' }
  ];

  const filteredDocuments = useMemo(() => {
    return OFFICIAL_DOCUMENTS.filter(doc => {
      const matchSearch = 
        doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doc.approvedBy.toLowerCase().includes(searchTerm.toLowerCase());

      const matchCategory = 
        selectedCategory === 'all' || doc.category.includes(selectedCategory);

      return matchSearch && matchCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Breadcrumbs items={breadcrumbItems} />

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-blue-300 uppercase tracking-wider bg-blue-900/60 px-3 py-1 rounded-full">
              Sbírka listin a transparentnost
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4 tracking-tight">
              Oficiální dokumenty a stanovy ke stažení
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              [Všechny základní organizační předpisy, jednací řády, výroční zprávy a usnesení valných hromad zveřejněné v souladu se zásadami otevřeného spolku.]
            </p>
          </div>
        </div>
      </section>

      {/* Main Documents Content */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Search & Filter Toolbar */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 justify-between items-center">
            
            {/* Search */}
            <div className="relative w-full lg:w-96">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Vyhledat v názvu, obsahu nebo schvalujícím orgánu..."
                className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
              />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 w-full lg:w-auto items-center">
              <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                Sekce:
              </span>

              {categories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                    selectedCategory === cat.id
                      ? 'bg-blue-950 text-white'
                      : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>

          </div>
        </div>

        {/* Structured List of Documents */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden divide-y divide-slate-100">
          {filteredDocuments.length === 0 ? (
            <div className="p-12 text-center text-slate-500">
              <FolderOpen className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="font-semibold text-sm">Žádný dokument neodpovídá zvolenému filtru</p>
              <button
                type="button"
                onClick={() => { setSearchTerm(''); setSelectedCategory('all'); }}
                className="text-xs text-blue-900 font-semibold underline mt-2"
              >
                Resetovat vyhledávání
              </button>
            </div>
          ) : (
            filteredDocuments.map((doc) => (
              <div
                key={doc.id}
                className="p-5 sm:p-6 hover:bg-slate-50/80 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-5"
              >
                {/* Left side: Icon and Titles */}
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-lg bg-blue-50 border border-blue-200/80 text-blue-900 flex items-center justify-center shrink-0 mt-0.5">
                    <FileText className="w-5 h-5" />
                  </div>

                  <div className="space-y-1.5 text-left">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="text-[11px] font-bold bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                        {doc.category}
                      </span>
                      <span className="text-[11px] text-slate-500 font-mono">
                        Verze: {doc.version}
                      </span>
                      <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-medium flex items-center gap-1">
                        <CheckCircle2 className="w-3 h-3" />
                        Platné znění
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug">
                      {doc.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed max-w-3xl">
                      {doc.description}
                    </p>

                    <div className="flex flex-wrap items-center gap-4 text-[11px] text-slate-500 pt-1">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3 text-slate-400" />
                        Schváleno: <strong>{doc.approvedDate}</strong>
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <ShieldCheck className="w-3 h-3 text-slate-400" />
                        Orgán: {doc.approvedBy}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1 font-mono">
                        <HardDrive className="w-3 h-3 text-slate-400" />
                        {doc.fileType} ({doc.size})
                      </span>
                    </div>
                  </div>
                </div>

                {/* Right side: Actions */}
                <div className="flex items-center gap-2 self-start md:self-center shrink-0 pt-2 md:pt-0">
                  <button
                    type="button"
                    onClick={() => onSelectDoc(doc)}
                    className="inline-flex items-center gap-1.5 bg-blue-950 hover:bg-blue-900 text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-sm transition-all cursor-pointer"
                    title="Otevřít spis a stáhnout oficiální soubor"
                  >
                    <Download className="w-3.5 h-3.5 text-blue-300" />
                    <span>Stáhnout ({doc.fileType})</span>
                  </button>

                  <button
                    type="button"
                    onClick={() => onSelectDoc(doc)}
                    className="p-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg border border-slate-200 transition-colors"
                    title="Zobrazit podrobnosti spisu"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Transparency note at bottom */}
        <div className="mt-8 bg-blue-50/70 border border-blue-200/80 p-5 rounded-xl text-xs text-blue-950 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-blue-900 shrink-0 mt-0.5" />
          <div className="space-y-1">
            <h4 className="font-bold text-xs uppercase tracking-wide">
              [Doložka o transparentnosti a veřejné dostupnosti]
            </h4>
            <p className="leading-relaxed">
              [Veškeré výše uvedené dokumenty jsou v souladu se zákonem č. 89/2012 Sb., občanský zákoník, v platném znění řádně schváleny valnou hromadou a uloženy ve sbírce listin spolkového rejstříku vedeného Městským soudem v Praze. Členské subjekty mají právo nahlížet do originálů smluv v sídle sekretariátu.]
            </p>
          </div>
        </div>

      </section>

    </div>
  );
}
