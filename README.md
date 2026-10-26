# dimas.space — Currículo e portfólio

Site de Dimas de Campos (Analista de Power BI Sênior). React + Vite + Tailwind, publicado no GitHub Pages.

## Editar o conteúdo

Todo o texto (experiência, habilidades, projetos, formação, contatos) fica em [`src/data.ts`](src/data.ts).
Imagens de projetos vão em `public/projetos/` (de preferência `.webp`, até 1600 px de largura).

## Rodar localmente

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # gera a pasta dist/
```

## Publicar

Cada push na branch `main` roda o workflow `.github/workflows/deploy.yml`, que gera o site e publica no GitHub Pages.
No repositório: **Settings → Pages → Source: GitHub Actions**. O domínio vem de `public/CNAME`.
