export const runtime = 'nodejs';

import { NextResponse } from 'next/server';

// Placeholder minimal pour connecter plus tard le flow Genkit
export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));
  return NextResponse.json({ ok: true, service: 'chat', echo: body ?? null });
}


