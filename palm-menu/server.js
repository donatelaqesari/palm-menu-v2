import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import QRCode from 'qrcode';
import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';
import { menuData } from './src/data/menu.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ── Persistent JSON database for reviews ─────────────────
const dbPath = path.join(__dirname, 'data', 'reviews.json');
fs.mkdirSync(path.dirname(dbPath), { recursive: true });

const adapter = new JSONFile(dbPath);
const db = new Low(adapter, { reviews: [], nextId: 1 });
await db.read();
// Seed with a few starter reviews if empty
if (!db.data.reviews.length) {
  db.data.reviews = [
    { id: 1, name: "Arta M.",  rating: 5, text: "Ambiance incredible, cocktails even better. Amore is a must-try! 🌴", date: "2025-06-15" },
    { id: 2, name: "Luca R.",  rating: 5, text: "Best cocktail bar on the boulevard. American Gangster is unreal.", date: "2025-06-18" },
    { id: 3, name: "Sofia K.", rating: 4, text: "Loved the Pina Colada and the vibe. Will definitely come back!", date: "2025-06-20" },
  ];
  db.data.nextId = 4;
  await db.write();
}

const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// ── Menu ──────────────────────────────────────────────────
app.get('/api/menu', (req, res) => res.json(menuData));

app.get('/api/menu/:categoryId', (req, res) => {
  const cat = menuData.categories.find(c => c.id === req.params.categoryId);
  if (!cat) return res.status(404).json({ error: 'Category not found' });
  res.json(cat);
});

app.get('/api/search', (req, res) => {
  const q = (req.query.q || '').toLowerCase();
  if (!q) return res.json([]);
  const results = [];
  for (const cat of menuData.categories) {
    for (const item of cat.items) {
      if (item.name.toLowerCase().includes(q) || item.description.toLowerCase().includes(q) || cat.name.toLowerCase().includes(q)) {
        results.push({ ...item, category: cat.name, categoryId: cat.id });
      }
    }
  }
  res.json(results);
});

app.get('/api/qr', async (req, res) => {
  try {
    const url = req.query.url || `http://localhost:${PORT}`;
    const qr = await QRCode.toDataURL(url, {
      width: 400, margin: 2,
      color: { dark: '#5c1a00', light: '#fff4e0' }
    });
    res.json({ qr, url });
  } catch (err) {
    res.status(500).json({ error: 'Failed to generate QR' });
  }
});

// ── Reviews (persistent) ──────────────────────────────────
app.get('/api/reviews', async (req, res) => {
  await db.read();
  const sorted = [...db.data.reviews].sort((a, b) => new Date(b.date) - new Date(a.date));
  res.json(sorted);
});

app.post('/api/reviews', async (req, res) => {
  const { name, rating, text } = req.body;
  if (!name || !rating || !text) return res.status(400).json({ error: 'name, rating and text are required' });
  if (typeof rating !== 'number' || rating < 1 || rating > 5) return res.status(400).json({ error: 'rating must be 1–5' });
  if (text.length > 300) return res.status(400).json({ error: 'Review too long (max 300 chars)' });

  await db.read();
  const review = {
    id: db.data.nextId++,
    name: String(name).trim().slice(0, 40),
    rating: Math.round(rating),
    text: String(text).trim(),
    date: new Date().toISOString().split('T')[0]
  };
  db.data.reviews.push(review);
  await db.write();
  res.status(201).json(review);
});

app.delete('/api/reviews/:id', async (req, res) => {
  await db.read();
  const id = parseInt(req.params.id);
  const before = db.data.reviews.length;
  db.data.reviews = db.data.reviews.filter(r => r.id !== id);
  if (db.data.reviews.length === before) return res.status(404).json({ error: 'Not found' });
  await db.write();
  res.json({ ok: true });
});

app.get('/api/health', (_, res) => res.json({ status: 'ok' }));
app.get('*', (req, res) => res.sendFile(path.join(__dirname, 'public', 'index.html')));

app.listen(PORT, () => {
  console.log(`\n🌴 Palm Beach Bar → http://localhost:${PORT}\n`);
});
