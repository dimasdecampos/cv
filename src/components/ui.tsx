import type { ReactNode } from 'react';

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
    <section id={id} className={`scroll-mt-16 py-16 sm:py-24 ${band ? 'bg-band' : ''} ${className}`}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold leading-tight text-fg sm:text-[2.5rem]">{title}</h2>
            {intro && <p className="mt-4 text-lg leading-relaxed text-muted">{intro}</p>}
          </div>
          {aside}
        </div>
        {children}
      </div>
    </section>
  );
}

const base = 'inline-flex items-center justify-center gap-2 rounded-lg px-5 py-3 text-[15px] font-semibold transition-colors';

export const btn = {
  primary: `${base} bg-accent text-on-accent hover:bg-accent-strong`,
  secondary: `${base} border border-fg/30 text-fg hover:border-fg`,
  icon: 'inline-flex h-10 w-10 items-center justify-center rounded-lg border border-fg/30 text-fg transition-colors hover:border-fg',
};

export const field =
  'w-full rounded-lg border border-fg/30 bg-bg px-3.5 py-2.5 text-[15px] text-fg placeholder:text-subtle focus:border-link focus:outline-none focus:ring-2 focus:ring-link/25';
