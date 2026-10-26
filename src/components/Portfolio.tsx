import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { CATEGORIES, PROJECTS, whatsappLink, type Category, type Project } from '../data';
import { Section, Tag, btn } from './ui';

export function Portfolio() {
  const [filter, setFilter] = useState<'all' | Category>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const count = (id: 'all' | Category) => (id === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.category === id).length);

  return (
    <Section
      id="portfolio"
      eyebrow="Portfólio"
      title="Portfólio de dashboards Power BI"
      intro="Dashboards, componentes em SVG e interfaces web. Clique em um projeto para ampliar."
      className="no-print"
      aside={
        <div role="tablist" aria-label="Filtrar projetos" className="no-print flex flex-wrap gap-1 rounded-xl border border-line bg-surface p-1">
          {CATEGORIES.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={filter === c.id}
              onClick={() => setFilter(c.id)}
              className={`rounded-lg px-3.5 py-2 text-sm font-medium transition ${
                filter === c.id ? 'bg-accent text-on-accent shadow-sm' : 'text-muted hover:text-fg'
              }`}
            >
              {c.label} <span className="opacity-60">{count(c.id)}</span>
            </button>
          ))}
        </div>
      }
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {visible.map((p, i) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setOpenIndex(i)}
            className="group animate-pop-in flex flex-col overflow-hidden rounded-2xl border border-line bg-surface text-left transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
            style={{ animationDelay: `${Math.min(i, 8) * 40}ms` }}
          >
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-surface-2">
              <img
                src={p.image}
                alt={`${p.title}: ${p.label}, projeto de Dimas de Campos`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover object-top transition duration-500 group-hover:scale-105"
              />
              <span className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center rounded-lg bg-black/60 text-white opacity-0 backdrop-blur transition group-hover:opacity-100">
                <Maximize2 className="h-3.5 w-3.5" />
              </span>
            </div>
            <div className="flex flex-1 flex-col p-5">
              <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent">{p.label}</p>
              <h3 className="mt-1.5 text-base font-semibold text-fg">{p.title}</h3>
              <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted">{p.description}</p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-4">
                {p.tech.slice(0, 3).map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
                {p.tech.length > 3 && <span className="self-center text-[11px] text-subtle">+{p.tech.length - 3}</span>}
              </div>
            </div>
          </button>
        ))}
      </div>

      {openIndex !== null && (
        <Lightbox
          projects={visible}
          index={openIndex}
          onChange={setOpenIndex}
          onClose={() => setOpenIndex(null)}
        />
      )}
    </Section>
  );
}

function Lightbox({
  projects,
  index,
  onChange,
  onClose,
}: {
  projects: Project[];
  index: number;
  onChange: (i: number) => void;
  onClose: () => void;
}) {
  const p = projects[index];
  const closeRef = useRef<HTMLButtonElement>(null);
  const prev = () => onChange((index - 1 + projects.length) % projects.length);
  const next = () => onChange((index + 1) % projects.length);

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = overflow;
      previouslyFocused?.focus();
    };
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  return (
    <div
      className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 backdrop-blur-sm sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div
        className="animate-pop-in relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
          <div className="min-w-0">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-wider text-accent">{p.label}</p>
            <h3 id="lightbox-title" className="truncate text-base font-semibold text-fg sm:text-lg">
              {p.title}
            </h3>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <span className="font-mono text-xs text-subtle">
              {index + 1}/{projects.length}
            </span>
            <button ref={closeRef} type="button" onClick={onClose} className={btn.icon} aria-label="Fechar">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center bg-surface-2">
          <img key={p.id} src={p.image} alt={p.title} className="animate-fade-in max-h-[62vh] w-auto max-w-full object-contain" />
          {projects.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80"
                aria-label="Projeto anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur transition hover:bg-black/80"
                aria-label="Próximo projeto"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>

        <div className="flex flex-col gap-4 overflow-y-auto p-5 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm leading-relaxed text-muted">{p.description}</p>
            {p.highlight && <p className="mt-2 text-sm font-semibold text-accent">{p.highlight}</p>}
            <div className="mt-3 flex flex-wrap gap-1.5">
              {p.tech.map((t) => (
                <Tag key={t}>{t}</Tag>
              ))}
            </div>
          </div>
          <a
            href={whatsappLink(`Olá Dimas! Vi o projeto "${p.title}" no seu portfólio e gostaria de saber mais.`)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btn.primary} shrink-0`}
          >
            Falar sobre este projeto
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
