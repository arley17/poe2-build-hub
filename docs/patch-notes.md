# POE2 BUILD HUB — Módulo de Patch Notes e Análise de Impacto

## 1. Visão Geral
Sempre que uma nota de atualização oficial do Path of Exile 2 é publicada, o administrador cadastra o documento no módulo de Patch Notes.

## 2. Pipeline de Processamento de Patches
1. **Registro do Patch**: Versão (ex: `0.1.2`), Data e Fonte oficial.
2. **Extração das Alterações Linha a Linha**:
   - Cada linha relevante é isolada.
   - Classificação do tipo: `BUFF`, `NERF`, `REWORK`, `BUGFIX`, `ADJUSTMENT`.
   - Identificação da entidade alvo (`Lightning Arrow`, `Heralds`, `Armour values`, etc.).
3. **Mapeamento de Impacto Cruzado**:
   - O sistema pesquisa em todas as builds cadastradas quais utilizam a habilidade, item ou mecânica afetada.
   - Para cada build correspondente, cria-se um alerta de impacto.
4. **Sinalização de Revisão**:
   - A build é automaticamente rotulada com:
     > ⚠️ **"STATUS: NECESSITA REVISÃO"**  
     > *"Esta build utiliza a habilidade 'Lightning Arrow', que sofreu alteração no Patch 0.1.2. Recomenda-se revisar a build."*
5. **Auditoria**: O histórico da alteração é anexado à página da build na seção *Patch History*.
