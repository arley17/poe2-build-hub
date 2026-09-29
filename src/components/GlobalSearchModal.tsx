import React, { useState, useEffect, useRef } from 'react';
import { Search, X, Shield, Sword, Hammer, Compass, FileText, BookOpen, ExternalLink } from './Icons.tsx';
import { searchGlobal } from '../services/api.ts';
import { SearchResultItem } from '../types/index.ts';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (path: string) => void;
}

export const GlobalSearchModal: React.FC<Props> = ({ isOpen, onClose, onNavigate }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [selectedType, setSelectedType] = useState<string>('ALL');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setLoading(true);
      try {
        const typeFilter = selectedType === 'ALL' ? undefined : selectedType;
        const res = await searchGlobal(query, { type: typeFilter });
        setResults(res);
      } catch (err) {
        console.error('Search error:', err);
      } finally {
        setLoading(false);
      }
    }, 200);

    return () => clearTimeout(timer);
  }, [query, selectedType]);

  if (!isOpen) return null;

  const getTypeIcon = (type: SearchResultItem['type']) => {
    switch (type) {
      case 'BUILD': return <Shield className="w-4 h-4 text-amber-400" />;
      case 'SKILL': return <Sword className="w-4 h-4 text-sky-400" />;
      case 'ITEM': return <Sword className="w-4 h-4 text-purple-400" />;
      case 'CRAFT': return <Hammer className="w-4 h-4 text-emerald-400" />;
      case 'FARM_ROUTE': return <Compass className="w-4 h-4 text-yellow-400" />;
      case 'PATCH_NOTE': return <FileText className="w-4 h-4 text-rose-400" />;
      case 'SOURCE': return <BookOpen className="w-4 h-4 text-cyan-400" />;
      default: return <Search className="w-4 h-4 text-slate-400" />;
    }
  };

  const handleSelect = (url: string) => {
    onClose();
    onNavigate(url);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[80vh]">
        {/* Input Header */}
        <div className="p-4 border-b border-slate-800 flex items-center gap-3">
          <Search className="w-5 h-5 text-amber-400 flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Pesquisar builds, habilidades, itens, crafts, rotas, patches..."
            className="flex-1 bg-transparent text-slate-100 placeholder-slate-500 outline-none text-base font-medium"
          />
          {query && (
            <button onClick={() => setQuery('')} className="p-1 hover:text-slate-300 text-slate-500">
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={onClose}
            className="text-xs px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700 hover:text-white"
          >
            ESC
          </button>
        </div>

        {/* Filters */}
        <div className="px-4 py-2 bg-slate-950/60 border-b border-slate-800/80 flex items-center gap-2 overflow-x-auto text-xs">
          {['ALL', 'BUILD', 'SKILL', 'ITEM', 'CRAFT', 'FARM_ROUTE', 'PATCH_NOTE', 'SOURCE'].map((t) => (
            <button
              key={t}
              onClick={() => setSelectedType(t)}
              className={`px-2.5 py-1 rounded-full whitespace-nowrap transition-colors ${
                selectedType === t
                  ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800'
              }`}
            >
              {t === 'ALL' ? 'Tudo' : t}
            </button>
          ))}
        </div>

        {/* Results Body */}
        <div className="flex-1 overflow-y-auto p-3 space-y-2">
          {loading && (
            <div className="py-8 text-center text-slate-400 text-sm">
              <span className="inline-block animate-spin mr-2">⚙️</span> Buscando na base de fontes controladas...
            </div>
          )}

          {!loading && query && results.length === 0 && (
            <div className="py-12 text-center text-slate-500 text-sm">
              <p className="font-semibold text-slate-400 mb-1">Nenhum resultado encontrado</p>
              <p className="text-xs italic">"Informação não encontrada nas fontes fornecidas."</p>
            </div>
          )}

          {!loading && !query && (
            <div className="py-8 text-center text-slate-500 text-xs">
              Digite uma palavra-chave como <span className="text-amber-400">"Lightning Arrow"</span>, <span className="text-sky-400">"Deadeye"</span>, <span className="text-emerald-400">"Craft"</span> ou <span className="text-rose-400">"0.1.2"</span>
            </div>
          )}

          {results.map((item) => (
            <div
              key={item.id}
              onClick={() => handleSelect(item.url)}
              className="p-3 rounded-lg bg-slate-800/50 hover:bg-slate-800 border border-slate-700/50 hover:border-amber-500/40 cursor-pointer transition-all flex items-start gap-3 group"
            >
              <div className="p-2 rounded bg-slate-900 border border-slate-700/70 mt-0.5 group-hover:border-amber-400/50">
                {getTypeIcon(item.type)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between gap-2">
                  <h4 className="text-sm font-semibold text-slate-200 group-hover:text-amber-300 truncate">
                    {item.title}
                  </h4>
                  <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                    {item.type}
                  </span>
                </div>
                <p className="text-xs text-slate-400 truncate mt-0.5">{item.subtitle}</p>
                {item.excerpt && (
                  <p className="text-xs text-slate-500 line-clamp-1 mt-1 italic">{item.excerpt}</p>
                )}
              </div>
              <ExternalLink className="w-4 h-4 text-slate-600 group-hover:text-amber-400 opacity-0 group-hover:opacity-100 transition-opacity self-center" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
