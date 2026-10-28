import { GraduationCap, School } from 'lucide-react';
import { EDUCATION, EXPERIENCE, PILLARS, SKILLS, type Level } from '../data';
import { formatDuration, formatMonth } from '../hooks';
import { ICONS, Reveal, Section, Tag } from './ui';

export function About() {
  return (
    <Section
      id="sobre"
      eyebrow="Sobre"
      title="Rigor analítico com design centrado em quem lê o dado"
      intro="Muito dashboard é tecnicamente sólido mas difícil de ler, ou bonito mas impreciso. Meu trabalho junta os dois lados: modelos dimensionais com DAX otimizado e uma interface que faz o executivo entender o número em segundos."
    >
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {PILLARS.map((p, i) => {
          const Icon = ICONS[p.icon];
          return (
            <Reveal
              key={p.title}
              delay={i * 80}
              className="group rounded-2xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-fg">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.text}</p>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section
      id="experiencia"
      eyebrow="Trajetória"
      title="Experiência como analista de dados e BI"
      intro="Mais de uma década como analista de BI e Power BI em logística, meios de pagamento e engenharia."
    >
      <ol className="relative space-y-6 before:absolute before:bottom-4 before:left-[19px] before:top-4 before:w-px before:bg-line sm:before:left-[23px]">
        {EXPERIENCE.map((job, i) => {
          const current = !job.end;
          return (
            <Reveal as="li" key={job.company + job.start} className="relative pl-12 sm:pl-16">
              <span
                className={`absolute left-2.5 top-6 flex h-[19px] w-[19px] items-center justify-center rounded-full border-2 bg-bg sm:left-3.5 ${
                  current ? 'border-accent' : 'border-line'
                }`}
                aria-hidden="true"
              >
                <span className={`h-2 w-2 rounded-full ${current ? 'bg-accent' : 'bg-subtle'}`} />
              </span>

              <article className="rounded-2xl border border-line bg-surface p-5 transition hover:border-accent/40 sm:p-7">
                <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-fg sm:text-xl">{job.role}</h3>
                    <p className="mt-0.5 text-sm font-medium text-accent">
                      {job.company}
                      {job.type && <span className="text-subtle"> · {job.type}</span>}
                    </p>
                  </div>
                  <div className="shrink-0 text-left sm:text-right">
                    {current && (
                      <span className="mb-1 inline-block rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-semibold text-accent">
                        Atual
                      </span>
                    )}
                    <p className="font-mono text-xs tabular-nums text-muted">
                      {formatMonth(job.start)} – {job.end ? formatMonth(job.end) : 'hoje'}
                    </p>
                    <p className="font-mono text-xs text-subtle" suppressHydrationWarning>
                      {i === EXPERIENCE.length - 1 ? job.location : `${formatDuration(job.start, job.end)} · ${job.location}`}
                    </p>
                  </div>
                </header>

                {job.summary && <p className="mt-4 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">{job.summary}</p>}

                {job.highlights && (
                  <ul className="mt-4 grid gap-x-8 gap-y-2 text-sm text-muted md:grid-cols-2">
                    {job.highlights.map((h) => (
                      <li key={h} className="flex gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {job.tags.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </article>
            </Reveal>
          );
        })}
      </ol>
    </Section>
  );
}

const LEVEL_DOTS: Record<Level, number> = { Avançado: 3, Proficiente: 2, Intermediário: 1 };

export function Skills() {
  return (
    <Section
      id="habilidades"
      eyebrow="Habilidades"
      title="Competências em Power BI, SQL e dados"
      intro="Nível de domínio em cada ferramenta, do dado bruto à interface."
      className="bg-surface-2/50"
      aside={
        <div className="flex gap-4 text-xs text-subtle" aria-hidden="true">
          {(Object.keys(LEVEL_DOTS) as Level[]).map((l) => (
            <span key={l} className="inline-flex items-center gap-1.5">
              <Dots n={LEVEL_DOTS[l]} />
              {l}
            </span>
          ))}
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {SKILLS.map((group, i) => {
          const Icon = ICONS[group.icon];
          return (
            <Reveal key={group.group} delay={i * 80} className="rounded-2xl border border-line bg-surface p-6">
              <div className="flex items-center gap-3 border-b border-line pb-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-soft text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-fg">{group.group}</h3>
              </div>
              <ul className="mt-2 divide-y divide-line/70">
                {group.items.map((s) => (
                  <li key={s.name} className="flex items-center justify-between gap-3 py-2.5 text-sm">
                    <span className="text-fg">{s.name}</span>
                    <span className="flex items-center gap-2" title={s.level}>
                      <span className="sr-only">{s.level}</span>
                      <Dots n={LEVEL_DOTS[s.level]} />
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}

function Dots({ n }: { n: number }) {
  return (
    <span className="flex gap-1" aria-hidden="true">
      {[1, 2, 3].map((d) => (
        <span key={d} className={`h-2 w-2 rounded-full ${d <= n ? 'bg-accent' : 'bg-line'}`} />
      ))}
    </span>
  );
}

export function Education() {
  return (
    <Section id="formacao" eyebrow="Formação" title="Formação acadêmica" className="bg-surface-2/50">
      <div className="grid gap-4 md:grid-cols-2">
        {EDUCATION.map((e, i) => {
          const Icon = i === 0 ? GraduationCap : School;
          return (
            <Reveal key={e.title} delay={i * 80} className="flex gap-5 rounded-2xl border border-line bg-surface p-6">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
                <Icon className="h-6 w-6" />
              </span>
              <div>
                <p className="font-mono text-xs text-subtle">
                  {e.kind} · {e.period}
                </p>
                <h3 className="mt-1 text-lg font-semibold text-fg">{e.title}</h3>
                <p className="text-sm font-medium text-accent">{e.school}</p>
                <p className="mt-2 text-sm leading-relaxed text-muted">{e.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
