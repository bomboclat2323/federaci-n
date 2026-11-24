import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  FileText, 
  Users, 
  ArrowRight, 
  Calendar, 
  Scale, 
  ShieldCheck, 
  GraduationCap, 
  Globe, 
  Award,
  ChevronRight,
  UserPlus
} from 'lucide-react';
import { FEDERATION_INFO, NEWS_ARTICLES } from '../data/federationData';

export default function HomePage({ onOpenMemberModal, onSelectNews }) {
  const recentNews = NEWS_ARTICLES.slice(0, 3);

  const getPillarIcon = (iconName) => {
    switch(iconName) {
      case 'Scale': return <Scale className="w-5 h-5 text-slate-800" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-slate-800" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-slate-800" />;
      case 'Globe': return <Globe className="w-5 h-5 text-slate-800" />;
      default: return <Award className="w-5 h-5 text-slate-800" />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      
      {/* 1. Minimal Hero Section */}
      <section className="py-14 lg:py-20 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Clear Typography & Actions */}
            <div className="lg:col-span-7 space-y-6 text-left">
              
              <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                Oficiální portál federace CFOP · Těšínské Slezsko
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight leading-[1.15]">
                {FEDERATION_INFO.hero.title}
              </h1>

              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl">
                {FEDERATION_INFO.hero.subtitle}
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <Link
                  to="/clenove"
                  className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-medium px-5 py-3 rounded-lg text-xs sm:text-sm transition-colors group"
                >
                  <Users className="w-4 h-4" />
                  <span>Přehled členských organizací</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </Link>

                <Link
                  to="/dokumenty"
                  className="inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-slate-700 font-medium px-5 py-3 rounded-lg border border-slate-200 transition-colors text-xs sm:text-sm"
                >
                  <FileText className="w-4 h-4 text-slate-500" />
                  <span>Oficiální dokumenty</span>
                </Link>
              </div>

              <div className="pt-2 text-xs text-slate-400 flex items-center gap-3">
                <span>KRS: {FEDERATION_INFO.krs}</span>
                <span>•</span>
                <span>NIP: {FEDERATION_INFO.nip}</span>
                <span>•</span>
                <span>Euroregion Těšínské Slezsko</span>
              </div>
            </div>

            {/* Right Column: Clean Institutional Image */}
            <div className="lg:col-span-5">
              <div className="rounded-xl overflow-hidden border border-slate-200/80 shadow-xs">
                <img
                  src={FEDERATION_INFO.hero.image}
                  alt={FEDERATION_INFO.hero.imageCaption}
                  className="w-full h-72 sm:h-84 object-cover"
                />
                <div className="p-3 bg-slate-50 border-t border-slate-100 text-left">
                  <p className="text-xs text-slate-700 font-medium">
                    {FEDERATION_INFO.hero.imageCaption}
                  </p>
                  <p className="text-[11px] text-slate-500 mt-0.5">
                    Přeshraniční ekosystém občanské společnosti a sociálního podnikání
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Flat Minimal Stats Section */}
      <section className="py-12 bg-slate-50/60 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {FEDERATION_INFO.stats.map((stat) => (
              <div key={stat.id} className="text-left sm:text-center">
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight">
                  {stat.number}
                </div>
                <div className="text-xs font-semibold uppercase tracking-wider text-slate-700 mt-1">
                  {stat.label}
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {stat.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Strategic Pillars */}
      <section className="py-18 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-2xl mb-12 text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Činnost federace
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-3">
              Strategické pilíře a poslání CFOP
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              Cieszyn Federation of NGOs and Social Economy Entities (CFOP) propojuje neziskové organizace, sociální podniky a partnery v Euroregionu Těšínské Slezsko pro udržitelný společenský dopad.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {FEDERATION_INFO.pillars.map((pillar, idx) => (
              <div 
                key={idx}
                className="bg-white rounded-xl p-6 border border-slate-200/80 hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center mb-4">
                    {getPillarIcon(pillar.icon)}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-100 text-xs">
                  <Link to="/o-federaci" className="text-slate-700 hover:text-slate-900 font-medium inline-flex items-center gap-1">
                    <span>Více informací</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. News / Aktuality */}
      <section className="py-18 bg-slate-50/50 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Informace a stanoviska
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1">
                Aktuality a tiskové zprávy
              </h2>
            </div>
            
            <Link
              to="/aktuality"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-900 hover:text-slate-700"
            >
              <span>Všechny zprávy</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentNews.map((news) => (
              <article
                key={news.id}
                className="bg-white rounded-xl border border-slate-200/80 hover:border-slate-300 transition-colors flex flex-col justify-between p-6"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-medium text-slate-700">
                      {news.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-slate-400" />
                      {news.date}
                    </span>
                  </div>

                  <h3 className="text-sm font-bold text-slate-900 mb-2 leading-snug line-clamp-2">
                    {news.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {news.summary}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">{news.author}</span>
                  <button
                    type="button"
                    onClick={() => onSelectNews(news)}
                    className="font-medium text-slate-900 hover:text-slate-700 flex items-center gap-1 cursor-pointer"
                  >
                    <span>Číst detail</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </article>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Minimal Affiliation CTA */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
          
          <div className="space-y-3 max-w-2xl text-left">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Členství ve federaci
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white">
              Staňte se součástí přeshraniční federace CFOP
            </h2>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Sdružujeme spolky, nadace a sociální podniky z Euroregionu Těšínské Slezsko. Zapojte se do mezinárodních projektů a společného rozvoje občanské společnosti.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto shrink-0">
            <button
              type="button"
              onClick={onOpenMemberModal}
              className="inline-flex items-center justify-center gap-2 bg-white text-slate-900 hover:bg-slate-100 font-medium px-5 py-3 rounded-lg text-xs transition-colors cursor-pointer whitespace-nowrap"
            >
              <UserPlus className="w-4 h-4" />
              <span>Podat přihlášku</span>
            </button>

            <Link
              to="/clenove"
              className="inline-flex items-center justify-center gap-2 bg-slate-800 text-slate-200 hover:bg-slate-700 font-medium px-5 py-3 rounded-lg text-xs transition-colors whitespace-nowrap"
            >
              <span>Jak se stát členem</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
