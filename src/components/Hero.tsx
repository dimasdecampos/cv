import type { CSSProperties } from 'react';
import { ArrowRight, BarChart3, MonitorSmartphone } from 'lucide-react';
import { DEV_PROJECTS, PROFILE, PROJECTS, SITES_SITE, SOCIAL } from '../data';
import { FloatingShots, Marquee, RotatingWord } from './Motion';
import { Counter } from './ui';

const years = Math.floor((new Date().getFullYear() - PROFILE.dataCareerStart) / 5) * 5;

const door =
  'group flex items-center gap-4 rounded-xl border border-fg/30 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-fg hover:bg-band hover:shadow-lg hover:shadow-fg/10 active:scale-[0.98]';

const d = (ms: number) => ({ '--d': `${ms}ms` }) as CSSProperties;

const WORDS = ['dashboards', 'análise de dados', 'sites', 'aplicativos'];

const SHOTS = [
  { src: 'projetos/projeto-03-jpg.webp', title: 'Faturamento, projeções e top clientes' },
  { src: 'projetos/projeto-07-jpg.webp', title: 'Vendas por localização' },
  { src: 'projetos/projeto-06-png.webp', title: 'Cartões de KPI' },
];

const STACK = ['Power BI', 'DAX', 'SQL Server', 'Power Query', 'ETL', 'Dataflows', 'Modelagem dimensional', 'Excel', 'React', 'TypeScript', 'Next.js', 'Supabase'];

export function Hero() {
  return (
    <>
      <section id="inicio" className="overflow-hidden pb-12 pt-24 sm:pb-20 sm:pt-36">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          <div>
            <figure className="rise flex items-center gap-3">
              <img
                src={PROFILE.photo}
                alt={`${PROFILE.name}, analista de dados sênior e especialista em Power BI`}
                width={664}
                height={664}
                className="h-14 w-14 rounded-full object-cover ring-2 ring-accent ring-offset-2 ring-offset-bg"
                fetchPriority="high"
              />
              <figcaption className="text-sm leading-snug text-muted">
                <strong className="block font-semibold text-fg">{PROFILE.name}</strong>
                {PROFILE.role}, São Paulo
              </figcaption>
            </figure>

            <h1 className="mt-6 text-[2.5rem] font-extrabold leading-[1.08] text-fg sm:text-6xl">
              <span className="rise block" style={d(80)}>
                Oi, eu sou o Dimas.
              </span>
              <span className="rise block" style={d(160)}>
                Faço{' '}
                <RotatingWord words={WORDS} srText="dashboards em Power BI, análise de dados, sites e aplicativos" />
              </span>
            </h1>
            <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted" style={d(260)} suppressHydrationWarning>
              Sou analista de Power BI sênior na levva e trabalho com análise de dados há mais de {years} anos. Como
              freelancer, atendo empresas de todo o Brasil, de forma remota.
            </p>

            <p className="rise no-print mt-8 font-semibold text-fg" style={d(340)}>
              O que você precisa?
            </p>
            <div className="rise no-print mt-3 grid max-w-2xl gap-3 sm:grid-cols-2" style={d(400)}>
              <a href="#portfolio" className={door}>
                <BarChart3 className="h-6 w-6 shrink-0 text-link" />
                <span className="flex-1">
                  <span className="block font-semibold text-fg">Dashboard ou análise de dados</span>
                  <span className="block text-sm text-muted">Power BI, DAX, SQL e ETL</span>
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 text-subtle transition-transform group-hover:translate-x-1" />
              </a>
              <a href={SITES_SITE} className={door}>
                <MonitorSmartphone className="h-6 w-6 shrink-0 text-link" />
                <span className="flex-1">
                  <span className="block font-semibold text-fg">Site ou aplicativo</span>
                  <span className="block text-sm text-muted">Sites, lojas virtuais e apps</span>
                </span>
                <ArrowRight className="h-5 w-5 shrink-0 text-subtle transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            <dl className="rise mt-10 flex gap-8 sm:gap-12" style={d(500)}>
              {[
                { n: years, s: '+', label: 'anos trabalhando com dados' },
                { n: PROJECTS.length + DEV_PROJECTS.length, s: '', label: 'projetos no portfólio' },
                { n: 100, s: '%', label: 'remoto, para todo o Brasil' },
              ].map((x) => (
                <div key={x.label}>
                  <dd className="font-display text-3xl font-bold text-fg sm:text-4xl">
                    <Counter value={x.n} suffix={x.s} />
                  </dd>
                  <dt className="mt-1 max-w-[9rem] text-sm leading-snug text-subtle">{x.label}</dt>
                </div>
              ))}
            </dl>

            <p className="rise no-print mt-8 flex flex-wrap gap-x-5 gap-y-2 text-[15px]" style={d(580)}>
              <a href="#experiencia" className="link">
                Ver minha experiência
              </a>
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="link">
                LinkedIn
              </a>
              <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="link">
                YouTube
              </a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="link">
                Instagram
              </a>
            </p>
          </div>
          <FloatingShots shots={SHOTS} />
        </div>
      </section>
      <Marquee items={STACK} label="Ferramentas e tecnologias que uso" />
    </>
  );
}
