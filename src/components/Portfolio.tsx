import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { CATEGORIES, PROJECTS, whatsappLink, type Category, type Project } from '../data';
import { Section, btn, swipe } from './ui';

export function Portfolio() {
  const [filter, setFilter] = useState<'all' | Category>('all');
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const visible = filter === 'all' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  const count = (id: 'all' | Category) => (id === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.category === id).length);

  return (
    <Section
      id="portfolio"
      title="Portfólio de dashboards Power BI"
      intro="Painéis que criei para áreas comerciais, logística, meios de pagamento e engenharia, além de ícones em SVG e sistemas web. Clique em uma imagem para ampliar."
      className="no-print"
      band
    >
      <div role="tablist" aria-label="Filtrar projetos" className="mb-6 flex gap-x-5 overflow-x-auto border-b border-line sm:mb-8 sm:gap-x-6">
        {CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            role="tab"
            aria-selected={filter === c.id}
            onClick={() => setFilter(c.id)}
            className={`shrink-0 border-b-2 pb-3 text-[15px] font-medium transition-colors ${
              filter === c.id ? 'border-accent text-fg' : 'border-transparent text-muted hover:text-fg'
            }`}
          >
            {c.label} <span className="font-normal text-subtle">({count(c.id)})</span>
          </button>
        ))}
      </div>

      <p className={swipe.hint}>Deslize para o lado para ver os {visible.length} projetos. Toque para ampliar.</p>
      <ul key={filter} className={`${swipe.list} sm:grid-cols-2 lg:grid-cols-3`}>
        {visible.map((p, i) => (
          <li key={p.id} className={`pop ${swipe.item}`} style={{ animationDelay: `${Math.min(i, 8) * 50}ms` }}>
            <button type="button" onClick={() => setOpenIndex(i)} className="group block w-full text-left">
              <span className="relative block aspect-[16/10] w-full overflow-hidden rounded-lg border border-line bg-bg">
                <img
                  src={p.image}
                  alt={`${p.title}: ${p.label}, projeto de Dimas de Campos`}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
                <span className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-md bg-fg px-2.5 py-1.5 text-xs font-semibold text-bg opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
                  <Maximize2 className="h-3.5 w-3.5" />
                  Ampliar
                </span>
              </span>
              <span className="mt-3 block font-display text-lg font-semibold leading-snug text-fg group-hover:underline">{p.title}</span>
              <span className="mt-1 block text-sm text-muted">{p.tech.slice(0, 3).join(', ')}</span>
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <Lightbox projects={visible} index={openIndex} onChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
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
      className="animate-fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-3 sm:p-6"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <div
        className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-lg bg-bg"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
          <div className="min-w-0">
            <h3 id="lightbox-title" className="truncate text-base font-semibold text-fg sm:text-lg">
              {p.title}
            </h3>
            <p className="truncate text-sm text-muted">{p.label.replace(' · ', ', ')}</p>
          </div>
          <div className="flex shrink-0 items-center gap-2">
            <span className="text-sm tabular-nums text-subtle">
              {index + 1} de {projects.length}
            </span>
            <button ref={closeRef} type="button" onClick={onClose} className={btn.icon} aria-label="Fechar">
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center bg-band">
          <img key={p.id} src={p.image} alt={p.title} className="animate-fade-in max-h-[62vh] w-auto max-w-full object-contain" />
          {projects.length > 1 && (
            <>
              <button
                type="button"
                onClick={prev}
                className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black"
                aria-label="Projeto anterior"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-black/70 text-white transition-colors hover:bg-black"
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
            {p.highlight && <p className="mt-2 text-sm font-semibold text-fg">{p.highlight}</p>}
            <p className="mt-2 text-sm text-subtle">{p.tech.join(', ')}</p>
          </div>
          <a
            href={whatsappLink(`Olá Dimas! Vi o projeto "${p.title}" no seu portfólio e gostaria de saber mais.`)}
            target="_blank"
            rel="noopener noreferrer"
            className={`${btn.primary} shrink-0`}
          >
            Quero algo parecido
          </a>
        </div>
      </div>
    </div>
  );
}
