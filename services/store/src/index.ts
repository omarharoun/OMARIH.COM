import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));

app.get('/health', (_req, res) => res.json({ ok: true }));

// Mock product listing owned by creators
const PRODUCTS = [
  { id: 'gfx_001', title: 'Minimal Poster Pack', price: 1500 },
  { id: 'txt_001', title: 'Micro Book: Focus Mastery', price: 900 },
  { id: 'app_001', title: 'Habit Tracker Starter', price: 2500 }
];

app.get('/products', (_req, res) => res.json({ products: PRODUCTS }));

const PORT = Number(process.env.PORT || 4103);
app.listen(PORT, () => console.log(`Store service on http://localhost:${PORT}`));
