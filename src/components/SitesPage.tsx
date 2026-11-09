import { ArrowDown, ArrowUpRight, BarChart3, ChevronDown, MessageCircle } from 'lucide-react';
import { DEV_PROJECTS, WEB_FAQ, WEB_SERVICES, WEB_STEPS, whatsappLink } from '../data';
import { ContactForm } from './ContactForm';
import { DemoSites, DevProjects } from './DevProjects';
import { ICONS, Reveal, Section, Tag, btn } from './ui';

// Página /criacao-de-sites/: fica uma pasta abaixo da raiz, por isso as imagens usam "../"
const BASE = '../';
const QUOTE = 'Olá Dimas! Vi seu site e gostaria de um orçamento para criar um site ou aplicativo.';
const STACK = ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Kotlin / Android', 'PWA', 'SEO'];

export function SitesPage() {
  return (
    <>
      <SitesHero />
      <WebServices />
      <DevProjects
        base={BASE}
        id="projetos"
        title="Projetos de sites e aplicativos no ar"
        intro="Aplicativos, marketplace, painéis em tempo real e sites para pequenos negócios. Todos desenvolvidos por mim, do layout à publicação."
      />
      <DemoSites base={BASE} />
      <Steps />
      <WebFaq />
      <CallToAction />
    </>
  );
}

function SitesHero() {
  const live = DEV_PROJECTS.filter((p) => p.url).length;
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="no-print pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="animate-pop-in">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-xs font-medium text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Atendimento remoto para todo o Brasil
          </p>
          <h1 className="mt-6 text-fg">
            <span className="block font-sans text-base font-semibold tracking-normal text-accent sm:text-lg">
              Web designer e desenvolvedor · Dimas de Campos
            </span>
            <span className="mt-3 block text-4xl font-extrabold leading-[1.05] sm:text-5xl xl:text-[3.5rem]">
              Criação de sites, lojas virtuais e <span className="text-gradient">aplicativos</span> que trazem clientes
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-muted">
            Sites rápidos, bonitos no celular e prontos para aparecer no Google. Também desenvolvo aplicativos e sistemas sob
            medida com tecnologias modernas, unindo design de interfaces e mais de 15 anos de experiência com dados.
          </p>
          <div className="no-print mt-8 flex flex-wrap justify-center gap-3">
            <a href={whatsappLink(QUOTE)} target="_blank" rel="noopener noreferrer" className={btn.primary}>
              Pedir orçamento
              <ArrowUpRight className="h-4 w-4" />
            </a>
            <a href="#projetos" className={btn.secondary}>
              Ver projetos
              <ArrowDown className="h-4 w-4 text-accent" />
            </a>
          </div>
          <dl className="mx-auto mt-12 grid max-w-xl grid-cols-3 gap-4">
            {[
              { value: `${DEV_PROJECTS.length}`, label: 'projetos no portfólio' },
              { value: `${live}`, label: 'no ar agora' },
              { value: '100%', label: 'responsivos' },
            ].map((s) => (
              <div key={s.label} className="rounded-2xl border border-line bg-surface/70 p-4 backdrop-blur">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-2xl font-bold text-fg sm:text-3xl">{s.value}</dd>
                <dd className="mt-1 text-xs text-muted">{s.label}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-8 flex flex-wrap justify-center gap-1.5">
            {STACK.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WebServices() {
  return (
    <Section
      id="servicos"
      eyebrow="Serviços"
      title="O que eu faço para o seu negócio"
      intro="Do site simples de uma página ao aplicativo completo com login e banco de dados. Você fala direto comigo, sem intermediários."
      className="bg-surface-2/50"
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {WEB_SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
            <Reveal
              as="li"
              key={s.title}
              delay={(i % 3) * 80}
              className="group rounded-2xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-fg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}

function Steps() {
  return (
    <Section id="como-funciona" eyebrow="Como funciona" title="Do primeiro contato ao site no ar">
      <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {WEB_STEPS.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i * 80} className="rounded-2xl border border-line bg-surface p-6">
            <span className="font-display text-3xl font-extrabold text-accent">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="mt-3 text-lg font-semibold text-fg">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}

function WebFaq() {
  return (
    <Section id="faq" eyebrow="Perguntas frequentes" title="Dúvidas sobre criação de sites e aplicativos" className="no-print bg-surface-2/50">
      <div className="mx-auto max-w-3xl space-y-3">
        {WEB_FAQ.map((item, i) => (
          <Reveal key={item.q} delay={i * 60}>
            <details className="group rounded-2xl border border-line bg-surface open:border-accent/40" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display text-base font-semibold text-fg [&::-webkit-details-marker]:hidden">
                <h3>{item.q}</h3>
                <ChevronDown className="h-5 w-5 shrink-0 text-subtle transition group-open:rotate-180 group-open:text-accent" />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:text-base">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function CallToAction() {
  return (
    <section id="contato" className="scroll-mt-20 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="relative overflow-hidden rounded-3xl border border-line bg-surface p-8 text-center sm:p-14">
          <div className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[600px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl" aria-hidden="true" />
          <h2 className="relative text-3xl font-bold text-fg sm:text-4xl">
            Vamos colocar o seu negócio <span className="text-gradient">na internet?</span>
          </h2>
          <p className="relative mx-auto mt-4 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            Me conte a sua ideia pelo WhatsApp. Respondo rápido, com perguntas objetivas, e envio uma proposta com prazo e valor
            fechado.
          </p>
          <div className="relative mt-8 flex flex-wrap justify-center gap-3">
            <a href={whatsappLink(QUOTE)} target="_blank" rel="noopener noreferrer" className={btn.primary}>
              <MessageCircle className="h-4 w-4" />
              Conversar no WhatsApp
            </a>
            <a href={BASE} className={btn.secondary}>
              <BarChart3 className="h-4 w-4 text-accent" />
              Também faço Power BI e análise de dados
            </a>
          </div>
          <div className="no-print relative mx-auto mt-10 max-w-2xl rounded-2xl border border-line bg-bg/60 p-6 sm:p-8">
            <p className="mb-5 text-sm text-muted">Ou deixe sua mensagem aqui, que ela chega direto no meu e-mail:</p>
            <ContactForm origem="Orçamento de site ou aplicativo" placeholder="Ex.: site para minha loja" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
