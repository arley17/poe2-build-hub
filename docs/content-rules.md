# POE2 BUILD HUB — Regras de Conteúdo e Autoridade

## 1. Princípio Fundamental de Autoridade
> **A aplicação NÃO deve inventar, complementar ou atualizar informações utilizando conhecimento externo.**

Todo o conteúdo deve derivar **exclusivamente do acervo cadastrado pelo administrador**.

## 2. Tratamento de Informações Ausentes
Quando um campo ou atributo não estiver presente nas fontes cadastradas:
- O sistema exibirá o aviso padrão:
  > **"Informação não encontrada nas fontes fornecidas."**
- É proibido realizar buscas externas autônomas (Google, PoE Wiki, Reddit, Discord, YouTube) para "preencher lacunas".

## 3. Tratamento de Divergências e Conflitos
Se a Fonte A indicar que o item recomendado é `Arma X` e a Fonte B indicar `Arma Y`:
- O sistema **não** escolhe qual é melhor.
- O sistema exibe o bloco de alerta:
  > **"Divergência encontrada:**  
  > *Fonte A:* Recomenda Item X  
  > *Fonte B:* Recomenda Item Y  
  > *As fontes apresentam estratégias diferentes."*

## 4. Marcação de Conteúdo Desatualizado
Quando o patch atual do sistema for superior ao patch da fonte da build:
- A build é marcada visualmente como:
  > ⚠️ **"Possivelmente desatualizada (Baseada no Patch 0.X; Patch atual: 0.Y)"**
- O conteúdo **não** é deletado, garantindo rastreabilidade histórica.
