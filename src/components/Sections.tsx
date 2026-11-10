import { useState } from 'react';
import { Download, Printer } from 'lucide-react';
import { EDUCATION, EXPERIENCE, FAQ, PROFILE, SERVICES, SKILLS, type Job } from '../data';
import { formatDuration, formatMonth } from '../hooks';
import { Section, btn } from './ui';

type Item = { title: string; text: string };

/** Botão "ver mais" que só existe no celular; em telas maiores o conteúdo já aparece inteiro. */
function MoreButton({ open, onClick, more, less }: { open: boolean; onClick: () => void; more: string; less: string }) {
  return (
    <button type="button" onClick={onClick} aria-expanded={open} className="link no-print mt-3 text-[15px] font-semibold sm:hidden">
      {open ? less : more}
    </button>
  );
}

function JobHighlights({ items }: { items: string[] }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ul className={`mt-3 list-disc space-y-1 pl-5 leading-relaxed text-muted marker:text-subtle ${open ? '' : 'max-sm:hidden'}`}>
        {items.map((h) => (
          <li key={h}>{h}</li>
        ))}
      </ul>
      <MoreButton open={open} onClick={() => setOpen(!open)} more="Ver o que eu fazia" less="Mostrar menos" />
    </>
  );
}

const SKILLS_SHOWN = 3;

function SkillGroup({ group, items }: { group: string; items: { name: string; level: string }[] }) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <h3 className="mb-2 text-lg font-semibold text-fg">{group}</h3>
      <ul>
        {items.map((s, i) => (
          <li
            key={s.name}
            className={`flex items-baseline justify-between gap-3 border-t border-line py-2.5 text-[15px] ${
              !open && i >= SKILLS_SHOWN ? 'max-sm:hidden' : ''
            }`}
          >
            <span className="text-fg">{s.name}</span>
            <span className="shrink-0 text-sm text-subtle">{s.level.toLowerCase()}</span>
          </li>
        ))}
      </ul>
      {items.length > SKILLS_SHOWN && (
        <MoreButton open={open} onClick={() => setOpen(!open)} more={`Ver todas as ${items.length}`} less="Mostrar menos" />
      )}
    </div>
  );
}

/** Lista simples de serviços: título e explicação, separados por uma linha. */
export function ServiceList({ items, columns = false }: { items: readonly Item[]; columns?: boolean }) {
  return (
    <dl className={columns ? 'grid gap-x-12 md:grid-cols-2' : ''}>
      {items.map((s) => (
        <div key={s.title} className="border-t border-line py-5">
          <dt className="font-display text-lg font-semibold text-fg">{s.title}</dt>
          <dd className="mt-1.5 leading-relaxed text-muted">{s.text}</dd>
        </div>
      ))}
    </dl>
  );
}

export function Services() {
  return (
    <Section
      id="servicos"
      title="Serviços de Power BI, dados e desenvolvimento"
      intro="Muito dashboard é sólido por dentro e difícil de ler, ou bonito e impreciso. Eu cuido das duas partes: o modelo de dados e a tela que a pessoa vai usar para decidir."
    >
      <div className="grid gap-x-16 gap-y-12 lg:grid-cols-[1.6fr_1fr]">
        <div>
          <h3 className="mb-4 text-xl font-semibold text-fg">Dados e Power BI</h3>
          <ServiceList items={SERVICES.slice(0, 6)} columns />
        </div>
        <div>
          <h3 className="mb-4 text-xl font-semibold text-fg">Sites e aplicativos</h3>
          <ServiceList items={SERVICES.slice(6)} />
          <p className="no-print border-t border-line pt-5">
            <a href="criacao-de-sites/" className="link font-semibold">
              Ver a página de criação de sites e apps
            </a>
          </p>
        </div>
      </div>
    </Section>
  );
}

const months = (ym: string) => {
  const [y, m] = ym.split('-').map(Number);
  return y * 12 + m;
};
const nowYm = () => {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}`;
};
const jobId = (job: Job) => `exp-${job.start}`;

/** A carreira inteira em uma barra: cada trecho é um emprego, na proporção do tempo. */
function CareerBar() {
  const jobs = [...EXPERIENCE].reverse();
  const tones = ['bg-fg/35', 'bg-fg/50', 'bg-fg/65', 'bg-fg/80'];
  return (
    <div className="no-print mb-12 hidden md:block" aria-hidden="true">
      <div className="flex gap-0.5">
        {jobs.map((job, i) => {
          const current = !job.end;
          return (
            <a
              key={job.start}
              href={`#${jobId(job)}`}
              tabIndex={-1}
              suppressHydrationWarning
              style={{ flexGrow: months(job.end ?? nowYm()) - months(job.start) + 1, flexBasis: 0 }}
              className="group min-w-0"
            >
              <span
                className={`flex h-11 items-center truncate px-3 text-sm font-semibold transition-opacity group-hover:opacity-85 ${
                  current ? 'bg-accent text-on-accent' : `${tones[i % tones.length]} text-bg`
                } ${i === 0 ? 'rounded-l-lg' : ''} ${i === jobs.length - 1 ? 'rounded-r-lg' : ''}`}
              >
                <span className="truncate">{job.short}</span>
              </span>
              <span className="mt-1.5 block text-sm tabular-nums text-subtle">{job.start.slice(0, 4)}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}

export function Experience() {
  return (
    <Section
      id="experiencia"
      title="Experiência como analista de dados e BI"
      intro="Comecei no design e na web, passei pela engenharia tratando dados e mapas, e desde 2019 trabalho só com Business Intelligence."
      aside={
        <div className="no-print flex gap-3">
          <a href={PROFILE.cv} download className={`${btn.secondary} max-sm:flex-1 max-sm:px-3`}>
            <Download className="h-4 w-4" />
            Baixar currículo
          </a>
          <button type="button" onClick={() => window.print()} className={`${btn.secondary} max-sm:flex-1 max-sm:px-3`}>
            <Printer className="h-4 w-4" />
            Salvar em PDF
          </button>
        </div>
      }
    >
      <CareerBar />
      <ol>
        {EXPERIENCE.map((job, i) => (
          <li key={job.start} id={jobId(job)} className="scroll-mt-24 border-t border-line py-6 sm:py-8">
            <article className="grid gap-x-10 gap-y-3 md:grid-cols-[200px_1fr]">
              <p className="text-sm leading-relaxed text-subtle">
                <span className="block font-medium tabular-nums text-fg">
                  {formatMonth(job.start)} a {job.end ? formatMonth(job.end) : 'hoje'}
                </span>
                {i < EXPERIENCE.length - 1 && (
                  <span className="block" suppressHydrationWarning>
                    {formatDuration(job.start, job.end)}
                  </span>
                )}
                <span className="block">{job.location.replace(' · ', ', ')}</span>
              </p>
              <div className="max-w-3xl">
                <h3 className="text-xl font-semibold text-fg">{job.role}</h3>
                <p className="mt-0.5 font-medium text-muted">{job.company}</p>
                {job.summary && <p className="mt-3 leading-relaxed text-muted">{job.summary}</p>}
                {job.highlights && <JobHighlights items={job.highlights} />}
                <p className="mt-3 text-sm text-subtle">{job.tags.join(', ')}</p>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Section>
  );
}

export function Skills() {
  return (
    <Section
      id="habilidades"
      title="Competências em Power BI, SQL e desenvolvimento"
      intro="O que eu uso no dia a dia e o quanto domino cada coisa."
      band
    >
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
        {SKILLS.map((g) => (
          <SkillGroup key={g.group} group={g.group} items={g.items} />
        ))}
      </div>

      <h3 id="formacao" className="mb-2 mt-16 scroll-mt-24 text-2xl font-bold text-fg">
        Formação
      </h3>
      <ul>
        {EDUCATION.map((e) => (
          <li key={e.title} className="grid gap-x-10 gap-y-1 border-t border-line py-5 md:grid-cols-[200px_1fr]">
            <p className="text-sm text-subtle">
              <span className="block font-medium text-fg">{e.period}</span>
              {e.kind}
            </p>
            <div>
              <p className="font-display text-lg font-semibold text-fg">{e.title}</p>
              <p className="text-muted">{e.school}</p>
            </div>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function FaqList({ items }: { items: readonly { q: string; a: string }[] }) {
  return (
    <div className="max-w-3xl border-b border-line">
      {items.map((item, i) => (
        <details key={item.q} className="group border-t border-line" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
            <h3 className="text-lg font-semibold text-fg group-hover:underline">{item.q}</h3>
            <span className="shrink-0 text-2xl leading-none text-subtle group-open:hidden" aria-hidden="true">
              +
            </span>
            <span className="hidden shrink-0 text-2xl leading-none text-subtle group-open:block" aria-hidden="true">
              −
            </span>
          </summary>
          <p className="pb-6 pr-8 leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}

export function Faq() {
  return (
    <Section id="faq" title="Perguntas frequentes sobre freelancer de Power BI" className="no-print">
      <FaqList items={FAQ} />
    </Section>
  );
}
