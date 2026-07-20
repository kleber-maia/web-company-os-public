export const SUPPORTED_LOCALES = ["en", "pt-BR", "es-419"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

const en = {
  meta: {
    title: "BobbyOS — Your company. Its own intelligence.",
    description: "Bobby is the private AI agent inside BobbyOS, turning conversation into structured company work with memory, web execution, and automation.",
    ogDescription: "Bobby learns the company, works inside BobbyOS, navigates the web, and automates repeatable tasks.",
  },
  language: { label: "Language", en: "English", pt: "Português (Brasil)", es: "Español (Latinoamérica)" },
  nav: { aria: "Main navigation", homeAria: "BobbyOS home", system: "The system", work: "How it works", modules: "Modules", ownership: "Ownership", access: "Early access" },
  hero: {
    kickerOne: "Bobby · Private AI agent", kickerTwo: "Company-owned operating system",
    lineOne: "Your company.", lineTwo: "Its own ", emphasis: "intelligence.",
    lede: "BobbyOS brings Bobby—your private AI agent—together with company memory, a connected information system, web access, and automations. The agent uses them to understand and operate the business, all inside one company-owned operating system.",
    stageAria: "The parts of BobbyOS working as one", status: "Online", context: "Working across the company",
    message: "I found two campaigns spending without qualified pipeline. I compared Ads, Pipeline, and the current budget policy.",
    actionLabel: "Prepared action", actionTitle: "Pause Broad Prospecting", approval: "Waiting for your approval", checked: "Context checked",
    contextItems: ["Ads", "Pipeline", "Knowledge"], scroll: "Enter the system",
  },
  systemParts: [
    ["Bobby", "Private agent embedded in BobbyOS", "part-agent"],
    ["Company memory", "Gives Bobby durable company context", "part-memory"],
    ["Information system", "Work, records, knowledge, workflows", "part-system"],
    ["Own computer", "A persistent place to operate", "part-computer"],
    ["Open web", "Research and real task execution", "part-web"],
    ["Task automation", "Turns repeatable work into systems", "part-automation"],
  ],
  system: {
    kicker: "A different kind of stack", title: "Bobby is powerful because the whole operating system works as one.",
    body: "Each layer makes the agent more capable. Company memory compounds. The information system adapts. Bobby gains the context and tools to become a real part of the company.",
    capabilitiesAria: "What Bobby can do", advantage: "Why Bobby works",
    advantageTitle: "Bobby knows the company—and has the tools to do the work.",
    advantageBody: "The agent works continuously across company memory, daily operations, the open web, and automation.",
  },
  capabilities: [
    ["Company memory", "Learns each company. Never forgets.", "Customers, decisions, standards, history, and working preferences become durable context for Bobby. Every workspace keeps its own memory and boundaries."],
    ["Inside the interface", "Your words become structured company work.", "Bobby lives inside BobbyOS, understands the screen you are viewing, and creates or updates Boards, cards, records, knowledge, schedules, and more from the same conversation."],
    ["Open-web operator", "Navigates the web like a real employee.", "The agent can research, compare, navigate websites, and complete browser-based tasks—then bring the evidence and results back into BobbyOS."],
    ["Task automation", "Automates any repeatable process.", "Bobby turns recurring research, follow-up, record work, and multi-step operations into supervised automations that keep running from the company’s own computer."],
  ],
  layers: [
    ["The intelligence", "Bobby, your private AI agent", "The agent isn’t a chatbot waiting in another tab. Embedded in BobbyOS, Bobby learns each company, sees the current screen, uses the open web, and executes or automates real work with approval.", "violet"],
    ["The information system", "One connected place to run the company", "Customer conversations, relationships, sales, advertising, projects, knowledge, and company records live as connected modules—not scattered subscriptions. BobbyOS can change as the company does.", "cyan"],
    ["The foundation", "A computer of its own", "The agent has a persistent place to work, remember, automate, and improve the information system. The business gets infrastructure that belongs to it—not another rented seat.", "lime"],
    ["The reach", "The open web", "BobbyOS holds the durable context. Bobby can also research, navigate, and operate browser-based tools—bringing the outside world back into one trusted company operating system.", "coral"],
  ],
  work: {
    kicker: "One request. The whole company moves.", titleBefore: "Bobby doesn’t just answer. Bobby works ", emphasis: "through", titleAfter: " the business.",
    you: "You", question: "“Which campaigns are wasting money—and what should we do next?”",
    steps: [["Reads Ads", "Spend, CPA, pacing, provider state"], ["Checks Pipeline", "Qualified value and won revenue"], ["Uses Knowledge", "Budget policy and company context"], ["Prepares action", "Exact change, impact, and limits"]],
    recommended: "Recommended action", action: "Pause Broad Prospecting", result: "$213 spent · 0 qualified opportunities", approve: "Approve change", approveAria: "Example approval control", confirmation: "Nothing changes without a human confirmation.",
  },
  structure: {
    kicker: "Conversation becomes the interface", title: "Describe the project. Bobby builds the working structure.",
    body: "A few sentences become durable company data: a Board, the right cards, practical checklists, owners, dependencies, and a schedule. Keep talking and the agent keeps BobbyOS current.",
    prompt: "“We’re opening a second location in eight weeks. Organize permits, suppliers, hiring, launch marketing, and opening-day readiness. Maya owns it.”",
    outputAria: "A project created inside BobbyOS from a conversation", created: "Created inside Boards", ready: "Ready for review", newProject: "New company project", project: "Second location launch", owner: "Owner · Maya Chen",
    summary: [["14", "cards"], ["37", "checklist items"], ["5", "owners"], ["8", "weeks scheduled"]],
    columns: [
      ["Plan", [["Confirm permit milestones", "6 checklist items · Maya"], ["Finalize opening budget", "4 checklist items · Finance"]]],
      ["In progress", [["Build supplier shortlist", "Due week 2 · Operations"], ["Draft hiring plan", "Due week 3 · Maya"]]],
      ["Scheduled", [["Launch local campaign", "Starts week 5 · Marketing"], ["Opening-day readiness", "12 checklist items · Team"]]],
    ],
    later: "Later", update: "“The permit is delayed one week.”", updated: "Schedule and dependent cards updated",
  },
  development: {
    kicker: "Development mode · Built to change", title: "Bobby becomes your on-demand development team.",
    body: "Describe what the company needs in the same chat. The agent clarifies the workflow, coordinates the build, asks for decisions, and returns a tested improvement for review. Nothing reaches Production without your approval.",
    mode: "Development mode", connected: "Bobby connected", history: "Development history", next: "Ready for the next improvement",
    historyItems: [["Vendor onboarding", "New workflow · in progress"], ["Unified customer inbox", "Saved improvement"], ["Ads action controls", "Saved improvement"]],
    user: "Add a vendor onboarding flow with owner approval and document collection.",
    agent: "I’ll coordinate this as your development team: a connected module sharing people, files, permissions, activity, and company memory. I’ll bring back a working version for review.",
    progress: ["Workflow clarified", "Records and permissions built", "Desktop and mobile UI created", "Testing and preparing review"],
    newCapability: "New company capability", module: "Vendor onboarding", moduleBody: "Connected to Relationships, Boards, Knowledge, and files.", appears: "Appears inside your BobbyOS",
  },
  modulesSection: {
    kicker: "A useful system from day one", title: "Every part speaks the same company language.", body: "The modules are distinct working spaces, connected by shared context, permissions, activity, and the embedded agent.", aria: "BobbyOS modules",
    workspaceKicker: "One installation. Many companies.", workspaceTitle: "Every workspace keeps its own memory, work, identity, and files.", workspaceBody: "Bobby follows the company you are in. Shared administration stays centralized. Business context stays inside its boundary.", workspaceAria: "Three separate company workspaces", workspaceTypes: ["Retail", "Design", "Services"], sharedAdmin: "Shared administration",
  },
  modules: [["Home", "The operating picture"], ["Inbox", "Every customer conversation"], ["Pipeline", "Sales work in motion"], ["Relationships", "People, companies, and history"], ["Ads", "Performance and guarded action"], ["Boards", "Flexible work management"], ["Knowledge", "The company source of truth"]],
  ownership: {
    kicker: "The compounding advantage", lineOne: "Your operating system.", lineTwo: "Your data.", lineThree: "Your ", emphasis: "agent.",
    body: "With BobbyOS, the company controls its operating system, its data, and Bobby—without locking its future to one SaaS vendor or one AI model.",
    proofs: [["Self-hosted", "Runs on company-controlled infrastructure."], ["Private by design", "Company records stay inside BobbyOS."], ["Model freedom", "Choose the AI provider and model that fits."], ["Built to endure", "Backups, encrypted credentials, and signed updates."]],
    closing: "Not another SaaS.", closingSecond: "A company-owned operating system built around your business.", access: "Early access · By approval",
  },
};

export type Copy = typeof en;

const ptBR: Copy = {
  meta: {
    title: "BobbyOS — Sua empresa. Com inteligência própria.",
    description: "Bobby é o agente privado de IA dentro do BobbyOS, transformando conversas em trabalho empresarial estruturado com memória, acesso à web e automação.",
    ogDescription: "Bobby aprende sobre a empresa, trabalha dentro do BobbyOS, navega na web e automatiza tarefas repetitivas.",
  },
  language: { label: "Idioma", en: "English", pt: "Português (Brasil)", es: "Español (Latinoamérica)" },
  nav: { aria: "Navegação principal", homeAria: "Página inicial do BobbyOS", system: "O sistema", work: "Como funciona", modules: "Módulos", ownership: "Controle", access: "Acesso antecipado" },
  hero: {
    kickerOne: "Bobby · Agente privado de IA", kickerTwo: "Sistema operacional próprio da empresa",
    lineOne: "Sua empresa.", lineTwo: "Com inteligência ", emphasis: "própria.",
    lede: "O BobbyOS reúne Bobby — seu agente privado de IA —, a memória da empresa, um sistema de informação conectado, acesso à web e automações. O agente usa tudo isso para entender e operar o negócio, dentro de um único sistema operacional próprio da empresa.",
    stageAria: "As partes do BobbyOS funcionando como uma só", status: "Online", context: "Trabalhando em toda a empresa",
    message: "Encontrei duas campanhas gerando gastos sem oportunidades qualificadas no pipeline. Comparei Anúncios, Pipeline e a política de orçamento atual.",
    actionLabel: "Ação preparada", actionTitle: "Pausar prospecção ampla", approval: "Aguardando sua aprovação", checked: "Contexto verificado",
    contextItems: ["Anúncios", "Pipeline", "Conhecimento"], scroll: "Conheça o sistema",
  },
  systemParts: [
    ["Bobby", "Agente privado integrado ao BobbyOS", "part-agent"],
    ["Memória da empresa", "Dá a Bobby contexto empresarial duradouro", "part-memory"],
    ["Sistema de informação", "Trabalho, registros, conhecimento e fluxos", "part-system"],
    ["Computador próprio", "Um ambiente persistente para operar", "part-computer"],
    ["Web aberta", "Pesquisa e execução de tarefas reais", "part-web"],
    ["Automação de tarefas", "Transforma trabalhos repetitivos em sistemas", "part-automation"],
  ],
  system: {
    kicker: "Uma arquitetura diferente", title: "Bobby é poderoso porque todo o sistema operacional funciona em conjunto.",
    body: "Cada camada torna o agente mais capaz. A memória da empresa se acumula. O sistema de informação se adapta. Bobby ganha o contexto e as ferramentas para se tornar parte real da empresa.",
    capabilitiesAria: "O que Bobby pode fazer", advantage: "Por que Bobby funciona",
    advantageTitle: "Bobby conhece a empresa — e tem as ferramentas para fazer o trabalho.",
    advantageBody: "O agente atua continuamente na memória da empresa, nas operações diárias, na web aberta e na automação.",
  },
  capabilities: [
    ["Memória da empresa", "Aprende sobre cada empresa. Nunca esquece.", "Clientes, decisões, padrões, histórico e preferências de trabalho viram contexto duradouro para Bobby. Cada espaço de trabalho mantém sua própria memória e seus limites."],
    ["Dentro da interface", "Suas palavras viram trabalho empresarial estruturado.", "Bobby vive dentro do BobbyOS, entende a tela que você está vendo e cria ou atualiza Quadros, cartões, registros, conhecimento, agendas e muito mais na mesma conversa."],
    ["Operador da web aberta", "Navega na web como um funcionário de verdade.", "O agente pode pesquisar, comparar, navegar em sites e concluir tarefas no navegador — depois traz as evidências e os resultados de volta ao BobbyOS."],
    ["Automação de tarefas", "Automatiza qualquer processo repetitivo.", "Bobby transforma pesquisas recorrentes, acompanhamentos, registros e operações em várias etapas em automações supervisionadas, executadas continuamente no computador da própria empresa."],
  ],
  layers: [
    ["A inteligência", "Bobby, seu agente privado de IA", "O agente não é um chatbot esperando em outra aba. Integrado ao BobbyOS, Bobby aprende sobre cada empresa, vê a tela atual, usa a web aberta e executa ou automatiza trabalhos reais mediante aprovação.", "violet"],
    ["O sistema de informação", "Um lugar conectado para administrar a empresa", "Conversas com clientes, relacionamentos, vendas, publicidade, projetos, conhecimento e registros vivem em módulos conectados — não em assinaturas dispersas. O BobbyOS evolui junto com a empresa.", "cyan"],
    ["A base", "Um computador próprio", "O agente tem um ambiente persistente para trabalhar, lembrar, automatizar e melhorar o sistema de informação. A empresa ganha uma infraestrutura que é sua — não mais uma licença alugada.", "lime"],
    ["O alcance", "A web aberta", "O BobbyOS guarda o contexto duradouro. Bobby também pode pesquisar, navegar e operar ferramentas no navegador — trazendo o mundo externo para um único sistema operacional confiável da empresa.", "coral"],
  ],
  work: {
    kicker: "Um pedido. A empresa inteira se move.", titleBefore: "Bobby não apenas responde. Bobby atua ", emphasis: "por toda", titleAfter: " a empresa.",
    you: "Você", question: "“Quais campanhas estão desperdiçando dinheiro — e o que devemos fazer agora?”",
    steps: [["Lê os Anúncios", "Gastos, CPA, ritmo e status do provedor"], ["Verifica o Pipeline", "Valor qualificado e receita conquistada"], ["Usa o Conhecimento", "Política de orçamento e contexto da empresa"], ["Prepara a ação", "Mudança exata, impacto e limites"]],
    recommended: "Ação recomendada", action: "Pausar prospecção ampla", result: "US$ 213 gastos · 0 oportunidades qualificadas", approve: "Aprovar mudança", approveAria: "Controle de aprovação de exemplo", confirmation: "Nada muda sem a confirmação de uma pessoa.",
  },
  structure: {
    kicker: "A conversa vira a interface", title: "Descreva o projeto. Bobby cria a estrutura de trabalho.",
    body: "Algumas frases viram dados empresariais duradouros: um Quadro, os cartões certos, checklists práticos, responsáveis, dependências e um cronograma. Continue conversando, e o agente mantém o BobbyOS atualizado.",
    prompt: "“Vamos abrir uma segunda unidade em oito semanas. Organize licenças, fornecedores, contratações, marketing de lançamento e os preparativos para a inauguração. Maya é a responsável.”",
    outputAria: "Um projeto criado dentro do BobbyOS a partir de uma conversa", created: "Criado em Quadros", ready: "Pronto para revisão", newProject: "Novo projeto da empresa", project: "Lançamento da segunda unidade", owner: "Responsável · Maya Chen",
    summary: [["14", "cartões"], ["37", "itens de checklist"], ["5", "responsáveis"], ["8", "semanas programadas"]],
    columns: [
      ["Planejamento", [["Confirmar etapas das licenças", "6 itens de checklist · Maya"], ["Finalizar orçamento de abertura", "4 itens de checklist · Financeiro"]]],
      ["Em andamento", [["Criar lista de fornecedores", "Prazo: semana 2 · Operações"], ["Elaborar plano de contratação", "Prazo: semana 3 · Maya"]]],
      ["Agendado", [["Lançar campanha local", "Início: semana 5 · Marketing"], ["Preparativos para a inauguração", "12 itens de checklist · Equipe"]]],
    ],
    later: "Depois", update: "“A licença atrasou uma semana.”", updated: "Cronograma e cartões dependentes atualizados",
  },
  development: {
    kicker: "Modo de desenvolvimento · Feito para evoluir", title: "Bobby se torna sua equipe de desenvolvimento sob demanda.",
    body: "Descreva o que a empresa precisa na mesma conversa. O agente esclarece o fluxo, coordena o desenvolvimento, pede decisões e entrega uma melhoria testada para revisão. Nada chega à Produção sem sua aprovação.",
    mode: "Modo de desenvolvimento", connected: "Bobby conectado", history: "Histórico de desenvolvimento", next: "Pronto para a próxima melhoria",
    historyItems: [["Integração de fornecedores", "Novo fluxo · em andamento"], ["Caixa de entrada unificada", "Melhoria salva"], ["Controles de ação em Anúncios", "Melhoria salva"]],
    user: "Adicione um fluxo de integração de fornecedores com aprovação do responsável e coleta de documentos.",
    agent: "Vou coordenar isso como sua equipe de desenvolvimento: um módulo conectado que compartilha pessoas, arquivos, permissões, atividades e a memória da empresa. Entregarei uma versão funcional para revisão.",
    progress: ["Fluxo esclarecido", "Registros e permissões criados", "Interface para desktop e celular criada", "Testando e preparando a revisão"],
    newCapability: "Nova capacidade da empresa", module: "Integração de fornecedores", moduleBody: "Conectado a Relacionamentos, Quadros, Conhecimento e arquivos.", appears: "Disponível dentro do seu BobbyOS",
  },
  modulesSection: {
    kicker: "Um sistema útil desde o primeiro dia", title: "Todas as partes falam a mesma língua da empresa.", body: "Os módulos são espaços de trabalho distintos, conectados por contexto, permissões, atividades e pelo agente integrado.", aria: "Módulos do BobbyOS",
    workspaceKicker: "Uma instalação. Muitas empresas.", workspaceTitle: "Cada espaço mantém sua própria memória, trabalho, identidade e arquivos.", workspaceBody: "Bobby acompanha a empresa em que você está. A administração compartilhada continua centralizada. O contexto do negócio permanece dentro dos seus limites.", workspaceAria: "Três espaços de trabalho separados", workspaceTypes: ["Varejo", "Design", "Serviços"], sharedAdmin: "Administração compartilhada",
  },
  modules: [["Início", "A visão operacional"], ["Caixa de entrada", "Todas as conversas com clientes"], ["Pipeline", "O trabalho de vendas em movimento"], ["Relacionamentos", "Pessoas, empresas e histórico"], ["Anúncios", "Desempenho e ações controladas"], ["Quadros", "Gestão flexível do trabalho"], ["Conhecimento", "A fonte da verdade da empresa"]],
  ownership: {
    kicker: "A vantagem que se acumula", lineOne: "Seu sistema operacional.", lineTwo: "Seus dados.", lineThree: "Seu ", emphasis: "agente.",
    body: "Com o BobbyOS, a empresa controla seu sistema operacional, seus dados e Bobby — sem prender o futuro a um único fornecedor de SaaS ou modelo de IA.",
    proofs: [["Hospedagem própria", "Executado em infraestrutura controlada pela empresa."], ["Privado por design", "Os registros permanecem dentro do BobbyOS."], ["Liberdade de modelo", "Escolha o provedor e o modelo de IA mais adequados."], ["Feito para durar", "Backups, credenciais criptografadas e atualizações assinadas."]],
    closing: "Não é mais um SaaS.", closingSecond: "É um sistema operacional próprio, criado em torno da sua empresa.", access: "Acesso antecipado · Mediante aprovação",
  },
};

const es419: Copy = {
  meta: {
    title: "BobbyOS — Tu empresa. Con inteligencia propia.",
    description: "Bobby es el agente privado de IA dentro de BobbyOS, convirtiendo conversaciones en trabajo empresarial estructurado con memoria, acceso web y automatización.",
    ogDescription: "Bobby aprende sobre la empresa, trabaja dentro de BobbyOS, navega por la web y automatiza tareas repetitivas.",
  },
  language: { label: "Idioma", en: "English", pt: "Português (Brasil)", es: "Español (Latinoamérica)" },
  nav: { aria: "Navegación principal", homeAria: "Inicio de BobbyOS", system: "El sistema", work: "Cómo funciona", modules: "Módulos", ownership: "Control", access: "Acceso anticipado" },
  hero: {
    kickerOne: "Bobby · Agente privado de IA", kickerTwo: "Sistema operativo propio de la empresa",
    lineOne: "Tu empresa.", lineTwo: "Con inteligencia ", emphasis: "propia.",
    lede: "BobbyOS reúne a Bobby —tu agente privado de IA— con la memoria empresarial, un sistema de información conectado, acceso web y automatizaciones. El agente usa todo esto para entender y operar el negocio, dentro de un único sistema operativo propio de la empresa.",
    stageAria: "Las partes de BobbyOS funcionando como una sola", status: "En línea", context: "Trabajando en toda la empresa",
    message: "Encontré dos campañas con gastos pero sin oportunidades calificadas en el pipeline. Comparé Anuncios, Pipeline y la política de presupuesto actual.",
    actionLabel: "Acción preparada", actionTitle: "Pausar prospección amplia", approval: "Esperando tu aprobación", checked: "Contexto verificado",
    contextItems: ["Anuncios", "Pipeline", "Conocimiento"], scroll: "Conoce el sistema",
  },
  systemParts: [
    ["Bobby", "Agente privado integrado en BobbyOS", "part-agent"],
    ["Memoria de la empresa", "Le da a Bobby contexto empresarial duradero", "part-memory"],
    ["Sistema de información", "Trabajo, registros, conocimiento y flujos", "part-system"],
    ["Computadora propia", "Un entorno persistente para operar", "part-computer"],
    ["Web abierta", "Investigación y ejecución de tareas reales", "part-web"],
    ["Automatización de tareas", "Convierte el trabajo repetitivo en sistemas", "part-automation"],
  ],
  system: {
    kicker: "Una arquitectura diferente", title: "Bobby es poderoso porque todo el sistema operativo funciona en conjunto.",
    body: "Cada capa hace que el agente sea más capaz. La memoria empresarial se acumula. El sistema de información se adapta. Bobby obtiene el contexto y las herramientas para convertirse en una parte real de la empresa.",
    capabilitiesAria: "Lo que Bobby puede hacer", advantage: "Por qué funciona Bobby",
    advantageTitle: "Bobby conoce la empresa y tiene las herramientas para hacer el trabajo.",
    advantageBody: "El agente trabaja continuamente con la memoria empresarial, las operaciones diarias, la web abierta y la automatización.",
  },
  capabilities: [
    ["Memoria de la empresa", "Aprende de cada empresa. Nunca olvida.", "Los clientes, las decisiones, los estándares, el historial y las preferencias de trabajo se convierten en contexto duradero para Bobby. Cada espacio conserva su propia memoria y sus límites."],
    ["Dentro de la interfaz", "Tus palabras se convierten en trabajo empresarial estructurado.", "Bobby vive dentro de BobbyOS, entiende la pantalla que estás viendo y crea o actualiza Tableros, tarjetas, registros, conocimiento, agendas y más desde la misma conversación."],
    ["Operador de la web abierta", "Navega por la web como un empleado real.", "El agente puede investigar, comparar, navegar por sitios web y completar tareas en el navegador; luego lleva la evidencia y los resultados de vuelta a BobbyOS."],
    ["Automatización de tareas", "Automatiza cualquier proceso repetitivo.", "Bobby convierte la investigación recurrente, el seguimiento, los registros y las operaciones de varios pasos en automatizaciones supervisadas que siguen ejecutándose desde la computadora de la empresa."],
  ],
  layers: [
    ["La inteligencia", "Bobby, tu agente privado de IA", "El agente no es un chatbot esperando en otra pestaña. Integrado en BobbyOS, Bobby aprende de cada empresa, ve la pantalla actual, usa la web abierta y ejecuta o automatiza trabajo real con aprobación.", "violet"],
    ["El sistema de información", "Un lugar conectado para dirigir la empresa", "Las conversaciones con clientes, las relaciones, las ventas, la publicidad, los proyectos, el conocimiento y los registros viven en módulos conectados, no en suscripciones dispersas. BobbyOS evoluciona junto con la empresa.", "cyan"],
    ["La base", "Una computadora propia", "El agente tiene un entorno persistente para trabajar, recordar, automatizar y mejorar el sistema de información. La empresa obtiene infraestructura propia, no otro asiento rentado.", "lime"],
    ["El alcance", "La web abierta", "BobbyOS conserva el contexto duradero. Bobby también puede investigar, navegar y operar herramientas en el navegador, llevando el mundo exterior a un único sistema operativo empresarial confiable.", "coral"],
  ],
  work: {
    kicker: "Una solicitud. Toda la empresa se mueve.", titleBefore: "Bobby no se limita a responder. Bobby trabaja ", emphasis: "en toda", titleAfter: " la empresa.",
    you: "Tú", question: "“¿Qué campañas están desperdiciando dinero y qué deberíamos hacer ahora?”",
    steps: [["Lee Anuncios", "Gasto, CPA, ritmo y estado del proveedor"], ["Revisa el Pipeline", "Valor calificado e ingresos ganados"], ["Usa Conocimiento", "Política de presupuesto y contexto empresarial"], ["Prepara la acción", "Cambio exacto, impacto y límites"]],
    recommended: "Acción recomendada", action: "Pausar prospección amplia", result: "US$213 gastados · 0 oportunidades calificadas", approve: "Aprobar cambio", approveAria: "Control de aprobación de ejemplo", confirmation: "Nada cambia sin la confirmación de una persona.",
  },
  structure: {
    kicker: "La conversación se convierte en la interfaz", title: "Describe el proyecto. Bobby crea la estructura de trabajo.",
    body: "Unas cuantas frases se convierten en datos empresariales duraderos: un Tablero, las tarjetas correctas, listas prácticas, responsables, dependencias y un calendario. Sigue conversando y el agente mantiene BobbyOS actualizado.",
    prompt: "“Abriremos una segunda ubicación en ocho semanas. Organiza permisos, proveedores, contratación, marketing de lanzamiento y los preparativos para el día de apertura. Maya es la responsable.”",
    outputAria: "Un proyecto creado dentro de BobbyOS a partir de una conversación", created: "Creado en Tableros", ready: "Listo para revisión", newProject: "Nuevo proyecto de la empresa", project: "Lanzamiento de la segunda ubicación", owner: "Responsable · Maya Chen",
    summary: [["14", "tarjetas"], ["37", "elementos de lista"], ["5", "responsables"], ["8", "semanas programadas"]],
    columns: [
      ["Plan", [["Confirmar etapas de permisos", "6 elementos de lista · Maya"], ["Finalizar presupuesto de apertura", "4 elementos de lista · Finanzas"]]],
      ["En curso", [["Crear lista de proveedores", "Para la semana 2 · Operaciones"], ["Preparar plan de contratación", "Para la semana 3 · Maya"]]],
      ["Programado", [["Lanzar campaña local", "Inicia en la semana 5 · Marketing"], ["Preparativos para la apertura", "12 elementos de lista · Equipo"]]],
    ],
    later: "Después", update: "“El permiso se retrasó una semana.”", updated: "Calendario y tarjetas dependientes actualizados",
  },
  development: {
    kicker: "Modo de desarrollo · Creado para evolucionar", title: "Bobby se convierte en tu equipo de desarrollo bajo demanda.",
    body: "Describe lo que la empresa necesita en el mismo chat. El agente aclara el flujo, coordina el desarrollo, solicita decisiones y entrega una mejora probada para revisión. Nada llega a Producción sin tu aprobación.",
    mode: "Modo de desarrollo", connected: "Bobby conectado", history: "Historial de desarrollo", next: "Listo para la próxima mejora",
    historyItems: [["Incorporación de proveedores", "Nuevo flujo · en curso"], ["Bandeja de entrada unificada", "Mejora guardada"], ["Controles de acción en Anuncios", "Mejora guardada"]],
    user: "Agrega un flujo de incorporación de proveedores con aprobación del responsable y recopilación de documentos.",
    agent: "Coordinaré esto como tu equipo de desarrollo: un módulo conectado que comparte personas, archivos, permisos, actividad y memoria empresarial. Te entregaré una versión funcional para revisión.",
    progress: ["Flujo aclarado", "Registros y permisos creados", "Interfaz para escritorio y móvil creada", "Probando y preparando la revisión"],
    newCapability: "Nueva capacidad empresarial", module: "Incorporación de proveedores", moduleBody: "Conectado con Relaciones, Tableros, Conocimiento y archivos.", appears: "Disponible dentro de tu BobbyOS",
  },
  modulesSection: {
    kicker: "Un sistema útil desde el primer día", title: "Cada parte habla el mismo idioma de la empresa.", body: "Los módulos son espacios de trabajo distintos, conectados por contexto compartido, permisos, actividad y el agente integrado.", aria: "Módulos de BobbyOS",
    workspaceKicker: "Una instalación. Muchas empresas.", workspaceTitle: "Cada espacio conserva su propia memoria, trabajo, identidad y archivos.", workspaceBody: "Bobby sigue a la empresa en la que estás. La administración compartida permanece centralizada. El contexto empresarial se mantiene dentro de sus límites.", workspaceAria: "Tres espacios de trabajo separados", workspaceTypes: ["Comercio", "Diseño", "Servicios"], sharedAdmin: "Administración compartida",
  },
  modules: [["Inicio", "La visión operativa"], ["Bandeja de entrada", "Cada conversación con clientes"], ["Pipeline", "El trabajo de ventas en marcha"], ["Relaciones", "Personas, empresas e historial"], ["Anuncios", "Rendimiento y acciones controladas"], ["Tableros", "Gestión flexible del trabajo"], ["Conocimiento", "La fuente de verdad de la empresa"]],
  ownership: {
    kicker: "La ventaja que se acumula", lineOne: "Tu sistema operativo.", lineTwo: "Tus datos.", lineThree: "Tu ", emphasis: "agente.",
    body: "Con BobbyOS, la empresa controla su sistema operativo, sus datos y a Bobby, sin atar su futuro a un solo proveedor de SaaS ni a un solo modelo de IA.",
    proofs: [["Alojamiento propio", "Se ejecuta en infraestructura controlada por la empresa."], ["Privado por diseño", "Los registros permanecen dentro de BobbyOS."], ["Libertad de modelo", "Elige el proveedor y el modelo de IA más adecuados."], ["Creado para durar", "Copias de seguridad, credenciales cifradas y actualizaciones firmadas."]],
    closing: "No es otro SaaS.", closingSecond: "Es un sistema operativo propio, creado en torno a tu empresa.", access: "Acceso anticipado · Con aprobación",
  },
};

export const COPY: Record<Locale, Copy> = { en, "pt-BR": ptBR, "es-419": es419 };

export function normalizeLocale(value: string | null | undefined): Locale | null {
  if (!value) return null;
  const normalized = value.toLowerCase();
  if (normalized === "pt-br" || normalized.startsWith("pt")) return "pt-BR";
  if (normalized === "es-419" || normalized.startsWith("es")) return "es-419";
  if (normalized === "en" || normalized.startsWith("en")) return "en";
  return null;
}
