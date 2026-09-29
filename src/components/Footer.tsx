import React from 'react';
import { ShieldCheck, BookOpen, GitBranch } from './Icons.tsx';

interface Props {
  onNavigate: (path: string) => void;
}

export const Footer: React.FC<Props> = ({ onNavigate }) => {
  return (
    <footer className="w-full border-t border-slate-800/80 bg-slate-950/80 mt-20 py-10 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <ShieldCheck className="w-5 h-5 text-amber-400" />
              <h4 className="font-poe font-bold text-sm text-slate-200 uppercase tracking-wider">
                Princípio de Fonte Controlada
              </h4>
            </div>
            <p className="text-slate-400 leading-relaxed text-xs">
              O <strong className="text-slate-200">POE2 Build Hub</strong> opera sob autoridade estrita dos materiais fornecidos pelo administrador. Nenhuma informação é suposta ou completada com conhecimento externo não validado.
            </p>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <BookOpen className="w-5 h-5 text-sky-400" />
              <h4 className="font-poe font-bold text-sm text-slate-200 uppercase tracking-wider">
                Documentação do Sistema
              </h4>
            </div>
            <ul className="space-y-1.5 text-slate-400 text-xs">
              <li>
                <button onClick={() => onNavigate('/dashboard')} className="hover:text-amber-300 transition-colors">
                  • Painel de Auditoria & Métricas
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/fontes')} className="hover:text-amber-300 transition-colors">
                  • Registro de Fontes & Metadados
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/conflitos')} className="hover:text-amber-300 transition-colors">
                  • Detecção de Conflitos & Divergências
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('/patches')} className="hover:text-amber-300 transition-colors">
                  • Histórico de Patches & Análise de Impacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-3">
              <GitBranch className="w-5 h-5 text-emerald-400" />
              <h4 className="font-poe font-bold text-sm text-slate-200 uppercase tracking-wider">
                Versionamento POE2
              </h4>
            </div>
            <p className="text-slate-400 text-xs mb-2">
              Compatibilidade ativa com Path of Exile 2 Early Access. Builds associadas a patches anteriores são devidamente sinalizadas para revisão.
            </p>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-slate-900 border border-slate-800 text-[11px] font-mono text-amber-300">
              <span>Patch Atual: 0.1.2</span>
              <span>•</span>
              <span className="text-emerald-400 font-semibold">Hub Core v1.0.0 (Production)</span>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800/60 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© 2026 POE2 Build Hub — Base de Conhecimento Estruturada e Versionada.</p>
          <p className="italic">"Se uma informação não estiver nas fontes fornecidas: Informação não encontrada."</p>
        </div>
      </div>
    </footer>
  );
};
