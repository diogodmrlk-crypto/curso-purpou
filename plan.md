# Curso Purpou — plano de implementação

## Produto

Um curso web responsivo, em português brasileiro, que ensina a construir um painel PWA em TypeScript inspirado na linguagem visual de um painel dark chamado Clean Sensi, sem copiar assets protegidos. O site será estático, instalável e pronto para Vercel/GitHub Pages.

## Design aprovado para implementação

- **Movimentos considerados:** editorial neon técnico (0,06); dashboard cyber-minimal (0,07); caderno de laboratório digital (0,04). Escolha: **dashboard cyber-minimal**.
- **Princípios:** conteúdo legível antes do efeito; navegação persistente; contraste alto; cada aula termina com uma ação concreta.
- **Cor:** fundo carvão e painéis quase pretos criam foco; roxo elétrico identifica o curso; ciano marca dados/API; verde sinaliza tarefas concluídas; laranja avisa riscos de segurança.
- **Layout:** shell com rail lateral no desktop e drawer acionado pelo botão de três traços no celular. O conteúdo usa coluna editorial ampla, cards de execução e blocos de código, evitando uma grade genérica de marketing.
- **Assinaturas:** marca circular “P”; etiqueta numerada de aula; linha de progresso viva; diagramas com nós conectados.
- **Interação:** tocar em uma aula marca progresso local; busca filtra trilhas; copiar código confirma em toast; menu fecha ao escolher uma aba.
- **Animação:** entrada suave do drawer, brilho curto no progresso e transições de 180–240ms; sem movimento contínuo que prejudique leitura.
- **Tipografia:** Space Grotesk para títulos e Inter para leitura; código em JetBrains Mono/fallback monoespaçado.
- **Essência:** aprender a construir um painel real, do modelo de dados ao deploy. Direto, técnico e visual.
- **Voz:** “Construa em camadas.” / “Teste o contrato antes de culpar a interface.”
- **Marca:** um “P” geométrico dentro de um anel com um pequeno ponto de conexão.
- **Cor proprietária:** `#b66cff`.

## Estrutura

- `src/main.tsx`: shell, drawer, progresso, busca e renderização de aulas.
- `src/course.ts`: conteúdo didático, snippets, checklists e links oficiais.
- `src/style.css`: tokens, layout responsivo, acessibilidade e estados.
- `public/diagrams/`: diagramas PNG e fontes Mermaid.
- `public/manifest.webmanifest` e `public/sw.js`: instalação e cache básico PWA.
- `public/manus-routes.json`: rotas declaradas para o preview.

## Conteúdo

As trilhas cobrem: lógica para iniciantes; fundamentos TypeScript/React/TSX; arquitetura da interface; MockAPI (projeto, modelo, campos, endpoints e CRUD); keys e planos; sessão/HWID conceitual; PWA; Vercel; testes, segurança e checklist. Há guias específicos para Spck Editor no celular, Replit no navegador e Visual Studio Code no PC, com screenshots reais e links oficiais. O Editor Purpou permite criar pastas, criar arquivos limitados a `.tsx`, `.html` e `.js`, editar, receber snippets de autocomplete local e visualizar HTML. Cada trilha inclui passos, código, armadilhas, vídeo curto ou uma imagem/diagrama quando isso ajuda a compreensão.
