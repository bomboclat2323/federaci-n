import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout & Global Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import MemberModal from './components/MemberModal';
import DocumentModal from './components/DocumentModal';
import NewsModal from './components/NewsModal';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import MembersPage from './pages/MembersPage';
import DocumentsPage from './pages/DocumentsPage';
import NewsPage from './pages/NewsPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

export default function App() {
  // Modal states
  const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);
  const [memberModalTab, setMemberModalTab] = useState('login');
  const [selectedDoc, setSelectedDoc] = useState(null);
  const [selectedNews, setSelectedNews] = useState(null);

  const openMemberLogin = () => {
    setMemberModalTab('login');
    setIsMemberModalOpen(true);
  };

  const openMembershipApplication = () => {
    setMemberModalTab('apply');
    setIsMemberModalOpen(true);
  };

  return (
    <Router>
      <ScrollToTop />
      
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-800 antialiased">
        {/* Fixed Top Navbar */}
        <Navbar 
          onOpenMemberModal={openMemberLogin} 
        />

        {/* Page Content Viewport */}
        <main className="flex-1 flex flex-col">
          <Routes>
            <Route 
              path="/" 
              element={
                <HomePage 
                  onOpenMemberModal={openMembershipApplication} 
                  onSelectNews={(article) => setSelectedNews(article)}
                />
              } 
            />
            <Route 
              path="/o-federaci" 
              element={<AboutPage />} 
            />
            <Route 
              path="/clenove" 
              element={
                <MembersPage 
                  onOpenMemberModal={openMembershipApplication} 
                  onSelectDoc={(doc) => setSelectedDoc(doc)}
                />
              } 
            />
            <Route 
              path="/dokumenty" 
              element={
                <DocumentsPage 
                  onSelectDoc={(doc) => setSelectedDoc(doc)} 
                />
              } 
            />
            <Route 
              path="/aktuality" 
              element={
                <NewsPage 
                  onSelectNews={(article) => setSelectedNews(article)} 
                />
              } 
            />
            <Route 
              path="/kontakt" 
              element={<ContactPage />} 
            />
            <Route 
              path="*" 
              element={<NotFoundPage />} 
            />
          </Routes>
        </main>

        {/* Institutional Footer */}
        <Footer 
          onOpenMemberModal={openMemberLogin} 
        />

        {/* Global Institutional Modals */}
        <MemberModal 
          isOpen={isMemberModalOpen} 
          defaultTab={memberModalTab}
          onClose={() => setIsMemberModalOpen(false)} 
        />

        <DocumentModal 
          isOpen={!!selectedDoc} 
          document={selectedDoc} 
          onClose={() => setSelectedDoc(null)} 
        />

        <NewsModal 
          isOpen={!!selectedNews} 
          article={selectedNews} 
          onClose={() => setSelectedNews(null)} 
        />
      </div>
    </Router>
  );
}
