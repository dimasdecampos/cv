import { useState, type FormEvent } from 'react';
import { CheckCircle2, LoaderCircle, MessageCircle, Send } from 'lucide-react';
import { PROFILE, whatsappLink } from '../data';
import { btn } from './ui';

// GitHub Pages não tem servidor: o FormSubmit recebe o formulário e repassa para o e-mail.
// Entrega no Gmail (o Hotmail bloqueava os e-mails do FormSubmit). O e-mail exibido no site continua PROFILE.email.
const ENDPOINT = 'https://formsubmit.co/ajax/dimasrafting@gmail.com';

const field =
  'w-full rounded-xl border border-line bg-bg px-4 py-3 text-sm text-fg placeholder:text-subtle transition focus:border-accent focus:outline-none focus:ring-4 focus:ring-accent/15';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function ContactForm({ origem, placeholder }: { origem: string; placeholder: string }) {
  const empty = { nome: '', email: '', telefone: '', assunto: '', mensagem: '' };
  const [form, setForm] = useState(empty);
  const [status, setStatus] = useState<Status>('idle');
  const set = (k: keyof typeof form) => (e: { target: { value: string } }) => setForm({ ...form, [k]: e.target.value });

  const whatsappText = () =>
    `Olá Dimas! Sou ${form.nome} (${form.email}).\n\nAssunto: ${form.assunto || origem}\n\n${form.mensagem}`;

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Campo invisível: só robôs preenchem
    if (new FormData(e.currentTarget).get('_honey')) return;
    setStatus('sending');
    try {
      const res = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...form,
          origem,
          _subject: `Novo contato pelo site: ${form.assunto || origem}`,
          _template: 'table',
          _captcha: 'false',
        }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || data.success === false || data.success === 'false') throw new Error(data.message);
      setStatus('sent');
      setForm(empty);
    } catch {
      setStatus('error');
    }
  };

  if (status === 'sent') {
    return (
      <div role="status" className="flex flex-col items-center justify-center gap-3 py-10 text-center">
        <CheckCircle2 className="h-12 w-12 text-accent" />
        <p className="font-display text-xl font-semibold text-fg">Mensagem enviada!</p>
        <p className="max-w-sm text-sm text-muted">Obrigado pelo contato. Respondo no seu e-mail o quanto antes.</p>
        <button type="button" onClick={() => setStatus('idle')} className={`${btn.secondary} mt-2`}>
          Enviar outra mensagem
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="grid gap-4 text-left sm:grid-cols-2">
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
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
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-muted">Telefone / WhatsApp</span>
        <input
          type="tel"
          autoComplete="tel"
          value={form.telefone}
          onChange={set('telefone')}
          className={field}
          placeholder="(11) 90000-0000"
        />
      </label>
      <label className="block">
        <span className="mb-1.5 block text-xs font-medium text-muted">Assunto</span>
        <input value={form.assunto} onChange={set('assunto')} className={field} placeholder={placeholder} />
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
      {status === 'error' && (
        <p role="alert" className="text-sm text-red-500 sm:col-span-2">
          Não foi possível enviar agora. Tente pelo WhatsApp ou escreva para{' '}
          <a href={`mailto:${PROFILE.email}`} className="font-semibold underline">
            {PROFILE.email}
          </a>
          .
        </p>
      )}
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row">
        <button type="submit" disabled={status === 'sending'} className={`${btn.primary} disabled:opacity-70`}>
          {status === 'sending' ? <LoaderCircle className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
          {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
        </button>
        <button
          type="button"
          onClick={(e) => {
            const f = (e.currentTarget as HTMLButtonElement).form;
            if (f?.reportValidity()) window.open(whatsappLink(whatsappText()), '_blank', 'noopener,noreferrer');
          }}
          className={btn.secondary}
        >
          <MessageCircle className="h-4 w-4 text-accent" />
          Prefiro pelo WhatsApp
        </button>
      </div>
    </form>
  );
}
