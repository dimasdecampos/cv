import { ArrowDown, Download, Instagram, Linkedin, Mail, MapPin, Printer, Youtube } from 'lucide-react';
import { PROFILE, PROJECTS, SOCIAL } from '../data';
import { btn } from './ui';

const years = new Date().getFullYear() - PROFILE.dataCareerStart;
const yearsLabel = `${Math.floor(years / 5) * 5}+`;

const STATS = [
  { value: yearsLabel, label: 'anos com dados' },
  { value: '50+', label: 'painéis entregues' },
  { value: `${PROJECTS.length}`, label: 'projetos no portfólio' },
];

const BARS = [38, 52, 44, 66, 58, 74, 70, 88];

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="bg-grid pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="no-print pointer-events-none absolute -top-40 left-1/2 h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-accent/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.25fr_1fr]">
        <div className="animate-pop-in">
          <p className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/70 px-3 py-1.5 text-xs font-medium text-muted backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Disponível para projetos freelancer
          </p>

          <h1 className="mt-6 text-fg">
            <span className="block font-sans text-base font-semibold tracking-normal text-accent sm:text-lg">
              {PROFILE.name} · Analista de Dados Sênior e Especialista em Power BI
            </span>
            <span className="mt-3 block text-4xl font-extrabold leading-[1.05] sm:text-5xl xl:text-[3.5rem]">
              Transformo dados em <span className="text-gradient">decisões claras</span> e dashboards que as pessoas
              querem usar.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted" suppressHydrationWarning>
            Sou {PROFILE.role} na levva e atendo empresas como <strong className="font-semibold text-fg">freelancer</strong>.
            Há mais de {yearsLabel.replace('+', '')} anos uno engenharia de dados (SQL, ETL, DAX, M) e design de interfaces
            para entregar BI rápido, confiável e bonito.
          </p>

          <div className="no-print mt-8 flex flex-wrap gap-3">
            <a href="#portfolio" className={btn.primary}>
              Ver portfólio
              <ArrowDown className="h-4 w-4" />
            </a>
            <a href={PROFILE.cv} download className={btn.secondary}>
              <Download className="h-4 w-4 text-accent" />
              Baixar CV
            </a>
            <button type="button" onClick={() => window.print()} className={btn.ghost} title="Imprimir ou salvar como PDF">
              <Printer className="h-4 w-4" />
              Salvar em PDF
            </button>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6">
            {STATS.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display text-3xl font-bold tabular-nums text-fg" suppressHydrationWarning>
                  {s.value}
                </dd>
                <dd className="mt-1 text-xs text-subtle">{s.label}</dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Cartão de perfil com um "mini dashboard" decorativo */}
        <div className="animate-pop-in relative mx-auto w-full max-w-sm [animation-delay:120ms]">
          <div className="relative rounded-3xl border border-line bg-surface p-5 shadow-2xl shadow-black/10">
            <div className="relative aspect-square overflow-hidden rounded-2xl bg-surface-2">
              <img
                src={PROFILE.photo}
                alt={`${PROFILE.name}, analista de dados sênior e especialista em Power BI`}
                width={664}
                height={664}
                className="h-full w-full object-cover"
                fetchPriority="high"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4 pt-16">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-widest text-emerald-300">
                  {PROFILE.tagline}
                </p>
                <p className="font-display text-xl font-bold text-white">{PROFILE.name}</p>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-sm">
              <span className="inline-flex items-center gap-1.5 text-muted">
                <MapPin className="h-4 w-4 text-accent" />
                {PROFILE.location}
              </span>
            </div>

            <div className="no-print mt-4 flex gap-2 border-t border-line pt-4">
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className={btn.icon} aria-label="LinkedIn">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={`mailto:${PROFILE.email}`} className={btn.icon} aria-label="E-mail">
                <Mail className="h-4 w-4" />
              </a>
              <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className={btn.icon} aria-label="YouTube">
                <Youtube className="h-4 w-4" />
              </a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className={btn.icon} aria-label="Instagram">
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div
            className="no-print absolute -left-6 top-12 hidden w-44 rounded-2xl border border-line bg-surface/90 p-3 shadow-xl backdrop-blur sm:block lg:-left-14"
            aria-hidden="true"
          >
            <p className="text-[10px] font-semibold uppercase tracking-wider text-subtle">Receita · YoY</p>
            <p className="font-display text-lg font-bold text-fg">
              +18,4% <span className="text-xs font-medium text-accent">▲</span>
            </p>
            <div className="mt-2 flex h-10 items-end gap-1">
              {BARS.map((h, i) => (
                <span
                  key={i}
                  className={`flex-1 rounded-sm ${i === BARS.length - 1 ? 'bg-accent' : 'bg-accent/30'}`}
                  style={{ height: `${h}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
