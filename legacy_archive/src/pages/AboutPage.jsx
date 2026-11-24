import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  ShieldCheck, 
  Scale, 
  Users, 
  Mail, 
  Phone, 
  FileText, 
  Calendar, 
  ArrowRight,
  Award,
  Layers,
  CheckCircle2,
  Clock
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { FEDERATION_INFO, LEADERSHIP_TEAM, TIMELINE_MILESTONES } from '../data/federationData';

export default function AboutPage() {
  const breadcrumbItems = [
    { label: 'O federaci a struktura', path: '/o-federaci' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Breadcrumbs items={breadcrumbItems} />

      {/* Page Header */}
      <section className="bg-white py-12 lg:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Kdo jsme a jak fungujeme
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-1 mb-3 tracking-tight">
              O federaci a organizační struktura
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Představení poslání, statutárních orgánů, kontrolních mechanismů a historických milníků federace CFOP v souladu s platnými stanovami.
            </p>
          </div>
        </div>
      </section>

      {/* 1. Misión y estatutos */}
      <section className="py-16 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6 text-left">
              <div className="inline-flex items-center gap-2 text-blue-900 font-bold text-xs uppercase tracking-wider">
                <Scale className="w-4 h-4" />
                <span>Poslání podle stanov</span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                Poslání a působnost federace CFOP v česko-polském příhraničí
              </h2>

              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>
                  <strong>Cieszyn Federation of NGOs and Social Economy Entities (CFOP)</strong> zastává silnou a dobře etablovanou roli jako regionální střešní organizace integrující neziskové subjekty a sociální podniky v regionu Těšínského Slezska. Federace má jedinečnou pozici v přeshraničním ekosystému, kde propojuje občanskou společnost, aktéry sociální ekonomiky a místní podnikatele.
                </p>
                <p>
                  CFOP disponuje bohatými odbornými zkušenostmi v rozvoji a podpoře sociálního podnikání a komunitních hospodářských iniciativ. Funguje jako strategický hub, který sdružuje organizace pracující napříč různými odvětvími včetně sociálních služeb, inkluze, digitálních dovedností a sociálních inovací. Zprostředkováváme přenos znalostí a mezisektorovou spolupráci, která je klíčová pro udržitelný rozvoj regionu.
                </p>
              </div>

              {/* Core Statutory Values */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    100% transparentní financování a hospodaření
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Demokratická volba všech orgánů valným shromážděním
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Závazný etický kodex pro všechny zástupce
                  </span>
                </div>
                <div className="p-3 bg-slate-50 rounded-lg border border-slate-200/80 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                  <span className="text-xs font-semibold text-slate-800">
                    Přeshraniční partnerství v Euroregionu Těšínské Slezsko
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/dokumenty"
                  className="inline-flex items-center gap-2 text-xs font-bold text-blue-900 bg-blue-50 px-4 py-2.5 rounded-lg hover:bg-blue-100 transition-colors"
                >
                  <FileText className="w-4 h-4" />
                  <span>Zobrazit stanovy federace CFOP (PDF)</span>
                </Link>
              </div>

            </div>

            {/* Right Card: Institutional Scope Breakdown */}
            <div className="lg:col-span-5">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-200/80 space-y-4 text-left">
                <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2 border-b border-slate-200 pb-3 uppercase tracking-wider">
                  <Layers className="w-4 h-4 text-slate-600" />
                  <span>Úrovně působnosti federace</span>
                </h3>

                <div className="space-y-3.5 text-xs">
                  <div className="border-l-2 border-slate-400 pl-3">
                    <strong className="text-slate-900 block mb-0.5">1. Regionální úroveň — Těšínské Slezsko</strong>
                    <span className="text-slate-600 leading-relaxed block">
                      Podpora členských organizací, sociálních podniků a partnerství s místními samosprávami.
                    </span>
                  </div>

                  <div className="border-l-2 border-slate-400 pl-3">
                    <strong className="text-slate-900 block mb-0.5">2. Přeshraniční úroveň — Česko-polské pomezí</strong>
                    <span className="text-slate-600 leading-relaxed block">
                      Spolupráce v rámci Euroregionu Těšínské Slezsko – Śląsk Cieszyński a výměna zkušeností.
                    </span>
                  </div>

                  <div className="border-l-2 border-slate-400 pl-3">
                    <strong className="text-slate-900 block mb-0.5">3. Evropská a mezinárodní integrace</strong>
                    <span className="text-slate-600 leading-relaxed block">
                      Účast na mezinárodních projektech zaměřených na sociální inovace, podnikavost a inkluzi.
                    </span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500">
                  {FEDERATION_INFO.registryInfo}
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. Estructura y Órganos de Gobierno (Organizační struktura) */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Vedení a reprezentace
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-1 mb-2">
              Organizační struktura a volené orgány
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              Statutární zástupci a dozorčí orgán zvolení valným shromážděním federace CFOP.
            </p>
          </div>

          {/* Grid de Cargos: Předseda, Místopředseda, Členka předsednictva, Dozorčí rada */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LEADERSHIP_TEAM.map((member, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md hover:border-slate-300 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Photo container */}
                  <div className="relative h-56 bg-slate-200 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute top-3 left-3 bg-slate-900/90 text-blue-200 text-[11px] font-bold px-2.5 py-1 rounded-md backdrop-blur-sm border border-slate-700">
                      {member.role}
                    </div>
                  </div>

                  <div className="p-5">
                    <span className="text-[11px] font-semibold text-blue-900 uppercase tracking-wide block mb-1">
                      {member.title}
                    </span>
                    <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                      {member.name}
                    </h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-slate-100 text-xs text-slate-500 space-y-1.5 mt-2">
                  <div className="flex items-center gap-2 truncate">
                    <Mail className="w-3.5 h-3.5 text-blue-800 shrink-0" />
                    <span className="truncate">{member.email}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-blue-800 shrink-0" />
                    <span>{member.phone}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Governance Bodies Diagram / Overview */}
          <div className="mt-12 bg-white rounded-xl p-6 border border-slate-200 text-left">
            <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wide mb-4">
              Rozhodovací a kontrolní struktura federace CFOP
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">1. Valné shromáždění (Walne Zgromadzenie)</span>
                <span className="text-slate-600 leading-relaxed block">
                  Nejvyšší statutární orgán federace složený ze statutárních zástupců všech řádných členů. Schvaluje stanovy a rozpočtový rámec.
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">2. Statutární orgán / Zarząd</span>
                <span className="text-slate-600 leading-relaxed block">
                  Výkonný a řídící statutární orgán vedený předsedou Petrem Kantorem a místopředsedou Aleksandrem Górnym, který řídí běžnou činnost federace.
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">3. Dozorčí a kontrolní rada</span>
                <span className="text-slate-600 leading-relaxed block">
                  Nezávislý kontrolní orgán v čele s Bartoszem Tyrnou (členové M. W. Andrukiewicz, A. Marszałek) dohlížející na hospodaření a dodržování stanov.
                </span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg border border-slate-200">
                <span className="font-bold text-slate-900 block mb-1">4. Kancelář federace v Cieszyně</span>
                <span className="text-slate-600 leading-relaxed block">
                  Stálé administrativní a koordinační zázemí na adrese ul. Wałowa 4 zajišťující servis pro členskou základnu a přeshraniční projekty.
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 3. Breve Historia Cronológica (Stručný přehled milníků od založení po současnost) */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold text-blue-900 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
              Historie a kontinuita
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-3 mb-3">
              Přehled klíčových milníků od založení po současnost
            </h2>
            <p className="text-slate-600 text-sm">
              Cesta federace CFOP od oficiálního zápisu do KRS v roce 2015 až po dnešní uznávané postavení v česko-polském Euroregionu Těšínské Slezsko.
            </p>
          </div>

          <div className="relative border-l-2 border-blue-900/30 ml-4 sm:ml-32 space-y-12">
            {TIMELINE_MILESTONES.map((item, idx) => (
              <div key={idx} className="relative pl-8 sm:pl-10">
                
                {/* Year Marker Badge on left */}
                <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-blue-950 border-4 border-white flex items-center justify-center shadow"></div>
                <div className="sm:absolute sm:-left-32 sm:top-0 sm:w-24 sm:text-right font-extrabold text-blue-950 text-base">
                  {item.year}
                </div>

                <div className="bg-slate-50 p-5 rounded-xl border border-slate-200 shadow-sm text-left">
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}
