# Installation/Démarrage du back et front

```
pnpm install
pnpm run dev
```

# Architecture

Le projet est un monorepo utilisant les meilleures technologies dans l'écosystème Javascript

- [Turborepo](https://2022.stateofjs.com/en-US/libraries/monorepo-tools/)
- TypeScript
- [Vitest](https://2022.stateofjs.com/en-US/libraries/testing/)
- Fastify
- Next.js
- Zod
- pnpm

![](https://i.imgur.com/Wuq5p4s.png)
_Source_: https://2022.stateofjs.com/en-US/libraries/

# Améliorations possible

Beaucoup d'améliorations peuvent être apportées dans ce projet:

## Général

- Faire de la documentation

## Devops

- Faire du CI/CD (pipeline de check de dépendances, tests unitaires etc..)
- Utiliser dependabot pour mettre à jour les dépendances automatiquement en créant des PR
- Utiliser semantic-release
- Build une image docker
- Utiliser SonarQube pour vérifier la qualimétrie du code

## Script

- Demander le chemin de sortie en paramètre
- Supprimer la méthode `fileExists` et vérifier directement dans la méthode convert
- Faire des tests d'intégrations avec des fichiers contenant beaucoup de services
- Faire un test unitaire par rapport aux permissions des fichiers
- Utiliser une architecture hexagonale afin d'être le plus abstrait possible afin de préserver les logiques métiers de l'application
  ![](https://i.imgur.com/6mXc23f.png)

## API

Il n'y avait pas besoin d'utiliser Fastify mais le faire directement avec NextJS.

## Front

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
