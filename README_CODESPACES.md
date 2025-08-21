# Développement avec GitHub Codespaces (sans localhost)

Ce projet est configuré pour tourner intégralement dans GitHub Codespaces, avec des URLs HTTPS publiques automatiques pour éviter tout conflit de ports.

## 1) Ouvrir dans Codespaces
1. Pousse le dépôt sur GitHub (ou crée un repo et ajoute ce dossier).
2. Clique sur Code → Codespaces → Create codespace on main.
3. Au premier démarrage, les ports 3000 (web) et 8080 (API) sont auto-forward et publics.

## 2) Variables d'environnement (Secrets)
Définis tes secrets dans GitHub → Settings → Codespaces secrets (ou Repo → Settings → Secrets and variables → Codespaces).

Variables recommandées:
- OPENAI_API_KEY
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- GOOGLE_API_KEY
- ANTHROPIC_API_KEY (optionnel)
- AZURE_OPENAI_API_KEY / AZURE_OPENAI_ENDPOINT (optionnel)
- PERPLEXITY_API_KEY (optionnel)
- SUPABASE_URL
- SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY (serveur uniquement)
- SUPABASE_DB_PASSWORD (jamais côté client)
- ENCRYPTION_SECRET
- GENKIT_LOG_LEVEL (ex: `info`)
- GENKIT_TRACING_ENABLED (ex: `true`)

Tu peux aussi créer un fichier `.env` dans le Codespace en t'inspirant de `.env.example` (ne pas committer de secrets).

## 3) Rendre les ports publics
La config devcontainer publie automatiquement:
- 3000 → Frontend (ou Next.js)
- 8080 → Backend/API/Genkit

Vérifie dans l'onglet "Ports" que la visibilité est bien "Public".

## 4) Configurer OAuth Google
1. Récupère l'URL publique du port dans l'onglet Ports (ex: `https://<codespace>-3000.app.github.dev`).
2. Dans la console Google Cloud → Credentials → OAuth 2.0 Client IDs → Authorized redirect URIs, ajoute:
   - `https://<codespace>-3000.app.github.dev/api/oauth/google/callback` (si le callback passe par le frontend)
   - OU `https://<codespace>-8080.app.github.dev/api/oauth/google/callback` (si le callback passe par l'API)
3. Mets `GOOGLE_CLIENT_ID` et `GOOGLE_CLIENT_SECRET` dans tes secrets Codespaces.

## 5) Démarrer les services
Dans le terminal Codespaces:
```bash
# Exemple général (adapter à ton projet)
npm install
npm run dev        # Frontend sur 3000
# et/ou
npm run api:dev    # Backend/Genkit sur 8080
```

## 6) Conseils
- Ne jamais exposer la clé `SUPABASE_SERVICE_ROLE_KEY` côté client. Utilise-la uniquement dans les routes/flows serveur.
- Si tu utilises des flows Genkit, préfère les déployer dans des routes serveur (Node runtime) plutôt que Edge.
- Pour le RAG/Indexation, privilégie des jobs en arrière-plan si les traitements sont longs.

Bonne dev expérience dans le cloud !
