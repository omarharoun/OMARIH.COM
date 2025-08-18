import 'dotenv/config';
import express from 'express';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));

app.get('/health', (_req, res) => res.json({ ok: true }));

app.post('/ai/create', async (req, res) => {
  const prompt = String(req.body?.prompt ?? '');
  if (!prompt) return res.status(400).json({ error: 'Missing prompt' });
  const key = process.env.OPENAI_API_KEY;
  if (!key) return res.json({ result: `Mocked creation for: ${prompt}` });
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
});

const PORT = Number(process.env.PORT || 4101);
app.listen(PORT, () => console.log(`AI service on http://localhost:${PORT}`));
