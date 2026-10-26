import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import App from './App.tsx';
import { EDUCATION, EXPERIENCE, FAQ, PROFILE, SERVICES, SOCIAL } from './data';

export function render() {
  return renderToString(
    <StrictMode>
      <App />
    </StrictMode>,
  );
}

const URL = 'https://dimas.space/';

/** Dados estruturados (schema.org) gerados a partir de data.ts, para o Google entender quem é e o que oferece. */
export function structuredData() {
  const person = {
    '@type': 'Person',
    '@id': `${URL}#person`,
    name: PROFILE.name,
    url: URL,
    image: `${URL}${PROFILE.photo}`,
    jobTitle: ['Analista de Dados Sênior', 'Analista de Power BI Sênior', 'Especialista em Power BI'],
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

  const page = {
    '@type': 'ProfilePage',
    '@id': `${URL}#page`,
    url: URL,
    name: 'Dimas de Campos | Analista de Dados Sênior e Power BI Freelancer',
    inLanguage: 'pt-BR',
    mainEntity: { '@id': `${URL}#person` },
    dateModified: new Date().toISOString().slice(0, 10),
    isPartOf: { '@type': 'WebSite', '@id': `${URL}#site`, url: URL, name: 'dimas.space', inLanguage: 'pt-BR' },
  };

  return JSON.stringify({ '@context': 'https://schema.org', '@graph': [page, person, service, faq] });
}
