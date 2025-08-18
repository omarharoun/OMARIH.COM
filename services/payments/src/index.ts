import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import Stripe from 'stripe';

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));

app.get('/health', (_req, res) => res.json({ ok: true }));

app.get('/checkout/create', async (req, res) => {
  try {
    const title = String(req.query.title || 'Untitled');
    const price = Number(req.query.price || 1000);
    const key = process.env.STRIPE_SECRET_KEY;
    if (!key) return res.status(501).json({ error: 'Stripe not configured' });
    const stripe = new Stripe(key, { apiVersion: '2024-06-20' });
    const session = await stripe.checkout.sessions.create({
      mode: 'payment',
      line_items: [
        { price_data: { currency: 'usd', unit_amount: price, product_data: { name: title } }, quantity: 1 },
      ],
      success_url: (process.env.SUCCESS_URL || 'http://localhost:3000') + '?status=success',
      cancel_url: (process.env.CANCEL_URL || 'http://localhost:3000') + '?status=cancel',
    });
    res.redirect(303, session.url!);
  } catch (e: any) {
    res.status(500).json({ error: e.message });
  }
});

const PORT = Number(process.env.PORT || 4102);
app.listen(PORT, () => console.log(`Payments service on http://localhost:${PORT}`));
