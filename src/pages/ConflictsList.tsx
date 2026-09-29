import React, { useEffect, useState } from 'react';
import { Split, AlertCircle, Shield, CheckCircle, ArrowRight } from '../components/Icons.tsx';
import { fetchConflicts } from '../services/api.ts';
import { SourceConflict } from '../types/index.ts';
import { ConflictAlert } from '../components/ConflictAlert.tsx';

interface Props {
  onNavigate: (path: string) => void;
}

export const ConflictsList: React.FC<Props> = ({ onNavigate }) => {
  const [conflicts, setConflicts] = useState<SourceConflict[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchConflicts();
        setConflicts(data);
      } catch (err) {
        console.error('Error fetching conflicts:', err);
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
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-purple-400 uppercase tracking-widest mb-1">
          <Split className="w-4 h-4" />
          <span>Módulo de Auditoria & Divergências</span>
        </div>
        <h1 className="font-poe font-black text-3xl text-slate-100">
          Controle de Conflitos Entre Fontes
        </h1>
        <p className="text-xs text-slate-400 mt-1 max-w-3xl">
          Quando dois autores ou guias recomendam escolhas mutuamente divergentes (ex: tipo de dano, árvore de passivas ou itemização), o sistema <strong className="text-purple-300">não escolhe um lado</strong> e preserva ambas as fontes com transparência.
        </p>
      </div>

      {loading ? (
        <div className="py-16 text-center text-slate-400">
          <span className="inline-block animate-spin mr-2">⚙️</span> Verificando divergências registradas...
        </div>
      ) : conflicts.length === 0 ? (
        <div className="py-16 text-center text-slate-500 poe-card space-y-2">
          <CheckCircle className="w-8 h-8 text-emerald-400 mx-auto" />
          <p className="font-semibold text-slate-300">Nenhuma divergência não resolvida no momento.</p>
          <p className="text-xs text-slate-500">Todas as fontes convergem em suas recomendações técnicas.</p>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="p-4 rounded-lg bg-purple-950/20 border border-purple-800/40 text-xs text-purple-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Split className="w-4 h-4 text-purple-400" />
              <span>O sistema detectou <strong>{conflicts.length}</strong> divergência(s) entre fontes ativas.</span>
            </div>
            <span className="text-[10px] font-mono uppercase bg-purple-900/60 px-2 py-0.5 rounded text-purple-200">
              Zero Sobrescrita
            </span>
          </div>

          <div className="space-y-4">
            {conflicts.map((conf) => (
              <div key={conf.id} className="poe-card p-6 space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-slate-800 pb-3">
                  <div>
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                      Entidade Afetada: [{conf.entityType}]
                    </span>
                    <h3 className="font-poe font-bold text-lg text-slate-100">
                      {conf.entityName}
                    </h3>
                  </div>

                  <button
                    onClick={() => onNavigate(`/builds/${conf.entityId}`)}
                    className="poe-btn-secondary text-xs self-start sm:self-auto"
                  >
                    <Shield className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ver na Build</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <ConflictAlert conflict={conf} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
