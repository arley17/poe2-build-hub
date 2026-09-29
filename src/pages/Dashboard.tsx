import React, { useEffect, useState } from 'react';
import { LayoutDashboard, Shield, BookOpen, Hammer, Compass, FileText, AlertTriangle, Clock, History, CheckCircle, Split } from '../components/Icons.tsx';
import { fetchStats, fetchAuditLogs } from '../services/api.ts';
import { SystemStats, AuditLog } from '../types/index.ts';

interface Props {
  onNavigate: (path: string) => void;
}

export const Dashboard: React.FC<Props> = ({ onNavigate }) => {
  const [stats, setStats] = useState<SystemStats | null>(null);
  const [auditLogs, setAuditLogs] = useState<AuditLog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const [statsData, logsData] = await Promise.all([
          fetchStats(),
          fetchAuditLogs()
        ]);
        setStats(statsData);
        setAuditLogs(logsData);
      } catch (err) {
        console.error('Error fetching dashboard data:', err);
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
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-amber-400 uppercase tracking-widest mb-1">
          <LayoutDashboard className="w-4 h-4" />
          <span>Painel de Controle Administrativo</span>
        </div>
        <h1 className="font-poe font-black text-3xl text-slate-100">
          Dashboard de Integridade & Métricas
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Visão holística do estado do POE2 Build Hub, controle de revisões pendentes, divergências ativas e auditoria cronológica.
        </p>
      </div>

      {loading ? (
        <div className="py-16 text-center text-slate-400">
          <span className="inline-block animate-spin mr-2">⚙️</span> Carregando métricas do sistema...
        </div>
      ) : (
        <div className="space-y-8">
          {/* Main KPI Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            <div
              onClick={() => onNavigate('/builds')}
              className="poe-card p-5 cursor-pointer space-y-2 border-l-4 border-l-amber-500"
            >
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Builds Cadastradas</span>
                <Shield className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-3xl font-poe font-bold text-slate-100">
                {stats?.totalBuilds ?? 0}
              </div>
              <div className="text-[11px] text-amber-400/80">Ver catálogo completo →</div>
            </div>

            <div
              onClick={() => onNavigate('/fontes')}
              className="poe-card p-5 cursor-pointer space-y-2 border-l-4 border-l-sky-500"
            >
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Fontes Controladas</span>
                <BookOpen className="w-4 h-4 text-sky-400" />
              </div>
              <div className="text-3xl font-poe font-bold text-slate-100">
                {stats?.totalSources ?? 0}
              </div>
              <div className="text-[11px] text-sky-400/80">Painel de Ingestão →</div>
            </div>

            <div
              onClick={() => onNavigate('/crafting')}
              className="poe-card p-5 cursor-pointer space-y-2 border-l-4 border-l-emerald-500"
            >
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Receitas de Crafting</span>
                <Hammer className="w-4 h-4 text-emerald-400" />
              </div>
              <div className="text-3xl font-poe font-bold text-slate-100">
                {stats?.totalCrafts ?? 0}
              </div>
              <div className="text-[11px] text-emerald-400/80">Passo a passo ordenado →</div>
            </div>

            <div
              onClick={() => onNavigate('/farming')}
              className="poe-card p-5 cursor-pointer space-y-2 border-l-4 border-l-yellow-500"
            >
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Rotas de Farm</span>
                <Compass className="w-4 h-4 text-yellow-400" />
              </div>
              <div className="text-3xl font-poe font-bold text-slate-100">
                {stats?.totalFarmRoutes ?? 0}
              </div>
              <div className="text-[11px] text-yellow-400/80">Estratégias de moedas →</div>
            </div>

            <div
              onClick={() => onNavigate('/patches')}
              className="poe-card p-5 cursor-pointer space-y-2 border-l-4 border-l-rose-500"
            >
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Patch Notes Oficiais</span>
                <FileText className="w-4 h-4 text-rose-400" />
              </div>
              <div className="text-3xl font-poe font-bold text-slate-100">
                {stats?.totalPatches ?? 0}
              </div>
              <div className="text-[11px] text-rose-400/80">Mapeamento de impacto →</div>
            </div>

            <div
              onClick={() => onNavigate('/builds')}
              className="poe-card p-5 cursor-pointer space-y-2 border-l-4 border-l-amber-600 bg-amber-950/20"
            >
              <div className="flex items-center justify-between text-amber-300 text-xs">
                <span>Aguardando Revisão</span>
                <AlertTriangle className="w-4 h-4 text-amber-400" />
              </div>
              <div className="text-3xl font-poe font-bold text-amber-400">
                {stats?.needsReviewCount ?? 0}
              </div>
              <div className="text-[11px] text-amber-300/80">Afetadas por patches →</div>
            </div>

            <div
              onClick={() => onNavigate('/conflitos')}
              className="poe-card p-5 cursor-pointer space-y-2 border-l-4 border-l-purple-500 bg-purple-950/20"
            >
              <div className="flex items-center justify-between text-purple-300 text-xs">
                <span>Conflitos Ativos</span>
                <Split className="w-4 h-4 text-purple-400" />
              </div>
              <div className="text-3xl font-poe font-bold text-purple-400">
                {stats?.activeConflicts ?? 0}
              </div>
              <div className="text-[11px] text-purple-300/80">Fontes divergentes →</div>
            </div>

            <div className="poe-card p-5 space-y-2 border-l-4 border-l-blue-500">
              <div className="flex items-center justify-between text-slate-400 text-xs">
                <span>Integridade da Base</span>
                <CheckCircle className="w-4 h-4 text-blue-400" />
              </div>
              <div className="text-3xl font-poe font-bold text-blue-300">
                100%
              </div>
              <div className="text-[11px] text-slate-500">Zero Alucinação / Auditado</div>
            </div>
          </div>

          {/* Audit Trail Section */}
          <div className="poe-card p-6 space-y-4">
            <h3 className="font-poe font-bold text-lg text-slate-100 flex items-center gap-2">
              <History className="w-5 h-5 text-amber-400" />
              <span>Trilha de Auditoria & Modificações do Sistema</span>
            </h3>

            <div className="space-y-3">
              {auditLogs.map((log) => (
                <div
                  key={log.id}
                  className="p-3 rounded bg-slate-950/80 border border-slate-800 text-xs flex flex-col sm:flex-row sm:items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-900 border border-slate-700 text-amber-300">
                      {log.action}
                    </span>
                    <span className="text-slate-300 font-medium">{log.details}</span>
                  </div>

                  <span className="text-[10px] font-mono text-slate-500">
                    {new Date(log.timestamp).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
