"use client";
import { View, Text, Image } from 'ui';
import { Input, Button, Card } from 'ui';
import Link from 'next/link';
import { useState } from 'react';

const AI_URL = process.env.NEXT_PUBLIC_AI_URL || 'http://localhost:4101';

export default function HomePage() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  return (
    <main style={{ padding: 24, maxWidth: 1000, margin: '0 auto' as any }}>
      <section style={{ display: 'grid', gap: 16 }}>
        <h1 style={{ fontSize: 28, fontWeight: 700 }}>What do you want to create today?</h1>
        <div style={{ display: 'flex', gap: 8 }}>
          <Input placeholder="Describe your idea…" value={prompt} onChangeText={setPrompt} />
          <Button title={loading ? 'Working…' : 'Create'} onPress={async () => {
            try {
              setLoading(true);
              const r = await fetch(`${AI_URL}/ai/create`, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ prompt }) });
              const j = await r.json();
              setResult(j.result ?? '');
            } finally {
              setLoading(false);
            }
          }} />
        </div>
        <p style={{ color: '#64748b' }}>Be greeted by creations from people and agent-like creators below.</p>
        {result && (
          <Card>
            <Text style={{ fontWeight: '600' }}>Draft</Text>
            <Text style={{ marginTop: 6 }}>{result}</Text>
          </Card>
        )}
      </section>

      <section style={{ marginTop: 24 }}>
        <h2 style={{ fontSize: 20, fontWeight: 600, marginBottom: 12 }}>Discover</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: 16 }}>
          {MOCK_FEED.map((item) => (
            <Card key={item.id}>
              {item.type === 'image' && (
                <Image source={{ uri: item.src }} style={{ width: '100%', height: 160, borderRadius: 8 }} />
              )}
              <Text style={{ fontWeight: '600', marginTop: 8 }}>{item.title}</Text>
              <Text style={{ color: '#64748b', marginTop: 4 }}>{item.snippet}</Text>
            </Card>
          ))}
        </div>
      </section>

      <section style={{ marginTop: 32, display: 'flex', gap: 12 }}>
        <Link href="/marketplace">Marketplace</Link>
        <Link href="/messages">Messages</Link>
      </section>
    </main>
  );
}

const MOCK_FEED = [
  { id: '1', type: 'image', title: 'Dreamy Cityscape', snippet: 'An AI-assisted art piece.', src: 'https://picsum.photos/seed/ihsan1/600/400' },
  { id: '2', type: 'text', title: 'Micro-book: Focus', snippet: 'Short guide on staying focused.' },
  { id: '3', type: 'image', title: 'Minimal Poster', snippet: 'Graphic design template v1', src: 'https://picsum.photos/seed/ihsan2/600/400' },
];
