import express, { Request, Response } from 'express';
import cors from 'cors';
import { storage } from './services/storageService.ts';
import { SourceService } from './services/sourceService.ts';
import { PatchImpactService } from './services/patchImpactService.ts';
import { SearchService } from './services/searchService.ts';

const app = express();
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 3001;

app.use(cors());
app.use(express.json());

// 1. Dashboard & Stats
app.get('/api/stats', (req: Request, res: Response) => {
  const sources = storage.getSources();
  const builds = storage.getBuilds();
  const crafts = storage.getCrafts();
  const farmRoutes = storage.getFarmRoutes();
  const patches = storage.getPatches();
  const conflicts = storage.getConflicts();
  const auditLogs = storage.getAuditLogs().slice(0, 10);

  const needsReviewCount = builds.filter(b => b.status === 'NEEDS_REVIEW').length;
  const outdatedCount = builds.filter(b => b.status === 'OUTDATED').length;

  res.json({
    totalSources: sources.length,
    totalBuilds: builds.length,
    totalCrafts: crafts.length,
    totalFarmRoutes: farmRoutes.length,
    totalPatches: patches.length,
    activeConflicts: conflicts.length,
    needsReviewCount,
    outdatedCount,
    recentAudits: auditLogs
  });
});

// 2. Sources Management & Ingestion
app.get('/api/sources', (req: Request, res: Response) => {
  const { type, status, category } = req.query as { type?: string; status?: string; category?: string };
  const sources = SourceService.getSources({ type, status, category });
  res.json(sources);
});

app.get('/api/sources/:id', (req: Request, res: Response) => {
  const source = SourceService.getSourceById(req.params.id);
  if (!source) {
    res.status(404).json({ error: 'Fonte não encontrada nas fontes fornecidas.' });
    return;
  }
  res.json(source);
});

app.post('/api/sources', (req: Request, res: Response) => {
  try {
    const { title, type, url, author, publishedAt, poeVersion, category, tags, notes, rawContent } = req.body;
    if (!title || !type || !author || !poeVersion) {
      res.status(400).json({ error: 'Campos obrigatórios: title, type, author, poeVersion.' });
      return;
    }

    const newSource = SourceService.ingestSource({
      title,
      type,
      url,
      author,
      publishedAt,
      poeVersion,
      category: category || 'Geral',
      tags: tags || [],
      notes,
      rawContent
    });

    res.status(201).json(newSource);
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Erro ao ingerir fonte.' });
  }
});

app.post('/api/sources/:id/reprocess', (req: Request, res: Response) => {
  const result = SourceService.reprocessSource(req.params.id);
  if (!result.success) {
    res.status(404).json(result);
    return;
  }
  res.json(result);
});

// 3. Builds Management
app.get('/api/builds', (req: Request, res: Response) => {
  const { characterClass, patch, status } = req.query as { characterClass?: string; patch?: string; status?: string };
  let builds = storage.getBuilds();

  if (characterClass) {
    builds = builds.filter(b => b.characterClass.toLowerCase() === characterClass.toLowerCase());
  }
  if (patch) {
    builds = builds.filter(b => b.currentPatch === patch);
  }
  if (status) {
    builds = builds.filter(b => b.status === status);
  }

  res.json(builds);
});

app.get('/api/builds/:slug', (req: Request, res: Response) => {
  const build = storage.getBuildById(req.params.slug);
  if (!build) {
    res.status(404).json({ error: 'Build não encontrada nas fontes fornecidas.' });
    return;
  }

  // Obter impactos de patch e conflitos relacionados
  const patchImpacts = PatchImpactService.getImpactsForBuild(build.id);
  const conflicts = storage.getConflicts().filter(c => c.entityId === build.id);
  const source = storage.getSourceById(build.sourceId);

  res.json({
    ...build,
    source,
    patchImpacts,
    conflicts
  });
});

app.post('/api/builds', (req: Request, res: Response) => {
  try {
    const buildData = req.body;
    if (!buildData.name || !buildData.characterClass || !buildData.sourceId) {
      res.status(400).json({ error: 'Campos obrigatórios: name, characterClass, sourceId.' });
      return;
    }
    const build = storage.addBuild({
      ...buildData,
      id: buildData.id || `build-${Date.now()}`,
      slug: buildData.slug || buildData.name.toLowerCase().replace(/\s+/g, '-'),
      currentPatch: buildData.currentPatch || '0.1.2',
      status: buildData.status || 'UPDATED',
      versions: buildData.versions || []
    });
    res.status(201).json(build);
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Erro ao criar build.' });
  }
});

// 4. Crafting
app.get('/api/crafting', (req: Request, res: Response) => {
  res.json(storage.getCrafts());
});

app.get('/api/crafting/:id', (req: Request, res: Response) => {
  const craft = storage.getCraftById(req.params.id);
  if (!craft) {
    res.status(404).json({ error: 'Procedimento de craft não encontrado nas fontes fornecidas.' });
    return;
  }
  res.json(craft);
});

// 5. Farming Routes
app.get('/api/farming', (req: Request, res: Response) => {
  res.json(storage.getFarmRoutes());
});

app.get('/api/farming/:id', (req: Request, res: Response) => {
  const route = storage.getFarmRouteById(req.params.id);
  if (!route) {
    res.status(404).json({ error: 'Rota de farm não encontrada nas fontes fornecidas.' });
    return;
  }
  res.json(route);
});

// 6. Patches & Automated Impact Detection
app.get('/api/patches', (req: Request, res: Response) => {
  res.json(storage.getPatches());
});

app.get('/api/patches/:id', (req: Request, res: Response) => {
  const patch = storage.getPatchById(req.params.id);
  if (!patch) {
    res.status(404).json({ error: 'Patch note não encontrado nas fontes fornecidas.' });
    return;
  }
  res.json(patch);
});

app.post('/api/patches', (req: Request, res: Response) => {
  try {
    const { version, title, releaseDate, sourceId, summary, changes } = req.body;
    if (!version || !title || !sourceId) {
      res.status(400).json({ error: 'Campos obrigatórios: version, title, sourceId.' });
      return;
    }

    const newPatch = storage.addPatch({
      id: `patch-${version.replace(/\./g, '-')}`,
      version,
      title,
      releaseDate: releaseDate || new Date().toISOString().split('T')[0],
      sourceId,
      summary: summary || '',
      changes: changes || []
    });

    // Análise automática de impacto de patch nas builds cadastradas
    const impactResult = PatchImpactService.analyzePatchImpact(newPatch);

    res.status(201).json({
      patch: newPatch,
      impactResult
    });
  } catch (err: any) {
    res.status(500).json({ error: err.message || 'Erro ao processar patch note.' });
  }
});

// 7. Conflicts Management
app.get('/api/conflicts', (req: Request, res: Response) => {
  res.json(storage.getConflicts());
});

// 8. Global Search
app.get('/api/search', (req: Request, res: Response) => {
  const { q, type, characterClass, patch } = req.query as { q?: string; type?: string; characterClass?: string; patch?: string };
  if (!q) {
    res.json([]);
    return;
  }
  const results = SearchService.globalSearch(q, { type, class: characterClass, patch });
  res.json(results);
});

// 9. Audit Logs
app.get('/api/audit', (req: Request, res: Response) => {
  res.json(storage.getAuditLogs());
});

app.listen(PORT, () => {
  console.log(`[POE2 Build Hub API] Servidor rodando na porta ${PORT}`);
});
