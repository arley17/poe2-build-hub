# POE2 BUILD HUB — Módulo de Crafting

## 1. Visão Geral
O módulo de crafting documenta métodos sistemáticos e receitas de confecção de equipamentos em Path of Exile 2 baseando-se estritamente nas instruções do autor.

## 2. Estrutura de Procedimento de Craft
Cada procedimento de craft possui:
- `id`: Identificador único da receita.
- `name`: Título descritivo (ex: *"Arco Elemental T1 para Deadeye"*).
- `targetItem`: Nome ou tipo do item final pretendido.
- `baseItem`: Tipo de item base necessário (ex: *"Bone Bow ilvl 82+"*).
- `targetMods`: Lista de modificadores desejados (Prefixos / Sufixos).
- `estimatedCost`: Custo estimado de moedas/orbs (apenas se fornecido pelo autor).
- `steps`: Sequência ordenada de ações (Passo 1, Passo 2, Passo 3...):
  - `stepNumber`: 1, 2, 3...
  - `instruction`: Instrução clara do autor (ex: *"Usar Essência de Torment até obter T2+ de dano elétrico"*).
  - `currencyOrMaterial`: Item ou orbe utilizado.
  - `expectedResult`: Resultado ou critério de parada daquela etapa.
- `alternatives`: Variações econômicas citadas na fonte.
- `sourceId`: Rastreabilidade completa até a fonte.
