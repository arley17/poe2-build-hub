import React, { useEffect, useState } from 'react';
import { BookOpen, Plus, RefreshCw, ExternalLink, Filter, CheckCircle2, AlertCircle, FileText } from '../components/Icons.tsx';
import { fetchSources, createSource, reprocessSource } from '../services/api.ts';
import { Source, SourceType } from '../types/index.ts';

interface Props {
  onNavigate: (path: string) => void;
}

export const SourcesAdmin: React.FC<Props> = ({ onNavigate }) => {
  const [sources, setSources] = useState<Source[]>([]);
  const [loading, setLoading] = useState(true);
  const [showIngestModal, setShowIngestModal] = useState(false);
  const [selectedSource, setSelectedSource] = useState<Source | null>(null);

  // Form State
  const [title, setTitle] = useState('');
  const [type, setType] = useState<SourceType>('GUIDE');
  const [url, setUrl] = useState('');
  const [author, setAuthor] = useState('');
  const [poeVersion, setPoeVersion] = useState('0.1.2');
  const [category, setCategory] = useState('Build Guide');
  const [tagsInput, setTagsInput] = useState('');
  const [notes, setNotes] = useState('');
  const [rawContent, setRawContent] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [reprocessingId, setReprocessingId] = useState<string | null>(null);

  useEffect(() => {
    loadSources();
  }, []);

  async function loadSources() {
    try {
      const data = await fetchSources();
      setSources(data);
    } catch (err) {
      console.error('Error fetching sources:', err);
    } finally {
      setLoading(false);
    }
  }

  const handleIngest = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !author) return;

    setSubmitting(true);
    try {
      const tags = tagsInput
        .split(',')
        .map((t) => t.trim())
        .filter((t) => t.length > 0);

      await createSource({
        title,
        type,
        url,
        author,
        poeVersion,
        category,
        tags,
        notes,
        rawContent
      });

      setShowIngestModal(false);
      resetForm();
      await loadSources();
    } catch (err) {
      console.error('Error ingesting source:', err);
    } finally {
      setSubmitting(false);
    }
  };

  const handleReprocess = async (id: string) => {
    setReprocessingId(id);
    try {
      await reprocessSource(id);
      await loadSources();
    } catch (err) {
      console.error('Error reprocessing:', err);
    } finally {
      setReprocessingId(null);
    }
  };

  const resetForm = () => {
    setTitle('');
    setType('GUIDE');
    setUrl('');
    setAuthor('');
    setPoeVersion('0.1.2');
    setCategory('Build Guide');
    setTagsInput('');
    setNotes('');
    setRawContent('');
  };

  const sourceTypes: SourceType[] = [
    'VIDEO',
    'ARTICLE',
    'GUIDE',
    'PATCH_NOTE',
    'PDF',
    'DOCUMENT',
    'IMAGE',
    'SPREADSHEET',
    'TEXT',
    'OTHER'
  ];

  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-sky-400 uppercase tracking-widest mb-1">
            <BookOpen className="w-4 h-4" />
            <span>Módulo de Gestão de Fontes</span>
          </div>
          <h1 className="font-poe font-black text-3xl text-slate-100">
            Fontes Controladas de Conteúdo
          </h1>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            Todo o conhecimento do sistema é auditado a partir destas fontes cadastradas. Proibida qualquer ingestão externa não autorizada.
          </p>
        </div>

        <button
          onClick={() => setShowIngestModal(true)}
          className="poe-btn-primary text-xs self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Cadastrar Nova Fonte</span>
        </button>
      </div>

      {/* Sources Grid */}
      {loading ? (
        <div className="py-16 text-center text-slate-400">
          <span className="inline-block animate-spin mr-2">⚙️</span> Carregando registro de fontes...
        </div>
      ) : sources.length === 0 ? (
        <div className="py-16 text-center text-slate-500 poe-card">
          <p className="font-semibold text-slate-400 mb-1">Nenhuma fonte cadastrada.</p>
          <p className="text-xs italic">"Informação não encontrada nas fontes fornecidas."</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sources.map((src) => (
            <div key={src.id} className="poe-card p-5 flex flex-col justify-between space-y-4">
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-950/70 border border-sky-800/60 text-sky-300 font-bold uppercase">
                    {src.type}
                  </span>
                  <span className="text-[10px] font-mono text-slate-500">
                    POE2 v{src.poeVersion}
                  </span>
                </div>

                <h3 className="font-poe font-bold text-base text-slate-100 line-clamp-2">
                  {src.title}
                </h3>

                <div className="text-xs text-slate-400">
                  Autor: <strong className="text-slate-200">{src.author}</strong>
                </div>

                {src.extractedDataSummary && (
                  <div className="p-2.5 rounded bg-slate-950 border border-slate-800/80 text-[11px] text-slate-300 line-clamp-3">
                    {src.extractedDataSummary}
                  </div>
                )}

                {src.type === 'VIDEO' && (!src.rawContent || src.rawContent.trim().length === 0) && (
                  <div className="p-2 rounded bg-amber-950/30 border border-amber-800/40 text-[11px] text-amber-300 flex items-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                    <span>Não foi possível extrair o conteúdo textual desta fonte.</span>
                  </div>
                )}
              </div>

              <div className="border-t border-slate-800/80 pt-3 flex items-center justify-between gap-2 text-xs">
                <button
                  onClick={() => setSelectedSource(src)}
                  className="text-amber-400 hover:text-amber-300 text-xs font-semibold"
                >
                  Ver Detalhes
                </button>

                <button
                  onClick={() => handleReprocess(src.id)}
                  disabled={reprocessingId === src.id}
                  className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-slate-200"
                  title="Reprocessar extração e mapeamento"
                >
                  <RefreshCw className={`w-3 h-3 ${reprocessingId === src.id ? 'animate-spin text-amber-400' : ''}`} />
                  <span>Reprocessar</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal View Source Details */}
      {selectedSource && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-2xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <div>
                <span className="text-[10px] font-mono text-sky-400 uppercase">[{selectedSource.type}] #{selectedSource.id}</span>
                <h3 className="font-poe font-bold text-lg text-slate-100">{selectedSource.title}</h3>
              </div>
              <button onClick={() => setSelectedSource(null)} className="text-slate-400 hover:text-white text-xs px-2 py-1 bg-slate-800 rounded">
                Fechar
              </button>
            </div>

            <div className="text-xs text-slate-300 space-y-2">
              <div><strong>Autor:</strong> {selectedSource.author}</div>
              <div><strong>Categoria:</strong> {selectedSource.category}</div>
              <div><strong>Versão POE2:</strong> {selectedSource.poeVersion}</div>
              <div><strong>Ingestão:</strong> {new Date(selectedSource.ingestedAt).toLocaleString()}</div>
              {selectedSource.url && (
                <div>
                  <strong>URL:</strong>{' '}
                  <a href={selectedSource.url} target="_blank" rel="noreferrer" className="text-sky-400 underline">
                    {selectedSource.url}
                  </a>
                </div>
              )}
            </div>

            {selectedSource.notes && (
              <div className="p-3 rounded bg-slate-950 border border-slate-800 text-xs text-slate-400">
                <strong>Notas do Administrador:</strong> {selectedSource.notes}
              </div>
            )}

            <div className="space-y-1">
              <div className="text-xs font-semibold text-slate-300">Conteúdo Bruto / Transcrição Cadastrada:</div>
              <pre className="p-3 rounded bg-slate-950 border border-slate-800 text-[11px] text-slate-300 font-mono whitespace-pre-wrap max-h-60 overflow-y-auto">
                {selectedSource.rawContent || 'Nenhum conteúdo textual bruto associado.'}
              </pre>
            </div>
          </div>
        </div>
      )}

      {/* Modal Ingest Source */}
      {showIngestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="font-poe font-bold text-lg text-slate-100 flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-sky-400" />
              <span>Cadastrar Nova Fonte Controlada</span>
            </h3>

            <form onSubmit={handleIngest} className="space-y-4 text-xs">
              <div className="space-y-1">
                <label className="text-slate-300 font-semibold">Título do Material</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Guia Completo de Monk Invocador"
                  className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-slate-200 outline-none focus:border-amber-500"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold">Tipo de Material</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value as SourceType)}
                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-slate-200 outline-none focus:border-amber-500"
                  >
                    {sourceTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold">Versão POE2</label>
                  <input
                    type="text"
                    required
                    value={poeVersion}
                    onChange={(e) => setPoeVersion(e.target.value)}
                    placeholder="0.1.2"
                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-slate-200 outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold">Autor / Criador</label>
                  <input
                    type="text"
                    required
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    placeholder="Nome do autor"
                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-slate-200 outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold">Categoria</label>
                  <input
                    type="text"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    placeholder="Build Guide, Leveling..."
                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-slate-200 outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-semibold">URL Original (se houver)</label>
                <input
                  type="url"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  placeholder="https://..."
                  className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-slate-200 outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-semibold">Tags (separadas por vírgula)</label>
                <input
                  type="text"
                  value={tagsInput}
                  onChange={(e) => setTagsInput(e.target.value)}
                  placeholder="Monk, Invoker, Starter"
                  className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-slate-200 outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-semibold">
                  {type === 'VIDEO' ? 'Transcrição Oficial do Vídeo (Obrigatório para extração)' : 'Conteúdo Textual Bruto'}
                </label>
                <textarea
                  rows={5}
                  value={rawContent}
                  onChange={(e) => setRawContent(e.target.value)}
                  placeholder={type === 'VIDEO' ? 'Cole a transcrição textual fornecida pelo autor...' : 'Texto do artigo, notas ou guia...'}
                  className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-slate-200 outline-none focus:border-amber-500 font-mono"
                />
              </div>

              <div className="flex items-center justify-end gap-2 pt-2 border-t border-slate-800">
                <button
                  type="button"
                  onClick={() => setShowIngestModal(false)}
                  className="poe-btn-secondary text-xs"
                >
                  Cancelar
                </button>
                <button
                  type="submit"
                  disabled={submitting}
                  className="poe-btn-primary text-xs"
                >
                  {submitting ? 'Cadastrando...' : 'Salvar & Processar Fonte'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
