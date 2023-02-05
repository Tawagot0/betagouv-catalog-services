# betagouv-catalog-services

## Améliorations apportées

- Bonne police d'écriture : j'ai pu trouver la bonne police que la capture d'écran fournie grâce à un outil de reconaissance
- Découpage en components
- Fix de l'import de Chakra UI: j'ai fais beaucoup de css car pas mal de fonctionnalités de Chakra ne fonctionnait pas dans mon code car j'ai suivi le Getting Started pour React et non de NextJS
- Responsive

### Lien du nouveau front

https://betagouv-catalog-services-jhdzcwkrl-tawagoto.vercel.app/

## Installation/Démarrage du back et front

### Prérequis

- Node 18
- pnpm

### Installation

```
pnpm install
pnpm run dev
```

## Architecture

Le projet est un monorepo utilisant les meilleurs tools de l'écosystème Javascript

- [Turborepo](https://2022.stateofjs.com/en-US/libraries/monorepo-tools/)
- TypeScript
- [Vitest](https://2022.stateofjs.com/en-US/libraries/testing/)
- Fastify
- Next.js
- Zod
- pnpm

![](https://i.imgur.com/Wuq5p4s.png)
_Source_: https://2022.stateofjs.com/en-US/libraries/

## Améliorations possible

Beaucoup d'améliorations peuvent être apportées dans ce projet:

### Général

- Faire de la documentation
- Utiliser un seul `tsconfig.json`

### Devops

- Faire du CI/CD (pipeline de check de dépendances, tests unitaires etc..)
- Utiliser dependabot pour mettre à jour les dépendances automatiquement en créant des PR
- Utiliser semantic-release
- Build une image docker
- Utiliser SonarQube pour vérifier la qualimétrie du code

### Script

- Demander le chemin de sortie en paramètre
- Supprimer la méthode `fileExists` et vérifier directement dans la méthode convert
- Faire des tests d'intégrations avec des fichiers contenant beaucoup de services
- Faire un test unitaire par rapport aux permissions des fichiers
- Utiliser une architecture hexagonale afin d'être le plus abstrait possible afin de préserver les logiques métiers de l'application

Exemple d'usecase

![](https://i.imgur.com/6mXc23f.png)

### API

- Il n'y avait pas besoin d'utiliser Fastify mais le faire directement avec NextJS.
- Documentation avec Swagger

### Front

- Faire du responsive en mobile-first
- Découper les composants beacoup plus finement
- Implémenter le menu
- Renommer le fichier CSS en `global.module.css`
- Faire des tests

# Objectifs

- [x] Réaliser une page web listant les différents services d'une mission.
- [x] Livrable
- [x] Une page web hébergée répondant aux spécifications ci-dessous
- [x] Une chemin d'url hébergé fournissant la liste des services réalisés au format JSON
- [x] Un script NodeJs créant un fichier JSON contenant la liste des services
- [x] Un repository github consultable opensource

# Déploiement

- Front: https://betagouv-catalog-services-web.vercel.app/
- API: https://betagouv-catalog-services-web-api.vercel.app/services
