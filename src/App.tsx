import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { GlobalSearchModal } from './components/GlobalSearchModal.tsx';
import { Home } from './pages/Home.tsx';
import { BuildsList } from './pages/BuildsList.tsx';
import { BuildDetail } from './pages/BuildDetail.tsx';
import { CraftingList } from './pages/CraftingList.tsx';
import { FarmingList } from './pages/FarmingList.tsx';
import { PatchNotesList } from './pages/PatchNotesList.tsx';
import { ConflictsList } from './pages/ConflictsList.tsx';
import { SourcesAdmin } from './pages/SourcesAdmin.tsx';
import { Dashboard } from './pages/Dashboard.tsx';
import { fetchStats } from './services/api.ts';

export const App: React.FC = () => {
  const [currentPath, setCurrentPath] = useState<string>(window.location.pathname || '/');
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [reviewCount, setReviewCount] = useState(1);
  const [conflictCount, setConflictCount] = useState(1);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Keyboard shortcut Ctrl+K / Cmd+K for global search
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
      if (e.key === 'Escape') {
        setIsSearchOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  useEffect(() => {
    fetchStats()
      .then((st) => {
        setReviewCount(st.needsReviewCount);
        setConflictCount(st.activeConflicts);
      })
      .catch((err) => console.error('Stats poll error:', err));
  }, [currentPath]);

  const navigate = (path: string) => {
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderContent = () => {
    if (currentPath === '/' || currentPath === '') {
      return <Home onNavigate={navigate} />;
    }
    if (currentPath.startsWith('/builds/')) {
      const slug = currentPath.replace('/builds/', '').split('?')[0].split('#')[0];
      return <BuildDetail slug={slug} onNavigate={navigate} />;
    }
    if (currentPath === '/builds') {
      return <BuildsList onNavigate={navigate} />;
    }
    if (currentPath === '/crafting') {
      return <CraftingList onNavigate={navigate} />;
    }
    if (currentPath === '/farming') {
      return <FarmingList onNavigate={navigate} />;
    }
    if (currentPath === '/patches') {
      return <PatchNotesList onNavigate={navigate} />;
    }
    if (currentPath === '/conflitos') {
      return <ConflictsList onNavigate={navigate} />;
    }
    if (currentPath === '/fontes') {
      return <SourcesAdmin onNavigate={navigate} />;
    }
    if (currentPath === '/dashboard') {
      return <Dashboard onNavigate={navigate} />;
    }
    return <Home onNavigate={navigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#07090d] text-slate-100 selection:bg-amber-500/30 selection:text-amber-200">
      <Navbar
        currentPath={currentPath}
        onNavigate={navigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        reviewCount={reviewCount}
        activeConflictCount={conflictCount}
      />

      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {renderContent()}
      </main>

      <Footer onNavigate={navigate} />

      <GlobalSearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onNavigate={navigate}
      />
    </div>
  );
};
