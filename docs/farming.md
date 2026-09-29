# POE2 BUILD HUB — Módulo de Rotas de Farm

## 1. Visão Geral
O módulo de rotas de farm organiza estratégias de geração de moeda e coleta de itens descritas por criadores de conteúdo e guias validados pelo administrador.

## 2. Estrutura de Rota
- `id`: Identificador da rota.
- `name`: Nome da rota (ex: *"Farm de Breaches & Essências em Mapas Tier 12+"*).
- `objective`: Propósito econômico principal (ex: *"Foco em acúmulo de fragmentos de Breach e orbes de transmutação avançados"*).
- `regionOrMaps`: Layouts, regiões ou biomas recomendados pela fonte.
- `mechanics`: Mecânicas de liga/conteúdo (Breach, Ritual, Delirium, Expedição, etc.).
- `recommendedBuilds`: Arquétipos ou builds sugeridas para máxima eficiência.
- `estimatedTime`: Duração por mapa ou sessão (apenas se documentado na fonte).
- `rewards`: Recompensas esperadas conforme o autor.
- `risks`: Perigos e modificadores de mapa letais apontados.
- `steps`: Sequência de execução (Preparação do mapa, Entrada, Rotação interna, Coleta de espólios).
- `sourceId`: Fonte de proveniência.
