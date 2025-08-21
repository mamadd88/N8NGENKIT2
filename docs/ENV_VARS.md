# Variables d'environnement requises

Renseigne ces variables via "Codespaces Secrets" ou variables de repo/organisation. N'ajoute pas de secrets au dépôt.

## Providers
- OPENAI_API_KEY
- ANTHROPIC_API_KEY (optionnel)
- AZURE_OPENAI_API_KEY (optionnel)
- AZURE_OPENAI_ENDPOINT (optionnel)
- PERPLEXITY_API_KEY (optionnel)
- GOOGLE_API_KEY

## OAuth Google
- GOOGLE_CLIENT_ID
- GOOGLE_CLIENT_SECRET
- Redirect URIs (config Google Cloud, ne pas mettre dans .env):
  - https://<codespace>-3000.app.github.dev/api/oauth/google/callback
  - ou https://<codespace>-8080.app.github.dev/api/oauth/google/callback

## Supabase
- SUPABASE_URL
- SUPABASE_ANON_KEY
- SUPABASE_SERVICE_ROLE_KEY (serveur uniquement)
- SUPABASE_DB_PASSWORD (si nécessaire pour migrations locales)

## Genkit
- GENKIT_LOG_LEVEL (ex: info)
- GENKIT_TRACING_ENABLED (true/false)

## Application
- ENCRYPTION_SECRET (chaîne aléatoire forte)
