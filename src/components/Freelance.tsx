import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { FAQ, SERVICES, whatsappLink } from '../data';
import { ICONS, Reveal, Section, btn } from './ui';

export function Services() {
  return (
    <Section
      id="servicos"
      eyebrow="Freelancer · Dados e Desenvolvimento"
      title="Power BI, sites e aplicativos sob medida para a sua empresa"
      intro="Além do meu trabalho como Analista de Power BI Sênior, atendo projetos freelancer de BI, análise de dados e desenvolvimento de sites e aplicativos com tecnologias modernas, 100% remoto, para todo o Brasil."
      className="bg-surface-2/50"
      aside={
        <a
          href={whatsappLink('Olá Dimas! Vi que você atende como freelancer e gostaria de um orçamento para um projeto de Power BI.')}
          target="_blank"
          rel="noopener noreferrer"
          className={`${btn.primary} no-print shrink-0`}
        >
          Pedir orçamento
          <ArrowUpRight className="h-4 w-4" />
        </a>
      }
    >
      <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {SERVICES.map((s, i) => {
          const Icon = ICONS[s.icon];
          return (
            <Reveal
              as="li"
              key={s.title}
              delay={(i % 3) * 80}
              className="group rounded-2xl border border-line bg-surface p-6 transition hover:-translate-y-1 hover:border-accent/40 hover:shadow-xl hover:shadow-accent/5"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent-soft text-accent transition group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </span>
              <h3 className="mt-5 text-lg font-semibold text-fg">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.text}</p>
            </Reveal>
          );
        })}
      </ul>
    </Section>
  );
}

export function Faq() {
  return (
    <Section id="faq" eyebrow="Perguntas frequentes" title="Dúvidas sobre projetos freelancer" className="no-print">
      <div className="mx-auto max-w-3xl space-y-3">
        {FAQ.map((item, i) => (
          <Reveal key={item.q} delay={i * 60}>
            <details className="group rounded-2xl border border-line bg-surface open:border-accent/40" open={i === 0}>
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 font-display text-base font-semibold text-fg [&::-webkit-details-marker]:hidden">
                <h3>{item.q}</h3>
                <ChevronDown className="h-5 w-5 shrink-0 text-subtle transition group-open:rotate-180 group-open:text-accent" />
              </summary>
              <p className="px-5 pb-5 text-sm leading-relaxed text-muted sm:text-base">{item.a}</p>
            </details>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
