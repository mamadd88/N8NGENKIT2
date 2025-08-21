export type RequiredEnv = {
  OPENAI_API_KEY?: string;
  GOOGLE_CLIENT_ID?: string;
  GOOGLE_CLIENT_SECRET?: string;
  SUPABASE_URL?: string;
  SUPABASE_ANON_KEY?: string;
  SUPABASE_SERVICE_ROLE_KEY?: string;
  ENCRYPTION_SECRET?: string;
};

export const env: RequiredEnv = {
  OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET: process.env.GOOGLE_CLIENT_SECRET,
  SUPABASE_URL: process.env.SUPABASE_URL,
  SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY,
  SUPABASE_SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY,
  ENCRYPTION_SECRET: process.env.ENCRYPTION_SECRET,
};

export function assertServerSecrets() {
  const missing: string[] = [];
  const required: Array<keyof RequiredEnv> = [
    'OPENAI_API_KEY',
    'SUPABASE_URL',
    'SUPABASE_ANON_KEY',
  ];
  for (const key of required) {
    if (!env[key]) missing.push(key);
  }
  if (missing.length > 0) {
    throw new Error(`Missing required env vars: ${missing.join(', ')}`);
  }
}


