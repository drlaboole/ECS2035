# Énergie Côte Sud — site web

Maquette du nouveau site d'Énergie Côte Sud, construite avec **Astro 4** et **Tailwind CSS**, chartée selon le Livret Vert (avril 2026).

## Stack

- **Astro 4** — framework statique, performance optimale, SEO natif
- **Tailwind CSS** — utility-first, charte Livret Vert intégrée (vert #00854B, gris #4B5563)
- **Hébergement cible** — Cloudflare Pages (déploiement automatique sur push GitHub)

## Lancement local

```bash
npm install
npm run dev
```

Le site est servi sur http://localhost:4321

## Build production

```bash
npm run build
```

Le résultat est généré dans `dist/`.

## Déploiement Cloudflare Pages

1. Pousser ce repo sur GitHub.
2. Aller sur https://dash.cloudflare.com → Workers & Pages → Create application → Pages → Connect to Git.
3. Sélectionner le repo `energie-cote-sud-site`.
4. Configurer :
   - **Framework preset** : Astro
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
5. Save and Deploy. Cloudflare déploie automatiquement à chaque push sur `main`.

## Structure

```
src/
├── layouts/Base.astro        Layout commun (head, header, footer)
├── components/
│   ├── Header.astro          Navigation principale (sticky + mobile)
│   └── Footer.astro          Pied de page (4 colonnes + mentions)
├── pages/
│   ├── index.astro           Accueil (8 blocs)
│   ├── a-propos.astro        Énergie Côte Sud : histoire, gouvernance, groupe
│   ├── nos-metiers/
│   │   ├── index.astro       Page mère 6 métiers
│   │   ├── logement-collectif.astro
│   │   ├── tertiaire-sante.astro
│   │   ├── industrie-defense.astro
│   │   ├── solutions-energetiques.astro
│   │   ├── ssi.astro
│   │   └── maintenance.astro
│   ├── demarche-rse.astro    6 piliers RSE + 4 certifications
│   ├── nos-references.astro  Cas clients (3 démonstratifs)
│   ├── rejoindre-ecs.astro   Carrières + 5 raisons + 6 métiers + offres
│   └── contact.astro         Formulaire + coordonnées
└── styles/global.css         Classes utilitaires charte
```

## Charte graphique

- **Vert ECS** : `#00854B` (couleur principale)
- **Vert clair** : `#E6F5EC` (callouts, fonds doux)
- **Vert très pâle** : `#F4FBF6` (alternance de blocs)
- **Gris texte** : `#4B5563`
- **Police** : Segoe UI avec fallback Inter (Google Fonts)
- **Filets** : 4 px verts sous les titres H1
- **Callouts** : barre verticale verte épaisse + fond vert clair

## Contenus

Les contenus actuels sont issus du document `CONTENUS-SITE-WEB-ECS.docx`. Pour enrichir :
- Photos chantiers : ajouter dans `public/images/` et référencer dans les pages références.
- Nouvelles actualités : créer un dossier `src/pages/actualites/` avec collection Astro.
- Témoignages collaborateurs : enrichir `rejoindre-ecs.astro`.

## TODO post-CODIR

- [ ] Connecter le formulaire de contact (Cloudflare Email Workers, Formspree, ou Sendgrid)
- [ ] Ajouter photos chantier de qualité (cf. plan de production cas clients)
- [ ] Page Actualités avec collection Astro Content
- [ ] Page Nos agences avec carte interactive
- [ ] Mentions légales, RGPD, politique cookies
- [ ] Analytics (Cloudflare Web Analytics — gratuit, RGPD-friendly)
- [ ] Domaine `www.energie-cote-sud.com` (DNS via Cloudflare une fois la maquette validée)

## Licence

Propriété d'Énergie Côte Sud. Tous droits réservés.
