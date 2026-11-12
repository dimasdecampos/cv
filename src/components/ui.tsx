import type { CSSProperties, ReactNode } from 'react';
import { useCountUp, useReveal } from '../hooks';

/** Faz o bloco subir e aparecer quando entra na tela. `delay` (ms) escalona itens vizinhos. */
export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'li';
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? 'in' : ''} ${className}`}
      style={delay ? ({ '--d': `${delay}ms` } as CSSProperties) : undefined}
    >
      {children}
    </Tag>
  );
}

/** Número que conta de zero até o valor quando aparece na tela. */
export function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const { ref, visible } = useReveal<HTMLSpanElement>();
  const n = useCountUp(value, visible);
  return (
    <span ref={ref} className="tabular-nums" suppressHydrationWarning>
      {n}
      {suffix}
    </span>
  );
}

export function Section({
  id,
  title,
  intro,
  children,
  className = '',
  aside,
  band = false,
}: {
  id: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  aside?: ReactNode;
  /** fundo cinza-claro, para separar da seção vizinha */
  band?: boolean;
}) {
  return (
    <section id={id} className={`scroll-mt-16 py-12 sm:py-24 ${band ? 'bg-band' : ''} ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal className="mb-8 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-[1.75rem] font-bold leading-tight text-fg sm:text-[2.5rem]">{title}</h2>
            {intro && <p className="mt-3 text-[17px] leading-relaxed text-muted sm:mt-4 sm:text-lg">{intro}</p>}
          </div>
          {aside}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

/**
 * No celular a lista vira uma faixa de deslizar para o lado (o próximo item aparece na borda);
 * a partir de 640px volta a ser uma grade normal.
 */
export const swipe = {
  list: '-mx-5 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-3 sm:mx-0 sm:grid sm:snap-none sm:gap-x-6 sm:gap-y-12 sm:overflow-visible sm:px-0 sm:pb-0',
  item: 'w-[84%] shrink-0 snap-start sm:w-auto',
  hint: 'mb-4 text-sm text-subtle sm:hidden',
};

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-[15px] font-semibold transition duration-200 active:scale-[0.97]';

export const btn = {
  primary: `${base} bg-accent text-on-accent hover:-translate-y-0.5 hover:bg-accent-strong hover:shadow-lg hover:shadow-accent/30`,
  secondary: `${base} border border-fg/30 text-fg hover:-translate-y-0.5 hover:border-fg`,
  icon: 'inline-flex h-10 w-10 items-center justify-center rounded-lg border border-fg/30 text-fg transition-colors hover:border-fg',
};

export const field =
  'w-full rounded-lg border border-fg/30 bg-bg px-3.5 py-2.5 text-[15px] text-fg placeholder:text-subtle transition-shadow focus:border-link focus:outline-none focus:ring-2 focus:ring-link/25';
