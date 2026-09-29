import React, { useEffect, useState } from 'react';
import {
  Shield,
  Hammer,
  Compass,
  FileText,
  AlertTriangle,
  ArrowRight,
  BookOpen,
  Sparkles,
  Split,
  ChevronRight
} from '../components/Icons.tsx';
import { fetchStats, fetchBuilds, fetchPatches } from '../services/api.ts';
import { SystemStats, Build, Patch } from '../types/index.ts';
import { StatusBadge } from '../components/StatusBadge.tsx';

interface Props {
  onNavigate: (path: string) => void;
}

export const Home: React.FC<Props> = ({ onNavigate }) => {
  const [stats, setStats] = useState<SystemStats | null>(null);
  const [featuredBuilds, setFeaturedBuilds] = useState<Build[]>([]);
  const [recentPatch, setRecentPatch] = useState<Patch | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [statsData, buildsData, patchesData] = await Promise.all([
          fetchStats(),
          fetchBuilds(),
          fetchPatches()
        ]);
        setStats(statsData);
        setFeaturedBuilds(buildsData.slice(0, 2));
        if (patchesData.length > 0) setRecentPatch(patchesData[0]);
      } catch (err) {
        console.error('Home load error:', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="space-y-12 py-6">
      {/* Hero Section */}
      <section className="relative rounded-2xl overflow-hidden border border-slate-800 bg-gradient-to-b from-slate-900/90 via-slate-950 to-slate-950 p-8 sm:p-12 shadow-2xl">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-600/10 via-transparent to-transparent pointer-events-none" />
        
        <div className="relative z-10 max-w-3xl space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Path of Exile 2 • Base de Conhecimento Estruturada</span>
          </div>

          <h1 className="font-poe font-black text-3xl sm:text-5xl text-slate-100 leading-tight">
            POE2 <span className="poe-gold-gradient">BUILD HUB</span>
          </h1>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed font-light">
            Wiki inteligente, modular e versionada de Path of Exile 2. Todas as builds, progressões, receitas de craft e rotas de farm são rastreadas <strong className="text-amber-300 font-semibold">exclusivamente a partir de fontes verificadas</strong> pelo administrador.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <button
              onClick={() => onNavigate('/builds')}
              className="poe-btn-primary"
            >
              <Shield className="w-4 h-4" />
              <span>Explorar Builds</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('/patches')}
              className="poe-btn-secondary"
            >
              <FileText className="w-4 h-4 text-rose-400" />
              <span>Verificar Patches & Impactos</span>
            </button>

            <button
              onClick={() => onNavigate('/fontes')}
              className="poe-btn-secondary"
            >
              <BookOpen className="w-4 h-4 text-sky-400" />
              <span>Fontes Ingeridas</span>
            </button>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 pt-10 mt-6 border-t border-slate-800/80">
          <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
            <div className="text-xs text-slate-400">Builds</div>
            <div className="text-2xl font-bold font-poe text-amber-300">{stats?.totalBuilds ?? '...'}</div>
            <div className="text-[10px] text-slate-500">Cadastradas</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
            <div className="text-xs text-slate-400">Fontes</div>
            <div className="text-2xl font-bold font-poe text-sky-400">{stats?.totalSources ?? '...'}</div>
            <div className="text-[10px] text-slate-500">Auditadas</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
            <div className="text-xs text-slate-400">Crafting</div>
            <div className="text-2xl font-bold font-poe text-emerald-400">{stats?.totalCrafts ?? '...'}</div>
            <div className="text-[10px] text-slate-500">Receitas</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800">
            <div className="text-xs text-slate-400">Rotas de Farm</div>
            <div className="text-2xl font-bold font-poe text-yellow-400">{stats?.totalFarmRoutes ?? '...'}</div>
            <div className="text-[10px] text-slate-500">Mapeadas</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-950/60 border border-amber-900/30 bg-amber-950/20">
            <div className="text-xs text-amber-300 flex items-center gap-1">
              <AlertTriangle className="w-3 h-3 text-amber-400" />
              Revisão
            </div>
            <div className="text-2xl font-bold font-poe text-amber-400">{stats?.needsReviewCount ?? '...'}</div>
            <div className="text-[10px] text-amber-300/60">Pós-Patch</div>
          </div>

          <div className="p-3 rounded-lg bg-slate-950/60 border border-purple-900/30 bg-purple-950/20">
            <div className="text-xs text-purple-300 flex items-center gap-1">
              <Split className="w-3 h-3 text-purple-400" />
              Conflitos
            </div>
            <div className="text-2xl font-bold font-poe text-purple-400">{stats?.activeConflicts ?? '...'}</div>
            <div className="text-[10px] text-purple-300/60">Divergências</div>
          </div>
        </div>
      </section>

      {/* Controlled Source Principle Banner */}
      <section className="p-6 rounded-xl border border-sky-500/30 bg-sky-950/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
        <div className="space-y-1 max-w-3xl">
          <div className="flex items-center gap-2 text-sky-400 font-semibold text-sm">
            <Shield className="w-4 h-4 text-sky-400" />
            <span>Regra de Autoridade Absoluta: Zero Alucinação</span>
          </div>
          <p className="text-xs text-slate-300 leading-relaxed">
            Se uma informação não estiver presente em nenhuma fonte cadastrada pelo administrador, ela <strong className="text-sky-300">NÃO é inventada nem presumida</strong> pela IA. Toda declaração possui referência rastreável à sua origem.
          </p>
        </div>
        <button
          onClick={() => onNavigate('/fontes')}
          className="poe-btn-secondary text-xs flex-shrink-0"
        >
          <BookOpen className="w-3.5 h-3.5 text-sky-400" />
          <span>Ver Painel de Fontes</span>
        </button>
      </section>

      {/* Featured Builds & Patch Alert */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Builds List Preview */}
        <div className="lg:col-span-2 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-poe font-bold text-xl text-slate-100 flex items-center gap-2">
              <Shield className="w-5 h-5 text-amber-400" />
              <span>Builds em Destaque</span>
            </h2>
            <button
              onClick={() => onNavigate('/builds')}
              className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1"
            >
              <span>Ver todas</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <div className="space-y-4">
            {featuredBuilds.map((build) => (
              <div
                key={build.id}
                onClick={() => onNavigate(`/builds/${build.slug}`)}
                className="poe-card p-5 cursor-pointer flex flex-col sm:flex-row sm:items-center justify-between gap-4 group"
              >
                <div className="space-y-2 flex-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <StatusBadge status={build.status} />
                    <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-slate-300">
                      Patch {build.currentPatch}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      Classe: <strong className="text-slate-200">{build.characterClass} ({build.ascendancy})</strong>
                    </span>
                  </div>

                  <h3 className="font-poe font-bold text-lg text-slate-100 group-hover:text-amber-300 transition-colors">
                    {build.name}
                  </h3>

                  <p className="text-xs text-slate-400 line-clamp-2">
                    {build.summary}
                  </p>

                  <div className="text-[11px] text-slate-500 flex items-center gap-2">
                    <span>Autor: <strong className="text-slate-300">{build.author}</strong></span>
                    <span>•</span>
                    <span>Versões históricas: {build.versions.length}</span>
                  </div>
                </div>

                <div className="sm:self-center flex-shrink-0">
                  <button className="poe-btn-secondary text-xs group-hover:border-amber-500/40">
                    <span>Inspecionar</span>
                    <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Patch Alert & Impact Tracker */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-poe font-bold text-xl text-slate-100 flex items-center gap-2">
              <FileText className="w-5 h-5 text-rose-400" />
              <span>Último Patch</span>
            </h2>
            <button
              onClick={() => onNavigate('/patches')}
              className="text-xs text-rose-400 hover:text-rose-300 flex items-center gap-1"
            >
              <span>Ver todos</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {recentPatch && (
            <div className="poe-card p-5 space-y-4 border-rose-900/30">
              <div className="flex items-center justify-between">
                <span className="font-poe font-bold text-base text-rose-300">
                  {recentPatch.title}
                </span>
                <span className="text-xs font-mono text-slate-400">{recentPatch.releaseDate}</span>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                {recentPatch.summary}
              </p>

              <div className="border-t border-slate-800 pt-3 space-y-2">
                <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                  Alterações Classificadas ({recentPatch.changes.length})
                </div>
                {recentPatch.changes.slice(0, 3).map((change) => (
                  <div key={change.id} className="p-2 rounded bg-slate-950/70 border border-slate-800 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-slate-200">{change.targetEntityName}</span>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded font-bold ${
                        change.changeType === 'BUFF' ? 'text-emerald-400 bg-emerald-950/50' :
                        change.changeType === 'NERF' ? 'text-rose-400 bg-rose-950/50' : 'text-amber-400 bg-amber-950/50'
                      }`}>
                        {change.changeType}
                      </span>
                    </div>
                    <p className="text-[11px] text-slate-400 line-clamp-2 italic">{change.rawText}</p>
                    {change.affectedBuildIds.length > 0 && (
                      <div className="text-[10px] text-amber-400 font-semibold flex items-center gap-1 pt-1">
                        <AlertTriangle className="w-3 h-3" />
                        <span>Afeta build cadastrada: sinalizada para revisão</span>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <button
                onClick={() => onNavigate('/patches')}
                className="w-full poe-btn-secondary text-xs justify-center"
              >
                <span>Ver Análise de Impacto Completa</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
