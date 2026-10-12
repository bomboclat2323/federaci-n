import React, { useState } from 'react';
import { 
  Building2, 
  MapPin, 
  Phone, 
  Mail, 
  CreditCard, 
  ShieldCheck, 
  Clock, 
  Send, 
  CheckCircle2, 
  ExternalLink,
  MessageSquare,
  FileCheck2
} from 'lucide-react';
import Breadcrumbs from '../components/Breadcrumbs';
import { FEDERATION_INFO, DIRECT_CONTACTS } from '../data/federationData';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    email: '',
    phone: '',
    subject: 'Oficiální dotaz k činnosti federace CFOP',
    message: '',
    gdprConsent: false
  });

  const [submitted, setSubmitted] = useState(false);
  const [submissionId, setSubmissionId] = useState('');

  const breadcrumbItems = [
    { label: 'Sídlo a kontakt', path: '/kontakt' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message || !formData.gdprConsent) {
      alert('Prosím vyplňte všechna povinná pole formuláře a potvrďte souhlas se zpracováním údajů.');
      return;
    }
    const generatedCode = `PODÁNÍ-FED-${new Date().getFullYear()}-${Math.floor(10000 + Math.random() * 90000)}`;
    setSubmissionId(generatedCode);
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Breadcrumbs items={breadcrumbItems} />

      {/* Page Header */}
      <section className="bg-white py-12 lg:py-16 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Oficiální spojení a kancelář
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mt-1 mb-3 tracking-tight">
              Kontakt a sídlo federace CFOP
            </h1>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Oficiální identifikační údaje právnické osoby, bankovní spojení, kontakty na statutární orgány a sekretariát federace CFOP a formulář pro oficiální podání.
            </p>
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Legal Identity Card: Top Featured Banner */}
        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 mb-12">
          <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-6">
            <div className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-slate-900">
                Oficiální identifikační údaje právnické osoby
              </h2>
              <p className="text-xs text-slate-500">
                {FEDERATION_INFO.registryInfo}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-xs">
            
            {/* Box 1: Legal Name */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <span className="text-slate-500 font-semibold uppercase tracking-wider block text-[11px]">
                Plný název subjektu
              </span>
              <p className="font-bold text-slate-900 text-sm">
                {FEDERATION_INFO.legalName}
              </p>
              <p className="text-slate-500 text-[11px] pt-1">
                Zkrácený název: {FEDERATION_INFO.name}
              </p>
            </div>

            {/* Box 2: IČO & DIČ */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <span className="text-slate-500 font-semibold uppercase tracking-wider block text-[11px]">
                Identifikační čísla
              </span>
              <p className="font-bold text-slate-900 text-sm">
                {FEDERATION_INFO.ico}
              </p>
              <p className="font-medium text-slate-700">
                {FEDERATION_INFO.dic}
              </p>
              <p className="text-[11px] text-blue-900 font-medium pt-1">
                {FEDERATION_INFO.datovaSchranka}
              </p>
            </div>

            {/* Box 3: Address & Office */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <span className="text-slate-500 font-semibold uppercase tracking-wider block text-[11px]">
                Sídlo organizace a kancelář
              </span>
              <p className="font-bold text-slate-900 text-xs leading-relaxed">
                {FEDERATION_INFO.address}
              </p>
              <p className="text-slate-500 text-[11px] pt-1 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-800 shrink-0" />
                {FEDERATION_INFO.officeHours}
              </p>
            </div>

            {/* Box 4: Bank Account */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-1">
              <span className="text-slate-500 font-semibold uppercase tracking-wider block text-[11px]">
                Bankovní a účetní spojení
              </span>
              <p className="font-bold text-slate-900 text-xs">
                {FEDERATION_INFO.bankAccount}
              </p>
              <p className="text-slate-600 text-[11px] font-mono">
                {FEDERATION_INFO.iban}
              </p>
            </div>

          </div>
        </div>

        {/* 2 Columns: Contact Form & Department Contacts */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct department contacts */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs font-bold text-blue-900 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                Sekretariát a oddělení
              </span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-2 mb-2">
                Přímé kontakty na kancelář federace
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Využijte přímá spojení na jednotlivé statutární zástupce a pracovníky podle agendy, kterou potřebujete projednat.
              </p>
            </div>

            <div className="space-y-4">
              {DIRECT_CONTACTS.map((c, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:border-slate-300 transition-all text-left"
                >
                  <h3 className="text-sm font-bold text-slate-900 mb-1">
                    {c.section}
                  </h3>
                  <div className="text-xs text-blue-950 font-medium mb-2">
                    {c.contactPerson}
                  </div>
                  <p className="text-xs text-slate-500 mb-3 leading-relaxed bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                    {c.note}
                  </p>
                  <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
                    <a
                      href={`tel:${c.phone.replace(/\s+/g, '')}`}
                      className="text-slate-700 hover:text-blue-900 flex items-center gap-1.5"
                    >
                      <Phone className="w-3.5 h-3.5 text-blue-800" />
                      <span>{c.phone}</span>
                    </a>
                    <a
                      href={`mailto:${c.email}`}
                      className="text-blue-900 hover:underline flex items-center gap-1.5"
                    >
                      <Mail className="w-3.5 h-3.5 text-blue-800" />
                      <span>{c.email}</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Map visual card */}
            <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm text-left">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-blue-900" />
                <span>Geografická poloha sekretariátu federace</span>
              </h4>
              <p className="text-xs text-slate-600 mb-3">
                Kancelář se nachází v centru Cieszyna, ul. Wałowa 4, v pěším dosahu hraničního mostu Přátelství (Most Przyjaźni) spojujícího Český Těšín a Cieszyn.
              </p>
              <div className="bg-slate-100 h-36 rounded-lg flex items-center justify-center border border-slate-200 relative overflow-hidden group">
                <div className="text-center p-4">
                  <MapPin className="w-8 h-8 text-blue-900 mx-auto mb-1 group-hover:scale-110 transition-transform" />
                  <span className="text-xs font-bold text-slate-800 block">
                    ul. Wałowa 4, 43-400 Cieszyn
                  </span>
                  <span className="text-[11px] text-slate-500">
                    GPS: 49.749° N, 18.633° E (Euroregion Těšínské Slezsko)
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Formal Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8">
              
              <div className="border-b border-slate-200 pb-4 mb-6">
                <span className="text-xs font-bold text-blue-900 uppercase tracking-wider bg-blue-50 px-3 py-1 rounded-full">
                  Elektronická podatelna
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2 mb-1">
                  Formulář oficiálního kontaktu a podání
                </h3>
                <p className="text-xs text-slate-500">
                  Zprávy zaslané prostřednictvím tohoto formuláře jsou zaevidovány v elektronické spisové službě federace CFOP.
                </p>
              </div>

              {submitted ? (
                <div className="py-10 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h4 className="text-xl font-bold text-slate-900">
                    Podání bylo úspěšně doručeno sekretariátu federace CFOP
                  </h4>
                  <div className="max-w-md mx-auto p-4 bg-slate-50 rounded-xl text-xs text-slate-700 space-y-1.5 text-left border border-slate-200 font-mono">
                    <div>Jednací číslo podání: <strong className="text-blue-900">{submissionId}</strong></div>
                    <div>Odesílatel: {formData.name} ({formData.organization || 'Neuvedeno'})</div>
                    <div>Předmět jednání: {formData.subject}</div>
                    <div>Lhůta pro odpověď: Do 5 pracovních dnů</div>
                  </div>
                  <p className="text-xs text-slate-600 max-w-sm mx-auto">
                    Kopii tohoto podání spolu s potvrzením o přijetí jsme odeslali na Váš e-mail {formData.email}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        organization: '',
                        email: '',
                        phone: '',
                        subject: 'Oficiální dotaz k činnosti federace CFOP',
                        message: '',
                        gdprConsent: false
                      });
                    }}
                    className="bg-blue-950 text-white font-semibold py-2.5 px-6 rounded-lg text-xs hover:bg-blue-900 transition-colors"
                  >
                    Odeslat další podání
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        Jméno a příjmení odesílatele *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="např. Jan Novák / Jan Kowalski"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        Název zastupované organizace / subjektu
                      </label>
                      <input
                        type="text"
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                        placeholder="např. Spolek pro rozvoj komunit, z.s."
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        Oficiální E-mail pro doručení odpovědi *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="kontakt@organizace.cz"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        Telefonní kontakt
                      </label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+48 608 000 000 / +420 777 000 000"
                        className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                      Předmět oficiálního jednání *
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({...formData, subject: e.target.value})}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none bg-white"
                    >
                      <option value="Oficiální dotaz k činnosti federace CFOP">Oficiální dotaz k činnosti federace CFOP</option>
                      <option value="Žádost o členství a přijímací řízení">Žádost o členství a přijímací řízení</option>
                      <option value="Média, rozhovory a tiskové zprávy">Média, rozhovory a tiskové zprávy</option>
                      <option value="Přeshraniční projekty a partnerství v Euroregionu">Přeshraniční projekty a partnerství v Euroregionu</option>
                      <option value="Dotaz na valné shromáždění a stanovy">Dotaz na valné shromáždění a stanovy</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                      Text zprávy a specifikace požadavku *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Zde podrobně popište Váš dotaz, podnět pro předsednictvo nebo žádost o oficiální vyjádření federace CFOP..."
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none leading-relaxed"
                    />
                  </div>

                  <div className="pt-1">
                    <label className="flex items-start gap-2.5 text-xs text-slate-600 cursor-pointer">
                      <input
                        type="checkbox"
                        required
                        checked={formData.gdprConsent}
                        onChange={(e) => setFormData({...formData, gdprConsent: e.target.checked})}
                        className="mt-0.5 rounded text-blue-950 focus:ring-blue-900"
                      />
                      <span>
                        Souhlasím se zpracováním osobních údajů pro účely vyřízení tohoto podání v souladu se zásadami GDPR federace CFOP. *
                      </span>
                    </label>
                  </div>

                  <div className="pt-3">
                    <button
                      type="submit"
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-950 hover:bg-blue-900 text-white font-bold py-3 px-8 rounded-lg text-xs sm:text-sm transition-all shadow cursor-pointer"
                    >
                      <Send className="w-4 h-4" />
                      <span>Odeslat oficiální podání</span>
                    </button>
                  </div>

                  <p className="text-[11px] text-slate-500 pt-2 border-t border-slate-100">
                    {FEDERATION_INFO.legalName} • {FEDERATION_INFO.datovaSchranka}
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>

      </section>

    </div>
  );
}
