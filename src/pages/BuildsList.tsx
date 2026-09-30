import React, { useEffect, useState } from 'react';
import { Shield, Filter, Search, ArrowRight, AlertTriangle, CheckCircle, Clock } from '../components/Icons.tsx';
import { fetchBuilds } from '../services/api.ts';
import { Build, BuildStatus } from '../types/index.ts';
import { StatusBadge } from '../components/StatusBadge.tsx';

interface Props {
  onNavigate: (path: string) => void;
}

export const BuildsList: React.FC<Props> = ({ onNavigate }) => {
  const [builds, setBuilds] = useState<Build[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedClass, setSelectedClass] = useState<string>('ALL');
  const [selectedPatch, setSelectedPatch] = useState<string>('ALL');
  const [selectedStatus, setSelectedStatus] = useState<string>('ALL');
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchBuilds();
        setBuilds(data);
      } catch (err) {
        console.error('Error fetching builds:', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const classes = ['ALL', 'Mercenary', 'Huntress'];
  const patches = ['ALL', '0.5.5'];
  const statuses = ['ALL', 'UPDATED', 'NEEDS_REVIEW'];

  const filteredBuilds = builds.filter((b) => {
    if (selectedClass !== 'ALL' && b.characterClass.toLowerCase() !== selectedClass.toLowerCase()) return false;
    if (selectedPatch !== 'ALL' && b.currentPatch !== selectedPatch) return false;
    if (selectedStatus !== 'ALL' && b.status !== selectedStatus) return false;
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      const matchName = b.name.toLowerCase().includes(q);
      const matchClass = b.characterClass.toLowerCase().includes(q) || b.ascendancy.toLowerCase().includes(q);
      const matchTags = b.tags.some(t => t.toLowerCase().includes(q));
      if (!matchName && !matchClass && !matchTags) return false;
    }
    return true;
  });

  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">
            <Shield className="w-4 h-4" />
            <span>Catálogo Versionado</span>
          </div>
          <h1 className="font-poe font-black text-3xl text-slate-100">
            Builds de Path of Exile 2
          </h1>
          <p className="text-xs text-slate-400 mt-1">
            Cada build possui histórico de versões, progressão por fases e auditoria de fontes controladas.
          </p>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="poe-card p-4 space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-3">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Filtrar por nome, habilidade, ascendência..."
              className="w-full bg-slate-950 border border-slate-700 rounded-lg pl-9 pr-4 py-2 text-xs text-slate-200 placeholder-slate-500 outline-none focus:border-amber-500/60"
            />
          </div>

          {/* Quick Stats in filter */}
          <div className="text-xs text-slate-400 whitespace-nowrap">
            Mostrando <strong className="text-amber-300">{filteredBuilds.length}</strong> de {builds.length} builds
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-4 text-xs pt-2 border-t border-slate-800/60">
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-slate-400 font-semibold flex items-center gap-1">
              <Filter className="w-3 h-3 text-amber-400" /> Classe:
            </span>
            {classes.map((cls) => (
              <button
                key={cls}
                onClick={() => setSelectedClass(cls)}
                className={`px-2.5 py-1 rounded text-xs transition-colors ${
                  selectedClass === cls
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800'
                }`}
              >
                {cls === 'ALL' ? 'Todas' : cls}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-slate-400 font-semibold">Patch:</span>
            {patches.map((p) => (
              <button
                key={p}
                onClick={() => setSelectedPatch(p)}
                className={`px-2 py-0.5 rounded text-xs transition-colors ${
                  selectedPatch === p
                    ? 'bg-sky-500/20 text-sky-300 border border-sky-500/40 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800'
                }`}
              >
                {p === 'ALL' ? 'Todos' : p}
              </button>
            ))}
          </div>

          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="text-slate-400 font-semibold">Status:</span>
            {statuses.map((s) => (
              <button
                key={s}
                onClick={() => setSelectedStatus(s)}
                className={`px-2 py-0.5 rounded text-xs transition-colors ${
                  selectedStatus === s
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 font-semibold'
                    : 'text-slate-400 hover:text-slate-200 bg-slate-900 border border-slate-800'
                }`}
              >
                {s === 'ALL' ? 'Todos' : s === 'NEEDS_REVIEW' ? 'Revisão ⚠️' : s === 'UPDATED' ? 'Atualizada' : 'Desatualizada'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Builds Grid */}
      {loading ? (
        <div className="py-16 text-center text-slate-400">
          <span className="inline-block animate-spin mr-2">⚙️</span> Carregando base de builds...
        </div>
      ) : filteredBuilds.length === 0 ? (
        <div className="py-16 text-center text-slate-500 poe-card">
          <p className="font-semibold text-slate-400 mb-1">Nenhuma build corresponde aos filtros aplicados.</p>
          <p className="text-xs italic">"Informação não encontrada nas fontes fornecidas."</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredBuilds.map((build) => (
            <div
              key={build.id}
              onClick={() => onNavigate(`/builds/${build.slug}`)}
              className="poe-card p-6 cursor-pointer flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-2 flex-wrap">
                  <StatusBadge status={build.status} />
                  <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300">
                    Patch {build.currentPatch}
                  </span>
                </div>

                <div>
                  <div className="text-xs text-amber-400/90 font-medium">
                    {build.characterClass} • <span className="text-slate-200">{build.ascendancy}</span>
                  </div>
                  <h3 className="font-poe font-bold text-xl text-slate-100 group-hover:text-amber-300 transition-colors mt-0.5">
                    {build.name}
                  </h3>
                </div>

                <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                  {build.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-1">
                  {build.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded text-[10px] bg-slate-900/80 border border-slate-800 text-slate-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-slate-800/80 pt-3 flex items-center justify-between text-xs text-slate-500">
                <span>Autor: <strong className="text-slate-300">{build.author}</strong></span>
                <span className="flex items-center gap-1 text-amber-400 font-semibold group-hover:translate-x-1 transition-transform">
                  Ver detalhes <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
