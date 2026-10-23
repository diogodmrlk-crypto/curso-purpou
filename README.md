# Curso Purpou

Curso visual em React + TypeScript + Vite para aprender a construir um painel PWA com MockAPI, planos, keys, CRUD e deploy na Vercel.

O site possui nove aulas distribuídas em abas, menu lateral acionado pelos três traços no celular, busca, progresso salvo no navegador, snippets TypeScript, links de documentação oficial e diagramas Mermaid renderizados em PNG.

## Rodar localmente

```bash
npm install
npm run dev
```

Para validar o build de produção:

```bash
npm run build
npm run preview
```

Na Vercel, use `npm run build` como Build Command e `dist` como Output Directory. O projeto é estático e não precisa de servidor ou banco para funcionar.

## O que o curso ensina

A trilha começa pela arquitetura da interface e passa por TypeScript, React, drawer responsivo, modelagem de projetos e recursos MockAPI, campos para licenças, operações GET/POST/PATCH/PUT/DELETE, criação de planos, expiração e vínculo de dispositivo, PWA, service worker, Vercel, segurança e checklist de qualidade.

A MockAPI é tratada como ferramenta de prototipagem. O conteúdo alerta que validações e segredos sensíveis devem ir para um backend autenticado em um produto real.

## Fontes técnicas

- [MockAPI Documentation](https://www.mockapi.com/docs)
- [MockAPI REST API](https://www.mockapi.com/docs/rest-api)
- [React Learn](https://react.dev/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Vite PWA](https://vite-pwa-org.netlify.app/)
- [Vercel Vite](https://vercel.com/docs/frameworks/frontend/vite)
