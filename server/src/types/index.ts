export type SourceType =
  | 'VIDEO'
  | 'ARTICLE'
  | 'GUIDE'
  | 'PATCH_NOTE'
  | 'PDF'
  | 'DOCUMENT'
  | 'IMAGE'
  | 'SPREADSHEET'
  | 'TEXT'
  | 'OTHER';

export type SourceStatus = 'ACTIVE' | 'ARCHIVED' | 'NEEDS_REVIEW' | 'PROCESSING';

export interface Source {
  id: string;
  title: string;
  type: SourceType;
  url?: string;
  author: string;
  publishedAt?: string;
  ingestedAt: string;
  poeVersion: string;
  category: string;
  tags: string[];
  status: SourceStatus;
  notes?: string;
  rawContent?: string;
  extractedDataSummary?: string;
}

export type PatchChangeCategory = 'SKILL' | 'ITEM' | 'PASSIVE' | 'MECHANIC' | 'GENERAL';
export type PatchChangeType = 'BUFF' | 'NERF' | 'REWORK' | 'BUGFIX' | 'ADJUSTMENT';

export interface PatchChange {
  id: string;
  patchId: string;
  category: PatchChangeCategory;
  changeType: PatchChangeType;
  targetEntityName: string;
  rawText: string;
  affectedBuildIds: string[];
  suggestedAction: string;
  sourceId: string;
}

export interface Patch {
  id: string;
  version: string;
  title: string;
  releaseDate: string;
  sourceId: string;
  summary: string;
  changes: PatchChange[];
}

export interface BuildProgressionStage {
  stage: string;
  recommendedSkills: string[];
  tips: string;
}

export interface BuildSkillSetup {
  slot: string;
  skillName: string;
  supports: string[];
  socketColorOrLinks?: string;
  notes?: string;
  sourceId: string;
}

export type EquipmentSlotType =
  | 'WEAPON'
  | 'OFF_HAND'
  | 'HELMET'
  | 'BODY_ARMOUR'
  | 'GLOVES'
  | 'BOOTS'
  | 'AMULET'
  | 'RING_1'
  | 'RING_2'
  | 'BELT'
  | 'FLASK'
  | 'CHARM';

export interface BuildEquipmentSlot {
  slot: EquipmentSlotType;
  recommendedItem: string;
  rarity: 'UNIQUE' | 'RARE' | 'MAGIC' | 'NORMAL';
  priorityStats: string[];
  alternatives?: string[];
  sockets?: string;
  iconHint?: string;
  estimatedPrice?: string;
  tradeQueryUrl?: string;
  sourceId: string;
}

export interface BuildProgressionVariant {
  id: string;
  name: string;
  tag: string;
  description: string;
  skills: BuildSkillSetup[];
  equipment: BuildEquipmentSlot[];
  passiveNotes: string;
  vendorRegex?: string;
  vendorRegexExplanation?: string;
  estimatedBudget?: string;
  budgetBreakdown?: string;
  tradeSearchUrl?: string;
}

export interface BuildVersion {
  id: string;
  buildId: string;
  versionNumber: number;
  patchVersion: string;
  createdAt: string;
  changeReason: string;
  sourceId: string;
  variants?: BuildProgressionVariant[];
  progression: {
    leveling: BuildProgressionStage[];
    earlyGame: string;
    midGame: string;
    endgame: string;
    lateGame: string;
  };
  skills: BuildSkillSetup[];
  equipment: BuildEquipmentSlot[];
  passivePoints: {
    keystones: string[];
    keyNotables: string[];
    pathNotes: string;
  };
  gameplay: {
    mechanics: string;
    rotation: string;
    packClearing: string;
    bossFight: string;
    strengths: string[];
    weaknesses: string[];
  };
}

export type BuildStatus = 'UPDATED' | 'NEEDS_REVIEW' | 'OUTDATED' | 'ARCHIVED';

export interface Build {
  id: string;
  slug: string;
  name: string;
  characterClass: string;
  ascendancy: string;
  archetype: string;
  author: string;
  sourceId: string;
  sourceExcerpt?: string;
  currentPatch: string;
  status: BuildStatus;
  tags: string[];
  summary: string;
  activeVersionId: string;
  versions: BuildVersion[];
}

export interface CraftStep {
  stepNumber: number;
  instruction: string;
  currencyOrMaterial: string;
  expectedResult: string;
  sourceId: string;
}

export interface CraftRecipe {
  id: string;
  name: string;
  targetItem: string;
  baseItem: string;
  targetMods: string[];
  estimatedCost?: string;
  steps: CraftStep[];
  alternatives?: string;
  sourceId: string;
  poeVersion: string;
}

export interface FarmRouteStep {
  order: number;
  title: string;
  instruction: string;
}

export interface FarmRoute {
  id: string;
  name: string;
  objective: string;
  regionOrMaps: string;
  mechanics: string[];
  recommendedBuilds: string[];
  estimatedTime?: string;
  rewards: string[];
  risks: string[];
  steps: FarmRouteStep[];
  sourceId: string;
  poeVersion: string;
}

export interface SourceConflict {
  id: string;
  entityType: 'BUILD' | 'ITEM' | 'SKILL' | 'CRAFT';
  entityId: string;
  entityName: string;
  fieldName: string;
  sourceAId: string;
  sourceAName: string;
  sourceAValue: string;
  sourceBId: string;
  sourceBName: string;
  sourceBValue: string;
  detectedAt: string;
  status: 'RECORDED_UNRESOLVED' | 'ADMIN_ANNOTATED';
  resolutionNotes?: string;
}

export interface AuditLog {
  id: string;
  timestamp: string;
  action: 'SOURCE_INGESTED' | 'BUILD_UPDATED' | 'PATCH_APPLIED' | 'CONFLICT_DETECTED' | 'STATUS_CHANGED';
  entityType: string;
  entityId: string;
  details: string;
  sourceId?: string;
}
