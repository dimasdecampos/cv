import { useEffect, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PHOTO_GALLERY, PHOTOS_START, type Photo } from '../data';
import { Reveal, Section, btn } from './ui';

const COUNT = PHOTOS_START.length;
const CAT_ALT: Record<string, string> = {
  Cachoeiras: 'Cachoeira',
  Mar: 'Mar',
  Paisagens: 'Paisagem',
  Passaros: 'Pássaro',
};

/** Destaques (estrela no Drive) primeiro; depois uma foto de cada categoria, em rodízio. */
function pick(photos: Photo[], starred: string[]): Photo[] {
  const byId = new Map(photos.map((p) => [p.id, p]));
  const out = starred.map((id) => byId.get(id)).filter((p): p is Photo => !!p);
  const cats = [...new Set(photos.map((p) => p.cat))];
  const rest = cats.map((c) => photos.filter((p) => p.cat === c && !out.includes(p)));
  for (let i = 0; out.length < COUNT && rest.some((r) => r.length); i++) {
    const next = rest[i % rest.length].shift();
    if (next) out.push(next);
  }
  return out.slice(0, COUNT);
}

/**
 * Fotos da galeria (repositório "fotos" no GitHub, sincronizado com o Google Drive).
 * O HTML já sai com uma seleção fixa; ao abrir, a lista é atualizada com a galeria do momento.
 */
export function Photos() {
  const [photos, setPhotos] = useState<Photo[]>(PHOTOS_START);

  useEffect(() => {
    let alive = true;
    fetch(`${PHOTO_GALLERY}data/galeria.json`)
      .then((r) => (r.ok ? r.json() : null))
      .then((d) => {
        if (!alive || !Array.isArray(d?.photos) || !d.photos.length) return;
        const chosen = pick(d.photos, Array.isArray(d.starred) ? d.starred : []);
        if (chosen.length) setPhotos(chosen);
      })
      .catch(() => {
        /* sem rede ou galeria fora do ar: fica a seleção fixa */
      });
    return () => {
      alive = false;
    };
  }, []);

  return (
    <Section
      id="fotografia"
      title="Fotografia de natureza"
      intro="Fora do trabalho com dados, fotografo cachoeiras, mar, paisagens e pássaros. Estas fotos vêm da minha galeria, que eu mesmo desenvolvi e que se atualiza sozinha."
      className="no-print"
      aside={
        <a href={PHOTO_GALLERY} target="_blank" rel="noopener" className={`${btn.secondary} shrink-0`}>
          Abrir a galeria completa
          <ArrowUpRight className="h-4 w-4" />
        </a>
      }
    >
      <ul className="grid grid-cols-2 gap-2 sm:grid-cols-3">
        {photos.map((p, i) => (
          <Reveal as="li" key={p.id} delay={(i % 3) * 90} className="max-sm:last:hidden">
            <a href={PHOTO_GALLERY} target="_blank" rel="noopener" className="block aspect-[3/2] overflow-hidden rounded-lg bg-band">
              <img
                src={`${PHOTO_GALLERY}fotos/thumb/${p.id}.webp`}
                alt={`${CAT_ALT[p.cat] ?? p.cat}, fotografia de Dimas de Campos`}
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
              />
            </a>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
