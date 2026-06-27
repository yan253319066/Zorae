// Minimal type declarations for Cloudflare Pages Functions
// (full types from @cloudflare/workers-types when installed)
interface D1Result {
  success: boolean;
  results: Record<string, unknown>[];
}

interface D1Database {
  prepare(sql: string): D1PreparedStatement;
}

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  run(): Promise<D1Result>;
}

interface ExecutionContext {
  waitUntil(promise: Promise<unknown>): void;
  passThroughOnException(): void;
}

interface PagesFunction<Env = unknown> {
  (context: EventContext<Env, string, unknown>): Response | Promise<Response>;
}

interface EventContext<Env, P extends string, Data> {
  request: Request;
  env: Env;
  params: Record<P, string>;
  data: Data;
  next(): Promise<Response>;
  waitUntil(promise: Promise<unknown>): void;
}

interface Env {
  DB: D1Database;
}

export const onRequest: PagesFunction<Env> = async (context) => {
  if (context.request.method === 'OPTIONS') {
    return new Response(null, {
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type',
      },
    });
  }

  if (context.request.method !== 'POST') {
    return Response.json({ error: 'Method not allowed' }, { status: 405 });
  }

  try {
    const body: {
      name?: string;
      email?: string;
      amount?: number;
      vision?: string;
    } = await context.request.json();

    const { name, email, amount, vision = '' } = body;

    if (!name || !email || !amount) {
      return Response.json(
        { error: 'Missing required fields: name, email, amount' },
        { status: 400 },
      );
    }

    const id = crypto.randomUUID();
    const iso = new Date().toISOString();
    const displayTime = new Date().toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

    await context.env.DB.prepare(
      `INSERT INTO offers (id, name, email, amount, vision, timestamp, status)
       VALUES (?, ?, ?, ?, ?, ?, ?)`,
    )
      .bind(id, name, email, amount, vision, iso, 'pending')
      .run();

    return Response.json({
      id,
      name,
      email,
      amount,
      vision,
      timestamp: displayTime,
      status: 'pending',
    });
  } catch (err) {
    console.error('D1 offer insert failed:', err);
    return Response.json({ error: String(err) }, { status: 500 });
  }
};
