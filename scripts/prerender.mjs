// Gera o HTML final com todo o conteúdo já renderizado, para buscadores e prévias de links.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const dist = path.resolve('dist');
const ssrDir = path.resolve('dist-ssr');
const { render, structuredData } = await import(pathToFileURL(path.join(ssrDir, 'entry-server.js')).href);

const file = path.join(dist, 'index.html');
let html = fs.readFileSync(file, 'utf8');
for (const marker of ['<div id="root"></div>', '__JSON_LD__']) {
  if (!html.includes(marker)) throw new Error(`"${marker}" não encontrado em dist/index.html`);
}
// "<" escapado para o JSON nunca fechar a tag <script> por engano
html = html
  .replace('__JSON_LD__', () => structuredData().replace(/</g, '\\u003c'))
  .replace('<div id="root"></div>', () => `<div id="root">${render()}</div>`);
fs.writeFileSync(file, html);

// Mesma página para endereços inexistentes
fs.copyFileSync(file, path.join(dist, '404.html'));

// Data de atualização no sitemap
const sitemap = path.join(dist, 'sitemap.xml');
const today = new Date().toISOString().slice(0, 10);
fs.writeFileSync(sitemap, fs.readFileSync(sitemap, 'utf8').replace('<lastmod>BUILD_DATE</lastmod>', `<lastmod>${today}</lastmod>`));

fs.rmSync(ssrDir, { recursive: true, force: true });
console.log('prerender ok');
