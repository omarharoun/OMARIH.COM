"use client";
import Link from 'next/link';
import Button from '../components/Button';

export default function HomePage() {
  return (
    <main>
      <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #e2e8f0', padding: '16px 0' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 24, fontWeight: 'bold' }}>IHSAN</div>
          <nav style={{ display: 'flex', gap: 24 }}>
            <Link href="https://store.omarih.com" target="_blank" rel="noopener noreferrer" style={{ color: '#4a5568', fontWeight: 500 }}>Store</Link>
          </nav>
        </div>
      </header>

      <section style={{ padding: '80px 0', background: '#fff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px', display: 'grid', gap: 48 }}>
          <div>
            <h1 style={{ fontSize: 48, marginBottom: 24, lineHeight: 1.15 }}>Hello there<br/>It's IHSAN!</h1>
            <p style={{ fontSize: 20, color: '#4a5568', marginBottom: 24 }}>Author, creator & productivity enthusiast.</p>
            <p style={{ fontSize: 16, color: '#4a5568', marginBottom: 32, maxWidth: 640 }}>I create simple productivity tutorials and templates. This is a simplified version of the site for demonstration purposes.</p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <Button title="Visit Store" onClick={() => window.open('https://store.omarih.com', '_blank')} />
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: '#1a202c', color: '#a0aec0', padding: '32px 0', marginTop: 40 }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 14 }}>© {new Date().getFullYear()} IHSAN</span>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link href="https://store.omarih.com" target="_blank" style={{ color: '#a0aec0' }}>Store</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
