CREATE TABLE IF NOT EXISTS offers (
  id        TEXT PRIMARY KEY,
  name      TEXT NOT NULL,
  email     TEXT NOT NULL,
  amount    REAL NOT NULL,
  vision    TEXT DEFAULT '',
  timestamp TEXT NOT NULL,
  status    TEXT NOT NULL DEFAULT 'pending'
);
