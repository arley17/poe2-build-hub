import React from 'react';
import { AlertCircle, Split } from './Icons.tsx';
import { SourceConflict } from '../types/index.ts';

interface Props {
  conflict: SourceConflict;
}

export const ConflictAlert: React.FC<Props> = ({ conflict }) => {
  return (
    <div className="my-4 p-4 rounded-lg border border-amber-500/40 bg-gradient-to-r from-amber-950/30 via-slate-900/60 to-amber-950/20 text-slate-200 shadow-md">
      <div className="flex items-center gap-2 mb-2 text-amber-400 font-semibold text-sm">
        <Split className="w-4 h-4 text-amber-400" />
        <span>Divergência entre Fontes Encontrada: {conflict.fieldName}</span>
      </div>
      
      <p className="text-xs text-slate-400 mb-3">
        As fontes cadastradas apresentam recomendações distintas. Nenhuma fonte foi descartada ou modificada pela IA.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
        <div className="p-3 rounded bg-slate-900/80 border border-slate-700/60">
          <div className="font-semibold text-sky-400 mb-1 flex items-center justify-between">
            <span>Fonte A: {conflict.sourceAName}</span>
            <span className="text-[10px] text-slate-500 font-mono">#{conflict.sourceAId}</span>
          </div>
          <p className="text-slate-300 italic">{conflict.sourceAValue}</p>
        </div>

        <div className="p-3 rounded bg-slate-900/80 border border-slate-700/60">
          <div className="font-semibold text-purple-400 mb-1 flex items-center justify-between">
            <span>Fonte B: {conflict.sourceBName}</span>
            <span className="text-[10px] text-slate-500 font-mono">#{conflict.sourceBId}</span>
          </div>
          <p className="text-slate-300 italic">{conflict.sourceBValue}</p>
        </div>
      </div>

      {conflict.resolutionNotes && (
        <div className="mt-2 text-[11px] text-amber-300/80 flex items-center gap-1.5">
          <AlertCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
          <span>Nota Técnica: {conflict.resolutionNotes}</span>
        </div>
      )}
    </div>
  );
};
