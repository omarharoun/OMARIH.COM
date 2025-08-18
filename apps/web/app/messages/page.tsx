"use client";
import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

export default function Messages() {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [text, setText] = useState('');

  useEffect(() => {
    const s = io(process.env.NEXT_PUBLIC_SOCIAL_URL || 'http://localhost:4104');
    setSocket(s);
    s.on('message', (m: string) => setMessages((prev) => [...prev, m]));
    return () => s.disconnect();
  }, []);

  return (
    <main style={{ padding: 24, maxWidth: 800, margin: '0 auto' as any }}>
      <h1>Messages</h1>
      <div style={{ display: 'grid', gap: 8, marginTop: 12 }}>
        <div style={{ minHeight: 240, border: '1px solid #e2e8f0', borderRadius: 8, padding: 12 }}>
          {messages.map((m, i) => (
            <div key={i}>{m}</div>
          ))}
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <input value={text} onChange={(e) => setText(e.target.value)} placeholder="Type a message" style={{ flex: 1 }} />
          <button onClick={() => { socket?.emit('message', text); setText(''); }}>Send</button>
        </div>
      </div>
    </main>
  );
}
