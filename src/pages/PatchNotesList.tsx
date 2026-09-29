import React, { useEffect, useState } from 'react';
import { FileText, Plus, AlertTriangle, CheckCircle, ArrowRight, Shield, Layers } from '../components/Icons.tsx';
import { fetchPatches, createPatch } from '../services/api.ts';
import { Patch, PatchChange } from '../types/index.ts';

interface Props {
  onNavigate: (path: string) => void;
}

export const PatchNotesList: React.FC<Props> = ({ onNavigate }) => {
  const [patches, setPatches] = useState<Patch[]>([]);
  const [loading, setLoading] = useState(true);
  const [showIngestModal, setShowIngestModal] = useState(false);

  // Form State
  const [version, setVersion] = useState('');
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [sourceId, setSourceId] = useState('src-2');
  const [rawText, setRawText] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    loadPatches();
  }, []);

  async function loadPatches() {
    try {
      const data = await fetchPatches();
      setPatches(data);
    } catch (err) {
      console.error('Error fetching patches:', err);
    } finally {
      setLoading(false);
    }
  }

  const handleCreatePatch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!version || !title) return;

    setSubmitting(true);
    try {
      // Criação estruturada com classificação inicial
      const changes: Partial<PatchChange>[] = rawText
        .split('\n')
        .filter((line) => line.trim().length > 0)
        .map((line, idx) => {
          let changeType: PatchChange['changeType'] = 'ADJUSTMENT';
          if (line.toLowerCase().includes('aumentado') || line.toLowerCase().includes('buff') || line.toLowerCase().includes('reduzido tempo')) {
            changeType = 'BUFF';
          } else if (line.toLowerCase().includes('reduzido') || line.toLowerCase().includes('nerf')) {
            changeType = 'NERF';
          }

          const targetMatch = line.split(':')[0] || 'Entidade';

          return {
            id: `chg-new-${Date.now()}-${idx}`,
            patchId: `patch-${version.replace(/\./g, '-')}`,
            category: 'SKILL',
            changeType,
            targetEntityName: targetMatch.trim(),
            rawText: line.trim(),
            affectedBuildIds: [],
            suggestedAction: 'Esta build utiliza esta entidade, que sofreu alteração neste patch. Recomenda-se revisar a build.',
            sourceId
          };
        });

      await createPatch({
        version,
        title,
        summary,
        sourceId,
        changes: changes as PatchChange[]
      });

      setShowIngestModal(false);
      setVersion('');
      setTitle('');
      setSummary('');
      setRawText('');
      await loadPatches();
    } catch (err) {
      console.error('Error submitting patch:', err);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="space-y-8 py-4">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold text-rose-400 uppercase tracking-widest mb-1">
            <FileText className="w-4 h-4" />
            <span>Módulo de Patch Tracker & Impacto</span>
          </div>
          <h1 className="font-poe font-black text-3xl text-slate-100">
            Notas de Atualização & Versionamento
          </h1>
          <p className="text-xs text-slate-400 mt-1 max-w-2xl">
            O sistema classifica cada linha das notas oficiais, mapeia habilidades e itens afetados e sinaliza builds ativas que necessitam de revisão.
          </p>
        </div>

        <button
          onClick={() => setShowIngestModal(true)}
          className="poe-btn-primary text-xs self-start sm:self-auto"
        >
          <Plus className="w-4 h-4" />
          <span>Cadastrar Novo Patch</span>
        </button>
      </div>

      {/* Patches List */}
      {loading ? (
        <div className="py-16 text-center text-slate-400">
          <span className="inline-block animate-spin mr-2">⚙️</span> Carregando histórico de patch notes...
        </div>
      ) : patches.length === 0 ? (
        <div className="py-16 text-center text-slate-500 poe-card">
          <p className="font-semibold text-slate-400 mb-1">Nenhum patch note cadastrado.</p>
          <p className="text-xs italic">"Informação não encontrada nas fontes fornecidas."</p>
        </div>
      ) : (
        <div className="space-y-8">
          {patches.map((patch) => (
            <div key={patch.id} className="poe-card p-6 sm:p-8 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono bg-rose-950/70 border border-rose-700/60 text-rose-300 font-bold">
                      Versão {patch.version}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      Data de Lançamento: {patch.releaseDate}
                    </span>
                  </div>
                  <h2 className="font-poe font-bold text-2xl text-slate-100">
                    {patch.title}
                  </h2>
                </div>

                <div className="text-xs text-slate-400">
                  Total de Alterações: <strong className="text-amber-300">{patch.changes.length}</strong>
                </div>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                {patch.summary}
              </p>

              {/* Changes Classified Table */}
              <div className="space-y-3 pt-2">
                <h4 className="font-poe font-bold text-xs text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-rose-400" />
                  <span>Alterações Mapeadas & Impacto em Builds</span>
                </h4>

                <div className="space-y-3">
                  {patch.changes.map((chg) => (
                    <div
                      key={chg.id}
                      className="p-4 rounded-lg bg-slate-950 border border-slate-800/80 space-y-2.5"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                            chg.changeType === 'BUFF' ? 'text-emerald-400 bg-emerald-950/60 border border-emerald-800/60' :
                            chg.changeType === 'NERF' ? 'text-rose-400 bg-rose-950/60 border border-rose-800/60' :
                            'text-amber-400 bg-amber-950/60 border border-amber-800/60'
                          }`}>
                            {chg.changeType}
                          </span>
                          <span className="font-poe font-bold text-sm text-slate-200">
                            {chg.targetEntityName}
                          </span>
                          <span className="text-[10px] font-mono uppercase text-slate-500">
                            [{chg.category}]
                          </span>
                        </div>

                        {chg.affectedBuildIds.length > 0 && (
                          <span className="inline-flex items-center gap-1.5 text-xs text-amber-400 font-semibold bg-amber-950/40 px-2.5 py-1 rounded border border-amber-700/50">
                            <AlertTriangle className="w-3.5 h-3.5" />
                            <span>Afeta {chg.affectedBuildIds.length} build(s) no sistema</span>
                          </span>
                        )}
                      </div>

                      <p className="text-xs text-slate-300 italic bg-slate-900/60 p-3 rounded font-mono leading-relaxed">
                        "{chg.rawText}"
                      </p>

                      <div className="text-[11px] text-slate-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2 pt-1 border-t border-slate-900">
                        <div className="text-amber-300/80">
                          <strong>Ação Recomendada:</strong> {chg.suggestedAction}
                        </div>

                        {chg.affectedBuildIds.length > 0 && (
                          <button
                            onClick={() => onNavigate('/builds')}
                            className="text-xs text-amber-400 hover:text-amber-300 flex items-center gap-1"
                          >
                            <span>Ver builds afetadas</span>
                            <ArrowRight className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Modal Ingest Patch Note */}
      {showIngestModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="w-full max-w-xl bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-6 space-y-4 max-h-[90vh] overflow-y-auto">
            <h3 className="font-poe font-bold text-lg text-slate-100 flex items-center gap-2">
              <FileText className="w-5 h-5 text-rose-400" />
              <span>Ingerir Nova Nota de Patch Oficial</span>
            </h3>

            <form onSubmit={handleCreatePatch} className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold">Versão (ex: 0.1.3)</label>
                  <input
                    type="text"
                    required
                    value={version}
                    onChange={(e) => setVersion(e.target.value)}
                    placeholder="0.1.3"
                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-slate-200 outline-none focus:border-amber-500"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-slate-300 font-semibold">Fonte Oficial</label>
                  <input
                    type="text"
                    required
                    value={sourceId}
                    onChange={(e) => setSourceId(e.target.value)}
                    className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-slate-200 outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-semibold">Título do Patch</label>
                <input
                  type="text"
                  required
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Path of Exile 2: Early Access Patch 0.1.3"
                  className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-slate-200 outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-semibold">Resumo do Patch</label>
                <input
                  type="text"
                  value={summary}
                  onChange={(e) => setSummary(e.target.value)}
                  placeholder="Correções de balanceamento e ajustes de monstros."
                  className="w-full bg-slate-950 border border-slate-700 rounded px-3 py-2 text-slate-200 outline-none focus:border-amber-500"
                />
              </div>

              <div className="space-y-1">
                <label className="text-slate-300 font-semibold">Texto das Alterações (Uma por linha: Habilidade: descrição)</label>
                <textarea
                  rows={6}
                  required
                  value={rawText}
                  onChange={(e) => setRawText(e.target.value)}
                  placeholder="Lightning Arrow: Dano aumentado em 5%&#10;Snipe: Reduzido dano base em 3%"
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
                  {submitting ? 'Processando e Cruzando Builds...' : 'Ingerir & Analisar Impactos'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};
