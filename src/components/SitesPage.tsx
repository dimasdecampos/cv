import { DEV_PROJECTS, WEB_FAQ, WEB_SERVICES, WEB_STEPS, whatsappLink } from '../data';
import { Contact } from './Contact';
import { DemoSites, DevProjects } from './DevProjects';
import { FaqList, ServiceList } from './Sections';
import { Section, btn } from './ui';

// Página /criacao-de-sites/: fica uma pasta abaixo da raiz, por isso as imagens usam "../"
const BASE = '../';
const QUOTE = 'Olá Dimas! Vi seu site e gostaria de um orçamento para criar um site ou aplicativo.';

export function SitesPage() {
  return (
    <>
      <SitesHero />
      <DevProjects
        base={BASE}
        id="projetos"
        title="Projetos de sites e aplicativos no ar"
        intro="Tudo aqui foi desenvolvido por mim, do layout à publicação. Abra, navegue e veja se é o tipo de trabalho que você procura."
        full
        band
      />
      <Section
        id="servicos"
        title="O que eu faço para o seu negócio"
        intro="Do site de uma página ao aplicativo com login e banco de dados. Você fala direto comigo, do começo ao fim."
      >
        <ServiceList items={WEB_SERVICES} columns />
      </Section>
      <DemoSites base={BASE} />
      <Section id="como-funciona" title="Do primeiro contato ao site no ar">
        <ol className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {WEB_STEPS.map((s, i) => (
            <li key={s.title} className="border-t-2 border-fg pt-4">
              <p className="font-display text-sm font-semibold text-subtle">Passo {i + 1}</p>
              <h3 className="mt-1 text-xl font-semibold text-fg">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </Section>
      <Section id="faq" title="Dúvidas sobre criação de sites e aplicativos" className="no-print" band>
        <FaqList items={WEB_FAQ} />
      </Section>
      <Contact
        title="Vamos colocar o seu negócio na internet?"
        intro="Conte a sua ideia. Respondo com perguntas objetivas e envio uma proposta com prazo e valor fechado."
        whatsappText={QUOTE}
        origem="Orçamento de site ou aplicativo"
        placeholder="Ex.: site para minha loja"
      />
    </>
  );
}

function SitesHero() {
  const live = DEV_PROJECTS.filter((p) => p.url).length;
  return (
    <section id="inicio" className="pb-16 pt-28 sm:pb-24 sm:pt-36">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <h1 className="max-w-4xl text-[2.5rem] font-extrabold leading-[1.05] text-fg sm:text-6xl">
          Criação de sites, lojas virtuais e aplicativos para o seu negócio.
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted">
          Sou Dimas de Campos, web designer e desenvolvedor em São Paulo. Faço sites rápidos, que funcionam bem no celular e
          aparecem no Google, e também aplicativos e sistemas sob medida. Atendo todo o Brasil, de forma remota.
        </p>
        <div className="no-print mt-8 flex flex-wrap gap-3">
          <a href={whatsappLink(QUOTE)} target="_blank" rel="noopener noreferrer" className={btn.primary}>
            Pedir orçamento pelo WhatsApp
          </a>
          <a href="#projetos" className={btn.secondary}>
            Ver os {DEV_PROJECTS.length} projetos
          </a>
        </div>
        <p className="mt-6 text-[15px] text-muted">
          {live} deles estão no ar agora, para você abrir e testar.
        </p>
      </div>
    </section>
  );
}
