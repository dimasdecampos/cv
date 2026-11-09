import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App, { type Page } from './App.tsx';
import { DEV_PROJECTS, EDUCATION, EXPERIENCE, FAQ, PROFILE, SERVICES, SOCIAL, WEB_FAQ, WEB_SERVICES } from './data';

export function render(page: Page = 'home') {
  return renderToString(
    <StrictMode>
      <App page={page} />
    </StrictMode>,
  );
}

const URL = 'https://dimas.space/';

/** Dados estruturados (schema.org) gerados a partir de data.ts, para o Google entender quem é e o que oferece. */
export function structuredData(page: Page = 'home') {
  const person = {
    '@type': 'Person',
    '@id': `${URL}#person`,
    name: PROFILE.name,
    url: URL,
    image: `${URL}${PROFILE.photo}`,
    jobTitle: ['Analista de Dados Sênior', 'Analista de Power BI Sênior', 'Especialista em Power BI', 'Web Designer', 'Desenvolvedor Web'],
    description:
      'Analista de dados sênior e especialista em Power BI com mais de 15 anos de experiência. Atende como freelancer em todo o Brasil.',
    email: `mailto:${PROFILE.email}`,
    telephone: `+${PROFILE.whatsapp}`,
    address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
    worksFor: { '@type': 'Organization', name: EXPERIENCE[0].company },
    alumniOf: { '@type': 'CollegeOrUniversity', name: EDUCATION[0].school },
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Analista de Dados Sênior / Power BI',
      occupationLocation: { '@type': 'Country', name: 'Brasil' },
      skills: 'Power BI, DAX, Power Query, Linguagem M, SQL Server, ETL, Dataflows, modelagem dimensional, UI/UX, SVG',
    },
    knowsAbout: [
      'Power BI', 'DAX', 'Power Query', 'Linguagem M', 'SQL', 'SQL Server', 'ETL', 'Dataflows',
      'Modelagem dimensional', 'Business Intelligence', 'Análise de dados', 'Dashboards', 'UI/UX', 'SVG',
      'Web design', 'Criação de sites', 'Desenvolvimento de aplicativos', 'React', 'Next.js', 'TypeScript', 'Android', 'SEO',
    ],
    knowsLanguage: 'pt-BR',
    sameAs: [SOCIAL.linkedin, SOCIAL.instagram, SOCIAL.youtube],
  };

  const service = {
    '@type': 'ProfessionalService',
    '@id': `${URL}#freelancer`,
    name: `${PROFILE.name} · Analista de Dados e Power BI Freelancer`,
    url: `${URL}#servicos`,
    image: `${URL}images/og-image.jpg`,
    description:
      'Serviços freelancer de Power BI e análise de dados: criação de dashboards, otimização de DAX, ETL e SQL, redesign de relatórios e consultoria.',
    founder: { '@id': `${URL}#person` },
    email: PROFILE.email,
    telephone: `+${PROFILE.whatsapp}`,
    address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
    areaServed: { '@type': 'Country', name: 'Brasil' },
    availableLanguage: 'pt-BR',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Serviços de Power BI e análise de dados',
      itemListElement: SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.text, provider: { '@id': `${URL}#person` } },
      })),
    },
  };

  const faq = {
    '@type': 'FAQPage',
    '@id': `${URL}#faq`,
    mainEntity: FAQ.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };

  const profilePage = {
    '@type': 'ProfilePage',
    '@id': `${URL}#page`,
    url: URL,
    name: 'Dimas de Campos | Analista de Dados Sênior e Power BI Freelancer',
    inLanguage: 'pt-BR',
    mainEntity: { '@id': `${URL}#person` },
    dateModified: new Date().toISOString(),
    isPartOf: { '@type': 'WebSite', '@id': `${URL}#site`, url: URL, name: 'dimas.space', inLanguage: 'pt-BR' },
  };

  if (page === 'sites') return sitesData(person);
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': [profilePage, person, service, faq] });
}

const SITES_URL = `${URL}criacao-de-sites/`;

/** Dados estruturados da página /criacao-de-sites/ (web design, sites e aplicativos). */
function sitesData(person: object) {
  const service = {
    '@type': 'ProfessionalService',
    '@id': `${SITES_URL}#servico`,
    name: `${PROFILE.name} · Web Designer e Criação de Sites e Aplicativos`,
    url: SITES_URL,
    image: `${URL}images/og-image.jpg`,
    description:
      'Criação de sites, lojas virtuais, landing pages, aplicativos web e Android e sistemas sob medida, com SEO para aparecer no Google. Atendimento remoto em todo o Brasil.',
    founder: { '@id': `${URL}#person` },
    email: PROFILE.email,
    telephone: `+${PROFILE.whatsapp}`,
    address: { '@type': 'PostalAddress', addressLocality: 'São Paulo', addressRegion: 'SP', addressCountry: 'BR' },
    areaServed: { '@type': 'Country', name: 'Brasil' },
    availableLanguage: 'pt-BR',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Criação de sites e aplicativos',
      itemListElement: WEB_SERVICES.map((s) => ({
        '@type': 'Offer',
        itemOffered: { '@type': 'Service', name: s.title, description: s.text, provider: { '@id': `${URL}#person` } },
      })),
    },
  };

  const projects = {
    '@type': 'ItemList',
    '@id': `${SITES_URL}#projetos`,
    name: 'Sites e aplicativos desenvolvidos por Dimas de Campos',
    itemListElement: DEV_PROJECTS.map((p, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      item: {
        '@type': 'CreativeWork',
        name: p.title,
        description: p.description,
        image: `${URL}${p.image}`,
        ...(p.url ? { url: p.url } : {}),
        creator: { '@id': `${URL}#person` },
        keywords: p.tech.join(', '),
      },
    })),
  };

  const faq = {
    '@type': 'FAQPage',
    '@id': `${SITES_URL}#faq`,
    mainEntity: WEB_FAQ.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  const page = {
    '@type': 'WebPage',
    '@id': `${SITES_URL}#page`,
    url: SITES_URL,
    name: 'Criação de Sites e Aplicativos | Web Designer · Dimas de Campos',
    inLanguage: 'pt-BR',
    about: { '@id': `${SITES_URL}#servico` },
    mainEntity: { '@id': `${SITES_URL}#servico` },
    dateModified: new Date().toISOString(),
    isPartOf: { '@type': 'WebSite', '@id': `${URL}#site`, url: URL, name: 'dimas.space', inLanguage: 'pt-BR' },
    breadcrumb: {
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Início', item: URL },
        { '@type': 'ListItem', position: 2, name: 'Criação de sites e aplicativos', item: SITES_URL },
      ],
    },
  };

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': [page, service, person, projects, faq] });
}
