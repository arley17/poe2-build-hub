# POE2 BUILD HUB — Wiki Inteligente e Versionada de Path of Exile 2

Plataforma web moderna, responsiva, escalável e modular dedicada a **Path of Exile 2 (POE2)**, operando sob o princípio de **Fonte Controlada e Zero Alucinação**.

---

## 🌟 Princípio Fundamental: Fonte Controlada
> A aplicação **NÃO inventa, complementa ou atualiza informações** utilizando conhecimento externo ou presunções de modelos de IA.  
> Todo o acervo é baseado **exclusivamente no material fornecido pelo administrador** (artigos, guias, transcrições de vídeos, patch notes, planilhas).

Quando uma informação não estiver presente nas fontes:
> *"Informação não encontrada nas fontes fornecidas."*

---

## 🏛️ Módulos do Sistema
- **Builds**: Catálogo completo com leveling, endgame, habilidades, passivas, itens, mecânica e histórico de revisões.
- **Crafting**: Procedimentos passo a passo com itens base, orbes, modificadores e alternativas econômicas.
- **Rotas de Farm**: Estratégias de geração de moeda, mecânicas de mapa, tempos estimados e riscos.
- **Patch Tracker**: Linha do tempo de notas de atualização com identificação de buffs, nerfs e sinalização de builds impactadas (`[REVISAR]`).
- **Controle de Conflitos**: Exibição transparente de fontes divergentes sem sobrescrita silenciosa.
- **Gestão de Fontes**: Ingestão com metadados detalhados, autores, datas, tipos e transcrições auditáveis.
- **Busca Global**: Pesquisa instantânea em builds, guias, crafts, rotas e notas de atualização.
- **Dashboard Administrativo**: Indicadores de integridade, conteúdos desatualizados e estatísticas gerais.

---

## 📚 Documentação Técnica
Acesse a pasta `/docs` para mais detalhes:
- [Arquitetura Geral](docs/architecture.md)
- [Modelo de Dados](docs/data-model.md)
- [Estratégia de Banco de Dados](docs/database.md)
- [Pipeline de Ingestão](docs/ingestion.md)
- [Diretrizes de Conteúdo](docs/content-rules.md)
- [Regras de IA Curadora](docs/ai-rules.md)
- [Roadmap](docs/roadmap.md)
- [Changelog](docs/changelog.md)

---

## 🚀 Como Executar
1. Instale as dependências:
   ```bash
   npm install
   ```
2. Inicie a aplicação (Backend API + Frontend Vite):
   ```bash
   npm run dev
   ```
3. Acesse no navegador:
   - Frontend: `http://localhost:5173`
   - API: `http://localhost:3001`
