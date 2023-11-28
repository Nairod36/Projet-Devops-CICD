# Projet-Devops-CICD
Créez un référentiel GitHub CICD

## Server docker
Un server local GO a été mit en place pour réaliser une veille sur les mises à jours de l'image de ce projet.
[docker-server](https://github.com/Nairod36/srvDocerHub)

### Branches Principales
- main : Branche principale contenant le code en production, représentant les versions stables livrées.
- develop : Branche de développement pour l'intégration continue du travail en cours.

### Branches de Correction de Bugs
- fix/ : Les branches de correction de bugs sont créées à partir de master pour résoudre des problèmes critiques en production. Elles sont ensuite fusionnées dans master et develop.

### BRanches de feature
- feat/ : Les branches de feature sont utilisés pour ajouter de nouvelles features dans le projet puis etre ajouter au code principal.

### Règles de Protection des Branches
La branche PROD est protégée, nécessitant des validations pour être fusionnée.
Les branches de version (release/*) nécessitent des validations pour garantir la stabilité avant la fusion dans master.
Les branches de fonctionnalités (feature/*) peuvent être fusionnées dans develop après revue de code.