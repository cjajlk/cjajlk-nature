# CJAJLK Nature — V1.4

Application web en français pour préparer des produits du quotidien avec prudence : catalogue de **30 recettes ou méthodes** et **5 guides de précaution**, profils locaux, liste de matériel, calcul de quantités, coûts et historique.

## Démarrer en local

- Ouvrir ce dossier avec **VS Code**.
- Clic droit sur `index.html` → **Open with Live Server**.
- Sur Android, utiliser le site publié en HTTPS ; pour un premier test local, `CJAJLK_Nature_V1_4_Standalone.html` peut être ouvert dans Chrome (et non dans une visionneuse HTML).

## Contenu

- `index.html`, `style.css`, `app.js`, `data.js` : application.
- `sw.js`, `manifest.webmanifest`, `assets/` : installation web/hors ligne après publication HTTPS.
- `CJAJLK_Nature_V1_4_Standalone.html` : version autonome mobile.
- `.nojekyll` : compatibilité GitHub Pages.
- `PUBLIER_GITHUB.md` : procédure de première publication.

## Git

Ce dossier contient **un dépôt Git initialisé sur `main` et son historique local `.git`**. Il n'est pas encore relié à un dépôt GitHub distant : aucun `origin` n'est configuré. Voir `PUBLIER_GITHUB.md`.

## Transparence et sécurité

CJAJLK Nature ne perçoit pas de commission et n'impose aucun vendeur. Les recettes restent à évaluer pour leurs usages et compatibilités ; elles ne sont pas des formules cosmétiques certifiées. Ne pas utiliser des mélanges maison pour remplacer un produit solaire testé, un dentifrice fluoré ou un désinfectant à efficacité démontrée.

La sauvegarde est **locale au navigateur et à l'origine du site**. Exporter les données avant de passer d'un fichier HTML local à GitHub Pages ; les sauvegardes ne migrent pas automatiquement.
