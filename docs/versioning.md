# POE2 BUILD HUB — Sistema de Versionamento

## 1. Princípios de Versionamento
1. **Versionamento Lógico Imutável**: Nenhuma atualização sobrescreve destrutivamente dados passados.
2. **Histórico Comparativo (Diff)**: Para qualquer entidade versionada, é possível inspecionar:
   - Estado Anterior
   - Novo Estado
   - Motivo da Modificação
   - Patch Associado
   - Fonte da Alteração
   - Data do Evento

## 2. Esquema de Versão
Cada versão possui:
- `versionNumber`: Número sequencial (v1, v2, v3...).
- `patchVersion`: Patch de referência (ex: `0.1.0` -> `0.1.2`).
- `changeReason`: Descrição factual do que motivou a mudança.
- `sourceId`: Fonte responsável pela nova formulação.
