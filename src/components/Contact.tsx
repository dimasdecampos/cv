import { useState } from 'react';
import { ArrowUpRight, Check, Copy, Linkedin, Mail, MessageCircle } from 'lucide-react';
import { ContactForm } from './ContactForm';
import { PROFILE, SOCIAL, whatsappLink } from '../data';
import { Reveal, Section, btn } from './ui';

export function Contact() {
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
    <Section
      id="contato"
      eyebrow="Contato"
      title={
        <>
          Vamos tirar seus dados <span className="text-gradient">do papel?</span>
        </>
      }
      intro="Precisa de um analista de dados ou especialista em Power BI freelancer? Novo painel executivo, modernização de dashboards ou consultoria: me conte o que você precisa."
      className="bg-surface-2/50"
    >
      <div className="grid gap-6 lg:grid-cols-[1fr_1.4fr]">
        <Reveal className="space-y-3">
          <a
            href={whatsappLink('Olá Dimas, gostaria de conversar sobre um projeto de Power BI.')}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition hover:border-accent/50"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <MessageCircle className="h-5 w-5" />
            </span>
            <span className="flex-1">
              <span className="block text-xs text-subtle">WhatsApp · resposta rápida</span>
              <span className="block font-mono text-sm font-semibold text-fg">{PROFILE.phoneDisplay}</span>
            </span>
            <ArrowUpRight className="h-4 w-4 text-subtle transition group-hover:text-accent" />
          </a>

          <div className="flex items-center gap-4 rounded-2xl border border-line bg-surface p-5">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Mail className="h-5 w-5" />
            </span>
            <a href={`mailto:${PROFILE.email}`} className="min-w-0 flex-1">
              <span className="block text-xs text-subtle">E-mail</span>
              <span className="block truncate font-mono text-sm font-semibold text-fg">{PROFILE.email}</span>
            </a>
            <button type="button" onClick={copyEmail} className={`${btn.icon} no-print`} aria-label="Copiar e-mail">
              {copied ? <Check className="h-4 w-4 text-accent" /> : <Copy className="h-4 w-4" />}
            </button>
          </div>

          <a
            href={SOCIAL.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-2xl border border-line bg-surface p-5 transition hover:border-accent/50"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Linkedin className="h-5 w-5" />
            </span>
            <span className="flex-1">
              <span className="block text-xs text-subtle">LinkedIn</span>
              <span className="block font-mono text-sm font-semibold text-fg">in/dimasdecampos</span>
            </span>
            <ArrowUpRight className="h-4 w-4 text-subtle transition group-hover:text-accent" />
          </a>
        </Reveal>

        <Reveal delay={100} className="no-print rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <ContactForm origem="Contato pelo portfólio (dados / Power BI)" placeholder="Ex.: dashboard de vendas em Power BI" />
        </Reveal>
      </div>
    </Section>
  );
}
