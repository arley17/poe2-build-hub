import React, { useState } from 'react';
import {
  Shield,
  Hammer,
  Compass,
  FileText,
  Split,
  BookOpen,
  LayoutDashboard,
  Search,
  Menu,
  X,
  Flame
} from './Icons.tsx';

interface Props {
  currentPath: string;
  onNavigate: (path: string) => void;
  onOpenSearch: () => void;
  activeConflictCount?: number;
  reviewCount?: number;
}

export const Navbar: React.FC<Props> = ({
  currentPath,
  onNavigate,
  onOpenSearch,
  activeConflictCount = 1,
  reviewCount = 1
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'builds', label: 'Builds', path: '/builds', icon: Shield, badge: reviewCount > 0 ? `${reviewCount} ⚠️` : undefined },
    { id: 'crafting', label: 'Crafting', path: '/crafting', icon: Hammer },
    { id: 'farming', label: 'Rotas de Farm', path: '/farming', icon: Compass },
    { id: 'patches', label: 'Patch Tracker', path: '/patches', icon: FileText },
    { id: 'conflitos', label: 'Conflitos', path: '/conflitos', icon: Split, badge: activeConflictCount > 0 ? `${activeConflictCount}` : undefined },
    { id: 'fontes', label: 'Fontes', path: '/fontes', icon: BookOpen },
    { id: 'dashboard', label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
  ];

  const handleNav = (path: string) => {
    onNavigate(path);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Brand / Logo */}
        <div
          onClick={() => handleNav('/')}
          className="flex items-center gap-3 cursor-pointer group"
        >
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-amber-500/20 to-amber-700/40 border border-amber-500/50 flex items-center justify-center shadow-lg shadow-amber-500/10 group-hover:border-amber-400 transition-colors">
            <Flame className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" />
          </div>
          <div>
            <span className="font-poe font-bold text-lg tracking-wider text-slate-100 group-hover:text-amber-300 transition-colors">
              POE2 <span className="poe-gold-gradient font-black">BUILD HUB</span>
            </span>
            <span className="hidden sm:block text-[10px] text-slate-400 font-mono tracking-tight uppercase">
              Wiki Versionada & Fonte Controlada
            </span>
          </div>
        </div>

        {/* Desktop Nav Items */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.path)}
                className={`relative px-3 py-1.5 rounded-md text-xs font-medium transition-all flex items-center gap-1.5 ${
                  isActive
                    ? 'text-amber-300 bg-amber-500/10 border border-amber-500/30 font-semibold'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
                <span>{item.label}</span>
                {item.badge && (
                  <span className="ml-1 px-1.5 py-0.2 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>

        {/* Right Section: Search & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenSearch}
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-900 border border-slate-700/80 hover:border-amber-500/50 text-slate-400 hover:text-slate-200 text-xs transition-all shadow-inner"
            title="Abrir busca global (Ctrl+K)"
          >
            <Search className="w-3.5 h-3.5 text-amber-400" />
            <span className="hidden sm:inline">Pesquisar...</span>
            <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono bg-slate-950 border border-slate-800 rounded text-slate-400">
              Ctrl K
            </kbd>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950/95 px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));
            return (
              <button
                key={item.id}
                onClick={() => handleNav(item.path)}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-md text-sm font-medium ${
                  isActive
                    ? 'text-amber-300 bg-amber-500/10 border border-amber-500/30'
                    : 'text-slate-300 hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-amber-400" />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </header>
  );
};
