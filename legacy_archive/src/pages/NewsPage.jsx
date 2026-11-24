import React, { useState, useMemo } from 'react';
import { 
  Calendar, 
  Search, 
  Filter, 
  Clock, 
  User, 
  ChevronRight, 
  Share2, 
  FileText, 
  Mail, 
  Phone,
  Megaphone,
  Radio
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { NEWS_ARTICLES, FEDERATION_INFO } from '../data/federationData';

export default function NewsPage({ onSelectNews }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const breadcrumbItems = [
    { label: 'Aktuality a tiskové zprávy', path: '/aktuality' }
  ];

  const categories = [
    { id: 'all', label: 'Všechna sdělení' },
    { id: 'Oficiální oznámení', label: 'Oficiální oznámení' },
    { id: 'Valná hromada', label: 'Valné shromáždění' },
    { id: 'Událost', label: 'Odborné akce a fóra' }
  ];

  const filteredArticles = useMemo(() => {
    return NEWS_ARTICLES.filter(article => {
      const matchSearch = 
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(searchTerm.toLowerCase());

      const matchCategory = 
        selectedCategory === 'all' || article.category === selectedCategory;

      return matchSearch && matchCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Breadcrumbs items={breadcrumbItems} />

      {/* Page Header */}
      <section className="bg-white py-12 lg:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Tiskový servis a média
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-1 mb-3 tracking-tight">
              Aktuality a oficiální tiskové zprávy
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Přehled oficiálních oznámení, zpráv ze zasedání statutárních orgánů a valných shromáždění federace CFOP a mezinárodních konferencí.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Filter and Search Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 mb-10">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Vyhledat v tiskových zprávách..."
                className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-2 w-full md:w-auto items-center">
              <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                Kategorie:
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

        {/* News Grid */}
        {filteredArticles.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
            <Radio className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700">Žádná zpráva neodpovídá vyhledávání</h3>
            <p className="text-xs text-slate-500 mt-1">Zkuste zadat jiný dotaz nebo zrušit filtry.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article) => (
              <article
                key={article.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6">
                  {/* Category and date header */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold bg-blue-100 text-blue-900 px-2.5 py-0.5 rounded">
                      {article.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {article.date}
                    </span>
                  </div>

                  {/* Headline */}
                  <h2 className="text-base sm:text-lg font-bold text-slate-900 mb-3 leading-snug">
                    {article.title}
                  </h2>

                  {/* Summary */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-4">
                    {article.summary}
                  </p>
                </div>

                {/* Footer with read action */}
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                  <div className="text-slate-500 font-medium flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-slate-400" />
                    <span>{article.author}</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectNews(article)}
                    className="font-bold text-blue-900 hover:text-blue-950 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Číst celé sdělení</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>
        )}

        {/* Media contact banner */}
        <div className="mt-14 bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 border border-blue-100">
              <Megaphone className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-base font-bold text-slate-900 mb-1">
                Servis pro novináře a redakce
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed max-w-xl">
                Zástupci médií mohou kontaktovat sekretariát federace CFOP pro oficiální vyjádření, rozhovory a informace k přeshraničním projektům.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="mailto:cfoppes@gmail.com"
              className="inline-flex items-center gap-2 bg-blue-950 text-white font-semibold px-4 py-2.5 rounded-lg text-xs hover:bg-blue-900 transition-colors shadow-sm"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>cfoppes@gmail.com</span>
            </a>
            <a
              href="tel:+48608031289"
              className="inline-flex items-center gap-2 bg-slate-100 text-slate-800 font-semibold px-4 py-2.5 rounded-lg text-xs hover:bg-slate-200 transition-colors"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+48 608 031 289</span>
            </a>
          </div>
        </div>

      </section>

    </div>
  );
}
