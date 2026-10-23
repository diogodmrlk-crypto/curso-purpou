# Curso Purpou

Curso visual em React + TypeScript + Vite para aprender a construir um painel PWA com MockAPI, planos, keys, CRUD e deploy na Vercel.

O site possui aulas distribuídas em abas, menu lateral acionado pelos três traços no celular, busca, progresso salvo no navegador, snippets TypeScript, links de documentação oficial, screenshots reais de Spck/Replit/VS Code, três microaulas em vídeo e diagramas Mermaid renderizados em PNG.

A aba **Editor Purpou** funciona como um laboratório local: cria pastas e arquivos, aceita somente `.tsx`, `.html` e `.js`, salva o conteúdo no navegador, oferece autocomplete de snippets e mostra preview ao vivo para HTML. O autocomplete é propositalmente local e transparente; ele não envia o código para uma API e não substitui o compilador do TypeScript.

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

A trilha começa explicando o que é programar e como pensar em entrada, regra e resultado. Depois passa por variáveis, condições, repetição, funções, TSX, props, estado e eventos. Em seguida cobre TypeScript, React, drawer responsivo, modelagem de projetos e recursos MockAPI, campos para licenças, operações GET/POST/PATCH/PUT/DELETE, criação de planos, expiração e vínculo de dispositivo, PWA, service worker, Vercel, segurança e checklist de qualidade.

Também há guias completos para usar o Spck Editor no celular, Replit no navegador e Visual Studio Code no PC. Os vídeos são microaulas legendadas e curtas para revisar os primeiros conceitos durante a prática.

A MockAPI é tratada como ferramenta de prototipagem. O conteúdo alerta que validações e segredos sensíveis devem ir para um backend autenticado em um produto real.

## Fontes técnicas

- [MockAPI Documentation](https://www.mockapi.com/docs)
- [MockAPI REST API](https://www.mockapi.com/docs/rest-api)
- [React Learn](https://react.dev/learn)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/handbook/intro.html)
- [Vite PWA](https://vite-pwa-org.netlify.app/)
- [Vercel Vite](https://vercel.com/docs/frameworks/frontend/vite)
