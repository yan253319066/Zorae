import { getRequestContext } from '@cloudflare/next-on-pages';

interface D1Result {
  success: boolean;
  results: Record<string, unknown>[];
}

interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  run(): Promise<D1Result>;
}

interface D1Database {
  prepare(sql: string): D1PreparedStatement;
}

declare global {
  interface CloudflareEnv {
    DB: D1Database;
  }
}

export const runtime = 'edge';

export async function POST(request: Request) {
  try {
    const body: {
      name?: string;
      email?: string;
      amount?: number;
      vision?: string;
    } = await request.json();

    const { name, email, amount, vision = '' } = body;

    if (!name || !email || !amount) {
      return Response.json(
        { error: 'Missing required fields: name, email, amount' },
        { status: 400 },
      );
    }

    const { env } = getRequestContext();
    const DB = env.DB;

    const id = crypto.randomUUID();
    const iso = new Date().toISOString();
    const displayTime = new Date().toLocaleDateString('zh-CN', {
      year: 'numeric',
      month: '2-digit',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    });

    await DB.prepare(
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
}
