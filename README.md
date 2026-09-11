# Única Promotora — Recriação Front-End

Recriação visual e funcional do site [unicapromotora.com.br](https://unicapromotora.com.br/), construída do zero com uma stack moderna de React. Projeto **independente**, feito para fins de estudo/portfólio — não possui vínculo oficial com a Única Promotora.

> **Nota de fidelidade:** o site original é um WordPress/Elementor server-rendered. A paleta de cores (`#D5040C`, `#373435`, `#2575FC`), tipografia (Montserrat/Exo) e a arquitetura de conteúdo (menu, seções, formulários, políticas, SAC) foram extraídas por engenharia reversa do HTML/CSS público do site. Textos longos, depoimentos, números institucionais e imagens são **conteúdo ilustrativo**, já que o site de origem não expõe esses dados de forma estática/acessível a scraping automatizado.

## Stack

| Camada | Tecnologia |
|---|---|
| Build | Vite 8 |
| UI | React 19 + TypeScript |
| Estilos | TailwindCSS 3 (tokens customizados) |
| Roteamento | React Router DOM v7 |
| Animações | Framer Motion |
| Ícones | Lucide React (+ ícones de marca custom, pois a lib não inclui logos) |
| Formulários | React Hook Form + Zod |
| Carrosséis | Swiper.js |
| HTTP | Axios |

## Como rodar

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # build de produção em /dist
npm run preview    # preview do build
npm run lint        # oxlint
```

Copie `.env.example` para `.env` para customizar `VITE_API_URL` (não há backend real — os formulários simulam sucesso mesmo sem API, ver `src/services/leadService.ts`).

## Estrutura de pastas

```
src/
 ├── assets/           # imagens e ícones estáticos
 ├── components/
 │    ├── layout/       # Header, Footer, Navbar, Drawer mobile, WhatsApp button
 │    ├── ui/            # Button, Input, Select, Modal, Drawer, Accordion, SectionHeading...
 │    ├── sections/      # Hero, ProductsSection, PartnersMarquee, FaqSection...
 │    └── forms/         # LeadForm, ContatoForm, OuvidoriaForm, DenuncieForm
 ├── pages/             # Home, Produtos, Sobre, Parceiros, Contato, Ouvidoria, Denuncie, PolicyPage, NotFound
 ├── routes/            # AppRoutes.tsx (lazy loading + code splitting por rota)
 ├── hooks/             # useScrollPosition, useMediaQuery, useDisclosure, useLockBodyScroll
 ├── services/          # api.ts (axios), leadService.ts
 ├── data/               # mocks de conteúdo (produtos, bancos, footer, políticas, FAQ...)
 ├── types/             # tipos compartilhados
 ├── utils/             # masks (telefone/CPF/moeda), schemas Zod, cn()
 └── styles/            # index.css (tokens, base, componentes Tailwind)
```

## Design tokens (`tailwind.config.ts`)

- **Cores**: `primary` (#D5040C), `secondary` (#373435), `accent` (#2575FC), escalas de `surface`
- **Tipografia**: `font-heading` (Montserrat) para títulos, `font-body` (Exo Soft) para texto corrido
- **Espaçamento**: `section` / `section-sm` para paddings verticais consistentes entre seções
- **Sombras**: `soft`, `card`, `button`, `header`
- **Gradientes**: `brand-gradient`, `accent-gradient`, `dark-gradient`, `hero-radial`

## Funcionalidades implementadas

- Header sticky com topbar de contato, navegação, CTAs e drawer mobile animado
- Hero com formulário de lead (`#parceirounica`), validado com Zod + máscara de telefone
- Carrossel infinito de bancos parceiros e depoimentos (Swiper)
- Seções institucionais (Missão/Visão/Valores), produtos, FAQ com acordeão acessível
- Páginas: Produtos (detalhado por âncora), Parceiros, Sobre, Contato, Ouvidoria, Denúncia (com opção anônima) e páginas de política (Compliance, Privacidade, Cookies, Incidentes, Dados de Titularidade) via rota dinâmica `/politicas/:slug`
- Footer completo com colunas institucionais, SAC dos bancos (acordeão) e dados de contato
- Botão flutuante de WhatsApp
- SEO: meta tags, Open Graph, JSON-LD (`FinancialService`), `robots.txt`, `sitemap.xml`, componente `<Seo />` por página
- Acessibilidade: skip-link, `aria-*` em menus/acordeões/formulários, foco visível, HTML semântico
- Code splitting por rota com `React.lazy` + `Suspense`

## Limitações conhecidas

- Sem backend real: os formulários (`leadService.ts`) simulam sucesso mesmo em caso de falha de rede, já que não há API pública para submissão de leads/ouvidoria/denúncia.
- Alguns números institucionais e textos ilustrativos podem não corresponder 1:1 a páginas dedicadas do site original, que é essencialmente single-page.

## Créditos

Desenvolvido por **cesaraaugustoo**.
