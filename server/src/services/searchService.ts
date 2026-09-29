import { storage } from './storageService.ts';

export interface SearchResultItem {
  id: string;
  type: 'BUILD' | 'SKILL' | 'ITEM' | 'CRAFT' | 'FARM_ROUTE' | 'PATCH_NOTE' | 'SOURCE';
  title: string;
  subtitle: string;
  excerpt?: string;
  url: string;
  poeVersion?: string;
  tags?: string[];
  status?: string;
}

export class SearchService {
  static globalSearch(query: string, filters?: { type?: string; class?: string; patch?: string }): SearchResultItem[] {
    if (!query || query.trim().length === 0) {
      return [];
    }

    const q = query.toLowerCase().trim();
    const results: SearchResultItem[] = [];

    // 1. Builds
    const builds = storage.getBuilds();
    for (const build of builds) {
      if (filters?.class && build.characterClass.toLowerCase() !== filters.class.toLowerCase()) {
        continue;
      }
      if (filters?.patch && build.currentPatch !== filters.patch) {
        continue;
      }

      const matchName = build.name.toLowerCase().includes(q);
      const matchClass = build.characterClass.toLowerCase().includes(q) || build.ascendancy.toLowerCase().includes(q);
      const matchArchetype = build.archetype.toLowerCase().includes(q);
      const matchTags = build.tags.some(t => t.toLowerCase().includes(q));

      // Skills inside build
      const matchingSkills = build.versions.flatMap(v =>
        v.skills.filter(s => s.skillName.toLowerCase().includes(q) || s.supports.some(sup => sup.toLowerCase().includes(q)))
      );

      // Items inside build
      const matchingItems = build.versions.flatMap(v =>
        v.equipment.filter(eq => eq.recommendedItem.toLowerCase().includes(q))
      );

      if (matchName || matchClass || matchArchetype || matchTags) {
        results.push({
          id: build.id,
          type: 'BUILD',
          title: build.name,
          subtitle: `${build.characterClass} (${build.ascendancy}) • Patch ${build.currentPatch} • Autor: ${build.author}`,
          excerpt: build.summary,
          url: `/builds/${build.slug}`,
          poeVersion: build.currentPatch,
          tags: build.tags,
          status: build.status
        });
      }

      for (const sk of matchingSkills) {
        results.push({
          id: `${build.id}-sk-${sk.skillName}`,
          type: 'SKILL',
          title: sk.skillName,
          subtitle: `Habilidade utilizada na build "${build.name}" (${sk.slot})`,
          excerpt: `Suportes: ${sk.supports.join(', ')}`,
          url: `/builds/${build.slug}#skills`,
          poeVersion: build.currentPatch
        });
      }

      for (const it of matchingItems) {
        results.push({
          id: `${build.id}-it-${it.recommendedItem}`,
          type: 'ITEM',
          title: it.recommendedItem,
          subtitle: `Item recomendado no slot [${it.slot}] da build "${build.name}"`,
          excerpt: `Prioridade: ${it.priorityStats.join(' • ')}`,
          url: `/builds/${build.slug}#equipment`,
          poeVersion: build.currentPatch
        });
      }
    }

    // 2. Crafts
    const crafts = storage.getCrafts();
    for (const craft of crafts) {
      if (
        craft.name.toLowerCase().includes(q) ||
        craft.targetItem.toLowerCase().includes(q) ||
        craft.baseItem.toLowerCase().includes(q) ||
        craft.targetMods.some(m => m.toLowerCase().includes(q))
      ) {
        results.push({
          id: craft.id,
          type: 'CRAFT',
          title: craft.name,
          subtitle: `Receita de Crafting • Base: ${craft.baseItem}`,
          excerpt: `Mods alvo: ${craft.targetMods.join(' | ')}`,
          url: `/crafting#${craft.id}`,
          poeVersion: craft.poeVersion
        });
      }
    }

    // 3. Farm Routes
    const farmRoutes = storage.getFarmRoutes();
    for (const route of farmRoutes) {
      if (
        route.name.toLowerCase().includes(q) ||
        route.objective.toLowerCase().includes(q) ||
        route.mechanics.some(m => m.toLowerCase().includes(q)) ||
        route.regionOrMaps.toLowerCase().includes(q)
      ) {
        results.push({
          id: route.id,
          type: 'FARM_ROUTE',
          title: route.name,
          subtitle: `Rota de Farm • Região: ${route.regionOrMaps}`,
          excerpt: `Mecânicas: ${route.mechanics.join(', ')} | Tempo: ${route.estimatedTime || 'N/A'}`,
          url: `/farming#${route.id}`,
          poeVersion: route.poeVersion
        });
      }
    }

    // 4. Patch Notes
    const patches = storage.getPatches();
    for (const patch of patches) {
      const matchPatch = patch.title.toLowerCase().includes(q) || patch.version.includes(q);
      if (matchPatch) {
        results.push({
          id: patch.id,
          type: 'PATCH_NOTE',
          title: patch.title,
          subtitle: `Patch Oficial POE2 • Lançamento: ${patch.releaseDate}`,
          excerpt: patch.summary,
          url: `/patches#${patch.id}`,
          poeVersion: patch.version
        });
      }

      for (const chg of patch.changes) {
        if (chg.targetEntityName.toLowerCase().includes(q) || chg.rawText.toLowerCase().includes(q)) {
          results.push({
            id: chg.id,
            type: 'PATCH_NOTE',
            title: `[${chg.changeType}] ${chg.targetEntityName} (Patch ${patch.version})`,
            subtitle: `Alteração de Patch Note Oficial`,
            excerpt: chg.rawText,
            url: `/patches#${patch.id}`,
            poeVersion: patch.version
          });
        }
      }
    }

    // 5. Sources
    const sources = storage.getSources();
    for (const src of sources) {
      if (
        src.title.toLowerCase().includes(q) ||
        src.author.toLowerCase().includes(q) ||
        src.category.toLowerCase().includes(q) ||
        src.tags.some(t => t.toLowerCase().includes(q))
      ) {
        results.push({
          id: src.id,
          type: 'SOURCE',
          title: src.title,
          subtitle: `Fonte [${src.type}] • Autor: ${src.author} • Patch: ${src.poeVersion}`,
          excerpt: src.extractedDataSummary || src.notes || '',
          url: `/fontes#${src.id}`,
          poeVersion: src.poeVersion,
          tags: src.tags
        });
      }
    }

    // Deduplicate by ID
    const seen = new Set<string>();
    return results.filter(item => {
      if (seen.has(item.id)) return false;
      seen.add(item.id);
      return true;
    });
  }
}
