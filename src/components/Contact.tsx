import { useState, type FormEvent } from 'react';
import { ArrowUpRight, Check, Copy, Linkedin, Mail, MessageCircle, Send } from 'lucide-react';
import { PROFILE, SOCIAL, whatsappLink } from '../data';
import { Reveal, Section, btn } from './ui';

const field =
  'w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-fg placeholder:text-subtle transition focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState({ nome: '', email: '', assunto: '', mensagem: '' });
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm({ ...form, [k]: e.target.value });

  const message = () =>
    `Olá Dimas! Sou ${form.nome} (${form.email}).\n\nAssunto: ${form.assunto || 'Contato pelo portfólio'}\n\n${form.mensagem}`;

  const sendWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    window.open(whatsappLink(message()), '_blank', 'noopener,noreferrer');
  };

  const sendEmail = () => {
    const subject = encodeURIComponent(form.assunto || 'Contato pelo portfólio');
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${encodeURIComponent(message())}`;
  };

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
      eyebrow="06 · Contato"
      title={
        <>
          Vamos tirar seus dados <span className="text-gradient">do papel?</span>
        </>
      }
      intro="Novo painel executivo, modernização de dashboards ou consultoria em Power BI: me conte o que você precisa."
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
          <form onSubmit={sendWhatsApp} className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted">Nome *</span>
              <input required autoComplete="name" value={form.nome} onChange={set('nome')} className={field} placeholder="Seu nome" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs font-medium text-muted">E-mail *</span>
              <input
                required
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={set('email')}
                className={field}
                placeholder="voce@empresa.com"
              />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-xs font-medium text-muted">Assunto</span>
              <input value={form.assunto} onChange={set('assunto')} className={field} placeholder="Ex.: dashboard de vendas em Power BI" />
            </label>
            <label className="block sm:col-span-2">
              <span className="mb-1.5 block text-xs font-medium text-muted">Mensagem *</span>
              <textarea
                required
                rows={5}
                value={form.mensagem}
                onChange={set('mensagem')}
                className={`${field} resize-y`}
                placeholder="Conte um pouco sobre o projeto, objetivos e prazos."
              />
            </label>
            <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
              <button type="submit" className={btn.primary}>
                <Send className="h-4 w-4" />
                Enviar pelo WhatsApp
              </button>
              <button
                type="button"
                onClick={(e) => {
                  const f = (e.currentTarget as HTMLButtonElement).form;
                  if (f?.reportValidity()) sendEmail();
                }}
                className={btn.secondary}
              >
                <Mail className="h-4 w-4 text-accent" />
                Enviar por e-mail
              </button>
            </div>
          </form>
        </Reveal>
      </div>
    </Section>
  );
}
