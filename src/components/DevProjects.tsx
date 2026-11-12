import { useState, type CSSProperties, type ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { DEMO_SITES, DEV_CATS, DEV_PROJECTS, type DevCat, type DevProject } from '../data';
import { Reveal, Section, swipe } from './ui';

function Shot({ p, base }: { p: DevProject; base: string }) {
  const img = (
    <img
      src={base + p.image}
      alt={`${p.title}: ${p.kind}, desenvolvido por Dimas de Campos`}
      loading="lazy"
      decoding="async"
      width={1280}
      height={800}
      className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
    />
  );
  const frame = 'relative block aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-band';
  if (!p.url) return <div className={frame}>{img}</div>;
  return (
    <a href={p.url} target="_blank" rel="noopener" className={frame} tabIndex={-1} aria-hidden="true">
      {img}
      <span className="absolute inset-x-3 bottom-3 flex translate-y-3 items-center justify-between rounded-lg bg-fg px-4 py-2.5 text-sm font-semibold text-bg opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        Abrir no ar
        <ArrowUpRight className="h-4 w-4" />
      </span>
    </a>
  );
}

/**
 * `base` corrige os caminhos relativos das imagens em páginas fora da raiz (ex.: "../").
 * `full` mostra o filtro por tipo, os destaques e as tecnologias de cada projeto.
 */
export function DevProjects({
  base = '',
  id = 'sites-e-apps',
  title = 'Sites, sistemas e aplicativos que desenvolvi',
  intro = 'Aplicativos, um marketplace, um painel em tempo real e sites para pequenos negócios. Quase todos estão no ar: é só abrir e usar.',
  aside,
  full = false,
  band = false,
  moreHref,
}: {
  base?: string;
  id?: string;
  title?: string;
  intro?: string;
  aside?: ReactNode;
  full?: boolean;
  band?: boolean;
  /** link "ver com mais detalhes", mostrado na versão resumida */
  moreHref?: string;
}) {
  const [cat, setCat] = useState<'all' | DevCat>('all');
  const list = cat === 'all' ? DEV_PROJECTS : DEV_PROJECTS.filter((p) => p.cat === cat);
  const count = (c: 'all' | DevCat) => (c === 'all' ? DEV_PROJECTS.length : DEV_PROJECTS.filter((p) => p.cat === c).length);

  return (
    <Section id={id} title={title} intro={intro} aside={aside} className="no-print" band={band}>
      {full && (
        <div role="tablist" aria-label="Filtrar projetos" className="mb-8 flex gap-2 overflow-x-auto pb-1">
          {DEV_CATS.map((c) => (
            <button
              key={c.id}
              type="button"
              role="tab"
              aria-selected={cat === c.id}
              onClick={() => setCat(c.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-[15px] font-medium transition duration-200 active:scale-95 ${
                cat === c.id ? 'border-fg bg-fg text-bg' : 'border-fg/25 text-muted hover:border-fg hover:text-fg'
              }`}
            >
              {c.label} <span className="opacity-60">{count(c.id)}</span>
            </button>
          ))}
        </div>
      )}
      <p className={swipe.hint}>Deslize para o lado para ver os {list.length} projetos.</p>
      <ul key={cat} className={`${swipe.list} sm:grid-cols-2 ${full ? '' : 'lg:grid-cols-4'}`}>
        {list.map((p, i) => (
          <li
            key={p.id}
            className={`group pop flex flex-col ${swipe.item}`}
            style={{ '--d': `${Math.min(i, 6) * 70}ms` } as CSSProperties}
          >
            <Shot p={p} base={base} />
            <h3 className={`mt-4 font-semibold text-fg ${full ? 'text-2xl' : 'text-xl'}`}>{p.title}</h3>
            <p className="mt-0.5 text-sm text-subtle">{p.kind.replace(' · ', ', ')}</p>
            <p className="mt-3 leading-relaxed text-muted">{p.description}</p>
            {full && (
              <>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-muted marker:text-subtle">
                  {p.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                <p className="mt-4 flex flex-wrap gap-1.5">
                  {p.tech.map((t) => (
                    <span key={t} className="rounded-full bg-fg/[0.07] px-2.5 py-1 text-xs font-medium text-muted">
                      {t}
                    </span>
                  ))}
                </p>
              </>
            )}
            <p className="mt-auto pt-4 text-[15px] font-semibold">
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener" className="link group/l inline-flex items-center gap-1">
                  Abrir {p.title}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover/l:-translate-y-0.5 group-hover/l:translate-x-0.5" />
                </a>
              ) : (
                <span className="font-medium text-subtle">{p.status}</span>
              )}
            </p>
          </li>
        ))}
      </ul>
      {!full && moreHref && (
        <p className="mt-6 border-t border-line pt-6 sm:mt-12">
          <a href={moreHref} className="link font-semibold">
            Ver os {DEV_PROJECTS.length} projetos com mais detalhes
          </a>
        </p>
      )}
    </Section>
  );
}

export function DemoSites({ base = '' }: { base?: string }) {
  return (
    <Section
      id="modelos"
      title="Veja como pode ficar o site do seu negócio"
      intro="Dois sites de exemplo, de negócios fictícios, para você navegar e testar as funções. Vale abrir no celular."
      className="no-print"
      band
    >
      <ul className="grid grid-cols-2 gap-x-4 sm:gap-x-6">
        {DEMO_SITES.map((d, i) => (
          <Reveal as="li" key={d.id} delay={i * 120}>
            <a href={base + d.url} target="_blank" rel="noopener" className="group block">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl border border-line bg-bg transition duration-300 group-hover:-translate-y-1 group-hover:shadow-xl group-hover:shadow-fg/10">
                <img
                  src={base + d.image}
                  alt={`Modelo de site para ${d.title.toLowerCase()}: ${d.name}`}
                  loading="lazy"
                  decoding="async"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                />
              </div>
              <h3 className="mt-3 text-base font-semibold leading-snug text-fg group-hover:underline sm:mt-4 sm:text-2xl">{d.title}</h3>
              <p className="mt-0.5 text-sm text-subtle">
                Modelo "{d.name}"<span className="max-sm:hidden">, negócio fictício</span>
              </p>
              <p className="mt-3 leading-relaxed text-muted max-sm:hidden">{d.description}</p>
              <p className="link mt-2 inline-flex items-center gap-1 text-[15px] font-semibold sm:mt-4">
                Abrir o modelo
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </p>
            </a>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
