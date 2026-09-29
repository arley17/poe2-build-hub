# POE2 BUILD HUB — Gestão de Fontes e Metadados

## 1. Definição de Fonte
Uma fonte é qualquer documento, link, guia, transcrição ou nota técnica fornecida exclusivamente pelo administrador do sistema.

## 2. Metadados Obrigatórios
Para toda fonte cadastrada, o sistema registra:
- `id`: Identificador único.
- `title`: Título fornecido.
- `type`: Categoria de mídia (`VIDEO`, `ARTICLE`, `GUIDE`, `PATCH_NOTE`, `PDF`, `DOCUMENT`, `IMAGE`, `SPREADSHEET`, `TEXT`, `OTHER`).
- `url`: Endereço web (se aplicável).
- `author`: Nome do autor ou criador de conteúdo.
- `publishedAt`: Data em que a fonte foi lançada pelo autor.
- `ingestedAt`: Data em que a fonte foi incorporada ao POE2 Build Hub.
- `poeVersion`: Versão do Path of Exile 2 à qual a fonte se refere.
- `category`: Classificação temática (ex: `Build Guide`, `Farming Strategy`, `Patch Discussion`).
- `tags`: Marcadores temáticos.
- `status`: Estado atual (`ACTIVE`, `ARCHIVED`, `NEEDS_REVIEW`, `PROCESSING`).
- `contentVersion`: Versão interna do documento analisado.

## 3. Gestão e Auditoria
O painel de fontes (`/fontes`) permite ao administrador:
1. Cadastrar nova fonte com metadados e conteúdo bruto/transcrição.
2. Reprocessar a extração caso novas regras de relacionamento sejam criadas.
3. Consultar quais builds, itens e rotas foram gerados a partir daquela fonte específica.
4. Identificar inconsistências ou divergências frente a outras fontes.
