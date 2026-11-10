import type { ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { DEMO_SITES, DEV_PROJECTS } from '../data';
import { Section } from './ui';

/**
 * `base` corrige os caminhos relativos das imagens em páginas fora da raiz (ex.: "../").
 * `full` mostra também os destaques e as tecnologias de cada projeto.
 */
export function DevProjects({
  base = '',
  id = 'sites-e-apps',
  title = 'Sites, sistemas e aplicativos que desenvolvi',
  intro = 'Aplicativos, um marketplace, um painel em tempo real e sites para pequenos negócios. Quase todos estão no ar: é só abrir e usar.',
  aside,
  full = false,
  band = false,
}: {
  base?: string;
  id?: string;
  title?: string;
  intro?: string;
  aside?: ReactNode;
  full?: boolean;
  band?: boolean;
}) {
  return (
    <Section id={id} title={title} intro={intro} aside={aside} className="no-print" band={band}>
      <ul className={`grid gap-x-6 gap-y-12 sm:grid-cols-2 ${full ? '' : 'lg:grid-cols-4'}`}>
        {DEV_PROJECTS.map((p) => (
          <li key={p.id} className="flex flex-col">
            <div className="aspect-[16/10] w-full overflow-hidden rounded-lg border border-line bg-band">
              <img
                src={base + p.image}
                alt={`${p.title}: ${p.kind}, desenvolvido por Dimas de Campos`}
                loading="lazy"
                decoding="async"
                width={1280}
                height={800}
                className="h-full w-full object-cover object-top"
              />
            </div>
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
                <p className="mt-3 text-sm text-subtle">Feito com {p.tech.join(', ')}</p>
              </>
            )}
            <p className="mt-auto pt-4 text-[15px] font-semibold">
              {p.url ? (
                <a href={p.url} target="_blank" rel="noopener" className="link inline-flex items-center gap-1">
                  Abrir {p.title}
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              ) : (
                <span className="font-medium text-subtle">{p.status}</span>
              )}
            </p>
          </li>
        ))}
      </ul>
      {!full && (
        <p className="mt-12 border-t border-line pt-6">
          <a href={`${base}criacao-de-sites/#projetos`} className="link font-semibold">
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
      <ul className="grid gap-x-6 gap-y-12 sm:grid-cols-2">
        {DEMO_SITES.map((d) => (
          <li key={d.id}>
            <a href={base + d.url} target="_blank" rel="noopener" className="group block">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-lg border border-line bg-bg">
                <img
                  src={base + d.image}
                  alt={`Modelo de site para ${d.title.toLowerCase()}: ${d.name}`}
                  loading="lazy"
                  decoding="async"
                  width={1280}
                  height={800}
                  className="h-full w-full object-cover object-top"
                />
              </div>
              <h3 className="mt-4 text-2xl font-semibold text-fg group-hover:underline">{d.title}</h3>
              <p className="mt-0.5 text-sm text-subtle">Modelo "{d.name}", negócio fictício</p>
              <p className="mt-3 leading-relaxed text-muted">{d.description}</p>
              <p className="link mt-4 inline-flex items-center gap-1 text-[15px] font-semibold">
                Abrir o modelo
                <ArrowUpRight className="h-4 w-4" />
              </p>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
