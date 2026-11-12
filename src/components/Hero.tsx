import { ArrowRight, BarChart3, MonitorSmartphone } from 'lucide-react';
import { PROFILE, SITES_SITE, SOCIAL } from '../data';

const years = Math.floor((new Date().getFullYear() - PROFILE.dataCareerStart) / 5) * 5;

const door =
  'group flex items-center gap-4 rounded-xl border border-fg/30 p-4 transition duration-200 hover:-translate-y-0.5 hover:border-fg hover:bg-band hover:shadow-lg hover:shadow-fg/10 active:scale-[0.98]';

export function Hero() {
  return (
    <section id="inicio" className="pb-12 pt-24 sm:pb-24 sm:pt-36">
      <div className="mx-auto grid max-w-6xl items-start gap-8 px-5 sm:px-8 lg:grid-cols-[1fr_300px] lg:gap-16">
        <figure className="rise order-first lg:order-last" style={{ animationDelay: '200ms' }}>
          <img
            src={PROFILE.photo}
            alt={`${PROFILE.name}, analista de dados sênior e especialista em Power BI`}
            width={664}
            height={664}
            className="h-20 w-20 rounded-lg object-cover lg:h-auto lg:w-full"
            fetchPriority="high"
          />
          <figcaption className="mt-4 hidden text-sm leading-relaxed text-muted lg:block">
            <strong className="font-semibold text-fg">{PROFILE.name}</strong>
            <br />
            {PROFILE.role}
            <br />
            São Paulo, SP
            <span className="no-print mt-3 flex gap-4">
              <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="link">
                LinkedIn
              </a>
              <a href={SOCIAL.youtube} target="_blank" rel="noopener noreferrer" className="link">
                YouTube
              </a>
              <a href={SOCIAL.instagram} target="_blank" rel="noopener noreferrer" className="link">
                Instagram
              </a>
            </span>
          </figcaption>
        </figure>

        <div>
          <h1 className="rise text-[2.25rem] font-extrabold leading-[1.05] text-fg sm:text-6xl">
            Oi, eu sou o Dimas. Faço dashboards em Power BI, sites e aplicativos.
          </h1>
          <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-muted" style={{ animationDelay: '120ms' }} suppressHydrationWarning>
            Sou analista de Power BI sênior na levva e trabalho com análise de dados há mais de {years} anos. Como
            freelancer, atendo empresas de todo o Brasil, de forma remota.
          </p>

          <p className="no-print mt-8 font-semibold text-fg sm:mt-10">O que você precisa?</p>
          <div className="rise no-print mt-3 grid max-w-2xl gap-3 sm:grid-cols-2" style={{ animationDelay: '260ms' }}>
            <a href="#portfolio" className={door}>
              <BarChart3 className="h-6 w-6 shrink-0 text-link" />
              <span className="flex-1">
                <span className="block font-semibold text-fg">Dashboard ou análise de dados</span>
                <span className="block text-sm text-muted">Power BI, DAX, SQL e ETL</span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-subtle transition-transform group-hover:translate-x-1" />
            </a>
            <a href={SITES_SITE} className={door}>
              <MonitorSmartphone className="h-6 w-6 shrink-0 text-link" />
              <span className="flex-1">
                <span className="block font-semibold text-fg">Site ou aplicativo</span>
                <span className="block text-sm text-muted">Sites, lojas virtuais e apps</span>
              </span>
              <ArrowRight className="h-5 w-5 shrink-0 text-subtle transition-transform group-hover:translate-x-1" />
            </a>
          </div>
          <p className="no-print mt-5 text-[15px] text-muted">
            Veio pelo currículo?{' '}
            <a href="#experiencia" className="link">
              Veja minha experiência
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
