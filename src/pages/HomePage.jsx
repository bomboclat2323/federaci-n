import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  FileText, 
  Users, 
  ArrowRight, 
  Calendar, 
  CheckCircle2, 
  Scale, 
  ShieldCheck, 
  GraduationCap, 
  Globe, 
  ExternalLink,
  Award,
  ChevronRight,
  UserPlus,
  Compass
} from 'lucide-react';
import { FEDERATION_INFO, NEWS_ARTICLES } from '../data/federationData';

export default function HomePage({ onOpenMemberModal, onSelectNews }) {
  const recentNews = NEWS_ARTICLES.slice(0, 3);

  const getPillarIcon = (iconName) => {
    switch(iconName) {
      case 'Scale': return <Scale className="w-6 h-6 text-blue-900" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-900" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-blue-900" />;
      case 'Globe': return <Globe className="w-6 h-6 text-blue-900" />;
      default: return <Award className="w-6 h-6 text-blue-900" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 1. Hero Institucional */}
      <section className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-blue-950 text-white overflow-hidden py-16 lg:py-24 border-b border-blue-900/40">
        
        {/* Subtle decorative background mesh */}
        <div className="absolute inset-0 bg-institutional-grid opacity-10 pointer-events-none"></div>
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue-600/10 blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Headlines & Action Buttons */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 bg-blue-950/80 border border-blue-800/80 px-3.5 py-1.5 rounded-full text-xs font-semibold text-blue-200 tracking-wide uppercase">
                <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
                [Oficiální reprezentativní orgán svazu]
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight">
                {FEDERATION_INFO.hero.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-300 font-normal leading-relaxed max-w-2xl">
                {FEDERATION_INFO.hero.subtitle}
              </p>

              {/* Required Hero Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <Link
                  to="/clenove"
                  className="inline-flex items-center gap-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-6 py-3.5 rounded-lg shadow-lg hover:shadow-blue-600/30 transition-all text-sm group"
                >
                  <Users className="w-4 h-4" />
                  <span>Přehled členských organizací</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  to="/dokumenty"
                  className="inline-flex items-center gap-2.5 bg-slate-800/90 hover:bg-slate-700/90 text-slate-200 hover:text-white font-semibold px-6 py-3.5 rounded-lg border border-slate-700 hover:border-slate-600 transition-all text-sm"
                >
                  <FileText className="w-4 h-4 text-blue-300" />
                  <span>Oficiální dokumenty</span>
                </Link>
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-center gap-3">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  [Řádné členství podle zákona o spolcích]
                </span>
                <span>•</span>
                <span>[Zapsáno v soudním rejstříku ČR]</span>
              </div>
            </div>

            {/* Right Column: Required Institutional Unsplash Image */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-slate-700/60 group">
                <img
                  src={FEDERATION_INFO.hero.image}
                  alt={FEDERATION_INFO.hero.imageCaption}
                  className="w-full h-80 sm:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md p-3.5 rounded-xl border border-slate-700/70 text-left">
                  <p className="text-xs text-slate-200 font-medium">
                    {FEDERATION_INFO.hero.imageCaption}
                  </p>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    [Pravidelné zasedání statutárních zástupců a delegátů]
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Bloque de Cifras Clave (Key figures) */}
      <section className="relative -mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200/80 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
          {FEDERATION_INFO.stats.map((stat) => (
            <div key={stat.id} className="p-6 text-center hover:bg-slate-50/60 transition-colors">
              <div className="text-3xl lg:text-4xl font-extrabold text-blue-950 tracking-tight mb-1">
                {stat.number}
              </div>
              <div className="text-sm font-bold text-slate-800 mb-1">
                {stat.label}
              </div>
              <div className="text-xs text-slate-500 leading-normal">
                {stat.description}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Strategic Pillars / Oborové pilíře a poslání */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          
          <div className="max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wider bg-blue-100/70 px-3 py-1 rounded-full">
              [Strategické pilíře činnosti]
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-4">
              [Základní poslání a působnost federace v České republice]
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              [Zde uveďte souhrnný popis hlavních priorit svazu. Naše federace reprezentuje hlas sdružených subjektů před státní správou, dbá na vysoký standard profesní etiky a vytváří prostor pro vzájemné sdílení zkušeností a růst celého sektoru.]
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {FEDERATION_INFO.pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:shadow-md hover:border-blue-900/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-lg bg-blue-50 flex items-center justify-center mb-5 border border-blue-100">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center text-xs font-semibold text-blue-900">
                  <Link to="/o-federaci" className="hover:underline flex items-center gap-1">
                    <span>Více o stanovách</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. Últimos Comunicados (Grid con 3 noticias recientes en placeholder) */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                [Oficiální zprávy a komuniké]
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Poslední oficiální stanoviska a sdělení
              </h2>
              <p className="text-sm text-slate-500 mt-1">
                [Aktuální informace prezidia, legislativní stanoviska a pozvánky na valné hromady]
              </p>
            </div>
            
            <Link
              to="/aktuality"
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-900 hover:text-blue-950"
            >
              <span>Všechny tiskové zprávy</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {recentNews.map((news) => (
              <article
                key={news.id}
                className="bg-slate-50 rounded-xl border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6">
                  {/* Category and date badge */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-xs font-bold bg-blue-100 text-blue-900 px-2.5 py-0.5 rounded">
                      {news.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {news.date}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-base font-bold text-slate-900 mb-3 leading-snug line-clamp-2">
                    {news.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {news.summary}
                  </p>
                </div>

                <div className="px-6 py-4 bg-white border-t border-slate-200 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">{news.author}</span>
                  <button
                    type="button"
                    onClick={() => onSelectNews(news)}
                    className="font-bold text-blue-900 hover:text-blue-950 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Číst sdělení</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Banner Institucional de Afiliación para Nuevas Entidades */}
      <section className="py-16 bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-slate-800/80 backdrop-blur-md rounded-2xl p-8 sm:p-12 border border-slate-700/80 shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
            
            <div className="space-y-4 max-w-2xl text-left">
              <span className="inline-block bg-blue-600/40 text-blue-200 border border-blue-500/40 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider">
                [Výzva pro zájmové a profesní subjekty]
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                Staňte se součástí naší celostátní federace
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                [Zde bude oficiální text pro nábor nových členů: Hledáme odpovědné organizace a profesní spolky, které chtějí společně posilovat postavení našeho sektoru, podílet se na legislativních připomínkách a čerpat výhody sdružené oborové platformy.]
              </p>
              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-2">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  [Plné hlasovací právo na valné hromadě]
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  [Bezplatné právní a dotační poradenství]
                </span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3.5 w-full lg:w-auto shrink-0">
              <button
                type="button"
                onClick={onOpenMemberModal}
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-6 py-3.5 rounded-lg shadow-lg hover:shadow-blue-600/30 transition-all text-sm cursor-pointer whitespace-nowrap"
              >
                <UserPlus className="w-4 h-4" />
                <span>Podat formální přihlášku</span>
              </button>

              <Link
                to="/clenove"
                className="inline-flex items-center justify-center gap-2 bg-slate-900/90 hover:bg-slate-900 text-slate-200 hover:text-white font-semibold px-6 py-3.5 rounded-lg border border-slate-700 transition-colors text-sm whitespace-nowrap"
              >
                <span>Jak se stát členem?</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
