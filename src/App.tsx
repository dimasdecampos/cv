import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
import { Contact } from './components/Contact';
import { Faq, Services } from './components/Freelance';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Portfolio } from './components/Portfolio';
import { About, Education, Experience, Skills } from './components/Sections';
import { PROFILE, SOCIAL } from './data';

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only z-50 rounded-lg bg-accent px-4 py-2 text-on-accent focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Services />
        <Experience />
        <Skills />
        <Portfolio />
        <Education />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-sm text-subtle sm:flex-row sm:px-6">
        <p suppressHydrationWarning>
          © {new Date().getFullYear()} <span className="font-semibold text-fg">{PROFILE.name}</span> · {PROFILE.location}
        </p>
        <nav className="no-print flex gap-5" aria-label="Redes sociais">
          <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            LinkedIn
          </a>
          <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            YouTube
          </a>
          <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
            Instagram
          </a>
        </nav>
      </div>
    </footer>
  );
}

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 900);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <a
      href="#inicio"
      aria-label="Voltar ao topo"
      className={`no-print fixed bottom-5 right-5 z-30 flex h-11 w-11 items-center justify-center rounded-full border border-line bg-surface text-fg shadow-lg transition duration-300 hover:text-accent ${
        show ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      <ArrowUp className="h-4 w-4" />
    </a>
  );
}
