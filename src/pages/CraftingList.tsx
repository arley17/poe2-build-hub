import React, { useEffect, useState } from 'react';
import { Hammer, Sparkles, BookOpen, Layers, CheckCircle2, ArrowRight } from '../components/Icons.tsx';
import { fetchCrafting } from '../services/api.ts';
import { CraftRecipe } from '../types/index.ts';

interface Props {
  onNavigate: (path: string) => void;
}

export const CraftingList: React.FC<Props> = ({ onNavigate }) => {
  const [recipes, setRecipes] = useState<CraftRecipe[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchCrafting();
        setRecipes(data);
      } catch (err) {
        console.error('Error fetching crafts:', err);
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
        <div className="inline-flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-1">
          <Hammer className="w-4 h-4" />
          <span>Módulo de Confecção de Equipamentos</span>
        </div>
        <h1 className="font-poe font-black text-3xl text-slate-100">
          Guia de Crafting Passo a Passo
        </h1>
        <p className="text-xs text-slate-400 mt-1 max-w-3xl">
          Procedimentos ordenados e receitas de confecção de equipamentos em Path of Exile 2 baseados estritamente nas instruções do autor.
        </p>
      </div>

      {loading ? (
        <div className="py-16 text-center text-slate-400">
          <span className="inline-block animate-spin mr-2">⚙️</span> Carregando procedimentos de craft...
        </div>
      ) : recipes.length === 0 ? (
        <div className="py-16 text-center text-slate-500 poe-card">
          <p className="font-semibold text-slate-400 mb-1">Nenhuma receita de crafting cadastrada.</p>
          <p className="text-xs italic">"Informação não encontrada nas fontes fornecidas."</p>
        </div>
      ) : (
        <div className="space-y-8">
          {recipes.map((craft) => (
            <div key={craft.id} className="poe-card p-6 sm:p-8 space-y-6">
              {/* Recipe Header */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-950/70 border border-emerald-700/60 text-emerald-300 font-bold">
                      Patch {craft.poeVersion}
                    </span>
                    <span className="text-xs text-slate-400">
                      Base: <strong className="text-slate-200">{craft.baseItem}</strong>
                    </span>
                  </div>
                  <h2 className="font-poe font-bold text-xl text-amber-300">
                    {craft.name}
                  </h2>
                  <p className="text-xs text-slate-300 font-medium">
                    Item Alvo: {craft.targetItem}
                  </p>
                </div>

                {craft.estimatedCost && (
                  <div className="p-3 rounded bg-slate-950 border border-slate-800 text-xs">
                    <span className="text-slate-400 block text-[10px] font-semibold uppercase">Custo Estimado (na fonte):</span>
                    <span className="text-amber-400 font-medium">{craft.estimatedCost}</span>
                  </div>
                )}
              </div>

              {/* Target Modifiers */}
              <div className="space-y-2">
                <h4 className="font-poe font-bold text-xs text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                  <span>Modificadores Desejados</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {craft.targetMods.map((mod, idx) => (
                    <div key={idx} className="p-2.5 rounded bg-slate-950/80 border border-slate-800 text-xs text-slate-200 flex items-center gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                      <span>{mod}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Step-by-step procedure */}
              <div className="space-y-3 pt-2">
                <h4 className="font-poe font-bold text-xs text-slate-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5 text-sky-400" />
                  <span>Ordem de Execução do Procedimento</span>
                </h4>

                <div className="space-y-3">
                  {craft.steps.map((step) => (
                    <div
                      key={step.stepNumber}
                      className="p-4 rounded-lg bg-slate-950 border border-slate-800/80 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/50 text-amber-300 font-poe font-bold text-xs flex items-center justify-center flex-shrink-0">
                          {step.stepNumber}
                        </div>
                        <div className="space-y-1">
                          <p className="text-xs text-slate-200 font-medium leading-relaxed">
                            {step.instruction}
                          </p>
                          <div className="text-[11px] text-slate-400">
                            <strong>Resultado Esperado:</strong> {step.expectedResult}
                          </div>
                        </div>
                      </div>

                      <div className="sm:text-right flex-shrink-0">
                        <span className="text-[10px] uppercase font-mono text-slate-500 block">Recurso Utilizado</span>
                        <span className="px-2 py-0.5 rounded text-xs font-mono bg-slate-900 border border-slate-700 text-amber-300">
                          {step.currencyOrMaterial}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {craft.alternatives && (
                <div className="p-3 rounded bg-slate-950/60 border border-slate-800 text-xs text-slate-400">
                  <strong className="text-slate-300">Alternativas Econômicas:</strong> {craft.alternatives}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
