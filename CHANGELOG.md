# Changelog — POE2 BUILD HUB

Este changelog segue as diretrizes do [Keep a Changelog](https://keepachangelog.com/pt-BR/1.0.0/).

## [0.2.0] - 2026-09-28

### Added
- **Primeira Build Oficial Ingerida:** `[0.5.5] Twister Gemling Legionnaire` por SnooBAE85.
- **Novas Fontes Controladas Ingeridas:**
  - `src-mobalytics-twister`: Guia Mobalytics de Twister Gemling Legionnaire (Patch 0.5.5).
  - `src-yt-twister-day3`: Vídeo "[PoE2 0.5.5] Day Three Build Updates" por SnooBAE85 com regex de vendor e benchmarks.
  - `src-yt-twister-tech`: Vídeo "[PoE2 0.5.5] Zero-Effort Double-Damage Tech" por SnooBAE85 com mecânica de Frost Wall + Verglas e Cast-on-Crit.
- **Adição do Patch 0.5.5:** Mapeado no sistema com rastreabilidade de alterações na habilidade Twister.
- **Regex Oficial de Campanha:** Incorporado na progressão de leveling da build (`"[egdl] da.*to a|ck s|nt s|rare|insta" !quiv`).
- **Resolução de Conectividade:** Adicionada proteção e auto-redirecionamento no arquivo `index.html` e script de 1 clique `abrir-poe2-hub.bat`.

## [0.1.0] - 2026-09-28

### Added
- Fundação completa da arquitetura do projeto POE2 Build Hub.
- Estruturação do modelo de dados normalizado e versionado em `docs/data-model.md`.
- Documentação técnica em `/docs` cobrindo arquitetura, banco de dados, regras de ingestão, fontes, regras de conteúdo, diretrizes de IA e roadmap.
- Configuração do pipeline de ingestão de fontes controladas com metadados obrigatórios.
- Módulo de detecção automática de impacto de patch notes em builds ativas.
- Módulo de detecção e exibição transparente de conflitos entre fontes.
- Estruturação do MVP full-stack com API modular e UI Dark Fantasy inspirada em Path of Exile 2.
