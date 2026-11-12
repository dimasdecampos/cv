import { useState, type ReactNode } from 'react';
import { PROFILE, SOCIAL, whatsappLink } from '../data';
import { ContactForm } from './ContactForm';
import { Reveal, Section } from './ui';

/** Contato: canais diretos à esquerda, formulário à direita. Usado nas duas páginas. */
export function Contact({
  title,
  intro,
  whatsappText,
  origem,
  placeholder,
  band = false,
}: {
  title: ReactNode;
  intro: string;
  whatsappText: string;
  origem: string;
  placeholder: string;
  band?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      window.location.href = `mailto:${PROFILE.email}`;
    }
  };

  return (
    <Section id="contato" title={title} intro={intro} band={band}>
      <Reveal className="grid gap-x-16 gap-y-12 lg:grid-cols-[1fr_1.3fr]">
        <dl>
          <div className="border-t border-line py-5">
            <dt className="text-sm text-subtle">WhatsApp, o jeito mais rápido</dt>
            <dd className="mt-1">
              <a href={whatsappLink(whatsappText)} target="_blank" rel="noopener noreferrer" className="link text-xl font-semibold tabular-nums">
                {PROFILE.phoneDisplay}
              </a>
            </dd>
          </div>
          <div className="border-t border-line py-5">
            <dt className="text-sm text-subtle">E-mail</dt>
            <dd className="mt-1 flex flex-wrap items-baseline gap-x-4 gap-y-1">
              <a href={`mailto:${PROFILE.email}`} className="link break-all text-xl font-semibold">
                {PROFILE.email}
              </a>
              <button type="button" onClick={copyEmail} className="no-print text-sm text-muted underline underline-offset-4 hover:text-fg">
                {copied ? 'Copiado' : 'Copiar'}
              </button>
            </dd>
          </div>
          <div className="border-y border-line py-5">
            <dt className="text-sm text-subtle">LinkedIn</dt>
            <dd className="mt-1">
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="link text-xl font-semibold">
                in/dimasdecampos
              </a>
            </dd>
          </div>
        </dl>

        <div className="no-print">
          <h3 className="mb-5 text-xl font-semibold text-fg">Ou escreva por aqui</h3>
          <ContactForm origem={origem} placeholder={placeholder} />
        </div>
      </Reveal>
    </Section>
  );
}
