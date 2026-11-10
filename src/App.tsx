import { Contact } from './components/Contact';
import { DevProjects } from './components/DevProjects';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Photos } from './components/Photos';
import { Portfolio } from './components/Portfolio';
import { Experience, Faq, Services, Skills } from './components/Sections';
import { SitesPage } from './components/SitesPage';
import { btn } from './components/ui';
import { MessageCircle } from 'lucide-react';
import { PROFILE, SITES_NAV, SOCIAL, whatsappLink } from './data';
import { useScrolled } from './hooks';

export type Page = 'home' | 'sites';

export default function App({ page = 'home' }: { page?: Page }) {
  const sites = page === 'sites';
  const scrolled = useScrolled(500);
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-50 rounded-lg bg-accent px-4 py-2 text-on-accent focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      {sites ? (
        <>
          <Header nav={SITES_NAV} link={{ href: '../', label: 'Power BI e dados' }} />
          <main id="conteudo">
            <SitesPage />
          </main>
        </>
      ) : (
        <>
          <Header link={{ href: 'criacao-de-sites/', label: 'Sites e apps' }} />
          <main id="conteudo">
            <Hero />
            <Portfolio />
            <DevProjects
              aside={
                <a href="criacao-de-sites/" className={`${btn.secondary} no-print shrink-0`}>
                  Quero um site ou app
                </a>
              }
            />
            <Services />
            <Experience />
            <Skills />
            <Photos />
            <Faq />
            <Contact
              title="Vamos conversar sobre o seu projeto?"
              intro="Painel novo, relatório lento, planilha que virou problema ou um site para a empresa: conte o que você precisa e eu respondo com os próximos passos."
              whatsappText="Olá Dimas, gostaria de conversar sobre um projeto de Power BI."
              origem="Contato pelo portfólio (dados / Power BI)"
              placeholder="Ex.: dashboard de vendas em Power BI"
              band
            />
          </main>
        </>
      )}
      {/* No celular o botão do topo some: este acompanha a rolagem */}
      <a
        href={whatsappLink('Olá Dimas, vi seu site e gostaria de conversar.')}
        target="_blank"
        rel="noopener noreferrer"
        className={`no-print fixed bottom-4 right-4 z-30 inline-flex items-center gap-2 rounded-full bg-accent px-4 py-3 text-[15px] font-semibold text-on-accent shadow-lg shadow-black/20 transition-opacity sm:hidden ${
          scrolled ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
      >
        <MessageCircle className="h-5 w-5" />
        WhatsApp
      </a>
      <footer className="border-t border-line py-10 max-sm:pb-24">
        <div className="mx-auto flex max-w-6xl flex-col justify-between gap-4 px-5 text-sm text-subtle sm:flex-row sm:px-8">
          <p suppressHydrationWarning>
            © {new Date().getFullYear()} {PROFILE.name}, São Paulo, SP
          </p>
          <nav className="no-print flex flex-wrap gap-x-5 gap-y-2" aria-label="Outros links">
            <a href={sites ? '../' : 'criacao-de-sites/'} className="hover:text-fg">
              {sites ? 'Power BI e dados' : 'Criação de sites e apps'}
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              LinkedIn
            </a>
            <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              YouTube
            </a>
            <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-fg">
              Instagram
            </a>
          </nav>
        </div>
      </footer>
    </>
  );
}
