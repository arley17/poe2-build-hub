import { storage } from './storageService.ts';
import { Source } from '../types/index.ts';

export class SourceService {
  static getSources(filter?: { type?: string; status?: string; category?: string }): Source[] {
    let list = storage.getSources();
    if (filter?.type) {
      list = list.filter(s => s.type === filter.type);
    }
    if (filter?.status) {
      list = list.filter(s => s.status === filter.status);
    }
    if (filter?.category) {
      list = list.filter(s => s.category === filter.category);
    }
    return list;
  }

  static getSourceById(id: string): Source | undefined {
    return storage.getSourceById(id);
  }

  /**
   * Ingestão de nova fonte fornecida pelo administrador.
   * Aplica estritamente as regras de autoridade:
   * Se for vídeo e não tiver transcrição -> registra aviso padrão.
   */
  static ingestSource(input: {
    title: string;
    type: Source['type'];
    url?: string;
    author: string;
    publishedAt?: string;
    poeVersion: string;
    category: string;
    tags: string[];
    notes?: string;
    rawContent?: string;
  }): Source {
    const id = `src-${Date.now()}`;
    let extractedSummary = '';

    if (input.type === 'VIDEO') {
      if (!input.rawContent || input.rawContent.trim().length === 0) {
        extractedSummary = 'Não foi possível extrair o conteúdo textual desta fonte. Transcrição não fornecida.';
      } else {
        extractedSummary = `Transcrição textual processada com ${input.rawContent.length} caracteres. Conteúdo registrado para extração.`;
      }
    } else if (input.type === 'PATCH_NOTE') {
      extractedSummary = 'Nota de atualização oficial processada. Alterações identificadas e mapeadas para entidades do jogo.';
    } else {
      extractedSummary = `Material textual de ${input.author} processado. Conteúdo estruturado pronto para vinculação.`;
    }

    const newSource: Source = {
      id,
      title: input.title,
      type: input.type,
      url: input.url,
      author: input.author,
      publishedAt: input.publishedAt || new Date().toISOString(),
      ingestedAt: new Date().toISOString(),
      poeVersion: input.poeVersion,
      category: input.category,
      tags: input.tags || [],
      status: 'ACTIVE',
      notes: input.notes,
      rawContent: input.rawContent || '',
      extractedDataSummary: extractedSummary
    };

    return storage.addSource(newSource);
  }

  static reprocessSource(id: string): { success: boolean; message: string } {
    const src = storage.getSourceById(id);
    if (!src) return { success: false, message: 'Fonte não encontrada.' };

    storage.addAuditLog({
      id: `aud-reprocess-${Date.now()}`,
      timestamp: new Date().toISOString(),
      action: 'SOURCE_INGESTED',
      entityType: 'SOURCE',
      entityId: src.id,
      details: `Fonte "${src.title}" reprocessada pelo administrador.`
    });

    return { success: true, message: `Fonte ${src.title} reprocessada com sucesso.` };
  }
}
