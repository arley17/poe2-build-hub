# POE2 BUILD HUB — Modelo de Dados Completo

## 1. Entidades Principais

### 1.1 Source (Fonte Controlada)
```typescript
interface Source {
  id: string;                    // UUID ou slug único
  title: string;                 // Nome dado pelo administrador
  type: 'VIDEO' | 'ARTICLE' | 'GUIDE' | 'PATCH_NOTE' | 'PDF' | 'DOCUMENT' | 'IMAGE' | 'SPREADSHEET' | 'TEXT' | 'OTHER';
  url?: string;                  // URL original, se aplicável
  author: string;                // Nome do criador/autor
  publishedAt?: string;          // Data original de publicação (ISO 8601)
  ingestedAt: string;            // Data em que entrou no sistema
  poeVersion: string;            // Ex: "0.1.0", "0.2.0"
  category: string;              // Ex: "Endgame Builds", "League Starter"
  tags: string[];                // ["Bossing", "Bow", "Deadeye"]
  status: 'ACTIVE' | 'ARCHIVED' | 'NEEDS_REVIEW' | 'PROCESSING';
  notes?: string;                // Notas adicionais do administrador
  rawContent?: string;           // Texto integral ou transcrição
  extractedDataSummary?: string; // Resumo do que foi extraído
}
```

### 1.2 Patch & PatchNote
```typescript
interface Patch {
  id: string;                    // Ex: "patch-0-1-2"
  version: string;               // Ex: "0.1.2"
  title: string;                 // "Path of Exile 2: Early Access Patch 0.1.2"
  releaseDate: string;           // ISO 8601
  sourceId: string;              // Referência à fonte original
  notesSummary?: string;
}

interface PatchChange {
  id: string;
  patchId: string;
  category: 'SKILL' | 'ITEM' | 'PASSIVE' | 'MECHANIC' | 'GENERAL';
  changeType: 'BUFF' | 'NERF' | 'REWORK' | 'BUGFIX' | 'ADJUSTMENT';
  targetEntityName: string;      // Ex: "Lightning Arrow", "Cast on Critical Strike"
  rawText: string;               // Trecho literal do patch note
  affectedBuildIds: string[];    // Builds que usam a entidade
  suggestedAction: string;       // "Recomenda-se revisar a build"
  sourceId: string;
}
```

### 1.3 Build & BuildVersion
```typescript
interface Build {
  id: string;
  slug: string;                  // "lightning-arrow-deadeye"
  name: string;                  // "Lightning Arrow Deadeye Starter"
  characterClass: string;        // "Ranger", "Warrior", "Monk", "Witch", "Mercenary", "Sorceress"
  ascendancy: string;            // "Deadeye", "Titan", "Invoker", etc.
  archetype: string;             // "Bow / Elemental / Crit"
  author: string;
  sourceId: string;
  sourceExcerpt?: string;
  currentPatch: string;
  status: 'UPDATED' | 'NEEDS_REVIEW' | 'OUTDATED' | 'ARCHIVED';
  tags: string[];
  summary: string;
}

interface BuildProgression {
  leveling: { stage: string; recommendedSkills: string[]; tips: string }[];
  earlyGame: string;
  midGame: string;
  endgame: string;
  lateGame: string;
}

interface BuildSkillSetup {
  slot: string;                  // "Main Skill", "Aura", "Movement", "Defense"
  skillName: string;
  supports: string[];
  socketColorOrLinks?: string;
  notes?: string;
  sourceId: string;
}

interface BuildEquipmentSlot {
  slot: 'WEAPON' | 'OFF_HAND' | 'HELMET' | 'BODY_ARMOUR' | 'GLOVES' | 'BOOTS' | 'AMULET' | 'RING_1' | 'RING_2' | 'BELT' | 'FLASK' | 'CHARM';
  recommendedItem: string;
  rarity: 'UNIQUE' | 'RARE' | 'MAGIC' | 'NORMAL';
  priorityStats: string[];
  alternatives?: string[];
  sourceId: string;
}

interface BuildVersion {
  id: string;
  buildId: string;
  versionNumber: number;         // 1, 2, 3...
  patchVersion: string;          // "0.1.0"
  createdAt: string;
  changeReason: string;          // "Atualização devido ao Patch 0.1.2 - alteração no Lightning Arrow"
  sourceId: string;
  progression: BuildProgression;
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
```

### 1.4 CraftRecipe
```typescript
interface CraftStep {
  stepNumber: number;
  instruction: string;
  currencyOrMaterial: string;
  expectedResult: string;
  sourceId: string;
}

interface CraftRecipe {
  id: string;
  name: string;
  targetItem: string;
  baseItem: string;
  targetMods: string[];
  estimatedCost?: string;        // Apenas se presente na fonte!
  steps: CraftStep[];
  alternatives?: string;
  sourceId: string;
  poeVersion: string;
}
```

### 1.5 FarmRoute
```typescript
interface FarmRouteStep {
  order: number;
  title: string;
  instruction: string;
}

interface FarmRoute {
  id: string;
  name: string;
  objective: string;
  regionOrMaps: string;
  mechanics: string[];
  recommendedBuilds: string[];
  estimatedTime?: string;        // Somente se informado pela fonte
  rewards: string[];
  risks: string[];
  steps: FarmRouteStep[];
  sourceId: string;
  poeVersion: string;
}
```

### 1.6 SourceConflict (Divergência entre Fontes)
```typescript
interface SourceConflict {
  id: string;
  entityType: 'BUILD' | 'ITEM' | 'SKILL' | 'CRAFT';
  entityId: string;
  fieldName: string;
  sourceAId: string;
  sourceAValue: string;
  sourceBId: string;
  sourceBValue: string;
  detectedAt: string;
  status: 'RECORDED_UNRESOLVED' | 'ADMIN_ANNOTATED';
  resolutionNotes?: string;
}
```
