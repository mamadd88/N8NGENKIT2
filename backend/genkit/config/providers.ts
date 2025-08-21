// Placeholders de configuration des providers Genkit
export type ProviderConfig = {
  openai?: { apiKey?: string };
  google?: { apiKey?: string };
  anthropic?: { apiKey?: string };
};

export function loadProviderConfig(): ProviderConfig {
  return {
    openai: { apiKey: process.env.OPENAI_API_KEY },
    google: { apiKey: process.env.GOOGLE_API_KEY },
    anthropic: { apiKey: process.env.ANTHROPIC_API_KEY },
  };
}


