# Autarcas de Lisboa – Livre

Jekyll website for the Livre party's elected officials (autarcas) in Lisbon. Hosted on GitHub Pages, with Sveltia CMS for content editing.

## Stack

- **Jekyll 4.3** — static site generator
- **Tailwind CSS 3** — utility-first styling, built via npm CLI before Jekyll
- **Sveltia CMS** — headless CMS loaded from CDN at `/admin/`, GitHub backend
- **GitHub Pages** — hosting via GitHub Actions (not legacy branch deploy)
- **Cloudflare Worker** — OAuth proxy required for Sveltia CMS GitHub authentication

## Local Development

```bash
npm install          # install Tailwind
bundle install       # install Jekyll gems
npm run watch:css    # rebuild CSS on changes
bundle exec jekyll serve  # serve at http://127.0.0.1:4000
```

For a one-shot build: `npm run build:css && bundle exec jekyll build`

## Project Structure

```
_autarcas/       One .md per elected official (14 files)
_juntas/         One .md per parish assembly (9 files — Assembleias de Freguesia only)
_propostas/      One .md per proposal/motion (empty, populated via CMS)
_pages/          Static pages (registered as a Jekyll collection so Jekyll outputs them)
_layouts/        default, autarca, junta, proposta, page
_includes/       head, nav, footer, autarca-card, proposta-card
assets/css/      main.css (Tailwind input) → main.min.css (compiled, gitignored)
assets/js/       filter.js — vanilla JS client-side filtering for proposals
admin/           Sveltia CMS entry (index.html) and config (config.yml)
```

## Site Structure

| URL | Source |
|-----|--------|
| `/` | `index.md` |
| `/camara-municipal/` | `_pages/camara-municipal.md` (uses `junta` layout) |
| `/assembleia-municipal/` | `_pages/assembleia-municipal.md` (uses `junta` layout) |
| `/juntas/` | `_pages/juntas.md` — lists the 9 parish assemblies |
| `/juntas/:slug/` | `_juntas/*.md` |
| `/autarcas/` | `_pages/autarcas.md` |
| `/autarcas/:slug/` | `_autarcas/*.md` |
| `/propostas/` | `_pages/propostas.md` — filterable listing |
| `/propostas/:slug/` | `_propostas/*.md` |
| `/sobre/` | `_pages/sobre.md` |
| `/admin/` | Sveltia CMS interface |

**Navigation order:** Câmara Municipal → Assembleia Municipal → Juntas de Freguesia → Autarcas → Propostas

## Content Model

### Autarcas (`_autarcas/*.md`)
One file per person, regardless of how many roles they hold. A person with roles in multiple organs (e.g. João Monteiro) has a single profile page listing all roles.

Key fields:
- `juntas` — flat list of junta slugs for Liquid filtering (`where_exp: "a.juntas contains slug"`)
- `cargos` — structured list of `{cargo, orgao, junta}` objects, displayed on the profile page

### Juntas (`_juntas/*.md`)
Only the 9 parish-level assemblies. Câmara Municipal and Assembleia Municipal are standalone pages in `_pages/`, not in this collection.

### Propostas (`_propostas/*.md`)
- `junta` — single slug (for `where` filtering by organ)
- `autarcas` — list of autarca slugs (for cross-linking and filtering)
- `estado` — `Em análise | Aprovada | Rejeitada | Retirada`

## Liquid Relationships

All relationships are resolved at build time via Liquid filters — no plugins required:

```liquid
{% comment %} Autarcas in a given organ {% endcomment %}
{% assign eleitos = site.autarcas | where_exp: "a", "a.juntas contains page.slug" %}

{% comment %} Proposals in a given organ {% endcomment %}
{% assign propostas = site.propostas | where: "junta", page.slug %}

{% comment %} Proposals by a given autarca {% endcomment %}
{% assign propostas = site.propostas | where_exp: "p", "p.autarcas contains page.slug" %}
```

## Sveltia CMS Setup (TODO)

Two placeholders in `admin/config.yml` must be filled in before the CMS works:

1. `repo: OWNER/autarcas-de-lisboa` — replace with the actual GitHub org/repo
2. `base_url: https://YOUR-WORKER.workers.dev` — replace with the Cloudflare Worker URL

Steps:
1. Create a GitHub OAuth App (Settings → Developer Settings → OAuth Apps)
   - Callback URL: `https://YOUR-WORKER.workers.dev/callback`
2. Deploy [sveltia/sveltia-cms-auth](https://github.com/sveltia/sveltia-cms-auth) as a Cloudflare Worker
3. Set Worker secrets: `GITHUB_CLIENT_ID` and `GITHUB_CLIENT_SECRET`
4. Update the two placeholders in `admin/config.yml`
5. Grant write access to the GitHub repo for anyone who needs CMS access

## GitHub Pages Setup (TODO)

1. Push to GitHub
2. In repo Settings → Pages, set source to **GitHub Actions**
3. The workflow at `.github/workflows/pages.yml` handles the full build and deploy

## Elected Officials (2025 mandate)

| Name | Role | Organ |
|------|------|-------|
| Carlos Teixeira | Vereador | Câmara Municipal |
| João Monteiro | Deputado Municipal | Assembleia Municipal |
| Ofélia Janeiro | Deputada Municipal | Assembleia Municipal |
| João Godinho | Deputado de Freguesia | Avenidas Novas |
| Laura Cassandra | Deputada de Freguesia | Avenidas Novas |
| Paulo Dias | Deputado de Freguesia | Santo António |
| Francisco Costa | Deputado de Freguesia | Alvalade |
| Ana Natário | Deputada de Freguesia | São Domingos de Benfica |
| Francisco Ferreira | Deputado de Freguesia | Lumiar |
| Joana Alves Pereira | Deputada de Freguesia | Areeiro |
| Rita Farias | Deputada de Freguesia | Areeiro |
| Bernardo Marques Vidal | Deputado de Freguesia | Arroios |
| Patrícia Robalo | Deputada de Freguesia | Arroios |
| Rita Paulos | Deputada de Freguesia | Parque das Nações |
| João Monteiro | Deputado de Freguesia | Penha de França |

Note: João Monteiro holds two roles (Assembleia Municipal + Penha de França) and has a single profile at `/autarcas/joao-monteiro/`.
