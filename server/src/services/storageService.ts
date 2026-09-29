import type {
  Source,
  Patch,
  Build,
  CraftRecipe,
  FarmRoute,
  SourceConflict,
  AuditLog
} from '../types/index.ts';
import {
  initialSources,
  initialPatches,
  initialBuilds,
  initialCraftRecipes,
  initialFarmRoutes,
  initialConflicts,
  initialAuditLogs
} from '../data/seedData.ts';

class StorageService {
  private sources: Source[] = [...initialSources];
  private patches: Patch[] = [...initialPatches];
  private builds: Build[] = [...initialBuilds];
  private crafts: CraftRecipe[] = [...initialCraftRecipes];
  private farmRoutes: FarmRoute[] = [...initialFarmRoutes];
  private conflicts: SourceConflict[] = [...initialConflicts];
  private auditLogs: AuditLog[] = [...initialAuditLogs];

  // Sources
  getSources(): Source[] {
    return this.sources;
  }

  getSourceById(id: string): Source | undefined {
    return this.sources.find(s => s.id === id);
  }

  addSource(source: Source): Source {
    this.sources.unshift(source);
    this.addAuditLog({
      id: `aud-${Date.now()}`,
      timestamp: new Date().toISOString(),
      action: 'SOURCE_INGESTED',
      entityType: 'SOURCE',
      entityId: source.id,
      details: `Nova fonte cadastrada: "${source.title}" por ${source.author}.`,
      sourceId: source.id
    });
    return source;
  }

  updateSource(id: string, updates: Partial<Source>): Source | undefined {
    const idx = this.sources.findIndex(s => s.id === id);
    if (idx === -1) return undefined;
    this.sources[idx] = { ...this.sources[idx], ...updates };
    return this.sources[idx];
  }

  // Patches
  getPatches(): Patch[] {
    return this.patches;
  }

  getPatchById(id: string): Patch | undefined {
    return this.patches.find(p => p.id === id || p.version === id);
  }

  addPatch(patch: Patch): Patch {
    this.patches.unshift(patch);
    this.addAuditLog({
      id: `aud-${Date.now()}`,
      timestamp: new Date().toISOString(),
      action: 'PATCH_APPLIED',
      entityType: 'PATCH',
      entityId: patch.id,
      details: `Novo patch catalogado: ${patch.version} (${patch.title}).`,
      sourceId: patch.sourceId
    });
    return patch;
  }

  // Builds
  getBuilds(): Build[] {
    return this.builds;
  }

  getBuildById(id: string): Build | undefined {
    return this.builds.find(b => b.id === id || b.slug === id);
  }

  addBuild(build: Build): Build {
    this.builds.unshift(build);
    this.addAuditLog({
      id: `aud-${Date.now()}`,
      timestamp: new Date().toISOString(),
      action: 'BUILD_UPDATED',
      entityType: 'BUILD',
      entityId: build.id,
      details: `Build "${build.name}" cadastrada.`,
      sourceId: build.sourceId
    });
    return build;
  }

  updateBuild(id: string, updates: Partial<Build>): Build | undefined {
    const idx = this.builds.findIndex(b => b.id === id || b.slug === id);
    if (idx === -1) return undefined;
    this.builds[idx] = { ...this.builds[idx], ...updates };
    return this.builds[idx];
  }

  // Crafts
  getCrafts(): CraftRecipe[] {
    return this.crafts;
  }

  getCraftById(id: string): CraftRecipe | undefined {
    return this.crafts.find(c => c.id === id);
  }

  addCraft(craft: CraftRecipe): CraftRecipe {
    this.crafts.unshift(craft);
    return craft;
  }

  // Farming
  getFarmRoutes(): FarmRoute[] {
    return this.farmRoutes;
  }

  getFarmRouteById(id: string): FarmRoute | undefined {
    return this.farmRoutes.find(r => r.id === id);
  }

  addFarmRoute(route: FarmRoute): FarmRoute {
    this.farmRoutes.unshift(route);
    return route;
  }

  // Conflicts
  getConflicts(): SourceConflict[] {
    return this.conflicts;
  }

  addConflict(conflict: SourceConflict): SourceConflict {
    this.conflicts.unshift(conflict);
    this.addAuditLog({
      id: `aud-${Date.now()}`,
      timestamp: new Date().toISOString(),
      action: 'CONFLICT_DETECTED',
      entityType: conflict.entityType,
      entityId: conflict.entityId,
      details: `Divergência detectada entre fontes no campo "${conflict.fieldName}".`
    });
    return conflict;
  }

  // Audit Logs
  getAuditLogs(): AuditLog[] {
    return this.auditLogs;
  }

  addAuditLog(log: AuditLog): void {
    this.auditLogs.unshift(log);
  }
}

export const storage = new StorageService();
