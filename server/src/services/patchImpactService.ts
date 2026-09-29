import { storage } from './storageService.ts';
import { Patch, PatchChange } from '../types/index.ts';

export class PatchImpactService {
  /**
   * Avalia todas as alterações de um patch contra as builds ativas no sistema.
   * Não emite opiniões subjetivas de meta; apenas registra o vínculo e marca para revisão.
   */
  static analyzePatchImpact(patch: Patch): {
    affectedBuildCount: number;
    impactDetails: { buildId: string; buildName: string; matchedEntity: string; changeType: string }[];
  } {
    const builds = storage.getBuilds();
    const impactDetails: { buildId: string; buildName: string; matchedEntity: string; changeType: string }[] = [];
    const affectedBuildIdsSet = new Set<string>();

    for (const change of patch.changes) {
      const targetLower = change.targetEntityName.toLowerCase().trim();

      for (const build of builds) {
        // Verificar se alguma versão da build usa a habilidade ou item
        const usesEntity = build.versions.some(v => {
          const hasSkill = v.skills.some(
            s =>
              s.skillName.toLowerCase().includes(targetLower) ||
              s.supports.some(sup => sup.toLowerCase().includes(targetLower))
          );
          const hasItem = v.equipment.some(
            eq =>
              eq.recommendedItem.toLowerCase().includes(targetLower) ||
              (eq.alternatives && eq.alternatives.some(a => a.toLowerCase().includes(targetLower)))
          );
          const hasKeystone = v.passivePoints.keystones.some(k => k.toLowerCase().includes(targetLower));
          const hasNotable = v.passivePoints.keyNotables.some(n => n.toLowerCase().includes(targetLower));

          return hasSkill || hasItem || hasKeystone || hasNotable;
        });

        if (usesEntity) {
          if (!change.affectedBuildIds.includes(build.id)) {
            change.affectedBuildIds.push(build.id);
          }
          affectedBuildIdsSet.add(build.id);

          // Atualizar o status da build para NEEDS_REVIEW
          storage.updateBuild(build.id, {
            status: 'NEEDS_REVIEW'
          });

          storage.addAuditLog({
            id: `aud-impact-${Date.now()}-${build.id}`,
            timestamp: new Date().toISOString(),
            action: 'STATUS_CHANGED',
            entityType: 'BUILD',
            entityId: build.id,
            details: `Build "${build.name}" marcada como NEEDS_REVIEW devido a alterações em "${change.targetEntityName}" no Patch ${patch.version}.`,
            sourceId: patch.sourceId
          });

          impactDetails.push({
            buildId: build.id,
            buildName: build.name,
            matchedEntity: change.targetEntityName,
            changeType: change.changeType
          });
        }
      }
    }

    return {
      affectedBuildCount: affectedBuildIdsSet.size,
      impactDetails
    };
  }

  /**
   * Obtém todo o histórico de impactos sofridos por uma build específica
   */
  static getImpactsForBuild(buildId: string): {
    patchVersion: string;
    patchReleaseDate: string;
    changes: PatchChange[];
  }[] {
    const patches = storage.getPatches();
    const results: { patchVersion: string; patchReleaseDate: string; changes: PatchChange[] }[] = [];

    for (const patch of patches) {
      const relevantChanges = patch.changes.filter(c => c.affectedBuildIds.includes(buildId));
      if (relevantChanges.length > 0) {
        results.push({
          patchVersion: patch.version,
          patchReleaseDate: patch.releaseDate,
          changes: relevantChanges
        });
      }
    }

    return results;
  }
}
