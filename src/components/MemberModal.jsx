import React, { useState } from 'react';
import { X, LogIn, UserPlus, ShieldCheck, CheckCircle2, AlertCircle, Building, Key, Mail, Phone, FileText } from 'lucide-react';
import { FEDERATION_INFO } from '../data/federationData';

export default function MemberModal({ isOpen, onClose, defaultTab = 'login' }) {
  const [activeTab, setActiveTab] = useState(defaultTab);
  
  // Login form state
  const [loginId, setLoginId] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const [loginError, setLoginError] = useState('');

  // Membership request form state
  const [formData, setFormData] = useState({
    orgName: '',
    ico: '',
    representative: '',
    email: '',
    phone: '',
    membershipType: 'radny',
    region: 'Praha',
    notes: '',
    agreement: false
  });
  const [applySuccess, setApplySuccess] = useState(false);
  const [applicationNumber, setApplicationNumber] = useState('');

  if (!isOpen) return null;

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    if (!loginId || !loginPassword) {
      setLoginError('[Chyba: Prosím zadejte Vaše členské číslo / IČO a heslo]');
      return;
    }
    setLoginError('');
    setLoginSuccess(true);
  };

  const handleApplySubmit = (e) => {
    e.preventDefault();
    if (!formData.orgName || !formData.ico || !formData.email || !formData.agreement) {
      alert('[Upozornění: Vyplňte prosím všechna povinná pole a potvrďte souhlas se stanovami.]');
      return;
    }
    // Generate mock application registration code
    const generatedId = `FED-ŽÁDOST-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}`;
    setApplicationNumber(generatedId);
    setApplySuccess(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 animate-fadeIn">
        
        {/* Header */}
        <div className="bg-slate-900 text-white px-6 py-5 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-blue-900/80 flex items-center justify-center text-blue-300">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">
                Klientská zóna a členský servis
              </h3>
              <p className="text-xs text-slate-400">
                {FEDERATION_INFO.name}
              </p>
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

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50">
          <button
            type="button"
            onClick={() => {
              setActiveTab('login');
              setLoginSuccess(false);
            }}
            className={`flex-1 py-3 px-4 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'login'
                ? 'border-blue-900 text-blue-950 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <LogIn className="w-4 h-4" />
            <span>Přihlášení pro členy</span>
          </button>

          <button
            type="button"
            onClick={() => {
              setActiveTab('apply');
              setApplySuccess(false);
            }}
            className={`flex-1 py-3 px-4 text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 border-b-2 transition-colors cursor-pointer ${
              activeTab === 'apply'
                ? 'border-blue-900 text-blue-950 bg-white'
                : 'border-transparent text-slate-500 hover:text-slate-800'
            }`}
          >
            <UserPlus className="w-4 h-4" />
            <span>Členská přihláška</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6">
          {activeTab === 'login' ? (
            <div>
              {loginSuccess ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    [Úspěšné ověření člena]
                  </h4>
                  <p className="text-sm text-slate-600 max-w-xs mx-auto">
                    [Vítejte v neveřejné klientské zóně federace. Máte přístup k interním zápisům, hlasovacím materiálům a legislativním formulářům.]
                  </p>
                  <div className="p-3 bg-slate-100 rounded-lg text-xs text-slate-700 text-left font-mono">
                    <div>Subjekt: [Autorizovaný zástupce organizace]</div>
                    <div>Stav účtu: [Aktivní člen s hlasovacím právem]</div>
                  </div>
                  <button
                    type="button"
                    onClick={() => {
                      setLoginSuccess(false);
                      onClose();
                    }}
                    className="w-full bg-blue-950 text-white font-semibold py-2.5 rounded-lg text-sm hover:bg-blue-900"
                  >
                    Vstoupit do členského systému
                  </button>
                </div>
              ) : (
                <form onSubmit={handleLoginSubmit} className="space-y-4">
                  <div className="bg-blue-50 border border-blue-200/60 p-3 rounded-lg text-xs text-blue-900 leading-relaxed">
                    [Zde se přihlašují statutární zástupci a pověřené osoby řádných a přidružených členských subjektů federace.]
                  </div>

                  {loginError && (
                    <div className="bg-red-50 text-red-700 text-xs p-3 rounded-lg flex items-center gap-2 border border-red-200">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{loginError}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                      Členské číslo nebo IČO subjektu *
                    </label>
                    <div className="relative">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="text"
                        required
                        value={loginId}
                        onChange={(e) => setLoginId(e.target.value)}
                        placeholder="[Zadejte např. IČO 12345678]"
                        className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                      Přístupové heslo / Bezpečnostní kód *
                    </label>
                    <div className="relative">
                      <Key className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
                      <input
                        type="password"
                        required
                        value={loginPassword}
                        onChange={(e) => setLoginPassword(e.target.value)}
                        placeholder="••••••••••••"
                        className="w-full pl-9 pr-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between text-xs text-slate-500 pt-1">
                    <label className="flex items-center gap-1.5 cursor-pointer">
                      <input type="checkbox" className="rounded text-blue-900 focus:ring-blue-900" />
                      <span>Pamatovat přihlášení</span>
                    </label>
                    <span className="text-blue-900 hover:underline cursor-pointer">
                      [Zapomenuté heslo / Obnova přístupu]
                    </span>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-blue-950 text-white font-semibold py-2.5 px-4 rounded-lg text-sm hover:bg-blue-900 transition-colors shadow flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <LogIn className="w-4 h-4" />
                      <span>Vstoupit do klientské zóny</span>
                    </button>
                  </div>

                  <p className="text-center text-xs text-slate-500 pt-2">
                    Nejste ještě členem federace?{' '}
                    <button
                      type="button"
                      onClick={() => setActiveTab('apply')}
                      className="text-blue-900 font-semibold hover:underline"
                    >
                      Podejte přihlášku
                    </button>
                  </p>
                </form>
              )}
            </div>
          ) : (
            <div>
              {applySuccess ? (
                <div className="text-center py-6 space-y-4">
                  <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-slate-900">
                    [Žádost o členství byla úspěšně zaevidována]
                  </h4>
                  <div className="p-3 bg-slate-100 rounded-lg text-xs text-slate-800 space-y-1 font-mono text-left">
                    <div>Evidenční kód žádosti: <strong className="text-blue-900">{applicationNumber}</strong></div>
                    <div>Organizace: {formData.orgName}</div>
                    <div>IČO: {formData.ico}</div>
                    <div>Lhůta pro vyřízení: [Do 30 dnů kanceláří tajemníka]</div>
                  </div>
                  <p className="text-xs text-slate-600">
                    [Potvrzení spolu s podrobnými pokyny k doložení stanov a výpisu z rejstříku bylo odesláno na uvedený e-mail {formData.email}.]
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="w-full bg-slate-900 text-white font-semibold py-2.5 rounded-lg text-sm hover:bg-slate-800"
                  >
                    Rozumím, zavřít okno
                  </button>
                </div>
              ) : (
                <form onSubmit={handleApplySubmit} className="space-y-3.5">
                  <div className="bg-amber-50 border border-amber-200/60 p-3 rounded-lg text-xs text-amber-900 leading-relaxed">
                    [Formální formulář pro právnické osoby a spolky usilující o řádné nebo přidružené členství.]
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                      Oficiální název žadatele (organizace / spolku) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.orgName}
                      onChange={(e) => setFormData({...formData, orgName: e.target.value})}
                      placeholder="[např. Asociace pro rozvoj oboru, z.s.]"
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        IČO subjektu *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.ico}
                        onChange={(e) => setFormData({...formData, ico: e.target.value})}
                        placeholder="[např. 12345678]"
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        Typ členství
                      </label>
                      <select
                        value={formData.membershipType}
                        onChange={(e) => setFormData({...formData, membershipType: e.target.value})}
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none bg-white"
                      >
                        <option value="radny">[Řádný člen s hlasovacím právem]</option>
                        <option value="pridruzeny">[Přidružený člen / Partner]</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                        Oficiální E-mail *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="[kancelar@organizace.cz]"
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
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
                        placeholder="+420 123 456 789"
                        className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 uppercase mb-1">
                      Jméno statutárního zástupce / předsedy
                    </label>
                    <input
                      type="text"
                      value={formData.representative}
                      onChange={(e) => setFormData({...formData, representative: e.target.value})}
                      placeholder="[Titul, Jméno a Příjmení předsedy / ředitele]"
                      className="w-full px-3 py-2 text-sm border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-900 focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="flex items-start gap-2 text-xs text-slate-600 cursor-pointer pt-1">
                      <input
                        type="checkbox"
                        required
                        checked={formData.agreement}
                        onChange={(e) => setFormData({...formData, agreement: e.target.checked})}
                        className="mt-0.5 rounded text-blue-900 focus:ring-blue-900"
                      />
                      <span>
                        [Potvrzuji seznámení se stanovami federace a beru na vědomí povinnost doložit ověřené stanovy žadatele.]
                      </span>
                    </label>
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="w-full bg-blue-950 text-white font-semibold py-2.5 px-4 rounded-lg text-sm hover:bg-blue-900 transition-colors shadow flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <UserPlus className="w-4 h-4" />
                      <span>Odeslat formální žádost o přijetí</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          )}
        </div>

        {/* Modal footer security badge */}
        <div className="bg-slate-100 px-6 py-3 border-t border-slate-200 text-[11px] text-slate-500 flex items-center justify-between">
          <span>{FEDERATION_INFO.legalName}</span>
          <span className="font-semibold text-slate-600">Protokol SSL/TLS 256-bit</span>
        </div>

      </div>
    </div>
  );
}
