import React, { useEffect, useState } from 'react';
import {
  Shield,
  ArrowLeft,
  BookOpen,
  AlertTriangle,
  History,
  Sword,
  Target,
  Layers,
  Sparkles,
  GitCommit,
  CheckCircle2,
  ExternalLink,
  ChevronRight,
  Copy,
  Check,
  Zap,
  Flame,
  Coins
} from '../components/Icons.tsx';
import { fetchBuild } from '../services/api.ts';
import { Build, BuildVersion, BuildEquipmentSlot, BuildSkillSetup, BuildProgressionVariant } from '../types/index.ts';
import { StatusBadge } from '../components/StatusBadge.tsx';
import { SourceBadge } from '../components/SourceBadge.tsx';
import { ConflictAlert } from '../components/ConflictAlert.tsx';

interface Props {
  slug: string;
  onNavigate: (path: string) => void;
}

// Visual circular socket chain in PoE2 style
export const SocketChain: React.FC<{ sockets?: string }> = ({ sockets }) => {
  if (!sockets) return null;
  const cleanSockets = sockets.replace(/[^RGBWrgbw]/g, '').toUpperCase().split('');
  if (cleanSockets.length === 0) return null;

  return (
    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-slate-950/80 border border-slate-800" title={`Encaixes: ${sockets}`}>
      {cleanSockets.map((s, idx) => {
        const gemClass = s === 'G' ? 'gem-g' : s === 'B' ? 'gem-b' : s === 'R' ? 'gem-r' : 'gem-w';
        return (
          <React.Fragment key={idx}>
            {idx > 0 && <span className="socket-link-line" />}
            <span
              className={`socket-gem ${gemClass}`}
              title={`Encaixe ${s === 'G' ? 'Verde (Destreza)' : s === 'B' ? 'Azul (Inteligência)' : s === 'R' ? 'Vermelho (Força)' : 'Branco'}`}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};

// Campaign Vendor Regex Widget (Mobalytics Leveling Tool)
export const VendorRegexWidget: React.FC<{ regex: string; explanation?: string }> = ({ regex, explanation }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(regex);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="vendor-regex-box p-5 space-y-3">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="p-1.5 rounded bg-sky-950 text-sky-400 border border-sky-800">
            <Zap className="w-4 h-4" />
          </span>
          <div>
            <h4 className="font-poe font-bold text-sm text-slate-100">
              Regex Oficial para Vendedores (Leveling - SnooBAE85)
            </h4>
            <p className="text-[11px] text-slate-400">
              Cole este código na barra de pesquisa dos NPCs dos Atos para destacar itens essenciais de avanço:
            </p>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className={`poe-btn-secondary text-xs self-start sm:self-auto flex items-center gap-1.5 ${
            copied ? 'bg-emerald-950 text-emerald-300 border-emerald-600' : ''
          }`}
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-amber-300" />}
          <span>{copied ? 'Copiado!' : 'Copiar Regex'}</span>
        </button>
      </div>

      <div className="bg-slate-950 border border-slate-800 rounded p-3 font-mono text-xs text-amber-300 flex items-center justify-between overflow-x-auto select-all">
        <code>{regex}</code>
      </div>

      {explanation && (
        <div className="text-[11px] text-slate-400 pt-2 border-t border-slate-900 leading-relaxed">
          <strong className="text-slate-300">O que este filtro encontra:</strong> {explanation}
        </div>
      )}
    </div>
  );
};

// Zero-Effort Double Damage Tech Card
export const TechSynergyCard: React.FC = () => {
  return (
    <div className="p-5 rounded-lg border border-amber-500/40 bg-gradient-to-br from-amber-950/20 via-slate-950/80 to-slate-950 space-y-3 shadow-lg">
      <div className="flex items-center gap-2">
        <span className="p-1.5 rounded bg-amber-950/80 border border-amber-600/60 text-amber-400">
          <Flame className="w-4 h-4" />
        </span>
        <h4 className="font-poe font-bold text-sm text-amber-300">
          Zero-Effort Double-Damage Tech (Mecânica 0.5.5 por SnooBAE85)
        </h4>
      </div>
      <p className="text-xs text-slate-300 leading-relaxed">
        Tecnologia descoberta por SnooBAE85 explorando a interação entre <strong className="text-sky-300">Twister</strong>, <strong className="text-sky-200">Frost Wall</strong> e o efeito <strong className="text-amber-300">Verglas</strong>:
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-2 pt-2">
        <div className="p-2.5 rounded bg-slate-950/70 border border-slate-800 text-[11px] space-y-1">
          <div className="font-mono text-amber-400 font-bold">1. Disparo de Twister</div>
          <div className="text-slate-400">Dispara rajadas contínuas de ciclones em direção aos monstros ou chefes.</div>
        </div>
        <div className="p-2.5 rounded bg-slate-950/70 border border-slate-800 text-[11px] space-y-1">
          <div className="font-mono text-sky-400 font-bold">2. Colisão com Frost Wall</div>
          <div className="text-slate-400">Os ciclones colidem de imediato contra os pilares de gelo gerados.</div>
        </div>
        <div className="p-2.5 rounded bg-slate-950/70 border border-slate-800 text-[11px] space-y-1">
          <div className="font-mono text-emerald-400 font-bold">3. Verglas 100% Uptime</div>
          <div className="text-slate-400">A quebra incessante do gelo sustenta o bônus de dano dobrado sem esforço manual.</div>
        </div>
        <div className="p-2.5 rounded bg-slate-950/70 border border-slate-800 text-[11px] space-y-1">
          <div className="font-mono text-rose-400 font-bold">4. Gatilho Cast on Crit</div>
          <div className="text-slate-400">Acoplamento com Flame Wall e Frost Wall para reerguer as barreiras automaticamente.</div>
        </div>
      </div>
    </div>
  );
};

// Budget & PoE2 Trade Economy Card
export const BudgetTradeCard: React.FC<{
  budget?: string;
  breakdown?: string;
  tradeUrl?: string;
  stageName?: string;
}> = ({ budget, breakdown, tradeUrl, stageName }) => {
  if (!budget && !tradeUrl) return null;

  return (
    <div className="p-5 rounded-lg border border-amber-500/40 bg-gradient-to-r from-amber-950/30 via-slate-950 to-slate-950 space-y-3 shadow-md">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <span className="p-2.5 rounded-lg bg-amber-950 border border-amber-500/50 text-amber-300">
            <Coins className="w-5 h-5" />
          </span>
          <div>
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-poe font-bold text-sm text-slate-100">
                Valor Estimado de Mercado (PoE2 Trade)
              </span>
              {stageName && (
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 border border-slate-700 text-amber-300">
                  {stageName}
                </span>
              )}
            </div>
            <div className="text-base sm:text-lg font-bold font-poe text-amber-300 pt-0.5">
              {budget || 'Consulte o mercado oficial'}
            </div>
          </div>
        </div>

        {tradeUrl && (
          <a
            href={tradeUrl}
            target="_blank"
            rel="noreferrer"
            className="poe-btn-primary text-xs self-start sm:self-auto flex items-center gap-2"
          >
            <span>Pesquisar no PoE2 Trade</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        )}
      </div>

      {breakdown && (
        <div className="pt-2 border-t border-slate-800/80 text-xs text-slate-300 leading-relaxed flex items-start gap-2">
          <span className="text-amber-400 font-semibold text-[11px] uppercase tracking-wider flex-shrink-0">Alocação de Moedas:</span>
          <span className="text-slate-400">{breakdown}</span>
        </div>
      )}
    </div>
  );
};

export const BuildDetail: React.FC<Props> = ({ slug, onNavigate }) => {
  const [build, setBuild] = useState<Build | null>(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'PROGRESSION' | 'SKILLS' | 'PASSIVES' | 'EQUIPMENT' | 'GAMEPLAY' | 'HISTORY' | 'SOURCES'>('PROGRESSION');
  const [selectedVersionId, setSelectedVersionId] = useState<string>('');
  const [selectedVariantId, setSelectedVariantId] = useState<string>('');
  const [inspectedSlot, setInspectedSlot] = useState<BuildEquipmentSlot | null>(null);

  useEffect(() => {
    async function load() {
      try {
        const data = await fetchBuild(slug);
        setBuild(data);
        const activeVerId = data.activeVersionId || data.versions[0]?.id || '';
        setSelectedVersionId(activeVerId);

        const ver = data.versions.find((v: BuildVersion) => v.id === activeVerId) || data.versions[0];
        if (ver?.variants && ver.variants.length > 0) {
          // Default to endgame or last variant for best wow factor
          const defaultVariant = ver.variants.find((va: BuildProgressionVariant) => va.id.includes('endgame')) || ver.variants[ver.variants.length - 1];
          setSelectedVariantId(defaultVariant.id);
        }
      } catch (err) {
        console.error('Error fetching build:', err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="py-24 text-center text-slate-400">
        <span className="inline-block animate-spin mr-2">⚙️</span> Carregando informações da build...
      </div>
    );
  }

  if (!build) {
    return (
      <div className="py-16 text-center space-y-4">
        <div className="text-xl font-bold text-slate-300">Build não encontrada</div>
        <p className="text-xs text-slate-500 italic">"Informação não encontrada nas fontes fornecidas."</p>
        <button onClick={() => onNavigate('/builds')} className="poe-btn-secondary text-xs">
          <ArrowLeft className="w-4 h-4" /> Voltar ao Catálogo
        </button>
      </div>
    );
  }

  const currentVersion: BuildVersion | undefined =
    build.versions.find((v) => v.id === selectedVersionId) || build.versions[0];

  const variants = currentVersion?.variants || [];
  const currentVariant: BuildProgressionVariant | undefined =
    variants.find((v) => v.id === selectedVariantId) || variants[0];

  // Dynamic skills and equipment based on active progression variant
  const activeSkills: BuildSkillSetup[] = currentVariant ? currentVariant.skills : (currentVersion?.skills || []);
  const activeEquipment: BuildEquipmentSlot[] = currentVariant ? currentVariant.equipment : (currentVersion?.equipment || []);

  const getSlotLabel = (slot: string) => {
    switch (slot) {
      case 'HELMET': return 'Elmo (Helmet)';
      case 'BODY_ARMOUR': return 'Peitoral (Body Armour)';
      case 'WEAPON': return 'Arma Principal (Main Hand)';
      case 'OFF_HAND': return 'Mão Secundária (Off-Hand / Escudo)';
      case 'GLOVES': return 'Luvas (Gloves)';
      case 'BOOTS': return 'Botas (Boots)';
      case 'BELT': return 'Cinto (Belt)';
      case 'AMULET': return 'Amuleto (Amulet)';
      case 'RING_1': return 'Anel 1 (Ring)';
      case 'RING_2': return 'Anel 2 (Ring)';
      case 'FLASK': return 'Frascos (Flasks)';
      case 'CHARM': return 'Amuleto Menor (Charm)';
      default: return slot;
    }
  };

  const getRarityClass = (rarity: string) => {
    switch (rarity) {
      case 'UNIQUE': return 'rarity-unique';
      case 'RARE': return 'rarity-rare';
      case 'MAGIC': return 'rarity-magic';
      default: return 'rarity-normal';
    }
  };

  return (
    <div className="space-y-8 py-4">
      {/* Top Breadcrumb & Back */}
      <div className="flex items-center justify-between">
        <button
          onClick={() => onNavigate('/builds')}
          className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-amber-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Voltar para Builds</span>
        </button>

        <div className="flex items-center gap-2">
          <span className="text-xs text-slate-500">Versão Ativa:</span>
          <select
            value={selectedVersionId}
            onChange={(e) => {
              setSelectedVersionId(e.target.value);
              const ver = build.versions.find((v) => v.id === e.target.value);
              if (ver?.variants && ver.variants.length > 0) {
                setSelectedVariantId(ver.variants[0].id);
              }
            }}
            className="bg-slate-900 border border-slate-700 rounded px-2.5 py-1 text-xs text-amber-300 outline-none focus:border-amber-500 font-mono"
          >
            {build.versions.map((ver) => (
              <option key={ver.id} value={ver.id}>
                v{ver.versionNumber} (Patch {ver.patchVersion})
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Build Hero Header */}
      <div className="poe-card p-6 sm:p-8 space-y-4 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <div className="flex items-center gap-2 flex-wrap">
              <StatusBadge status={build.status} />
              <span className="text-xs font-mono px-2 py-0.5 rounded bg-slate-950 border border-slate-800 text-sky-400">
                Patch {build.currentPatch}
              </span>
              <span className="text-xs text-slate-400">
                Classe: <strong className="text-slate-100">{build.characterClass}</strong> ({build.ascendancy})
              </span>
            </div>
            <h1 className="font-poe font-black text-2xl sm:text-4xl text-slate-100">
              {build.name}
            </h1>
            <p className="text-xs text-amber-400/90 font-medium">
              Arquétipo: {build.archetype}
            </p>
          </div>

          <div className="sm:text-right space-y-1 text-xs text-slate-400">
            <div>Autor: <strong className="text-slate-200">{build.author}</strong></div>
            <SourceBadge sourceId={build.sourceId} source={build.source} onClick={() => onNavigate(`/fontes`)} />
          </div>
        </div>

        <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-4xl border-t border-slate-800/80 pt-4">
          {build.summary}
        </p>

        {/* Patch Impact Warning Alert */}
        {build.status === 'NEEDS_REVIEW' && (
          <div className="p-3 rounded-lg border border-amber-500/40 bg-amber-950/30 text-amber-200 text-xs flex items-start gap-2.5">
            <AlertTriangle className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
            <div>
              <strong className="text-amber-300">Aviso de Impacto de Patch:</strong> Esta build utiliza habilidades ou gemas de suporte que sofreram alterações recentes de balanceamento no Patch {build.currentPatch}. Recomenda-se revisar a build.
            </div>
          </div>
        )}

        {/* Conflict Alert (if any recorded between sources) */}
        {build.conflicts && build.conflicts.map((conf) => (
          <ConflictAlert key={conf.id} conflict={conf} />
        ))}
      </div>

      {/* Mobalytics Progression Stage Switcher (Leveling to Endgame) */}
      {variants.length > 0 && (
        <div className="poe-card p-4 space-y-3 bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 border-amber-500/30">
          <div className="flex items-center justify-between flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="p-1 rounded bg-amber-950 border border-amber-600/50 text-amber-400">
                <Target className="w-3.5 h-3.5" />
              </span>
              <span className="text-xs font-poe font-bold uppercase tracking-wider text-slate-200">
                Estágio de Progressão do Personagem (Mobalytics Dynamics):
              </span>
            </div>
            <span className="text-[11px] text-slate-400 italic">
              Alternar de fase altera dinamicamente os Equipamentos, Gemas e Recomendações
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
            {variants.map((va) => {
              const isActive = va.id === (currentVariant?.id || '');
              return (
                <button
                  key={va.id}
                  onClick={() => {
                    setSelectedVariantId(va.id);
                    setInspectedSlot(null);
                  }}
                  className={`progression-variant-btn ${isActive ? 'active' : ''}`}
                >
                  <div className={`w-2.5 h-2.5 rounded-full flex-shrink-0 ${isActive ? 'bg-amber-400 animate-pulse' : 'bg-slate-600'}`} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1 flex-wrap">
                      <div className="text-xs font-semibold text-slate-100">{va.name}</div>
                      {va.estimatedBudget && (
                        <span className="text-[9px] font-mono font-bold px-1.5 py-0.5 rounded bg-amber-950/80 border border-amber-600/60 text-amber-300">
                          💰 {va.estimatedBudget.split('(')[0].trim()}
                        </span>
                      )}
                    </div>
                    <div className="text-[10px] text-slate-400 line-clamp-1">{va.description}</div>
                  </div>
                </button>
              );
            })}
          </div>

          {currentVariant && (
            <div className="pt-2.5 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-slate-300">
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-amber-300">{currentVariant.name}</span>
                </div>
                <div className="text-[11px] text-slate-400">{currentVariant.description}</div>
              </div>

              {currentVariant.estimatedBudget && (
                <div className="flex items-center gap-2 flex-wrap self-start sm:self-auto">
                  <span className="text-[11px] text-slate-400">Valor Estimado:</span>
                  <span className="font-mono font-bold text-amber-300 text-xs px-2 py-0.5 rounded bg-slate-950 border border-amber-500/40">
                    💰 {currentVariant.estimatedBudget}
                  </span>
                  {currentVariant.tradeSearchUrl && (
                    <a
                      href={currentVariant.tradeSearchUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="poe-btn-primary text-[10px] py-1 px-2.5 flex items-center gap-1.5"
                      title="Abrir pesquisa de itens no PoE2 Trade"
                    >
                      <span>PoE2 Trade</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      )}

      {/* Tabs Navigation */}
      <div className="border-b border-slate-800 flex items-center gap-2 overflow-x-auto text-xs pb-1">
        {[
          { id: 'PROGRESSION', label: 'Progressão & Leveling', icon: Target },
          { id: 'EQUIPMENT', label: `Equipamentos (${activeEquipment.length})`, icon: Shield },
          { id: 'SKILLS', label: `Skills & Gemas (${activeSkills.length})`, icon: Sword },
          { id: 'PASSIVES', label: 'Passivas & Keystones', icon: Sparkles },
          { id: 'GAMEPLAY', label: 'Gameplay & Rotação', icon: Layers },
          { id: 'HISTORY', label: `Histórico (${build.versions.length})`, icon: History },
          { id: 'SOURCES', label: 'Fonte & Auditoria', icon: BookOpen }
        ].map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-t-lg font-medium transition-all flex items-center gap-2 whitespace-nowrap ${
                isActive
                  ? 'text-amber-300 bg-slate-900 border-t border-x border-slate-700 border-b-2 border-b-amber-400 font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/40'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-amber-400' : 'text-slate-400'}`} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Contents */}
      {currentVersion && (
        <div className="space-y-6">
          {/* 1. PROGRESSION */}
          {activeTab === 'PROGRESSION' && (
            <div className="space-y-6">
              {/* Estimated Budget & PoE2 Trade Economy Card */}
              <BudgetTradeCard
                budget={currentVariant?.estimatedBudget}
                breakdown={currentVariant?.budgetBreakdown}
                tradeUrl={currentVariant?.tradeSearchUrl}
                stageName={currentVariant?.name}
              />

              {/* Campaign Vendor Regex Widget (if current variant has it or on leveling stage) */}
              {currentVariant?.vendorRegex && (
                <VendorRegexWidget
                  regex={currentVariant.vendorRegex}
                  explanation={currentVariant.vendorRegexExplanation}
                />
              )}

              {/* Zero-Effort Double-Damage Tech Card on Endgame Stage */}
              {(currentVariant?.id.includes('endgame') || slug.includes('twister')) && (
                <TechSynergyCard />
              )}

              {/* Step-by-Step Leveling Guide */}
              <div className="poe-card p-6 space-y-4">
                <h3 className="font-poe font-bold text-lg text-slate-100 flex items-center gap-2">
                  <Target className="w-5 h-5 text-amber-400" />
                  <span>Guia de Leveling Passo a Passo da Fonte</span>
                </h3>
                
                <div className="space-y-4">
                  {currentVersion.progression.leveling.map((lvl, idx) => (
                    <div key={idx} className="p-4 rounded-lg bg-slate-950/70 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-poe font-bold text-sm text-amber-300">
                          {lvl.stage}
                        </span>
                        <div className="flex items-center gap-1.5 flex-wrap">
                          {lvl.recommendedSkills.map((sk) => (
                            <span key={sk} className="px-2 py-0.5 rounded text-[10px] font-mono bg-sky-950/60 text-sky-300 border border-sky-800/60">
                              {sk}
                            </span>
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-slate-300 leading-relaxed">{lvl.tips}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Endgame Progression Stages */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {[
                  { stage: 'Early Game', content: currentVersion.progression.earlyGame },
                  { stage: 'Mid Game', content: currentVersion.progression.midGame },
                  { stage: 'Endgame', content: currentVersion.progression.endgame },
                  { stage: 'Late Game', content: currentVersion.progression.lateGame }
                ].map((stg) => (
                  <div key={stg.stage} className="poe-card p-4 space-y-2">
                    <h4 className="font-poe font-bold text-xs uppercase tracking-wider text-amber-400">
                      {stg.stage}
                    </h4>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      {stg.content || <span className="italic text-slate-500">Informação não encontrada nas fontes fornecidas.</span>}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. EQUIPMENT (MOBALYTICS CHARACTER PAPERDOLL) */}
          {activeTab === 'EQUIPMENT' && (
            <div className="space-y-6">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <div>
                  <h3 className="font-poe font-bold text-lg text-slate-100 flex items-center gap-2">
                    <Shield className="w-5 h-5 text-amber-400" />
                    <span>Equipamentos Recomendados (Painel Mobalytics)</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Estágio ativo: <strong className="text-amber-300">{currentVariant?.name || 'Padrão'}</strong>. Clique em um item para inspecionar atributos.
                  </p>
                </div>

                <button
                  onClick={() => onNavigate('/crafting')}
                  className="poe-btn-secondary text-xs"
                >
                  <span>Ver Métodos de Crafting</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Estimated Budget & PoE2 Trade Economy Card */}
              <BudgetTradeCard
                budget={currentVariant?.estimatedBudget}
                breakdown={currentVariant?.budgetBreakdown}
                tradeUrl={currentVariant?.tradeSearchUrl}
                stageName={currentVariant?.name}
              />

              {/* Inspected Slot Details Drawer (if any item clicked) */}
              {inspectedSlot && (
                <div className={`p-5 rounded-lg border bg-slate-950/95 space-y-3 ${
                  inspectedSlot.rarity === 'UNIQUE' ? 'border-amber-500 shadow-amber-950/50' :
                  inspectedSlot.rarity === 'RARE' ? 'border-yellow-500 shadow-yellow-950/50' :
                  'border-sky-500 shadow-sky-950/50'
                }`}>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <div>
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        Slot: {getSlotLabel(inspectedSlot.slot)}
                      </span>
                      <h4 className={`font-poe font-bold text-lg ${
                        inspectedSlot.rarity === 'UNIQUE' ? 'text-amber-400' :
                        inspectedSlot.rarity === 'RARE' ? 'text-yellow-300' : 'text-sky-300'
                      }`}>
                        {inspectedSlot.recommendedItem}
                      </h4>
                    </div>

                    <div className="flex items-center gap-2 flex-wrap">
                      {inspectedSlot.estimatedPrice && (
                        <span className="text-xs font-mono font-bold px-2 py-1 rounded bg-amber-950/80 border border-amber-600/60 text-amber-300">
                          💰 {inspectedSlot.estimatedPrice}
                        </span>
                      )}
                      {(inspectedSlot.tradeQueryUrl || currentVariant?.tradeSearchUrl) && (
                        <a
                          href={inspectedSlot.tradeQueryUrl || currentVariant?.tradeSearchUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="poe-btn-primary text-xs py-1 px-2.5 flex items-center gap-1.5"
                          title="Buscar este item no PoE2 Trade"
                        >
                          <span>Buscar no PoE2 Trade</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                      <SocketChain sockets={inspectedSlot.sockets} />
                      <button
                        onClick={() => setInspectedSlot(null)}
                        className="text-xs text-slate-400 hover:text-slate-100 px-2 py-1 rounded bg-slate-900 border border-slate-800"
                      >
                        Fechar
                      </button>
                    </div>
                  </div>

                  <div className="space-y-1 pt-2 border-t border-slate-900">
                    <span className="text-xs font-semibold text-slate-300">Prioridade de Atributos (Stats):</span>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-slate-300 pt-1">
                      {inspectedSlot.priorityStats.map((st, idx) => (
                        <li key={idx} className="flex items-center gap-2 p-1.5 rounded bg-slate-900/60 border border-slate-800/60">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                          <span>{st}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {inspectedSlot.alternatives && inspectedSlot.alternatives.length > 0 && (
                    <div className="text-xs text-slate-400 pt-2 border-t border-slate-900">
                      <strong className="text-slate-300">Alternativas citadas na fonte:</strong> {inspectedSlot.alternatives.join(', ')}
                    </div>
                  )}
                </div>
              )}

              {/* RPG Character Sheet Layout (3 Columns) */}
              <div className="paperdoll-grid">
                {/* Column 1: Weapon, Gloves, Boots, Ring 1 */}
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest px-1">Mão Principal & Mobilidade</div>
                  {activeEquipment
                    .filter((eq) => ['WEAPON', 'GLOVES', 'BOOTS', 'RING_1'].includes(eq.slot))
                    .map((eq, idx) => (
                      <div
                        key={idx}
                        onClick={() => setInspectedSlot(eq)}
                        className={`item-slot-card ${getRarityClass(eq.rarity)} ${
                          inspectedSlot?.slot === eq.slot ? 'is-selected' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between pb-1">
                          <span className="text-[10px] font-mono text-slate-400 uppercase">
                            {getSlotLabel(eq.slot)}
                          </span>
                          <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                            eq.rarity === 'UNIQUE' ? 'text-amber-400 bg-amber-950/60' :
                            eq.rarity === 'RARE' ? 'text-yellow-300 bg-yellow-950/40' :
                            'text-sky-300 bg-sky-950/40'
                          }`}>
                            {eq.rarity}
                          </span>
                        </div>

                        <div className="font-poe font-bold text-sm text-slate-100 line-clamp-1">
                          {eq.recommendedItem}
                        </div>

                        <div className="flex items-center justify-between pt-2 mt-2 border-t border-slate-800/80">
                          <SocketChain sockets={eq.sockets} />
                          <div className="flex items-center gap-2">
                            {eq.estimatedPrice && (
                              <span className="text-[10px] font-mono text-amber-300 font-bold" title="Valor Estimado">
                                💰 {eq.estimatedPrice}
                              </span>
                            )}
                            {eq.tradeQueryUrl && (
                              <a
                                href={eq.tradeQueryUrl}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-[10px] text-sky-400 hover:text-sky-200 underline inline-flex items-center gap-0.5"
                                title="Buscar no PoE2 Trade"
                              >
                                <span>Trade</span>
                                <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            )}
                            <span className="text-[10px] text-slate-400">Ver →</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Column 2: Helmet, Body Armour, Belt, Flask */}
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest px-1">Armadura Central & Cinto</div>
                  {activeEquipment
                    .filter((eq) => ['HELMET', 'BODY_ARMOUR', 'BELT', 'FLASK'].includes(eq.slot))
                    .map((eq, idx) => (
                      <div
                        key={idx}
                        onClick={() => setInspectedSlot(eq)}
                        className={`item-slot-card ${getRarityClass(eq.rarity)} ${
                          inspectedSlot?.slot === eq.slot ? 'is-selected' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between pb-1">
                          <span className="text-[10px] font-mono text-slate-400 uppercase">
                            {getSlotLabel(eq.slot)}
                          </span>
                          <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                            eq.rarity === 'UNIQUE' ? 'text-amber-400 bg-amber-950/60' :
                            eq.rarity === 'RARE' ? 'text-yellow-300 bg-yellow-950/40' :
                            'text-sky-300 bg-sky-950/40'
                          }`}>
                            {eq.rarity}
                          </span>
                        </div>

                        <div className="font-poe font-bold text-sm text-slate-100 line-clamp-1">
                          {eq.recommendedItem}
                        </div>

                        <div className="flex items-center justify-between pt-2 mt-2 border-t border-slate-800/80">
                          <SocketChain sockets={eq.sockets} />
                          <div className="flex items-center gap-2">
                            {eq.estimatedPrice && (
                              <span className="text-[10px] font-mono text-amber-300 font-bold" title="Valor Estimado">
                                💰 {eq.estimatedPrice}
                              </span>
                            )}
                            {eq.tradeQueryUrl && (
                              <a
                                href={eq.tradeQueryUrl}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-[10px] text-sky-400 hover:text-sky-200 underline inline-flex items-center gap-0.5"
                                title="Buscar no PoE2 Trade"
                              >
                                <span>Trade</span>
                                <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            )}
                            <span className="text-[10px] text-slate-400">Ver →</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>

                {/* Column 3: Off Hand, Amulet, Ring 2, Charm */}
                <div className="space-y-3">
                  <div className="text-[11px] font-mono text-slate-500 uppercase tracking-widest px-1">Mão Secundária & Acessórios</div>
                  {activeEquipment
                    .filter((eq) => ['OFF_HAND', 'AMULET', 'RING_2', 'CHARM'].includes(eq.slot))
                    .map((eq, idx) => (
                      <div
                        key={idx}
                        onClick={() => setInspectedSlot(eq)}
                        className={`item-slot-card ${getRarityClass(eq.rarity)} ${
                          inspectedSlot?.slot === eq.slot ? 'is-selected' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between pb-1">
                          <span className="text-[10px] font-mono text-slate-400 uppercase">
                            {getSlotLabel(eq.slot)}
                          </span>
                          <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                            eq.rarity === 'UNIQUE' ? 'text-amber-400 bg-amber-950/60' :
                            eq.rarity === 'RARE' ? 'text-yellow-300 bg-yellow-950/40' :
                            'text-sky-300 bg-sky-950/40'
                          }`}>
                            {eq.rarity}
                          </span>
                        </div>

                        <div className="font-poe font-bold text-sm text-slate-100 line-clamp-1">
                          {eq.recommendedItem}
                        </div>

                        <div className="flex items-center justify-between pt-2 mt-2 border-t border-slate-800/80">
                          <SocketChain sockets={eq.sockets} />
                          <div className="flex items-center gap-2">
                            {eq.estimatedPrice && (
                              <span className="text-[10px] font-mono text-amber-300 font-bold" title="Valor Estimado">
                                💰 {eq.estimatedPrice}
                              </span>
                            )}
                            {eq.tradeQueryUrl && (
                              <a
                                href={eq.tradeQueryUrl}
                                target="_blank"
                                rel="noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="text-[10px] text-sky-400 hover:text-sky-200 underline inline-flex items-center gap-0.5"
                                title="Buscar no PoE2 Trade"
                              >
                                <span>Trade</span>
                                <ExternalLink className="w-2.5 h-2.5" />
                              </a>
                            )}
                            <span className="text-[10px] text-slate-400">Ver →</span>
                          </div>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          )}

          {/* 3. SKILLS & LINKS */}
          {activeTab === 'SKILLS' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-poe font-bold text-lg text-slate-100 flex items-center gap-2">
                    <Sword className="w-5 h-5 text-sky-400" />
                    <span>Configuração de Habilidades & Encaixes Conectados</span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    Estágio ativo: <strong className="text-amber-300">{currentVariant?.name || 'Padrão'}</strong>
                  </p>
                </div>

                <span className="text-xs text-slate-500">
                  {activeSkills.length} setups de habilidades
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeSkills.map((sk, idx) => (
                  <div key={idx} className="poe-card p-5 space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
                          {sk.slot}
                        </span>
                        <h4 className="font-poe font-bold text-base text-amber-300">
                          {sk.skillName}
                        </h4>
                      </div>
                      <SocketChain sockets={sk.socketColorOrLinks} />
                    </div>

                    <div className="space-y-1.5">
                      <div className="text-[11px] text-slate-400 font-semibold">Gemas de Suporte Conectadas:</div>
                      {sk.supports.length === 0 ? (
                        <span className="text-xs text-slate-500 italic">Sem gemas de suporte nesta etapa.</span>
                      ) : (
                        <div className="flex flex-wrap gap-1.5">
                          {sk.supports.map((sup, sIdx) => (
                            <span
                              key={sIdx}
                              className="px-2.5 py-1 rounded text-xs bg-slate-950 border border-slate-800 text-slate-200 flex items-center gap-1.5"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                              <span>{sup}</span>
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {sk.notes && (
                      <p className="text-xs text-slate-400 italic pt-2 border-t border-slate-800/80">
                        {sk.notes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 4. PASSIVES */}
          {activeTab === 'PASSIVES' && (
            <div className="poe-card p-6 space-y-6">
              <h3 className="font-poe font-bold text-lg text-slate-100 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                <span>Passive Skill Tree & Ascendência</span>
              </h3>

              {currentVariant?.passiveNotes && (
                <div className="p-4 rounded-lg bg-slate-950 border border-amber-500/30 space-y-1">
                  <div className="text-xs font-poe font-bold text-amber-300 uppercase tracking-wider">
                    Instruções para o Estágio: {currentVariant.name}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentVariant.passiveNotes}
                  </p>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-poe font-bold text-sm text-amber-300 uppercase tracking-wider">
                    Keystones Essenciais
                  </h4>
                  {currentVersion.passivePoints.keystones.length === 0 ? (
                    <p className="text-xs text-slate-500 italic">Informação não encontrada nas fontes fornecidas.</p>
                  ) : (
                    <ul className="space-y-2">
                      {currentVersion.passivePoints.keystones.map((k) => (
                        <li key={k} className="p-3 rounded bg-slate-950/70 border border-amber-500/30 text-xs font-semibold text-amber-200 flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                          <span>{k}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="space-y-3">
                  <h4 className="font-poe font-bold text-sm text-sky-300 uppercase tracking-wider">
                    Notáveis Principais
                  </h4>
                  {currentVersion.passivePoints.keyNotables.length === 0 ? (
                    <p className="text-xs text-slate-500 italic">Informação não encontrada nas fontes fornecidas.</p>
                  ) : (
                    <div className="flex flex-wrap gap-2">
                      {currentVersion.passivePoints.keyNotables.map((n) => (
                        <span key={n} className="px-3 py-1.5 rounded bg-slate-950 border border-slate-800 text-xs text-slate-200">
                          {n}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {currentVersion.passivePoints.pathNotes && (
                <div className="pt-4 border-t border-slate-800 space-y-2">
                  <h4 className="font-semibold text-xs text-slate-400 uppercase tracking-wider">
                    Orientações de Roteamento da Árvore
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {currentVersion.passivePoints.pathNotes}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* 5. GAMEPLAY */}
          {activeTab === 'GAMEPLAY' && (
            <div className="poe-card p-6 space-y-6">
              <h3 className="font-poe font-bold text-lg text-slate-100 flex items-center gap-2">
                <Layers className="w-5 h-5 text-amber-400" />
                <span>Mecânica de Combate & Instruções do Autor</span>
              </h3>

              {slug.includes('twister') && <TechSynergyCard />}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <h4 className="font-poe font-bold text-xs uppercase tracking-wider text-slate-300">
                    Mecânica Central
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed p-3 rounded bg-slate-950/70 border border-slate-800">
                    {currentVersion.gameplay.mechanics}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-poe font-bold text-xs uppercase tracking-wider text-slate-300">
                    Rotação de Habilidades
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed p-3 rounded bg-slate-950/70 border border-slate-800">
                    {currentVersion.gameplay.rotation}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-poe font-bold text-xs uppercase tracking-wider text-slate-300">
                    Limpeza de Monstros em Mapas (Packs)
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed p-3 rounded bg-slate-950/70 border border-slate-800">
                    {currentVersion.gameplay.packClearing}
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-poe font-bold text-xs uppercase tracking-wider text-slate-300">
                    Enfrentamento de Chefes (Bosses)
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed p-3 rounded bg-slate-950/70 border border-slate-800">
                    {currentVersion.gameplay.bossFight}
                  </p>
                </div>
              </div>

              {/* Strengths & Weaknesses */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
                <div className="p-4 rounded-lg bg-emerald-950/20 border border-emerald-800/40 space-y-2">
                  <h4 className="font-poe font-bold text-xs text-emerald-400 uppercase tracking-wider">
                    Pontos Fortes (Citados pela Fonte)
                  </h4>
                  <ul className="text-xs text-slate-300 space-y-1">
                    {currentVersion.gameplay.strengths.map((s, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                        <span>{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-rose-950/20 border border-rose-800/40 space-y-2">
                  <h4 className="font-poe font-bold text-xs text-rose-400 uppercase tracking-wider">
                    Limitações e Cuidados
                  </h4>
                  <ul className="text-xs text-slate-300 space-y-1">
                    {currentVersion.gameplay.weaknesses.map((w, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <AlertTriangle className="w-3.5 h-3.5 text-rose-400 flex-shrink-0" />
                        <span>{w}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* 6. HISTORY */}
          {activeTab === 'HISTORY' && (
            <div className="poe-card p-6 space-y-6">
              <h3 className="font-poe font-bold text-lg text-slate-100 flex items-center gap-2">
                <History className="w-5 h-5 text-amber-400" />
                <span>Histórico de Versões e Modificações Lógicas</span>
              </h3>

              <div className="relative pl-6 space-y-6 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-slate-800">
                {build.versions.map((ver) => (
                  <div key={ver.id} className="relative space-y-2">
                    <div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-amber-400 border-2 border-slate-900" />
                    
                    <div className="flex items-center justify-between">
                      <span className="font-poe font-bold text-sm text-slate-200">
                        Versão {ver.versionNumber} (Patch {ver.patchVersion})
                      </span>
                      <span className="text-[11px] font-mono text-slate-500">
                        {new Date(ver.createdAt).toLocaleDateString()}
                      </span>
                    </div>

                    <p className="text-xs text-slate-300 p-3 rounded bg-slate-950 border border-slate-800/80">
                      <strong>Motivo da Alteração:</strong> {ver.changeReason}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 7. SOURCES */}
          {activeTab === 'SOURCES' && (
            <div className="poe-card p-6 space-y-6">
              <h3 className="font-poe font-bold text-lg text-slate-100 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-sky-400" />
                <span>Proveniência e Auditoria da Fonte</span>
              </h3>

              <div className="p-4 rounded-lg bg-slate-950 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-poe font-bold text-base text-amber-300">
                    {build.source?.title || build.sourceId}
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Autor: {build.source?.author || build.author}
                  </span>
                </div>

                <div className="text-xs text-slate-400 space-y-1">
                  <div><strong>Tipo de Fonte:</strong> {build.source?.type}</div>
                  <div><strong>Versão POE2:</strong> {build.source?.poeVersion}</div>
                  <div><strong>Data de Inclusão:</strong> {build.source?.ingestedAt}</div>
                  {build.source?.url && (
                    <div>
                      <strong>URL Original:</strong>{' '}
                      <a href={build.source.url} target="_blank" rel="noreferrer" className="text-sky-400 underline inline-flex items-center gap-1">
                        {build.source.url} <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                  )}
                </div>

                {build.source?.rawContent && (
                  <div className="pt-3 border-t border-slate-800 space-y-1">
                    <div className="text-xs font-semibold text-slate-400">Trecho Citado:</div>
                    <pre className="text-[11px] text-slate-300 bg-slate-900/80 p-3 rounded overflow-x-auto whitespace-pre-wrap font-mono leading-relaxed max-h-60 overflow-y-auto">
                      {build.source.rawContent}
                    </pre>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
