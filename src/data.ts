// Todo o conteúdo do site fica aqui. Para atualizar o currículo, edite só este arquivo.

export const PROFILE = {
  name: 'Dimas de Campos',
  role: 'Analista de Power BI Sênior',
  tagline: 'Power BI · DAX · SQL · React · Apps',
  location: 'São Paulo, SP · Brasil',
  site: 'dimas.space',
  photo: 'images/profile.jpg',
  email: 'dimas.damiao@hotmail.com',
  phoneDisplay: '(11) 9 3389-6026',
  whatsapp: '5511933896026',
  cv: 'Curriculum_Dimas-de-Campos-01-2021.docx',
  dataCareerStart: 2010,
};

export const SOCIAL = {
  linkedin: 'https://www.linkedin.com/in/dimasdecampos/',
  youtube: 'https://www.youtube.com/channel/UCFEAz5mNjnyMKjvlqAsamMg',
  instagram: 'https://www.instagram.com/dimasdecampos/',
};

export const whatsappLink = (text?: string) =>
  `https://wa.me/${PROFILE.whatsapp}${text ? `?text=${encodeURIComponent(text)}` : ''}`;

export const NAV = [
  { id: 'sobre', label: 'Sobre' },
  { id: 'servicos', label: 'Freelancer' },
  { id: 'experiencia', label: 'Experiência' },
  { id: 'habilidades', label: 'Habilidades' },
  { id: 'portfolio', label: 'Portfólio' },
  { id: 'contato', label: 'Contato' },
] as const;

export const SITES_NAV = [
  { id: 'servicos', label: 'Serviços' },
  { id: 'projetos', label: 'Projetos' },
  { id: 'modelos', label: 'Modelos' },
  { id: 'como-funciona', label: 'Como funciona' },
  { id: 'faq', label: 'Dúvidas' },
  { id: 'contato', label: 'Contato' },
] as const;

// Serviços oferecidos como freelancer (também vão para os dados estruturados do Google)
export const SERVICES = [
  {
    icon: 'chart',
    title: 'Dashboards em Power BI',
    text: 'Criação de dashboards e relatórios do zero: levantamento de KPIs, modelagem, DAX, layout e publicação no Power BI Service.',
  },
  {
    icon: 'zap',
    title: 'Otimização de DAX e modelos',
    text: 'Relatório lento ou com números estranhos? Reviso o modelo de dados, as medidas DAX e as atualizações para ganhar performance e confiança.',
  },
  {
    icon: 'database',
    title: 'ETL, SQL e integração de dados',
    text: 'Consultas SQL, Power Query (M) e Dataflows para juntar fontes como SQL Server, Excel e CSV em uma base única e confiável.',
  },
  {
    icon: 'palette',
    title: 'Redesign UI/UX de relatórios',
    text: 'Transformo relatórios confusos em painéis claros, com design system, ícones SVG, temas e navegação pensada para quem decide.',
  },
  {
    icon: 'sheet',
    title: 'Do Excel para o Power BI',
    text: 'Migração de planilhas e relatórios manuais para dashboards automatizados, com atualização agendada e menos retrabalho.',
  },
  {
    icon: 'users',
    title: 'Consultoria e mentoria',
    text: 'Apoio a times de dados e analistas: boas práticas de modelagem, DAX, governança de BI e revisão de projetos.',
  },
  {
    icon: 'smartphone',
    title: 'Criação de aplicativos',
    text: 'Aplicativos web e mobile do zero, instaláveis (PWA) e responsivos: da ideia e do protótipo à publicação, com foco em uma experiência simples de usar.',
  },
  {
    icon: 'layers',
    title: 'Sistemas e painéis sob medida',
    text: 'Sistemas web com login, cadastros, APIs e painéis de dados feitos com React e TypeScript, ligados ao seu banco de dados ou às suas planilhas.',
  },
  {
    icon: 'globe',
    title: 'Sites modernos e automações',
    text: 'Sites e landing pages rápidos, otimizados para o Google, e automações que tiram tarefas manuais do dia a dia da equipe.',
  },
] as const;

export const FAQ = [
  {
    q: 'Você atende como freelancer?',
    a: 'Sim. Além do trabalho como Analista de Power BI Sênior, atendo empresas e profissionais em projetos freelancer de Power BI e análise de dados, 100% remoto, para todo o Brasil.',
  },
  {
    q: 'Como funciona um projeto freelancer de Power BI?',
    a: 'Começa com uma conversa para entender o objetivo e as fontes de dados. Depois envio escopo, prazo e orçamento. Com o aceite, sigo as etapas: modelagem, protótipo do layout, desenvolvimento, validação com você e publicação.',
  },
  {
    q: 'Quanto tempo leva para fazer um dashboard?',
    a: 'Depende da quantidade de fontes de dados, páginas e regras de negócio. Depois da primeira conversa eu envio um prazo realista para o seu caso.',
  },
  {
    q: 'Você também melhora relatórios que já existem?',
    a: 'Sim. Faço otimização de performance, correção e reescrita de medidas DAX, ajustes no modelo de dados e redesign visual de relatórios existentes.',
  },
  {
    q: 'Você também desenvolve sites e aplicativos?',
    a: 'Sim. Também trabalho como desenvolvedor, com tecnologias modernas como React, TypeScript, Vite e Tailwind. Crio sites, sistemas web e aplicativos (web, PWA e mobile) sob medida, inclusive integrados aos seus dados e dashboards.',
  },
  {
    q: 'Com quais fontes de dados você trabalha?',
    a: 'SQL Server, Excel, CSV, Dataflows e as demais fontes que o Power BI conecta. Também automatizo coletas com PowerShell quando necessário.',
  },
];

export const PILLARS = [
  {
    icon: 'chart',
    title: 'Power BI & DAX',
    text: 'Modelagem star schema, inteligência temporal, medidas dinâmicas e parametrização avançada de relatórios.',
  },
  {
    icon: 'database',
    title: 'ETL & SQL',
    text: 'Consultas SQL otimizadas, Dataflows, Power Query (M) e automação com PowerShell para bases volumosas.',
  },
  {
    icon: 'palette',
    title: 'UI/UX para dashboards',
    text: 'Design systems para BI, hierarquia visual clara, contraste acessível e iconografia própria em SVG.',
  },
  {
    icon: 'code',
    title: 'Dev web & aplicativos',
    text: 'Desenvolvimento com React, TypeScript e Tailwind: sites, sistemas, aplicativos e visuais personalizados, como animações Lottie dentro do Power BI.',
  },
] as const;

export interface Job {
  role: string;
  company: string;
  type?: string;
  location: string;
  /** formato AAAA-MM */
  start: string;
  /** formato AAAA-MM; vazio = emprego atual */
  end?: string;
  summary?: string;
  highlights?: string[];
  tags: string[];
}

export const EXPERIENCE: Job[] = [
  {
    role: 'Analista de Power BI Sênior',
    company: 'levva',
    type: 'Tempo integral',
    location: 'Campinas, SP · Remoto',
    start: '2023-04',
    summary:
      'Arquitetura, modelagem e entrega de soluções corporativas de Business Intelligence em larga escala, com foco em performance analítica, governança de dados e excelência visual.',
    tags: ['Power BI', 'DAX avançado', 'Modelagem dimensional', 'Governança de BI', 'UI/UX'],
  },
  {
    role: 'Analista de Business Intelligence',
    company: 'Sotran Logística',
    type: 'Tempo integral',
    location: 'São Paulo, SP',
    start: '2021-03',
    end: '2023-03',
    highlights: [
      'Definição do design system usado em todos os dashboards corporativos.',
      'Criação e manutenção de Dataflows e pipelines de ETL.',
      'Visual personalizado para usar animações Lottie no Power BI.',
      'Análise de cohort para acompanhar comportamento e retenção.',
      'Coleta e automação de informações com scripts PowerShell.',
      'Ícones dinâmicos em SVG, medidas DAX e transformações em linguagem M.',
    ],
    tags: ['SQL', 'Dataflows', 'DAX', 'Linguagem M', 'PowerShell', 'Lottie', 'Cohort'],
  },
  {
    role: 'Analista de BI',
    company: 'Edenred Brasil | Repom S/A',
    location: 'Barueri, SP',
    start: '2019-06',
    end: '2021-03',
    highlights: [
      'Desenvolvimento e manutenção contínua de dashboards no Power BI.',
      'Definição do padrão de layout e usabilidade dos dashboards.',
      'Consultas SQL para extração e consolidação de bases corporativas.',
      'Ícones dinâmicos em SVG, medidas DAX e tratamento de dados em M.',
    ],
    tags: ['Power BI', 'DAX', 'SQL Server', 'Linguagem M', 'SVG'],
  },
  {
    role: 'Técnico em Desapropriação Sênior',
    company: 'Alta Engenharia de Infraestrutura',
    location: 'São Paulo, SP',
    start: '2010-09',
    end: '2019-04',
    summary:
      'Planilhas complexas com cálculos analíticos, relatórios gerenciais e gráficos no Power BI, além de conversão, tratamento e análise de coordenadas geográficas.',
    tags: ['Power BI', 'Excel avançado', 'Tratamento de dados', 'Geoprocessamento'],
  },
  {
    role: 'Design gráfico, web e comunicação',
    company: 'UFRB (Proext e TOPA) · Bentivi Web Design',
    location: 'Cruz das Almas, BA',
    start: '2008-01',
    end: '2010-08',
    highlights: [
      'Proext / UFRB (jun 2009 – ago 2010): digitador, designer gráfico e web designer.',
      'TOPA – Todos Pela Alfabetização / UFRB (set 2009 – ago 2010): assessoria de comunicação e fotografia.',
      'Bentivi Web Design (jan – set 2008): proprietário; CSS, templates, WordPress e marketing.',
    ],
    tags: ['Design gráfico', 'WordPress', 'HTML/CSS', 'Fotografia'],
  },
];

export type Level = 'Avançado' | 'Proficiente' | 'Intermediário';

export const SKILLS: { group: string; icon: 'chart' | 'palette' | 'code' | 'smartphone'; items: { name: string; level: Level }[] }[] = [
  {
    group: 'Business Intelligence',
    icon: 'chart',
    items: [
      { name: 'Power BI (Desktop & Service)', level: 'Avançado' },
      { name: 'DAX', level: 'Avançado' },
      { name: 'Power Query / Linguagem M', level: 'Avançado' },
      { name: 'Modelagem dimensional', level: 'Avançado' },
      { name: 'Excel avançado', level: 'Avançado' },
      { name: 'SQL Server', level: 'Proficiente' },
      { name: 'Dataflows / ETL', level: 'Proficiente' },
      { name: 'PowerShell', level: 'Intermediário' },
    ],
  },
  {
    group: 'UI/UX & Design',
    icon: 'palette',
    items: [
      { name: 'Design de dashboards', level: 'Avançado' },
      { name: 'Ícones e visuais SVG', level: 'Avançado' },
      { name: 'Arquitetura de informação', level: 'Proficiente' },
      { name: 'Adobe XD / prototipagem', level: 'Proficiente' },
      { name: 'Inkscape', level: 'Proficiente' },
      { name: 'Animações Lottie', level: 'Intermediário' },
    ],
  },
  {
    group: 'Web',
    icon: 'code',
    items: [
      { name: 'HTML5 semântico', level: 'Avançado' },
      { name: 'CSS3 & layouts responsivos', level: 'Proficiente' },
      { name: 'Bootstrap / Tailwind', level: 'Proficiente' },
      { name: 'JavaScript', level: 'Intermediário' },
      { name: 'PHP', level: 'Intermediário' },
    ],
  },
  {
    group: 'Desenvolvimento & Apps',
    icon: 'smartphone',
    items: [
      { name: 'React', level: 'Intermediário' },
      { name: 'TypeScript', level: 'Intermediário' },
      { name: 'Vite & Tailwind CSS', level: 'Intermediário' },
      { name: 'PWA / apps instaláveis', level: 'Intermediário' },
      { name: 'APIs e integrações', level: 'Intermediário' },
      { name: 'Git & GitHub (CI/CD)', level: 'Intermediário' },
    ],
  },
];

export type Category = 'dashboard' | 'svg' | 'web';

export const CATEGORIES: { id: 'all' | Category; label: string }[] = [
  { id: 'all', label: 'Todos' },
  { id: 'dashboard', label: 'Dashboards' },
  { id: 'svg', label: 'SVG & UI' },
  { id: 'web', label: 'Web' },
];

export interface Project {
  id: string;
  title: string;
  category: Category;
  label: string;
  image: string;
  description: string;
  tech: string[];
  highlight?: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'dash-faturamento',
    title: 'Faturamento, projeções e top clientes',
    category: 'dashboard',
    label: 'Power BI · Comercial',
    image: 'projetos/projeto-03-jpg.webp',
    description:
      'Página principal com faturamento diário, MTD e YTD, projeção vs. meta com velocímetros e ranking de clientes com variação e attrition.',
    tech: ['Power BI', 'DAX', 'Inteligência temporal', 'UI/UX'],
  },
  {
    id: 'dash-postos',
    title: 'Abastecimento e saque na rede de postos',
    category: 'dashboard',
    label: 'Power BI · Meios de pagamento',
    image: 'projetos/projeto-02-jpg.webp',
    description:
      'Visão geral de abastecimento e saques por período, postos ativos, mapas por cidade e estado e ranking das cidades com mais transações.',
    tech: ['Power BI', 'SQL Server', 'Mapas', 'DAX'],
  },
  {
    id: 'dash-ferrovias',
    title: 'Monitoramento de invasões em ferrovias',
    category: 'dashboard',
    label: 'Power BI · Geoprocessamento',
    image: 'projetos/projeto-06-jpg.webp',
    description:
      'Acompanhamento de invasões na faixa de domínio das ferrovias FIOL e FNS: mapa, situação de cada ocorrência, responsáveis e desobstruções.',
    tech: ['Power BI', 'Coordenadas geográficas', 'Excel', 'Mapas'],
    highlight: '1.947 invasões mapeadas',
  },
  {
    id: 'dash-vendas-dark',
    title: 'Vendas por localização (tema escuro)',
    category: 'dashboard',
    label: 'Power BI · Vendas',
    image: 'projetos/projeto-07-jpg.webp',
    description: 'Painel em tema escuro com mapa de vendas, comparativos MTD vs. meses anteriores e evolução por ano e categoria.',
    tech: ['Power BI', 'DAX', 'Design escuro', 'Mapas'],
  },
  {
    id: 'dash-performance',
    title: 'Performance de carteira de clientes',
    category: 'dashboard',
    label: 'Power BI · KPIs',
    image: 'projetos/projeto-04-jpg.webp',
    description: 'Tabela analítica com pico, média, projeção e variação mês a mês por cliente, com ícones condicionais de tendência.',
    tech: ['Power BI', 'DAX', 'Formatação condicional'],
  },
  {
    id: 'dash-temas',
    title: 'Dashboard modelo com troca de temas',
    category: 'dashboard',
    label: 'Power BI · Design system',
    image: 'projetos/projeto-09-jpg.webp',
    description:
      'Relatório de exemplo com cartões, vendas por produto, mapa e dispersão, preparado para trocar a paleta inteira do relatório.',
    tech: ['Power BI', 'Temas JSON', 'SVG', 'UI/UX'],
  },
  {
    id: 'dash-populacao',
    title: 'Indicadores populacionais (dados de exemplo)',
    category: 'dashboard',
    label: 'Power BI · Dados públicos',
    image: 'projetos/projeto-01-png.webp',
    description: 'Exploração de dados públicos por país, idade, geração e gênero, com filtros, mapa, treemap e funil.',
    tech: ['Power BI', 'Power Query', 'DAX', 'Mapas'],
  },
  {
    id: 'dash-modelo',
    title: 'Modelagem de dados',
    category: 'dashboard',
    label: 'Modelagem dimensional',
    image: 'projetos/projeto-01-jpg.webp',
    description: 'Modelo relacional de um projeto de BI com tabelas fato e dimensão organizadas para desempenho.',
    tech: ['Star schema', 'Power BI', 'SQL'],
  },
  {
    id: 'svg-catalogo',
    title: 'Catálogo de ícones SVG para Power BI',
    category: 'svg',
    label: 'SVG · Power BI',
    image: 'projetos/projeto-04-png.webp',
    description:
      'Relatório que reúne e categoriza ícones em SVG para uso direto em medidas DAX, com contagem por categoria e cartões coloridos.',
    tech: ['SVG', 'DAX', 'Power BI'],
    highlight: '3.052 ícones catalogados',
  },
  {
    id: 'svg-busca',
    title: 'Busca de ícones SVG',
    category: 'svg',
    label: 'SVG · UI',
    image: 'projetos/projeto-05-png.webp',
    description: 'Página de busca e filtro por categoria para encontrar rapidamente o ícone certo dentro do relatório.',
    tech: ['SVG', 'Power BI', 'UX'],
  },
  {
    id: 'svg-cores',
    title: 'Cores e ícones dinâmicos',
    category: 'svg',
    label: 'Design system',
    image: 'projetos/projeto-03-png.webp',
    description: 'Menu lateral e ícones que mudam de cor conforme o tema escolhido, mantendo o padrão visual em todo o relatório.',
    tech: ['SVG', 'Temas', 'DAX'],
  },
  {
    id: 'svg-cards',
    title: 'Cartões de KPI com sparklines',
    category: 'svg',
    label: 'UI para BI',
    image: 'projetos/projeto-06-png.webp',
    description: 'Cartões com mini gráficos e gradientes feitos em SVG, combinados a gráficos de barras e rosca.',
    tech: ['SVG', 'DAX', 'UI design'],
  },
  {
    id: 'svg-icones',
    title: 'Biblioteca de ícones por categoria',
    category: 'svg',
    label: 'Design vetorial',
    image: 'projetos/projeto-08-jpg.webp',
    description: 'Conjunto de ícones vetoriais organizados por categoria, em versões de cor para fundo claro e escuro.',
    tech: ['SVG', 'Inkscape'],
  },
  {
    id: 'web-portal',
    title: 'Portal web de dashboards',
    category: 'web',
    label: 'Sistema web',
    image: 'projetos/0.webp',
    description: 'Sistema com login e menu lateral que reúne os relatórios Power BI da empresa em um só lugar.',
    tech: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  },
  {
    id: 'web-admin',
    title: 'Painel administrativo de usuários',
    category: 'web',
    label: 'Sistema web',
    image: 'projetos/projeto-02-png.webp',
    description: 'Tela de cadastro e administração de usuários do portal, com níveis de acesso.',
    tech: ['PHP', 'Bootstrap'],
  },
  {
    id: 'web-balainho',
    title: 'Balainho da Duda — loja online',
    category: 'web',
    label: 'E-commerce',
    image: 'projetos/balainho.webp',
    description: 'Loja virtual de moda e acessórios com banners, vitrine de produtos e carrinho (desde 2016).',
    tech: ['E-commerce', 'Web design', 'CSS'],
  },
  {
    id: 'web-balainho-vitrine',
    title: 'Balainho da Duda — vitrine',
    category: 'web',
    label: 'E-commerce',
    image: 'projetos/balainho3.webp',
    description: 'Vitrine de bijuterias e camisetas com preço e botão de compra em destaque.',
    tech: ['E-commerce', 'UI', 'CSS'],
  },
  {
    id: 'web-subettini',
    title: 'SuBettini Viagens e Turismo',
    category: 'web',
    label: 'Web design',
    image: 'projetos/subettini.webp',
    description: 'Site de agência de turismo com banner de destinos nacionais e internacionais.',
    tech: ['HTML5', 'CSS3', 'JavaScript', 'Responsivo'],
  },
  {
    id: 'web-subettini-pacotes',
    title: 'SuBettini — pacotes de viagem',
    category: 'web',
    label: 'Web design',
    image: 'projetos/subettini2.webp',
    description: 'Grade de pacotes com foto, preço, duração e destino.',
    tech: ['HTML5', 'CSS3', 'UI'],
  },
];

// Sites, sistemas e aplicativos (seção "Sites & Apps" e página /criacao-de-sites/).
// Imagens em public/projetos/dev/ (1280x800, .webp).
export interface DevProject {
  id: string;
  title: string;
  kind: string;
  image: string;
  description: string;
  highlights: string[];
  tech: string[];
  url?: string;
  status?: string;
}

export const DEV_PROJECTS: DevProject[] = [
  {
    id: 'voando-perto',
    title: 'Voando Perto',
    kind: 'Aplicativo web (PWA) · Observação de aves',
    image: 'projetos/dev/voando.webp',
    description:
      'App para observadores de aves: mostra as espécies registradas perto de você, raridades, hotspots e cantos, com dados do eBird, fotos do iNaturalist e sons do xeno-canto.',
    highlights: ['Geolocalização e mapa interativo', 'Instalável no celular (PWA)', 'Integração com 3 APIs científicas'],
    tech: ['Next.js', 'React', 'TypeScript', 'APIs REST', 'Leaflet', 'PWA'],
    url: 'https://voando-perto.vercel.app/',
  },
  {
    id: 'monitor-rios',
    title: 'Monitor dos Rios',
    kind: 'Painel em tempo real · Dados públicos',
    image: 'projetos/dev/rios.webp',
    description:
      'Nível e chuva dos rios Paraitinga e Paraibuna em tempo real, com dados da ANA, histórico de anos anteriores, previsão, avisos de cheia no celular e modo TV.',
    highlights: ['Atualização automática dos dados', 'Avisos de cheia no celular', 'Gráficos e comparação entre anos'],
    tech: ['JavaScript', 'Python', 'Gráficos', 'Notificações push', 'PWA'],
    url: 'https://dimasdecampos.github.io/monitora-rio/',
  },
  {
    id: 'temaqui',
    title: 'TemAqui',
    kind: 'Marketplace local · Estilo OLX',
    image: 'projetos/dev/temaqui.webp',
    description:
      'Classificados da cidade para comprar, vender e anunciar o que procura. O sistema cruza procuras e ofertas, avisa quando há match e tem chat entre comprador e vendedor.',
    highlights: ['Login com Google', 'Anúncios com fotos e chat', 'Painel de administração e moderação'],
    tech: ['React', 'TypeScript', 'Vite', 'Supabase', 'PostgreSQL'],
    url: 'https://classificadosslp.vercel.app/',
  },
  {
    id: 'mause',
    title: 'Mause',
    kind: 'Aplicativo Android',
    image: 'projetos/dev/mause.webp',
    description:
      'App que transforma o celular em mouse e touchpad Bluetooth, com movimento automático em intervalos aleatórios. Sem cadastro, sem anúncios e sem coleta de dados.',
    highlights: ['Funciona como mouse Bluetooth real', 'Roda com a tela apagada', 'Compra dentro do app (versão Pro)'],
    tech: ['Kotlin', 'Android', 'Bluetooth HID', 'Google Play'],
    status: 'Em fase de testes na Google Play',
  },
  {
    id: 'refugio',
    title: 'Refúgio Beira Rio',
    kind: 'Site institucional · Turismo',
    image: 'projetos/dev/refugio.webp',
    description:
      'Site de um refúgio às margens do rio em Natividade da Serra (SP), com fotos panorâmicas 360°, atividades, localização e contato direto pelo WhatsApp.',
    highlights: ['Domínio próprio', 'Otimizado para o Google (SEO)', 'Fotos panorâmicas 360°'],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'SEO'],
    url: 'https://refugiobeirario.com/',
  },
  {
    id: 'subettini-croche',
    title: 'Subettini Crochê',
    kind: 'Site vitrine · Artesanato',
    image: 'projetos/dev/croche.webp',
    description:
      'Site de uma artesã de crochê com história, vitrine de peças com filtros, encomendas, depoimentos e botão de WhatsApp sempre à mão.',
    highlights: ['Vitrine com filtros por categoria', 'Pedidos pelo WhatsApp', 'Rápido e responsivo'],
    tech: ['HTML5', 'CSS3', 'JavaScript', 'GitHub Pages'],
    url: 'https://dimasdecampos.github.io/crochet/',
  },
  {
    id: 'estoura',
    title: 'Estoura',
    kind: 'Rede social · Comunidade',
    image: 'projetos/dev/estoura.webp',
    description:
      'Rede para encontrar pessoas com os mesmos interesses: cada interesse é uma bolha, e o app mostra quem curte o mesmo, com grupos, eventos e mensagens em tempo real.',
    highlights: ['Login com Google', 'Mensagens em tempo real', 'Notificações no celular'],
    tech: ['Next.js', 'JavaScript', 'Supabase', 'Realtime', 'Vercel'],
    url: 'https://estoura.vercel.app/',
  },
];

// Sites de demonstração (negócios fictícios), em public/modelos/
export const DEMO_SITES = [
  {
    id: 'restaurante',
    title: 'Restaurante e lanchonete',
    name: 'Sabor da Serra',
    image: 'projetos/dev/modelo-restaurante.webp',
    description: 'Cardápio com categorias, pedido pelo WhatsApp, horários, avaliações e mapa.',
    url: 'modelos/restaurante/',
  },
  {
    id: 'loja',
    title: 'Loja e comércio local',
    name: 'Empório da Vila',
    image: 'projetos/dev/modelo-loja.webp',
    description: 'Vitrine de produtos com filtro, sacola e pedido finalizado pelo WhatsApp.',
    url: 'modelos/loja/',
  },
];

// Página /criacao-de-sites/
export const WEB_SERVICES = [
  {
    icon: 'globe',
    title: 'Sites institucionais e landing pages',
    text: 'Site profissional para a sua empresa ou serviço: rápido, bonito no celular e pronto para aparecer no Google.',
  },
  {
    icon: 'store',
    title: 'Loja virtual e catálogo',
    text: 'Vitrine de produtos com fotos, preços e pedido pelo WhatsApp ou carrinho, sem mensalidade de plataforma.',
  },
  {
    icon: 'smartphone',
    title: 'Aplicativos web e Android',
    text: 'Apps instaláveis no celular (PWA) e apps Android nativos, da ideia e do protótipo até a publicação.',
  },
  {
    icon: 'layers',
    title: 'Sistemas sob medida',
    text: 'Marketplaces, áreas de cliente, cadastros e painéis administrativos com login, banco de dados e permissões.',
  },
  {
    icon: 'palette',
    title: 'Redesign de sites antigos',
    text: 'Seu site está lento ou ultrapassado? Modernizo o visual e a estrutura, inclusive saindo do Wix e de plataformas parecidas.',
  },
  {
    icon: 'search',
    title: 'SEO e presença no Google',
    text: 'Títulos, descrições, dados estruturados, sitemap, velocidade e Google Search Console configurados desde o início.',
  },
] as const;

export const WEB_STEPS = [
  { title: 'Conversa', text: 'Entendo o seu negócio, o público e o que o site ou app precisa resolver.' },
  { title: 'Proposta', text: 'Envio escopo, prazo e orçamento fechado, sem surpresas.' },
  { title: 'Protótipo e desenvolvimento', text: 'Você acompanha o layout e as páginas tomando forma e pede ajustes.' },
  { title: 'Publicação', text: 'Coloco no ar com domínio, HTTPS e Google configurados, e ensino a atualizar.' },
];

export const WEB_FAQ = [
  {
    q: 'Quanto custa criar um site?',
    a: 'Depende do número de páginas e das funções (catálogo, formulários, área de login). Depois de uma conversa rápida eu envio um orçamento fechado para o seu caso.',
  },
  {
    q: 'O site vai aparecer no Google?',
    a: 'Sim. Todo site sai com boas práticas de SEO: títulos e descrições por página, dados estruturados, sitemap, carregamento rápido e cadastro no Google Search Console.',
  },
  {
    q: 'Vou precisar pagar mensalidade?',
    a: 'Na maioria dos casos, não há mensalidade de plataforma: os sites ficam em hospedagens gratuitas ou baratas, como GitHub Pages e Vercel. O custo fixo costuma ser só o domínio .com.br, renovado uma vez por ano.',
  },
  {
    q: 'Você cria aplicativos para celular?',
    a: 'Sim. Crio aplicativos web instaláveis (PWA), que funcionam em Android e iPhone, e aplicativos Android nativos em Kotlin para a Google Play.',
  },
  {
    q: 'Quanto tempo leva para ficar pronto?',
    a: 'Um site simples de uma página pode ficar pronto em poucos dias; sites maiores, lojas e aplicativos levam algumas semanas. O prazo vai na proposta.',
  },
  {
    q: 'Você atende fora de São Paulo?',
    a: 'Sim. O atendimento é 100% remoto, por WhatsApp e videochamada, para todo o Brasil.',
  },
];

export const EDUCATION = [
  {
    kind: 'Graduação',
    title: 'Big Data e Inteligência Analítica',
    school: 'Universidade Anhembi Morumbi',
    period: '2019 – 2021',
    text: 'Estruturação de dados, governança, mineração e visualização analítica para negócios.',
  },
  {
    kind: 'Ensino médio',
    title: 'E.E. Monsenhor Ignácio Gióia',
    school: 'São Luiz do Paraitinga, SP',
    period: 'Concluído em 2004',
    text: 'Base formativa com participação em projetos de tecnologia e informática.',
  },
];
