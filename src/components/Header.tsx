import { useEffect, useState } from 'react';
import { Menu, Moon, Sun, X } from 'lucide-react';
import { NAV, PROFILE, whatsappLink } from '../data';
import { useActiveSection, useScrolled, useTheme } from '../hooks';

type NavItem = { id: string; label: string };

const HELLO = 'Olá Dimas, vi seu site e gostaria de conversar.';

export function Header({
  nav = NAV,
  link,
}: {
  nav?: readonly NavItem[];
  /** link extra no fim do menu, para a outra página do site */
  link?: { href: string; label: string };
}) {
  // "inicio" entra na lista só para limpar o destaque quando a pessoa volta ao topo
  const NAV_IDS = ['inicio', ...nav.map((n) => n.id)];
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
      className={`no-print fixed inset-x-0 top-0 z-40 transition-colors duration-300 ${
        open ? 'border-b border-line bg-bg' : scrolled ? 'border-b border-line bg-bg/80 backdrop-blur-lg' : 'border-b border-transparent'
      }`}
    >
      <span className="scroll-progress absolute inset-x-0 top-0 h-0.5 bg-accent" aria-hidden="true" />
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#inicio" className="whitespace-nowrap font-display text-lg font-bold text-fg">
          {PROFILE.name}
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Seções">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={active === item.id ? 'true' : undefined}
              className={`whitespace-nowrap border-b-2 py-1 text-[15px] font-medium transition-colors ${
                active === item.id ? 'border-accent text-fg' : 'border-transparent text-muted hover:text-fg'
              }`}
            >
              {item.label}
            </a>
          ))}
          {link && (
            <a href={link.href} className="link whitespace-nowrap text-[15px] font-medium">
              {link.label}
            </a>
          )}
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggle}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-muted transition-colors hover:text-fg"
            aria-label={theme === 'dark' ? 'Ativar tema claro' : 'Ativar tema escuro'}
            title={theme === 'dark' ? 'Tema claro' : 'Tema escuro'}
          >
            {theme === 'dark' ? <Sun className="h-[18px] w-[18px]" /> : <Moon className="h-[18px] w-[18px]" />}
          </button>
          <a
            href={whatsappLink(HELLO)}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden whitespace-nowrap rounded-lg bg-accent px-4 py-2 text-[15px] font-semibold text-on-accent transition-colors hover:bg-accent-strong sm:inline-flex"
          >
            Chamar no WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-fg lg:hidden"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            aria-controls="menu-mobile"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" className="animate-fade-in border-t border-line px-5 pb-5 pt-2 lg:hidden" aria-label="Seções">
          {nav.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="block border-b border-line py-3 text-base font-medium text-fg"
            >
              {item.label}
            </a>
          ))}
          {link && (
            <a href={link.href} className="block border-b border-line py-3 text-base font-medium text-link">
              {link.label}
            </a>
          )}
          <a
            href={whatsappLink(HELLO)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 flex justify-center rounded-lg bg-accent py-3 text-[15px] font-semibold text-on-accent sm:hidden"
          >
            Chamar no WhatsApp
          </a>
        </nav>
      )}
    </header>
  );
}
