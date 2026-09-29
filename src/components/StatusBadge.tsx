import React from 'react';
import { BuildStatus } from '../types/index.ts';
import { AlertTriangle, CheckCircle, Clock, Archive } from './Icons.tsx';

interface Props {
  status: BuildStatus;
  showIcon?: boolean;
}

export const StatusBadge: React.FC<Props> = ({ status, showIcon = true }) => {
  switch (status) {
    case 'NEEDS_REVIEW':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold badge-review tracking-wide shadow-sm" title="Esta build utiliza habilidades ou itens que sofreram alterações recentes de patch. Recomenda-se revisão.">
          {showIcon && <AlertTriangle className="w-3.5 h-3.5 text-amber-400 animate-pulse" />}
          NECESSITA REVISÃO
        </span>
      );
    case 'UPDATED':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold badge-updated tracking-wide shadow-sm" title="Build validada para o patch atual sem alterações pendentes.">
          {showIcon && <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />}
          ATUALIZADA
        </span>
      );
    case 'OUTDATED':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold badge-outdated tracking-wide shadow-sm" title="Build formulada para versões anteriores do POE2.">
          {showIcon && <Clock className="w-3.5 h-3.5 text-rose-400" />}
          DESATUALIZADA
        </span>
      );
    case 'ARCHIVED':
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-800 text-slate-400 border border-slate-700 tracking-wide">
          {showIcon && <Archive className="w-3.5 h-3.5" />}
          ARQUIVADA
        </span>
      );
  }
};
