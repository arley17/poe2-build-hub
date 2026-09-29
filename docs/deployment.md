# Guia de Deployment e CI/CD — POE2 BUILD HUB

Este documento descreve a infraestrutura de produção, o pipeline de Continuous Integration / Continuous Deployment (CI/CD) e o fluxo de manutenção para atualizações contínuas do projeto **POE2 Build Hub**.

---

## 🌐 URLs e Acessos Oficiais

- **Aplicação em Produção**: [https://poe2-build-hub.netlify.app](https://poe2-build-hub.netlify.app)
- **Repositório Oficial no GitHub**: [https://github.com/arley17/poe2-build-hub](https://github.com/arley17/poe2-build-hub)
- **Painel de Controle Netlify**: [https://app.netlify.com/projects/poe2-build-hub](https://app.netlify.com/projects/poe2-build-hub)

---

## 🏗️ Arquitetura de Entrega Contínua

```text
Usuário
  │
  ▼
https://poe2-build-hub.netlify.app (Global Edge CDN)
  ▲
  │ Deploy Automático
Netlify (Build & Edge Network)
  ▲
  │ Git Push (branch main) / Webhook
GitHub (arley17/poe2-build-hub)
  ▲
  │ Commit & Push
Desenvolvedor / Antigravity IDE (j:\Gemini)
```

---

## ⚙️ Configurações de Build e Roteamento

As configurações foram centralizadas e versionadas no arquivo [`netlify.toml`](file:///j:/Gemini/netlify.toml):

```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

# Regra SPA: redireciona todas as sub-rotas para index.html com status 200 (evita erro 404 em F5)
[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

# Cache-Control otimizado para assets versionados por hash
[[headers]]
  for = "/assets/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[headers]]
  for = "/index.html"
  [headers.values]
    Cache-Control = "public, max-age=0, must-revalidate"
```

---

## 🛠️ Comandos de Operação

### 1. Desenvolvimento Local
Para rodar a aplicação localmente:
```bash
# Inicia Frontend Vite + Backend Express
npm run dev
```
- Frontend: `http://localhost:5173`
- Backend API: `http://localhost:3001`

### 2. Validação de Build Local
```bash
npm run build
```
Gera os assets otimizados para produção na pasta `dist/`.

### 3. Deploy de Atualizações (Fluxo de Trabalho Contínuo)
Sempre que finalizar e testar uma alteração no Antigravity:
```bash
git add .
git commit -m "feat(ou fix): descrição da alteração"
git push origin main
```

---

## 🔒 Boas Práticas e Custos
- **Plano 100% Gratuito**: Sem compra de domínios externos; utiliza o subdomínio oficial `poe2-build-hub.netlify.app`.
- **Zero Segredos no Código**: Nenhuma chave privada ou credencial sensível é comitada no Git.
