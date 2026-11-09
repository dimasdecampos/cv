import type { ReactNode } from 'react';
import { ArrowUpRight, Check, Clock, MonitorSmartphone } from 'lucide-react';
import { DEMO_SITES, DEV_PROJECTS } from '../data';
import { Reveal, Section, Tag, btn } from './ui';

/** `base` corrige os caminhos relativos das imagens em páginas fora da raiz (ex.: "../"). */
export function DevProjects({
  base = '',
  id = 'sites-e-apps',
  title = 'Sites, sistemas e aplicativos que desenvolvi',
  intro = 'Projetos reais e no ar: aplicativos, marketplaces, painéis em tempo real e sites para pequenos negócios.',
  aside,
  className = '',
}: {
  base?: string;
  id?: string;
  title?: string;
  intro?: string;
  aside?: ReactNode;
  className?: string;
}) {
  return (
    <Section id={id} eyebrow="Sites & Apps" title={title} intro={intro} aside={aside} className={`no-print ${className}`}>
      <ul className="grid gap-6 md:grid-cols-2">
        {DEV_PROJECTS.map((p, i) => (
          <Reveal
            as="li"
            key={p.id}
            delay={(i % 2) * 80}
            className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-surface-2">
              <img
                src={base + p.image}
                alt={`${p.title}: ${p.kind}, desenvolvido por Dimas de Campos`}
                loading="lazy"
                decoding="async"
                width={1280}
                height={800}
                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
              />
            </div>
            <div className="flex flex-1 flex-col p-6">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent">{p.kind}</p>
              <h3 className="mt-1.5 text-xl font-semibold text-fg">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{p.description}</p>
              <ul className="mt-4 space-y-1.5">
                {p.highlights.map((h) => (
                  <li key={h} className="flex items-start gap-2 text-sm text-fg">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    {h}
                  </li>
                ))}
              </ul>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {p.tech.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </div>
              <div className="mt-auto pt-5">
                {p.url ? (
                  <a href={p.url} target="_blank" rel="noopener" className={btn.secondary}>
                    Ver projeto no ar
                    <ArrowUpRight className="h-4 w-4 text-accent" />
                  </a>
                ) : (
                  p.status && (
                    <span className="inline-flex items-center gap-2 rounded-xl border border-line bg-surface-2 px-4 py-2.5 text-sm font-medium text-muted">
                      <Clock className="h-4 w-4 text-accent" />
                      {p.status}
                    </span>
                  )
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}

export function DemoSites({ base = '' }: { base?: string }) {
  return (
    <Section
      id="modelos"
      eyebrow="Modelos de demonstração"
      title="Veja como pode ficar o site do seu negócio"
      intro="Sites de exemplo para negócios fictícios, feitos para mostrar o estilo e as funções. Abra no celular e navegue à vontade."
      className="no-print bg-surface-2/50"
    >
      <ul className="grid gap-6 md:grid-cols-2">
        {DEMO_SITES.map((d, i) => (
          <Reveal
            as="li"
            key={d.id}
            delay={i * 80}
            className="group overflow-hidden rounded-2xl border border-line bg-surface transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
          >
            <a href={base + d.url} target="_blank" rel="noopener" className="block">
              <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-line bg-surface-2">
                <img
                  src={base + d.image}
                  alt={`Modelo de site para ${d.title.toLowerCase()}: ${d.name}`}
                  loading="lazy"
                  decoding="async"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-[1.03]"
                />
                <span className="absolute left-3 top-3 rounded-lg bg-black/65 px-2.5 py-1 text-xs font-semibold text-white backdrop-blur">
                  Modelo · negócio fictício
                </span>
              </div>
              <div className="flex items-start justify-between gap-4 p-6">
                <div>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent">{d.title}</p>
                  <h3 className="mt-1.5 text-xl font-semibold text-fg">{d.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{d.description}</p>
                </div>
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent transition group-hover:scale-110">
                  <MonitorSmartphone className="h-5 w-5" />
                </span>
              </div>
            </a>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
