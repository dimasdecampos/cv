// Gera o HTML final com todo o conteúdo já renderizado, para buscadores e prévias de links.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = path.resolve('dist');
const ssrDir = path.resolve('dist-ssr');
const { render, structuredData } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

// A criação de sites agora é um site separado (sites.dimas.space); aqui fica só a página inicial
const PAGES = [{ file: 'index.html', page: 'home', root: '<div id="root"></div>' }];

for (const { file: rel, page, root } of PAGES) {
  const file = path.join(dist, rel);
  let html = fs.readFileSync(file, 'utf8');
  for (const marker of [root, '__JSON_LD__']) {
    if (!html.includes(marker)) throw new Error(`"${marker}" não encontrado em dist/${rel}`);
  }
  // "<" escapado para o JSON nunca fechar a tag <script> por engano
  html = html
    .replace('__JSON_LD__', () => structuredData(page).replace(/</g, '\\u003c'))
    .replace(root, () => root.replace('></div>', `>${render(page)}</div>`));
  fs.writeFileSync(file, html);
}

// Mesma página para endereços inexistentes
fs.copyFileSync(path.join(dist, 'index.html'), path.join(dist, '404.html'));

// Data de atualização no sitemap
const sitemap = path.join(dist, 'sitemap.xml');
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(sitemap, fs.readFileSync(sitemap, 'utf8').replaceAll('<lastmod>BUILD_DATE</lastmod>', `<lastmod>${today}</lastmod>`));

fs.rmSync(ssrDir, { recursive: true, force: true });
console.log('prerender ok');
