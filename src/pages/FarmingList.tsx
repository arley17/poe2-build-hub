import React, { useEffect, useState } from 'react';
import { Compass, Clock, AlertTriangle, Gift, MapPin, Shield, Layers, CheckCircle2 } from '../components/Icons.tsx';
import { fetchFarming } from '../services/api.ts';
import { FarmRoute } from '../types/index.ts';

interface Props {
  onNavigate: (path: string) => void;
}

export const FarmingList: React.FC<Props> = ({ onNavigate }) => {
  const [routes, setRoutes] = useState<FarmRoute[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchFarming();
        setRoutes(data);
      } catch (err) {
        console.error('Error fetching farm routes:', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="border-b border-slate-800 pb-6">
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-yellow-400 uppercase tracking-widest mb-1">
          <Compass className="w-4 h-4" />
          <span>Módulo de Estratégias Econômicas</span>
        </div>
        <h1 className="font-poe font-black text-3xl text-slate-100">
          Rotas de Farm de PoE2
        </h1>
        <p className="text-xs text-slate-400 mt-1 max-w-3xl">
          Estratégias estruturadas por etapas para geração de moedas, itens e fragmentos no endgame, documentadas rigorosamente a partir de fontes verificadas.
        </p>
      </div>

      {loading ? (
        <div className="py-16 text-center text-slate-400">
          <span className="inline-block animate-spin mr-2">⚙️</span> Carregando rotas de farm...
        </div>
      ) : routes.length === 0 ? (
        <div className="py-16 text-center text-slate-500 poe-card">
          <p className="font-semibold text-slate-400 mb-1">Nenhuma rota de farm cadastrada.</p>
          <p className="text-xs italic">"Informação não encontrada nas fontes fornecidas."</p>
        </div>
      ) : (
        <div className="space-y-8">
          {routes.map((route) => (
            <div key={route.id} className="poe-card p-6 sm:p-8 space-y-6">
              {/* Route Title & Overview */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-yellow-950/70 border border-yellow-700/60 text-yellow-300 font-bold">
                      Patch {route.poeVersion}
                    </span>
                    <span className="text-xs text-slate-400 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-amber-400" />
                      Região: <strong className="text-slate-200">{route.regionOrMaps}</strong>
                    </span>
                  </div>
                  <h2 className="font-poe font-bold text-xl text-amber-300">
                    {route.name}
                  </h2>
                  <p className="text-xs text-slate-300">
                    <strong>Objetivo:</strong> {route.objective}
                  </p>
                </div>

                {route.estimatedTime && (
                  <div className="p-3 rounded bg-slate-950 border border-slate-800 text-xs flex items-center gap-2">
                    <Clock className="w-4 h-4 text-sky-400" />
                    <div>
                      <span className="text-[10px] text-slate-500 block uppercase">Tempo por Sessão</span>
                      <span className="text-slate-200 font-medium">{route.estimatedTime}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Mechanics & Recommended Builds */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                <div className="p-4 rounded-lg bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="font-semibold text-slate-300 uppercase tracking-wider text-[11px]">
                    Mecânicas Envolvidas
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {route.mechanics.map((m) => (
                      <span key={m} className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-amber-300">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-slate-950/70 border border-slate-800 space-y-2">
                  <div className="font-semibold text-slate-300 uppercase tracking-wider text-[11px] flex items-center gap-1">
                    <Shield className="w-3.5 h-3.5 text-amber-400" /> Builds Recomendadas
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {route.recommendedBuilds.map((b) => (
                      <span key={b} className="px-2 py-1 rounded bg-slate-900 border border-slate-700 text-slate-200">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sequential Steps */}
              <div className="space-y-3">
                <h4 className="font-poe font-bold text-xs text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-amber-400" />
                  <span>Sequência de Execução da Rota (Passo a Passo)</span>
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                  {route.steps.map((st) => (
                    <div key={st.order} className="p-4 rounded-lg bg-slate-950 border border-slate-800/80 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="w-6 h-6 rounded bg-amber-500/20 text-amber-300 font-poe font-bold text-xs flex items-center justify-center">
                          {st.order}
                        </span>
                        <span className="font-poe font-bold text-xs text-slate-200">
                          {st.title}
                        </span>
                      </div>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {st.instruction}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Rewards & Risks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-emerald-950/20 border border-emerald-800/40 space-y-2">
                  <h4 className="font-poe font-bold text-xs text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <Gift className="w-3.5 h-3.5" /> Recompensas Esperadas
                  </h4>
                  <ul className="text-xs text-slate-300 space-y-1">
                    {route.rewards.map((r, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{r}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-rose-950/20 border border-rose-800/40 space-y-2">
                  <h4 className="font-poe font-bold text-xs text-rose-400 uppercase tracking-wider flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5" /> Riscos e Cuidados
                  </h4>
                  <ul className="text-xs text-slate-300 space-y-1">
                    {route.risks.map((rk, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <span className="text-rose-400">•</span>
                        <span>{rk}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
