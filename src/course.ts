export type Lesson = {
  id: string; title: string; eyebrow: string; description: string; duration: string;
  tags: string[]; steps: string[]; code?: string; note?: string; diagram?: string;
  links?: { label: string; href: string }[];
};
export type Section = { id: string; label: string; icon: string; intro: string; lessons: Lesson[] };
const join = (lines: string[]) => lines.join('\n');
const docs = {
  react: { label: 'Documentação React', href: 'https://react.dev/learn' },
  typescript: { label: 'TypeScript Handbook', href: 'https://www.typescriptlang.org/docs/handbook/intro.html' },
  mockapi: { label: 'MockAPI Docs', href: 'https://www.mockapi.com/docs' },
  models: { label: 'MockAPI · Data Models', href: 'https://www.mockapi.com/docs/models' },
  rest: { label: 'MockAPI · REST API', href: 'https://www.mockapi.com/docs/rest-api' },
  pwa: { label: 'Vite PWA', href: 'https://vite-pwa-org.netlify.app/' },
  vercel: { label: 'Vercel · Vite', href: 'https://vercel.com/docs/frameworks/frontend/vite' },
  webpwa: { label: 'Web.dev · PWA', href: 'https://web.dev/learn/pwa' },
};

export const sections: Section[] = [
  {
    id: 'inicio', label: 'Início', icon: '✦', intro: 'Comece pela visão do produto e entenda como as camadas se conectam.',
    lessons: [{ id: 'mapa', title: 'Mapa do projeto: da interface ao deploy', eyebrow: 'AULA 01 · VISÃO GERAL', description: 'Antes de escrever componentes, desenhe o caminho do dado. O usuário interage com o painel, a aplicação chama um contrato HTTP e o deploy entrega o mesmo build em qualquer tela.', duration: '8 min', tags: ['arquitetura', 'frontend'], steps: ['Defina as telas e estados antes dos componentes.', 'Separe apresentação, dados e regras de negócio.', 'Escreva o contrato da API em JSON antes do formulário.', 'Valide o build antes de publicar.'], note: 'A inspiração visual do Clean Sensi é tratada como linguagem de painel: fundo escuro, contraste alto e controles compactos. O curso não copia código ou assets de terceiros.', diagram: '/diagrams/architecture.png', links: [docs.react] }],
  },
  {
    id: 'typescript', label: 'TypeScript + React', icon: 'TS', intro: 'Construa uma base tipada e fácil de evoluir.',
    lessons: [
      { id: 'estrutura', title: 'Estrutura de pastas que não vira labirinto', eyebrow: 'AULA 02 · BASE', description: 'Uma estrutura pequena pode crescer sem concentrar tudo em um arquivo. O objetivo é saber onde cada responsabilidade mora.', duration: '12 min', tags: ['typescript', 'react'], steps: ['Use src/components para UI reutilizável.', 'Use src/data ou src/services para contratos externos.', 'Modele os dados com type ou interface.', 'Mantenha a entrada da aplicação fina e previsível.'], code: join(['type Plan = {', '  id: string;', '  label: string;', '  durationDays: number;', '};']), note: 'Ative strict no tsconfig. O compilador deve impedir que um campo obrigatório desapareça no meio do fluxo.', links: [docs.typescript, docs.react] },
      { id: 'layout', title: 'Painel responsivo com menu de três traços', eyebrow: 'AULA 03 · INTERFACE', description: 'O menu precisa ser utilizável com uma mão no celular e continuar visível no desktop. A mesma navegação muda de rail para drawer sem duplicar as rotas.', duration: '15 min', tags: ['layout', 'mobile'], steps: ['Crie um botão com aria-label e estado aberto/fechado.', 'Use um overlay para fechar o drawer ao tocar fora.', 'Mantenha a aba ativa no estado.', 'Teste 320px, 768px e 1440px.'], code: join(['const [menuOpen, setMenuOpen] = useState(false);', '<button aria-label="Abrir navegação">', '  <Menu />', '</button>']), diagram: '/diagrams/navigation.png' },
    ],
  },
  {
    id: 'mockapi', label: 'MockAPI', icon: 'API', intro: 'Modele dados, crie endpoints e conecte um CRUD realista.',
    lessons: [
      { id: 'projeto-modelo', title: 'Criar projeto, recurso e campos', eyebrow: 'AULA 04 · MODELAGEM', description: 'Na MockAPI, um projeto organiza modelos e endpoints. Para um painel de licenças, comece pelo recurso licenses e defina os campos que o frontend realmente usa.', duration: '18 min', tags: ['mockapi', 'schema'], steps: ['Crie um projeto separado para desenvolvimento.', 'Crie o recurso licenses.', 'Adicione key, username, type, expire, status, device, activatedAt e expiresAt.', 'Insira um registro manual para testar o contrato.', 'Copie a URL do recurso e documente-a no .env.example.'], code: join(['type License = {', '  key: string;', '  status: "active" | "blocked";', '  expiresAt: number;', '};']), diagram: '/diagrams/mockapi-model.png', links: [docs.mockapi, docs.models] },
      { id: 'crud', title: 'CRUD completo: GET, POST, PATCH, PUT e DELETE', eyebrow: 'AULA 05 · REST', description: 'CRUD não é apenas buscar dados. Cada método muda o estado do recurso e precisa de tratamento de sucesso, erro e loading.', duration: '22 min', tags: ['crud', 'fetch'], steps: ['GET /licenses lista os registros.', 'POST /licenses cria uma key nova.', 'PATCH /licenses/:id altera apenas status ou device.', 'PUT /licenses/:id substitui o registro inteiro: preserve campos desconhecidos.', 'DELETE /licenses/:id remove o registro; use confirmação.'], code: join(["const response = await fetch(API + '/licenses', {", "  method: 'POST',", '  body: JSON.stringify(payload)', '});']), diagram: '/diagrams/crud.png', links: [docs.rest] },
      { id: 'planos', title: 'Keys, planos, expiração e vínculo de dispositivo', eyebrow: 'AULA 06 · REGRA DE NEGÓCIO', description: 'O plano define a duração; a ativação define quando a contagem começa; o device impede que a mesma licença seja usada em outro navegador.', duration: '24 min', tags: ['keys', 'planos', 'expiração'], steps: ['Gere uma key com prefixo legível e sufixo aleatório.', 'Salve activatedAt como zero antes do primeiro login.', 'No primeiro login, vincule device e calcule expiresAt.', 'Recuse status bloqueado, revogado ou licença expirada.', 'Nunca confie somente no localStorage para autorizar operações sensíveis.'], code: join(['const now = Math.floor(Date.now() / 1000);', 'if (license.status !== "active") throw new Error("Acesso bloqueado");', 'if (license.expiresAt <= now) throw new Error("Expirada");']), note: 'MockAPI é ótima para prototipar. Em produção, mova validação e segredos para um backend autenticado.', diagram: '/diagrams/license-flow.png' },
    ],
  },
  {
    id: 'pwa', label: 'PWA', icon: '◒', intro: 'Faça o curso instalável e resiliente em conexões instáveis.',
    lessons: [{ id: 'manifest-sw', title: 'Manifest, ícone e service worker', eyebrow: 'AULA 07 · PWA', description: 'Uma PWA combina metadados de instalação com uma estratégia de cache. O manifest descreve o app; o service worker intercepta requests e pode devolver o shell offline.', duration: '16 min', tags: ['pwa', 'offline'], steps: ['Defina name, short_name, start_url, display e theme_color.', 'Use ícones quadrados e legíveis em tamanhos pequenos.', 'Registre o service worker com fallback seguro.', 'Versione o cache para invalidar assets antigos.', 'Teste instalação e atualização em janela privada.'], code: join(["if ('serviceWorker' in navigator) {", "  navigator.serviceWorker.register('/sw.js');", '}']), diagram: '/diagrams/pwa.png', links: [docs.pwa] }],
  },
  {
    id: 'deploy', label: 'Deploy Vercel', icon: '↗', intro: 'Leve o build para produção com uma lista de verificação clara.',
    lessons: [{ id: 'vercel', title: 'Build, Vercel e domínio', eyebrow: 'AULA 08 · PUBLICAÇÃO', description: 'O deploy deve repetir o build limpo. Configure o comando, confirme que dist/index.html existe e só depois conecte domínio e variáveis.', duration: '14 min', tags: ['vercel', 'deploy'], steps: ['Suba o repositório para o GitHub.', 'Configure npm run build.', 'Use dist como output directory.', 'Adicione variáveis sem colocá-las no código ou no Git.', 'Valide manifest, assets e rotas no domínio publicado.'], code: join(['npm ci', 'npm run build', '', '# Vercel: output directory = dist']), diagram: '/diagrams/deploy.png', links: [docs.vercel] }],
  },
  {
    id: 'checklist', label: 'Checklist', icon: '✓', intro: 'Feche o curso com evidências de que o projeto está pronto.',
    lessons: [{ id: 'qualidade', title: 'Checklist técnico antes de entregar', eyebrow: 'AULA 09 · QUALIDADE', description: 'Use esta lista para não confundir “funciona no meu celular” com uma entrega reproduzível.', duration: '10 min', tags: ['testes', 'segurança'], steps: ['npm run build passa sem erro.', 'A navegação funciona com teclado.', 'O menu de três traços fecha ao escolher uma aba.', 'O CRUD mostra loading, sucesso e erro.', 'A expiração sai do painel no momento correto.', 'Segredos não aparecem no bundle.', 'Manifesto, ícone, service worker e domínio foram conferidos.'], note: 'Marque cada item no curso. O progresso fica somente neste navegador para você repetir a trilha em segurança.', links: [docs.webpwa] }],
  },
  {
    id: 'referencia', label: 'Referências', icon: '↗', intro: 'Documentação oficial para continuar estudando.',
    lessons: [{ id: 'docs', title: 'Documentação oficial e próximos passos', eyebrow: 'REFERÊNCIA', description: 'Aprofunde cada camada consultando a fonte primária. Quando uma plataforma mudar, atualize o curso a partir destes links.', duration: 'contínuo', tags: ['docs'], steps: ['Leia projetos e modelos da MockAPI.', 'Compare REST e GraphQL quando o protótipo crescer.', 'Estude o ciclo de atualização de service workers.', 'Revise acessibilidade e performance no web.dev.'], links: [docs.mockapi, docs.react, docs.typescript, docs.pwa] }],
  },
];
export const allLessons = sections.flatMap(section => section.lessons);
