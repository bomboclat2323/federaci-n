import React, { useState, useMemo } from 'react';
import { 
  Building2, 
  Search, 
  MapPin, 
  Globe, 
  ExternalLink, 
  ShieldCheck, 
  Calendar, 
  UserPlus, 
  FileText, 
  ArrowRight,
  Filter,
  CheckCircle2
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { MEMBER_ORGANIZATIONS, MEMBERSHIP_STEPS, OFFICIAL_DOCUMENTS } from '../data/federationData';

export default function MembersPage({ onOpenMemberModal, onSelectDoc }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedRegion, setSelectedRegion] = useState('all');

  const breadcrumbItems = [
    { label: 'Členové federace', path: '/clenove' }
  ];

  // Unique regions for filter
  const regions = useMemo(() => {
    const list = MEMBER_ORGANIZATIONS.map(m => m.region);
    return ['all', ...Array.from(new Set(list))];
  }, []);

  // Filtered members list
  const filteredMembers = useMemo(() => {
    return MEMBER_ORGANIZATIONS.filter(member => {
      const matchSearch = 
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.region.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchCategory = 
        selectedCategory === 'all' || 
        (selectedCategory === 'radny' && member.category.includes('Řádný')) ||
        (selectedCategory === 'pridruzeny' && member.category.includes('Přidružený'));

      const matchRegion = 
        selectedRegion === 'all' || member.region === selectedRegion;

      return matchSearch && matchCategory && matchRegion;
    });
  }, [searchTerm, selectedCategory, selectedRegion]);

  const applicationDoc = OFFICIAL_DOCUMENTS.find(d => d.id === 'doc-5');

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Breadcrumbs items={breadcrumbItems} />

      {/* Page Header */}
      <section className="bg-slate-900 text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-blue-300 uppercase tracking-wider bg-blue-900/60 px-3 py-1 rounded-full">
              Členská základna a partneři
            </span>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4 tracking-tight">
              Seznam členských organizací a partnerů
            </h1>
            <p className="text-slate-300 text-base leading-relaxed">
              [Podmínky členství a přehled subjektů, které jsou součástí naší federace.]
            </p>
          </div>
        </div>
      </section>

      {/* Main Members Section */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Filter and Search Bar */}
        <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-5 mb-10">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Vyhledat člena podle názvu či regionu..."
                className="w-full pl-9 pr-4 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
              />
            </div>

            {/* Filter buttons */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto items-center">
              <span className="text-xs font-semibold text-slate-500 mr-1 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" />
                Filtr:
              </span>

              <button
                type="button"
                onClick={() => setSelectedCategory('all')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === 'all'
                    ? 'bg-blue-950 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Vše ({MEMBER_ORGANIZATIONS.length})
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory('radny')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === 'radny'
                    ? 'bg-blue-950 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Řádní členové
              </button>

              <button
                type="button"
                onClick={() => setSelectedCategory('pridruzeny')}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors cursor-pointer ${
                  selectedCategory === 'pridruzeny'
                    ? 'bg-blue-950 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                Přidružení členové
              </button>
            </div>

          </div>
        </div>

        {/* Member Cards Grid */}
        {filteredMembers.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-slate-200">
            <Building2 className="w-12 h-12 text-slate-300 mx-auto mb-3" />
            <h3 className="text-base font-bold text-slate-700">Žádná organizace neodpovídá vyhledávání</h3>
            <p className="text-xs text-slate-500 mt-1">Zkuste upravit zadaná klíčová slova nebo filtr.</p>
            <button
              type="button"
              onClick={() => { setSearchTerm(''); setSelectedCategory('all'); setSelectedRegion('all'); }}
              className="mt-4 text-xs font-semibold text-blue-900 underline"
            >
              Resetovat filtry
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMembers.map((member) => (
              <div
                key={member.id}
                className="bg-white rounded-xl shadow-sm border border-slate-200 hover:border-slate-300 hover:shadow-md transition-all flex flex-col justify-between overflow-hidden"
              >
                <div className="p-6">
                  {/* Category and Year */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-bold bg-blue-50 text-blue-900 border border-blue-200/60 px-2 py-0.5 rounded">
                      {member.category}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                      <Calendar className="w-3 h-3" />
                      Členem od r. {member.memberSince}
                    </span>
                  </div>

                  {/* Logo Placeholder Crest & Org Name */}
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 text-slate-600 flex items-center justify-center font-bold text-sm shrink-0">
                      {member.id}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 leading-snug">
                        {member.name}
                      </h3>
                      <div className="flex items-center gap-1 text-xs text-slate-500 mt-1">
                        <MapPin className="w-3.5 h-3.5 text-blue-800 shrink-0" />
                        <span>{member.region}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed mt-2 bg-slate-50/70 p-3 rounded-lg border border-slate-100">
                    {member.description}
                  </p>
                </div>

                {/* Card Footer: External link to website and ID */}
                <div className="px-6 py-3.5 bg-slate-50 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400 font-mono text-[11px]">
                    IČO: {member.ico}
                  </span>

                  <a
                    href={member.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-bold text-blue-900 hover:text-blue-950 transition-colors"
                  >
                    <span>Přejít na web</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

      </section>

      {/* Sección Informativa: "¿Cómo asociarse?" (Jak se stát členem?) */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
              Podmínky a proces přijetí
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-3">
              Jak se stát členem naší federace?
            </h2>
            <p className="text-slate-600 text-sm leading-relaxed">
              [Formální proces přijímání nových subjektů do svazu probíhá transparentně v souladu s článkem IV stanov federace. Zde je přehled čtyř základních procedurálních kroků:]
            </p>
          </div>

          {/* 4 Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {MEMBERSHIP_STEPS.map((step) => (
              <div
                key={step.step}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200/90 relative flex flex-col justify-between"
              >
                <div>
                  <div className="text-2xl font-extrabold text-blue-900/60 font-mono mb-3">
                    {step.step}
                  </div>
                  <h3 className="text-sm font-bold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center text-[11px] text-slate-500 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mr-1.5" />
                  <span>[Procedurální fáze dle stanov]</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Box for Action */}
          <div className="mt-14 bg-gradient-to-r from-blue-950 to-slate-900 text-white rounded-2xl p-8 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white mb-1">
                Máte zájem o členství v naší federaci?
              </h3>
              <p className="text-xs text-slate-300">
                [Stáhněte si oficiální formulář přihlášky nebo vyplňte online žádost pro kancelář tajemníka.]
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                type="button"
                onClick={onOpenMemberModal}
                className="bg-blue-600 hover:bg-blue-500 text-white font-bold px-5 py-2.5 rounded-lg text-xs shadow transition-colors flex items-center gap-2 cursor-pointer"
              >
                <UserPlus className="w-4 h-4" />
                <span>Vyplnit online přihlášku</span>
              </button>

              {applicationDoc && (
                <button
                  type="button"
                  onClick={() => onSelectDoc(applicationDoc)}
                  className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold px-5 py-2.5 rounded-lg text-xs border border-slate-700 transition-colors flex items-center gap-2 cursor-pointer"
                >
                  <FileText className="w-4 h-4 text-blue-300" />
                  <span>Stáhnout formulář přihlášky (PDF)</span>
                </button>
              )}
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
