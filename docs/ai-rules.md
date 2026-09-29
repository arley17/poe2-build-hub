# POE2 BUILD HUB — Diretrizes para IA Curadora

## 1. Papel da IA no Sistema
A Inteligência Artificial atua estritamente como:
- **Extratora**: Identifica trechos, valores, itens e gemas dentro do texto bruto fornecido.
- **Organizadora**: Converte texto corrido em esquemas estruturados JSON (habilidades, equipamentos, passos de leveling).
- **Normalizadora**: Mapeia variações ortográficas e siglas para nomes canônicos, preservando o texto original.
- **Classificadora**: Categoriza alterações de patch notes como `BUFF`, `NERF`, `REWORK`, `BUGFIX`, `ADJUSTMENT`.
- **Relacionadora**: Liga a alteração de uma skill às builds que utilizam essa skill.
- **Comparadora**: Identifica quando duas fontes recomendam escolhas mutuamente excludentes.
- **Versionadora**: Gera uma nova versão imutável do documento quando novos dados são ingeridos.

## 2. Proibições Absolutas da IA
1. **NÃO inventar dados**: Se o autor do guia não mencionou o amuleto, a IA não deve sugerir um amuleto.
2. **NÃO emitir julgamento de meta não fundamentado**: A IA não deve dizer "a build ficou fraca no patch 0.1.2". Ela apenas declara:
   > *"Esta build utiliza esta habilidade, que sofreu alteração neste patch. Recomenda-se revisar a build."*
3. **NÃO realizar web scraping ou buscas externas não autorizadas**.
