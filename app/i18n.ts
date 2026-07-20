export const SUPPORTED_LOCALES = ["en", "pt-BR", "es-419"] as const;

export type Locale = (typeof SUPPORTED_LOCALES)[number];

const en = {
  meta: {
    title: "BobbyOS — Your company. Its own intelligence.",
    description: "A private AI employee that turns conversation into structured company work, with memory, web execution, and automation.",
    ogDescription: "An AI employee that learns the company, works inside BobbyOS, navigates the web, and automates repeatable tasks.",
  },
  language: { label: "Language", en: "English", pt: "Português (Brasil)", es: "Español (Latinoamérica)" },
  nav: { aria: "Main navigation", homeAria: "BobbyOS home", system: "The system", work: "How it works", modules: "Modules", ownership: "Ownership", access: "Early access" },
  hero: {
    kickerOne: "Private AI employee", kickerTwo: "Company operating system",
    lineOne: "Your company.", lineTwo: "Its own ", emphasis: "intelligence.",
    lede: "BobbyOS gives a private AI employee the memory, software, web access, and automations to understand and operate the business—all inside one company-owned system.",
    stageAria: "The parts of BobbyOS working as one", status: "Online", context: "Working across the company",
    message: "I found two campaigns spending without qualified pipeline. I compared Ads, Pipeline, and the current budget policy.",
    actionLabel: "Prepared action", actionTitle: "Pause Broad Prospecting", approval: "Waiting for your approval", checked: "Context checked",
    contextItems: ["Ads", "Pipeline", "Knowledge"], scroll: "Enter the system",
  },
  systemParts: [
    ["Private AI employee", "Works inside the BobbyOS interface", "part-agent"],
    ["Company memory", "Learns each company. Never forgets.", "part-memory"],
    ["Company operating system", "Work, records, knowledge, workflows", "part-system"],
    ["Own computer", "A persistent place to operate", "part-computer"],
    ["Open web", "Research and real task execution", "part-web"],
    ["Task automation", "Turns repeatable work into systems", "part-automation"],
  ],
  system: {
    kicker: "A different kind of stack", title: "The agent is only powerful because the whole system belongs together.",
    body: "Each layer makes the others more useful. Memory compounds. Software adapts. The agent gains the context and tools to become a real part of the company.",
    capabilitiesAria: "Flagship AI employee capabilities", advantage: "The agent advantage",
    advantageTitle: "It knows the company—and has the tools to do the work.",
    advantageBody: "One continuous employee across company memory, daily operations, the open web, and automation.",
  },
  capabilities: [
    ["Company memory", "Learns each company. Never forgets.", "Customers, decisions, standards, history, and working preferences become durable company context. Every workspace keeps its own memory and boundaries."],
    ["Inside the interface", "Your words become structured company work.", "The agent lives inside BobbyOS, understands the screen you are viewing, and creates or updates Boards, cards, records, knowledge, schedules, and more from the same conversation."],
    ["Open-web operator", "Navigates the web like a real employee.", "It can research, compare, navigate websites, and complete browser-based tasks—then bring the evidence and results back into the company system."],
    ["Task automation", "Automates any repeatable process.", "Turn recurring research, follow-up, record work, and multi-step operations into supervised automations that keep running from the company’s own computer."],
  ],
  layers: [
    ["The intelligence", "A private AI employee", "Not a chatbot waiting in another tab. The agent lives inside BobbyOS, learns each company, sees the current screen, uses the open web, and executes or automates real work with approval.", "violet"],
    ["The company system", "One connected place to run the company", "Customer conversations, relationships, sales, advertising, projects, knowledge, and company records live as connected modules—not scattered subscriptions. The system can change as the company does.", "cyan"],
    ["The foundation", "A computer of its own", "The agent has a persistent place to work, remember, automate, and improve the software. The business gets infrastructure that belongs to it—not another rented seat.", "lime"],
    ["The reach", "The open web", "BobbyOS holds the durable context. The agent can also research, navigate, and operate browser-based tools—bringing the outside world back into one trusted company system.", "coral"],
  ],
  work: {
    kicker: "One request. The whole company moves.", titleBefore: "It doesn’t answer beside your work. It works ", emphasis: "through", titleAfter: " it.",
    you: "You", question: "“Which campaigns are wasting money—and what should we do next?”",
    steps: [["Reads Ads", "Spend, CPA, pacing, provider state"], ["Checks Pipeline", "Qualified value and won revenue"], ["Uses Knowledge", "Budget policy and company context"], ["Prepares action", "Exact change, impact, and limits"]],
    recommended: "Recommended action", action: "Pause Broad Prospecting", result: "$213 spent · 0 qualified opportunities", approve: "Approve change", approveAria: "Example approval control", confirmation: "Nothing changes without a human confirmation.",
  },
  structure: {
    kicker: "Conversation becomes the interface", title: "Describe the project. The agent builds the working structure.",
    body: "A few sentences become durable company data: a Board, the right cards, practical checklists, owners, dependencies, and a schedule. Keep talking and the agent keeps the system current.",
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
    kicker: "Development mode · Built to change", title: "The same AI employee becomes your software development team.",
    body: "Describe what the company needs in the same chat. The agent clarifies the workflow, coordinates the build, asks for decisions, and returns a tested improvement for review. Nothing reaches Production without your approval.",
    mode: "Development mode", connected: "Agent connected", history: "Development history", next: "Ready for the next improvement",
    historyItems: [["Vendor onboarding", "New workflow · in progress"], ["Unified customer inbox", "Saved improvement"], ["Ads action controls", "Saved improvement"]],
    user: "Add a vendor onboarding flow with owner approval and document collection.",
    agent: "I’ll coordinate this as your software team: a connected module sharing people, files, permissions, activity, and company memory. I’ll bring back a working version for review.",
    progress: ["Workflow clarified", "Records and permissions built", "Desktop and mobile UI created", "Testing and preparing review"],
    newCapability: "New company capability", module: "Vendor onboarding", moduleBody: "Connected to Relationships, Boards, Knowledge, and files.", appears: "Appears inside your BobbyOS",
  },
  modulesSection: {
    kicker: "A useful system from day one", title: "Every part speaks the same company language.", body: "The modules are distinct working spaces, connected by shared context, permissions, activity, and the private agent.", aria: "BobbyOS modules",
    workspaceKicker: "One installation. Many companies.", workspaceTitle: "Every workspace keeps its own memory, work, identity, and files.", workspaceBody: "The agent follows the company you are in. Shared administration stays centralized. Business context stays inside its boundary.", workspaceAria: "Three separate company workspaces", workspaceTypes: ["Retail", "Design", "Services"], sharedAdmin: "Shared administration",
  },
  modules: [["Home", "The operating picture"], ["Inbox", "Every customer conversation"], ["Pipeline", "Sales work in motion"], ["Relationships", "People, companies, and history"], ["Ads", "Performance and guarded action"], ["Boards", "Flexible work management"], ["Knowledge", "The company source of truth"]],
  ownership: {
    kicker: "The compounding advantage", lineOne: "Your software.", lineTwo: "Your data.", lineThree: "Your ", emphasis: "AI employee.",
    body: "BobbyOS keeps the system close to the business and the business in control—without locking its future to one SaaS vendor or one AI model.",
    proofs: [["Self-hosted", "Runs on company-controlled infrastructure."], ["Private by design", "Company records stay in the company system."], ["Model freedom", "Choose the AI provider and model that fits."], ["Built to endure", "Backups, encrypted credentials, and signed updates."]],
    closing: "Not another SaaS.", closingSecond: "A company system that becomes yours.", access: "Early access · By approval",
  },
};

export type Copy = typeof en;

const ptBR: Copy = {
  meta: {
    title: "BobbyOS — Sua empresa. Com inteligência própria.",
    description: "Um funcionário de IA privado que transforma conversas em trabalho empresarial estruturado, com memória, acesso à web e automação.",
    ogDescription: "Um funcionário de IA que aprende sobre a empresa, trabalha dentro do BobbyOS, navega na web e automatiza tarefas repetitivas.",
  },
  language: { label: "Idioma", en: "English", pt: "Português (Brasil)", es: "Español (Latinoamérica)" },
  nav: { aria: "Navegação principal", homeAria: "Página inicial do BobbyOS", system: "O sistema", work: "Como funciona", modules: "Módulos", ownership: "Controle", access: "Acesso antecipado" },
  hero: {
    kickerOne: "Funcionário de IA privado", kickerTwo: "Sistema operacional da empresa",
    lineOne: "Sua empresa.", lineTwo: "Com inteligência ", emphasis: "própria.",
    lede: "O BobbyOS dá a um funcionário de IA privado a memória, o software, o acesso à web e as automações necessárias para entender e operar o negócio — tudo em um único sistema controlado pela empresa.",
    stageAria: "As partes do BobbyOS funcionando como uma só", status: "Online", context: "Trabalhando em toda a empresa",
    message: "Encontrei duas campanhas gerando gastos sem oportunidades qualificadas no pipeline. Comparei Anúncios, Pipeline e a política de orçamento atual.",
    actionLabel: "Ação preparada", actionTitle: "Pausar prospecção ampla", approval: "Aguardando sua aprovação", checked: "Contexto verificado",
    contextItems: ["Anúncios", "Pipeline", "Conhecimento"], scroll: "Conheça o sistema",
  },
  systemParts: [
    ["Funcionário de IA privado", "Trabalha dentro da interface do BobbyOS", "part-agent"],
    ["Memória da empresa", "Aprende sobre cada empresa. Nunca esquece.", "part-memory"],
    ["Sistema operacional da empresa", "Trabalho, registros, conhecimento e fluxos", "part-system"],
    ["Computador próprio", "Um ambiente persistente para operar", "part-computer"],
    ["Web aberta", "Pesquisa e execução de tarefas reais", "part-web"],
    ["Automação de tarefas", "Transforma trabalhos repetitivos em sistemas", "part-automation"],
  ],
  system: {
    kicker: "Uma arquitetura diferente", title: "O agente só é poderoso porque todo o sistema funciona em conjunto.",
    body: "Cada camada torna as outras mais úteis. A memória se acumula. O software se adapta. O agente ganha o contexto e as ferramentas para se tornar parte real da empresa.",
    capabilitiesAria: "Principais recursos do funcionário de IA", advantage: "A vantagem do agente",
    advantageTitle: "Ele conhece a empresa — e tem as ferramentas para fazer o trabalho.",
    advantageBody: "Um funcionário contínuo que atua na memória da empresa, nas operações diárias, na web aberta e na automação.",
  },
  capabilities: [
    ["Memória da empresa", "Aprende sobre cada empresa. Nunca esquece.", "Clientes, decisões, padrões, histórico e preferências de trabalho viram contexto empresarial duradouro. Cada espaço de trabalho mantém sua própria memória e seus limites."],
    ["Dentro da interface", "Suas palavras viram trabalho empresarial estruturado.", "O agente vive dentro do BobbyOS, entende a tela que você está vendo e cria ou atualiza Quadros, cartões, registros, conhecimento, agendas e muito mais na mesma conversa."],
    ["Operador da web aberta", "Navega na web como um funcionário de verdade.", "Ele pode pesquisar, comparar, navegar em sites e concluir tarefas no navegador — depois traz as evidências e os resultados de volta ao sistema da empresa."],
    ["Automação de tarefas", "Automatiza qualquer processo repetitivo.", "Transforme pesquisas recorrentes, acompanhamentos, registros e operações em várias etapas em automações supervisionadas, executadas continuamente no computador da própria empresa."],
  ],
  layers: [
    ["A inteligência", "Um funcionário de IA privado", "Não é um chatbot esperando em outra aba. O agente vive dentro do BobbyOS, aprende sobre cada empresa, vê a tela atual, usa a web aberta e executa ou automatiza trabalhos reais mediante aprovação.", "violet"],
    ["O sistema da empresa", "Um lugar conectado para administrar a empresa", "Conversas com clientes, relacionamentos, vendas, publicidade, projetos, conhecimento e registros vivem em módulos conectados — não em assinaturas dispersas. O sistema evolui junto com a empresa.", "cyan"],
    ["A base", "Um computador próprio", "O agente tem um ambiente persistente para trabalhar, lembrar, automatizar e melhorar o software. A empresa ganha uma infraestrutura que é sua — não mais uma licença alugada.", "lime"],
    ["O alcance", "A web aberta", "O BobbyOS guarda o contexto duradouro. O agente também pode pesquisar, navegar e operar ferramentas no navegador — trazendo o mundo externo para um único sistema empresarial confiável.", "coral"],
  ],
  work: {
    kicker: "Um pedido. A empresa inteira se move.", titleBefore: "Ele não responde ao lado do seu trabalho. Ele trabalha ", emphasis: "através", titleAfter: " dele.",
    you: "Você", question: "“Quais campanhas estão desperdiçando dinheiro — e o que devemos fazer agora?”",
    steps: [["Lê os Anúncios", "Gastos, CPA, ritmo e status do provedor"], ["Verifica o Pipeline", "Valor qualificado e receita conquistada"], ["Usa o Conhecimento", "Política de orçamento e contexto da empresa"], ["Prepara a ação", "Mudança exata, impacto e limites"]],
    recommended: "Ação recomendada", action: "Pausar prospecção ampla", result: "US$ 213 gastos · 0 oportunidades qualificadas", approve: "Aprovar mudança", approveAria: "Controle de aprovação de exemplo", confirmation: "Nada muda sem a confirmação de uma pessoa.",
  },
  structure: {
    kicker: "A conversa vira a interface", title: "Descreva o projeto. O agente cria a estrutura de trabalho.",
    body: "Algumas frases viram dados empresariais duradouros: um Quadro, os cartões certos, checklists práticos, responsáveis, dependências e um cronograma. Continue conversando, e o agente mantém o sistema atualizado.",
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
    kicker: "Modo de desenvolvimento · Feito para evoluir", title: "O mesmo funcionário de IA se torna sua equipe de desenvolvimento de software.",
    body: "Descreva o que a empresa precisa na mesma conversa. O agente esclarece o fluxo, coordena o desenvolvimento, pede decisões e entrega uma melhoria testada para revisão. Nada chega à Produção sem sua aprovação.",
    mode: "Modo de desenvolvimento", connected: "Agente conectado", history: "Histórico de desenvolvimento", next: "Pronto para a próxima melhoria",
    historyItems: [["Integração de fornecedores", "Novo fluxo · em andamento"], ["Caixa de entrada unificada", "Melhoria salva"], ["Controles de ação em Anúncios", "Melhoria salva"]],
    user: "Adicione um fluxo de integração de fornecedores com aprovação do responsável e coleta de documentos.",
    agent: "Vou coordenar isso como sua equipe de software: um módulo conectado que compartilha pessoas, arquivos, permissões, atividades e a memória da empresa. Entregarei uma versão funcional para revisão.",
    progress: ["Fluxo esclarecido", "Registros e permissões criados", "Interface para desktop e celular criada", "Testando e preparando a revisão"],
    newCapability: "Nova capacidade da empresa", module: "Integração de fornecedores", moduleBody: "Conectado a Relacionamentos, Quadros, Conhecimento e arquivos.", appears: "Disponível dentro do seu BobbyOS",
  },
  modulesSection: {
    kicker: "Um sistema útil desde o primeiro dia", title: "Todas as partes falam a mesma língua da empresa.", body: "Os módulos são espaços de trabalho distintos, conectados por contexto, permissões, atividades e pelo agente privado.", aria: "Módulos do BobbyOS",
    workspaceKicker: "Uma instalação. Muitas empresas.", workspaceTitle: "Cada espaço mantém sua própria memória, trabalho, identidade e arquivos.", workspaceBody: "O agente acompanha a empresa em que você está. A administração compartilhada continua centralizada. O contexto do negócio permanece dentro dos seus limites.", workspaceAria: "Três espaços de trabalho separados", workspaceTypes: ["Varejo", "Design", "Serviços"], sharedAdmin: "Administração compartilhada",
  },
  modules: [["Início", "A visão operacional"], ["Caixa de entrada", "Todas as conversas com clientes"], ["Pipeline", "O trabalho de vendas em movimento"], ["Relacionamentos", "Pessoas, empresas e histórico"], ["Anúncios", "Desempenho e ações controladas"], ["Quadros", "Gestão flexível do trabalho"], ["Conhecimento", "A fonte da verdade da empresa"]],
  ownership: {
    kicker: "A vantagem que se acumula", lineOne: "Seu software.", lineTwo: "Seus dados.", lineThree: "Seu ", emphasis: "funcionário de IA.",
    body: "O BobbyOS mantém o sistema próximo do negócio e a empresa no controle — sem prender o futuro a um único fornecedor de SaaS ou modelo de IA.",
    proofs: [["Hospedagem própria", "Executado em infraestrutura controlada pela empresa."], ["Privado por design", "Os registros permanecem no sistema da empresa."], ["Liberdade de modelo", "Escolha o provedor e o modelo de IA mais adequados."], ["Feito para durar", "Backups, credenciais criptografadas e atualizações assinadas."]],
    closing: "Não é mais um SaaS.", closingSecond: "É um sistema empresarial que se torna seu.", access: "Acesso antecipado · Mediante aprovação",
  },
};

const es419: Copy = {
  meta: {
    title: "BobbyOS — Tu empresa. Con inteligencia propia.",
    description: "Un empleado de IA privado que convierte conversaciones en trabajo empresarial estructurado, con memoria, acceso web y automatización.",
    ogDescription: "Un empleado de IA que aprende sobre la empresa, trabaja dentro de BobbyOS, navega por la web y automatiza tareas repetitivas.",
  },
  language: { label: "Idioma", en: "English", pt: "Português (Brasil)", es: "Español (Latinoamérica)" },
  nav: { aria: "Navegación principal", homeAria: "Inicio de BobbyOS", system: "El sistema", work: "Cómo funciona", modules: "Módulos", ownership: "Control", access: "Acceso anticipado" },
  hero: {
    kickerOne: "Empleado de IA privado", kickerTwo: "Sistema operativo de la empresa",
    lineOne: "Tu empresa.", lineTwo: "Con inteligencia ", emphasis: "propia.",
    lede: "BobbyOS le da a un empleado de IA privado la memoria, el software, el acceso web y las automatizaciones necesarias para entender y operar el negocio, todo dentro de un único sistema controlado por la empresa.",
    stageAria: "Las partes de BobbyOS funcionando como una sola", status: "En línea", context: "Trabajando en toda la empresa",
    message: "Encontré dos campañas con gastos pero sin oportunidades calificadas en el pipeline. Comparé Anuncios, Pipeline y la política de presupuesto actual.",
    actionLabel: "Acción preparada", actionTitle: "Pausar prospección amplia", approval: "Esperando tu aprobación", checked: "Contexto verificado",
    contextItems: ["Anuncios", "Pipeline", "Conocimiento"], scroll: "Conoce el sistema",
  },
  systemParts: [
    ["Empleado de IA privado", "Trabaja dentro de la interfaz de BobbyOS", "part-agent"],
    ["Memoria de la empresa", "Aprende de cada empresa. Nunca olvida.", "part-memory"],
    ["Sistema operativo de la empresa", "Trabajo, registros, conocimiento y flujos", "part-system"],
    ["Computadora propia", "Un entorno persistente para operar", "part-computer"],
    ["Web abierta", "Investigación y ejecución de tareas reales", "part-web"],
    ["Automatización de tareas", "Convierte el trabajo repetitivo en sistemas", "part-automation"],
  ],
  system: {
    kicker: "Una arquitectura diferente", title: "El agente solo es poderoso porque todo el sistema funciona en conjunto.",
    body: "Cada capa hace más útiles a las demás. La memoria se acumula. El software se adapta. El agente obtiene el contexto y las herramientas para convertirse en una parte real de la empresa.",
    capabilitiesAria: "Principales capacidades del empleado de IA", advantage: "La ventaja del agente",
    advantageTitle: "Conoce la empresa y tiene las herramientas para hacer el trabajo.",
    advantageBody: "Un empleado continuo que trabaja con la memoria empresarial, las operaciones diarias, la web abierta y la automatización.",
  },
  capabilities: [
    ["Memoria de la empresa", "Aprende de cada empresa. Nunca olvida.", "Los clientes, las decisiones, los estándares, el historial y las preferencias de trabajo se convierten en contexto empresarial duradero. Cada espacio conserva su propia memoria y sus límites."],
    ["Dentro de la interfaz", "Tus palabras se convierten en trabajo empresarial estructurado.", "El agente vive dentro de BobbyOS, entiende la pantalla que estás viendo y crea o actualiza Tableros, tarjetas, registros, conocimiento, agendas y más desde la misma conversación."],
    ["Operador de la web abierta", "Navega por la web como un empleado real.", "Puede investigar, comparar, navegar por sitios web y completar tareas en el navegador; luego lleva la evidencia y los resultados de vuelta al sistema de la empresa."],
    ["Automatización de tareas", "Automatiza cualquier proceso repetitivo.", "Convierte la investigación recurrente, el seguimiento, los registros y las operaciones de varios pasos en automatizaciones supervisadas que siguen ejecutándose desde la computadora de la empresa."],
  ],
  layers: [
    ["La inteligencia", "Un empleado de IA privado", "No es un chatbot esperando en otra pestaña. El agente vive dentro de BobbyOS, aprende de cada empresa, ve la pantalla actual, usa la web abierta y ejecuta o automatiza trabajo real con aprobación.", "violet"],
    ["El sistema empresarial", "Un lugar conectado para dirigir la empresa", "Las conversaciones con clientes, las relaciones, las ventas, la publicidad, los proyectos, el conocimiento y los registros viven en módulos conectados, no en suscripciones dispersas. El sistema evoluciona junto con la empresa.", "cyan"],
    ["La base", "Una computadora propia", "El agente tiene un entorno persistente para trabajar, recordar, automatizar y mejorar el software. La empresa obtiene infraestructura propia, no otro asiento rentado.", "lime"],
    ["El alcance", "La web abierta", "BobbyOS conserva el contexto duradero. El agente también puede investigar, navegar y operar herramientas en el navegador, llevando el mundo exterior a un único sistema empresarial confiable.", "coral"],
  ],
  work: {
    kicker: "Una solicitud. Toda la empresa se mueve.", titleBefore: "No responde al margen de tu trabajo. Trabaja ", emphasis: "a través", titleAfter: " de él.",
    you: "Tú", question: "“¿Qué campañas están desperdiciando dinero y qué deberíamos hacer ahora?”",
    steps: [["Lee Anuncios", "Gasto, CPA, ritmo y estado del proveedor"], ["Revisa el Pipeline", "Valor calificado e ingresos ganados"], ["Usa Conocimiento", "Política de presupuesto y contexto empresarial"], ["Prepara la acción", "Cambio exacto, impacto y límites"]],
    recommended: "Acción recomendada", action: "Pausar prospección amplia", result: "US$213 gastados · 0 oportunidades calificadas", approve: "Aprobar cambio", approveAria: "Control de aprobación de ejemplo", confirmation: "Nada cambia sin la confirmación de una persona.",
  },
  structure: {
    kicker: "La conversación se convierte en la interfaz", title: "Describe el proyecto. El agente crea la estructura de trabajo.",
    body: "Unas cuantas frases se convierten en datos empresariales duraderos: un Tablero, las tarjetas correctas, listas prácticas, responsables, dependencias y un calendario. Sigue conversando y el agente mantiene el sistema actualizado.",
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
    kicker: "Modo de desarrollo · Creado para evolucionar", title: "El mismo empleado de IA se convierte en tu equipo de desarrollo de software.",
    body: "Describe lo que la empresa necesita en el mismo chat. El agente aclara el flujo, coordina el desarrollo, solicita decisiones y entrega una mejora probada para revisión. Nada llega a Producción sin tu aprobación.",
    mode: "Modo de desarrollo", connected: "Agente conectado", history: "Historial de desarrollo", next: "Listo para la próxima mejora",
    historyItems: [["Incorporación de proveedores", "Nuevo flujo · en curso"], ["Bandeja de entrada unificada", "Mejora guardada"], ["Controles de acción en Anuncios", "Mejora guardada"]],
    user: "Agrega un flujo de incorporación de proveedores con aprobación del responsable y recopilación de documentos.",
    agent: "Coordinaré esto como tu equipo de software: un módulo conectado que comparte personas, archivos, permisos, actividad y memoria empresarial. Te entregaré una versión funcional para revisión.",
    progress: ["Flujo aclarado", "Registros y permisos creados", "Interfaz para escritorio y móvil creada", "Probando y preparando la revisión"],
    newCapability: "Nueva capacidad empresarial", module: "Incorporación de proveedores", moduleBody: "Conectado con Relaciones, Tableros, Conocimiento y archivos.", appears: "Disponible dentro de tu BobbyOS",
  },
  modulesSection: {
    kicker: "Un sistema útil desde el primer día", title: "Cada parte habla el mismo idioma de la empresa.", body: "Los módulos son espacios de trabajo distintos, conectados por contexto compartido, permisos, actividad y el agente privado.", aria: "Módulos de BobbyOS",
    workspaceKicker: "Una instalación. Muchas empresas.", workspaceTitle: "Cada espacio conserva su propia memoria, trabajo, identidad y archivos.", workspaceBody: "El agente sigue a la empresa en la que estás. La administración compartida permanece centralizada. El contexto empresarial se mantiene dentro de sus límites.", workspaceAria: "Tres espacios de trabajo separados", workspaceTypes: ["Comercio", "Diseño", "Servicios"], sharedAdmin: "Administración compartida",
  },
  modules: [["Inicio", "La visión operativa"], ["Bandeja de entrada", "Cada conversación con clientes"], ["Pipeline", "El trabajo de ventas en marcha"], ["Relaciones", "Personas, empresas e historial"], ["Anuncios", "Rendimiento y acciones controladas"], ["Tableros", "Gestión flexible del trabajo"], ["Conocimiento", "La fuente de verdad de la empresa"]],
  ownership: {
    kicker: "La ventaja que se acumula", lineOne: "Tu software.", lineTwo: "Tus datos.", lineThree: "Tu ", emphasis: "empleado de IA.",
    body: "BobbyOS mantiene el sistema cerca del negocio y a la empresa en control, sin atar su futuro a un solo proveedor de SaaS ni a un solo modelo de IA.",
    proofs: [["Alojamiento propio", "Se ejecuta en infraestructura controlada por la empresa."], ["Privado por diseño", "Los registros permanecen en el sistema de la empresa."], ["Libertad de modelo", "Elige el proveedor y el modelo de IA más adecuados."], ["Creado para durar", "Copias de seguridad, credenciales cifradas y actualizaciones firmadas."]],
    closing: "No es otro SaaS.", closingSecond: "Es un sistema empresarial que se vuelve tuyo.", access: "Acceso anticipado · Con aprobación",
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
