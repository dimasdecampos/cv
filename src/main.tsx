import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';

const root = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Em produção o HTML já vem pré-renderizado (bom para SEO); aqui o React só "assume" a página.
if (root.hasChildNodes()) hydrateRoot(root, app);
else createRoot(root).render(app);
