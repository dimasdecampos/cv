import { useEffect, useState, type CSSProperties } from 'react';

/** A palavra em destaque troca a cada 2,4 s. `srText` é o texto completo, para leitores de tela e para o Google. */
export function RotatingWord({ words, srText }: { words: string[]; srText: string }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = setInterval(() => setI((n) => (n + 1) % words.length), 2400);
    return () => clearInterval(id);
  }, [words.length]);
  return (
    <span className="inline-block rounded-lg bg-accent px-2.5 text-on-accent sm:px-3">
      <span key={i} className="pop inline-block" aria-hidden="true">
        {words[i]}
      </span>
      <span className="sr-only">{srText}</span>
    </span>
  );
}

const LAYOUT = [
  { cls: 'left-[12%] top-0 w-[78%] rotate-2', depth: 10, t: '7s', delay: 300 },
  { cls: 'left-0 top-[34%] w-[62%] -rotate-3', depth: 22, t: '6s', delay: 450 },
  { cls: 'right-0 top-[48%] w-[58%] rotate-1', depth: 34, t: '8s', delay: 600 },
];

/** Três trabalhos em janelas, que flutuam e acompanham o ponteiro do mouse. Só decoração: fica fora da impressão. */
export function FloatingShots({ shots }: { shots: { src: string; title: string }[] }) {
  const [p, setP] = useState({ x: 0, y: 0 });

  useEffect(() => {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || !matchMedia('(pointer: fine)').matches) return;
    let frame = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => setP({ x: e.clientX / innerWidth - 0.5, y: e.clientY / innerHeight - 0.5 }));
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="no-print relative mx-auto aspect-[10/9] w-full max-w-xl" aria-hidden="true">
      {shots.slice(0, 3).map((s, i) => {
        const l = LAYOUT[i];
        return (
          <div key={s.src} className={`rise absolute ${l.cls}`} style={{ '--d': `${l.delay}ms` } as CSSProperties}>
            <div
              className="transition-transform duration-300 ease-out"
              style={{ transform: `translate3d(${p.x * -l.depth}px, ${p.y * -l.depth}px, 0)` }}
            >
              <div className="float overflow-hidden rounded-xl border border-line bg-bg shadow-2xl shadow-fg/15" style={{ '--t': l.t } as CSSProperties}>
                <div className="flex items-center gap-1.5 border-b border-line bg-band px-3 py-2">
                  <span className="h-2 w-2 rounded-full bg-fg/20" />
                  <span className="h-2 w-2 rounded-full bg-fg/20" />
                  <span className="h-2 w-2 rounded-full bg-fg/20" />
                  <span className="ml-2 truncate text-[11px] text-subtle">{s.title}</span>
                </div>
                <img src={s.src} alt="" className="block aspect-[16/10] w-full object-cover object-top" />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

/** Faixa contínua de termos (tecnologias, ferramentas). Pausa quando o mouse fica em cima. */
export function Marquee({ items, label }: { items: string[]; label: string }) {
  const row = (hidden: boolean) => (
    <ul className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {items.map((t) => (
        <li key={t} className="flex items-center whitespace-nowrap font-display text-lg font-semibold text-muted sm:text-xl">
          <span className="px-6 sm:px-8">{t}</span>
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
        </li>
      ))}
    </ul>
  );
  return (
    <div className="marquee-wrap no-print overflow-hidden border-y border-line py-5" aria-label={label}>
      <div className="marquee">
        {row(false)}
        {row(true)}
      </div>
    </div>
  );
}
