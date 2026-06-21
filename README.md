# Portfolio BUT2 Réseaux & Télécommunications - Adam Tmimi

Portfolio statique conçu pour GitHub Pages.

## Structure

- `index.html` : page d’accueil et accès aux 5 compétences.
- `competences.html` : page d’accès aux 5 compétences.
- `administrer.html`, `connecter.html`, `programmer.html`, `reseaux-operateurs.html`, `communications-unifiees.html` : une page par compétence.
- `sae-*.html`, `stage-rom.html` : pages détaillées des SAÉ et de l’alternance, accessibles depuis les AC concernées.
- `cv.html` : page CV.
- `portfolio-data.js` : toutes les données modifiables (AC, SAÉ, descriptions, réflexions, traces disponibles).
- `script.js` : rendu dynamique des cartes, des AC et des interactions.
- `style.css` : design responsive.

## Logique du portfolio

Le site respecte la structure :

`Compétence → AC → page SAÉ associée → traces disponibles → analyse réflexive personnelle`

Les SAÉ sont listées uniquement à l’intérieur des AC. Chaque carte SAÉ ouvre une page dédiée unique, réutilisée depuis les AC concernés. L’alternance Orange dispose d’une page dédiée hors menu principal et reliée uniquement aux AC pertinentes. Il n’y a ni page dédiée aux semestres, ni page dédiée aux ressources R3/R4, ni menu SAÉ.

## Ajouter une trace

Ouvrir `portfolio-data.js`, rechercher la bonne SAÉ, puis renseigner `evidence`, `workDone`, `method`, `technologies` ou `reflections` avec des éléments réels. Les sections sans donnée exploitable ne sont pas affichées.

## Déploiement GitHub Pages

1. Déposer les fichiers à la racine du dépôt GitHub.
2. Dans **Settings > Pages**, choisir la branche de publication (`main`) et le dossier `/root`.
3. Enregistrer : GitHub Pages publiera automatiquement le site.
