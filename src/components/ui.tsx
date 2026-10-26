import type { ReactNode } from 'react';
import { BarChart3, Code2, Database, FileSpreadsheet, Palette, Users, Zap, type LucideIcon } from 'lucide-react';
import { useReveal } from '../hooks';

export const ICONS: Record<string, LucideIcon> = {
  chart: BarChart3,
  database: Database,
  palette: Palette,
  code: Code2,
  zap: Zap,
  sheet: FileSpreadsheet,
  users: Users,
};

export function Reveal({
  children,
  className = '',
  delay = 0,
  as: Tag = 'div',
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: 'div' | 'li' | 'article';
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref as never}
      className={`reveal ${visible ? 'is-visible' : ''} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}

export function Section({
  id,
  eyebrow,
  title,
  intro,
  children,
  className = '',
  aside,
}: {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  aside?: ReactNode;
}) {
  return (
    <section id={id} className={`scroll-mt-20 py-20 sm:py-28 ${className}`}>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="font-mono text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
            <h2 className="mt-3 text-3xl font-bold text-fg sm:text-4xl">{title}</h2>
            {intro && <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{intro}</p>}
          </div>
          {aside}
        </Reveal>
        {children}
      </div>
    </section>
  );
}

export function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-md border border-line bg-surface-2 px-2 py-0.5 font-mono text-[11px] text-muted">
      {children}
    </span>
  );
}

export const btn = {
  primary:
    'inline-flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-on-accent shadow-lg shadow-accent/20 transition hover:-translate-y-0.5 hover:bg-accent-strong active:translate-y-0',
  secondary:
    'inline-flex items-center justify-center gap-2 rounded-xl border border-line bg-surface px-5 py-3 text-sm font-semibold text-fg transition hover:-translate-y-0.5 hover:border-accent/50 active:translate-y-0',
  ghost:
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold text-muted transition hover:text-fg',
  icon: 'inline-flex h-10 w-10 items-center justify-center rounded-xl border border-line bg-surface text-muted transition hover:border-accent/50 hover:text-accent',
};
