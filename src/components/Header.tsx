import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { NAV, PROFILE, whatsappLink } from '../data';
import { useActiveSection, useScrolled, useTheme } from '../hooks';

// "inicio" entra na lista só para limpar o destaque quando a pessoa volta ao topo
const NAV_IDS = ['inicio', ...NAV.map((n) => n.id)];

export function Header() {
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const active = useActiveSection(NAV_IDS);
  const scrolled = useScrolled();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <header
      className={`no-print fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled || open ? 'border-b border-line bg-bg/80 backdrop-blur-xl' : 'border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <a href="#inicio" className="group flex items-center gap-2.5" aria-label="Ir para o início">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-accent font-display text-sm font-bold text-on-accent transition group-hover:rotate-6">
            DC
          </span>
          <span className="font-display text-base font-semibold text-fg">{PROFILE.name}</span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Seções">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? 'true' : undefined}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition ${
                active === item.id ? 'bg-accent-soft text-accent' : 'text-muted hover:text-fg'
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-surface text-muted transition hover:text-fg"
            aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
            title={theme === 'dark' ? 'Tema claro' : 'Tema escuro'}
          >
            {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <a
            href={whatsappLink('Olá Dimas, vi seu portfólio e gostaria de conversar.')}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-xl bg-accent px-4 py-2 text-sm font-semibold text-on-accent transition hover:bg-accent-strong sm:inline-flex"
          >
            Vamos conversar
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-line bg-surface text-fg lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="menu-mobile"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" className="animate-fade-in border-t border-line px-4 pb-5 pt-3 lg:hidden" aria-label="Seções">
          <div className="grid grid-cols-2 gap-1">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setOpen(false)}
                className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                  active === item.id ? 'bg-accent-soft text-accent' : 'text-muted hover:bg-surface-2 hover:text-fg'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>
          <a
            href={whatsappLink('Olá Dimas, vi seu portfólio e gostaria de conversar.')}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 flex justify-center rounded-xl bg-accent py-2.5 text-sm font-semibold text-on-accent sm:hidden"
          >
            Conversar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
