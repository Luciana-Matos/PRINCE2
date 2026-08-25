const { sql } = require('@vercel/postgres');

const ROW_ID = 'default';

async function ensureTable() {
  await sql`
    CREATE TABLE IF NOT EXISTS progress (
      id TEXT PRIMARY KEY,
      data JSONB NOT NULL,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
    )
  `;
}

module.exports = async (req, res) => {
  try {
    await ensureTable();

    if (req.method === 'GET') {
      const { rows } = await sql`SELECT data FROM progress WHERE id = ${ROW_ID}`;
      res.status(200).json(rows[0] ? rows[0].data : null);
      return;
    }

    if (req.method === 'POST') {
      let body = req.body;
      if (typeof body === 'string') {
        try {
          body = JSON.parse(body);
        } catch (e) {
          body = null;
        }
      }
      if (!body || typeof body !== 'object') {
        res.status(400).json({ error: 'Invalid body' });
        return;
      }

      await sql`
        INSERT INTO progress (id, data, updated_at)
        VALUES (${ROW_ID}, ${JSON.stringify(body)}::jsonb, now())
        ON CONFLICT (id) DO UPDATE SET data = EXCLUDED.data, updated_at = EXCLUDED.updated_at
      `;
      res.status(200).json({ ok: true });
      return;
    }

    res.setHeader('Allow', 'GET, POST');
    res.status(405).json({ error: 'Method not allowed' });
  } catch (e) {
    console.error('progress api error', e);
    res.status(500).json({ error: 'Database error', message: e.message });
  }
};
