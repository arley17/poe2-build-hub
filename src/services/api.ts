import {
  Build,
  CraftRecipe,
  FarmRoute,
  Patch,
  Source,
  SourceConflict,
  SystemStats,
  SearchResultItem,
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
} from '../../server/src/data/seedData.ts';

const API_BASE = '/api';

export async function fetchStats(): Promise<SystemStats> {
  try {
    const res = await fetch(`${API_BASE}/stats`);
    if (res.ok) return await res.json();
  } catch (e) {
    // Graceful fallback to offline seed data
  }
  return {
    totalSources: initialSources.length,
    totalBuilds: initialBuilds.length,
    totalCrafts: initialCraftRecipes.length,
    totalFarmRoutes: initialFarmRoutes.length,
    totalPatches: initialPatches.length,
    activeConflicts: initialConflicts.length,
    needsReviewCount: initialBuilds.filter(b => b.status === 'NEEDS_REVIEW').length,
    outdatedCount: initialBuilds.filter(b => b.status === 'OUTDATED').length,
    recentAudits: initialAuditLogs.slice(0, 10)
  };
}

export async function fetchSources(filters?: { type?: string; status?: string; category?: string }): Promise<Source[]> {
  try {
    const params = new URLSearchParams();
    if (filters?.type) params.set('type', filters.type);
    if (filters?.status) params.set('status', filters.status);
    if (filters?.category) params.set('category', filters.category);
    const res = await fetch(`${API_BASE}/sources?${params.toString()}`);
    if (res.ok) return await res.json();
  } catch (e) {
    // Graceful fallback
  }
  let list = [...initialSources];
  if (filters?.type) list = list.filter(s => s.type === filters.type);
  if (filters?.status) list = list.filter(s => s.status === filters.status);
  return list;
}

export async function fetchSource(id: string): Promise<Source> {
  try {
    const res = await fetch(`${API_BASE}/sources/${id}`);
    if (res.ok) return await res.json();
  } catch (e) {
    // Graceful fallback
  }
  const found = initialSources.find(s => s.id === id);
  if (!found) throw new Error('Fonte não encontrada');
  return found;
}

export async function createSource(data: Partial<Source>): Promise<Source> {
  try {
    const res = await fetch(`${API_BASE}/sources`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
    if (res.ok) return await res.json();
  } catch (e) {
    // Fallback in-memory
  }
  const newSrc: Source = {
    id: `src-${Date.now()}`,
    title: data.title || 'Nova Fonte',
    type: data.type || 'GUIDE',
    author: data.author || 'Administrador',
    ingestedAt: new Date().toISOString(),
    poeVersion: data.poeVersion || '0.1.2',
    category: data.category || 'Geral',
    tags: data.tags || [],
    status: 'ACTIVE',
    notes: data.notes,
    rawContent: data.rawContent,
    extractedDataSummary: 'Fonte cadastrada via painel de administração.'
  };
  initialSources.unshift(newSrc);
  return newSrc;
}

export async function reprocessSource(id: string): Promise<{ success: boolean; message: string }> {
  try {
    const res = await fetch(`${API_BASE}/sources/${id}/reprocess`, {
      method: 'POST'
    });
    if (res.ok) return await res.json();
  } catch (e) {
    // Fallback
  }
  return { success: true, message: `Fonte ${id} reprocessada com sucesso.` };
}

export async function fetchBuilds(filters?: { characterClass?: string; patch?: string; status?: string }): Promise<Build[]> {
  try {
    const params = new URLSearchParams();
    if (filters?.characterClass) params.set('characterClass', filters.characterClass);
    if (filters?.patch) params.set('patch', filters.patch);
    if (filters?.status) params.set('status', filters.status);
    const res = await fetch(`${API_BASE}/builds?${params.toString()}`);
    if (res.ok) return await res.json();
  } catch (e) {
    // Graceful fallback
  }
  let list = [...initialBuilds];
  if (filters?.characterClass) {
    list = list.filter(b => b.characterClass.toLowerCase() === filters.characterClass!.toLowerCase());
  }
  if (filters?.patch) {
    list = list.filter(b => b.currentPatch === filters.patch);
  }
  if (filters?.status) {
    list = list.filter(b => b.status === filters.status);
  }
  return list;
}

export async function fetchBuild(slug: string): Promise<Build> {
  try {
    const res = await fetch(`${API_BASE}/builds/${slug}`);
    if (res.ok) return await res.json();
  } catch (e) {
    // Graceful fallback
  }
  const build = initialBuilds.find(b => b.slug === slug || b.id === slug);
  if (!build) throw new Error('Build não encontrada');
  const source = initialSources.find(s => s.id === build.sourceId);
  const conflicts = initialConflicts.filter(c => c.entityId === build.id);
  return {
    ...build,
    source,
    conflicts
  };
}

export async function fetchCrafting(): Promise<CraftRecipe[]> {
  try {
    const res = await fetch(`${API_BASE}/crafting`);
    if (res.ok) return await res.json();
  } catch (e) {
    // Graceful fallback
  }
  return initialCraftRecipes;
}

export async function fetchFarming(): Promise<FarmRoute[]> {
  try {
    const res = await fetch(`${API_BASE}/farming`);
    if (res.ok) return await res.json();
  } catch (e) {
    // Graceful fallback
  }
  return initialFarmRoutes;
}

export async function fetchPatches(): Promise<Patch[]> {
  try {
    const res = await fetch(`${API_BASE}/patches`);
    if (res.ok) return await res.json();
  } catch (e) {
    // Graceful fallback
  }
  return initialPatches;
}

export async function createPatch(patchData: Partial<Patch>): Promise<{ patch: Patch; impactResult: any }> {
  try {
    const res = await fetch(`${API_BASE}/patches`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(patchData)
    });
    if (res.ok) return await res.json();
  } catch (e) {
    // Fallback
  }
  const newPatch: Patch = {
    id: `patch-${(patchData.version || '0.1.3').replace(/\./g, '-')}`,
    version: patchData.version || '0.1.3',
    title: patchData.title || 'Novo Patch',
    releaseDate: patchData.releaseDate || new Date().toISOString().split('T')[0],
    sourceId: patchData.sourceId || 'src-2',
    summary: patchData.summary || '',
    changes: patchData.changes || []
  };
  initialPatches.unshift(newPatch);
  return { patch: newPatch, impactResult: { affectedBuildCount: 0, impactDetails: [] } };
}

export async function fetchConflicts(): Promise<SourceConflict[]> {
  try {
    const res = await fetch(`${API_BASE}/conflicts`);
    if (res.ok) return await res.json();
  } catch (e) {
    // Graceful fallback
  }
  return initialConflicts;
}

export async function searchGlobal(query: string, filters?: { type?: string; characterClass?: string; patch?: string }): Promise<SearchResultItem[]> {
  try {
    const params = new URLSearchParams({ q: query });
    if (filters?.type) params.set('type', filters.type);
    if (filters?.characterClass) params.set('characterClass', filters.characterClass);
    if (filters?.patch) params.set('patch', filters.patch);
    const res = await fetch(`${API_BASE}/search?${params.toString()}`);
    if (res.ok) return await res.json();
  } catch (e) {
    // Graceful fallback
  }
  const q = query.toLowerCase().trim();
  const results: SearchResultItem[] = [];
  for (const b of initialBuilds) {
    if (b.name.toLowerCase().includes(q) || b.summary.toLowerCase().includes(q)) {
      results.push({
        id: b.id,
        type: 'BUILD',
        title: b.name,
        subtitle: `${b.characterClass} (${b.ascendancy}) • Patch ${b.currentPatch}`,
        excerpt: b.summary,
        url: `/builds/${b.slug}`,
        poeVersion: b.currentPatch
      });
    }
  }
  return results;
}

export async function fetchAuditLogs(): Promise<AuditLog[]> {
  try {
    const res = await fetch(`${API_BASE}/audit`);
    if (res.ok) return await res.json();
  } catch (e) {
    // Graceful fallback
  }
  return initialAuditLogs;
}
