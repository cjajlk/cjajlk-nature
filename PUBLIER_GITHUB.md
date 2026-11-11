# Publier CJAJLK Nature sur GitHub (première fois)

## 1. Créer le dépôt GitHub

Sur GitHub, créer un **nouveau dépôt vide** (ex. `cjajlk-nature`) dans votre compte, sans ajouter automatiquement de README, licence ou .gitignore, puisque ces fichiers sont déjà présents ici.

Choisir **Public** si vous souhaitez utiliser GitHub Pages gratuitement avec une URL publique. Ne publiez aucune information privée dans le dépôt.

## 2. Relier le dépôt local au dépôt distant

Ouvrir le dossier `CJAJLK_Nature_V1_4_Git` dans VS Code, puis ouvrir son terminal. Remplacer `<URL_DU_DEPOT_CREE>` par l'URL HTTPS affichée sur GitHub (la vraie URL du dépôt que vous venez de créer) :

```bash
git remote add origin <URL_DU_DEPOT_CREE>
git push -u origin main
```

**Ne jamais utiliser `git init` une deuxième fois dans ce dossier.** Il contient déjà un historique Git sur `main`.

## 3. Activer GitHub Pages

Sur le dépôt GitHub : `Settings` → `Pages` → `Build and deployment` → `Deploy from a branch` → branche `main` / dossier `/(root)` → `Save`.

GitHub fournira ensuite l'adresse HTTPS du site. Attendre qu'il affiche le déploiement comme terminé, puis tester l'ouverture sur PC et Samsung.

## 4. Mises à jour ultérieures

Après avoir modifié les fichiers :

```bash
git add .
git commit -m "Mise à jour CJAJLK Nature"
git push
```

## 5. Sauvegardes

Les données de profils et d'historique stockées dans Chrome sous `content://` ne seront **pas** automatiquement transférées vers le futur site HTTPS. Utiliser la fonction d'export des données de l'application avant de changer de mode d'accès, puis réimporter lorsque disponible sur le site publié.
