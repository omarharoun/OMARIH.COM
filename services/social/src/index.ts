import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
app.use(express.json());
app.use(cors({ origin: process.env.CORS_ORIGIN || '*' }));

app.get('/health', (_req, res) => res.json({ ok: true }));

const http = createServer(app);
const io = new Server(http, { cors: { origin: process.env.CORS_ORIGIN || '*' } });

io.on('connection', (socket) => {
  socket.on('message', (msg: string) => io.emit('message', msg));
});

const PORT = Number(process.env.PORT || 4104);
http.listen(PORT, () => console.log(`Social service on http://localhost:${PORT}`));
