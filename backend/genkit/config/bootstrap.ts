// Bootstrap minimal Genkit (placeholder). À remplacer par init réelle.
import { env, assertServerSecrets } from './env';
import { loadProviderConfig } from './providers';

let initialized = false;

export function ensureGenkitInitialized() {
  if (initialized) return;
  assertServerSecrets();
  const providers = loadProviderConfig();
  // Ici on branchera @genkit-ai/core et les providers réels.
  // Exemple (à implémenter plus tard):
  // initGenkit({ providers, logging: { level: process.env.GENKIT_LOG_LEVEL || 'info' } });
  initialized = true;
}

export { env };


