import React from 'react';
import { BookOpen, ExternalLink } from './Icons.tsx';
import { Source } from '../types/index.ts';

interface Props {
  sourceId: string;
  source?: Source;
  label?: string;
  onClick?: () => void;
}

export const SourceBadge: React.FC<Props> = ({ sourceId, source, label, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium badge-source hover:bg-sky-500/20 transition-colors text-left"
      title={`Origem estrita: ${source?.title || sourceId}`}
    >
      <BookOpen className="w-3 h-3 text-sky-400 flex-shrink-0" />
      <span className="truncate max-w-[200px]">
        {label || source?.title || `Fonte: ${sourceId}`}
      </span>
      {source?.url && <ExternalLink className="w-2.5 h-2.5 opacity-60 flex-shrink-0" />}
    </button>
  );
};
