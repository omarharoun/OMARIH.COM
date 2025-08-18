import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import Stripe from 'stripe';

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN || 'http://localhost:3000' }));

app.get('/health', (_req, res) => res.json({ ok: true }));

// Mock feed/products
const PRODUCTS = [
  { id: 'gfx_001', title: 'Minimal Poster Pack', price: 1500 },
  { id: 'txt_001', title: 'Micro Book: Focus Mastery', price: 900 },
  { id: 'app_001', title: 'Habit Tracker Starter', price: 2500 },
];

app.get('/marketplace/products', (_req, res) => res.json({ products: PRODUCTS }));

// Stripe Checkout (buyers)
app.get('/checkout/create', async (req, res) => {
  try {
    const productId = String(req.query.productId || '');
    const product = PRODUCTS.find((p) => p.id === productId);
    if (!product) return res.status(404).json({ error: 'Product not found' });

    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) return res.status(501).json({ error: 'Stripe not configured' });

    const stripe = new Stripe(key, { apiVersion: '2024-06-20' });
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        { price_data: { currency: 'usd', unit_amount: product.price, product_data: { name: product.title } }, quantity: 1 },
      ],
      success_url: 'http://localhost:3000?status=success',
      cancel_url: 'http://localhost:3000?status=cancel',
    });
    res.redirect(303, session.url!);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

// AI creation (mock if no key)
app.post('/ai/create', async (req, res) => {
  try {
    const prompt = String(req.body?.prompt ?? '');
    if (!prompt) return res.status(400).json({ error: 'Missing prompt' });

    const key = process.env.OPENAI_API_KEY;
    if (!key) {
      return res.json({ result: `Mocked creation for: ${prompt}` });
    }
    // Lazy import to avoid bundling issues
    const { OpenAI } = await import('openai');
    const client = new OpenAI({ apiKey: key });
    const completion = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        { role: 'system', content: 'You help users create useful, beautiful content.' },
        { role: 'user', content: prompt },
      ],
    });
    const text = completion.choices?.[0]?.message?.content || 'No output';
    res.json({ result: text });
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

// PayPal payouts (stub)
app.post('/payouts/create', async (req, res) => {
  const { amount, receiver } = req.body || {};
  if (!amount || !receiver) return res.status(400).json({ error: 'Missing amount/receiver' });
  if (!process.env.PAYPAL_CLIENT_ID || !process.env.PAYPAL_CLIENT_SECRET) {
    return res.status(501).json({ error: 'PayPal not configured' });
  }
  // TODO: Integrate PayPal Payouts API
  return res.json({ status: 'queued', amount, receiver });
});

const server = createServer(app);
const io = new Server(server, { cors: { origin: process.env.CORS_ORIGIN || 'http://localhost:3000' } });

io.on('connection', (socket) => {
  socket.on('message', (msg: string) => {
    io.emit('message', msg);
  });
});

const PORT = Number(process.env.PORT || 4000);
server.listen(PORT, () => console.log(`API ready on http://localhost:${PORT}`));
