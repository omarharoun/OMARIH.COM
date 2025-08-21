"use client";
import Link from 'next/link';
import Button from '../components/Button';

// Reusable external link icon (SVG) for better visual consistency.
// Adjust size/color via props if needed.
const ExternalIcon = ({ size = 14, color = 'currentColor' }: { size?: number; color?: string }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke={color}
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    style={{ marginLeft: 4, flexShrink: 0 }}
    aria-hidden="true"
  >
    <path d="M18 13v6a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function HomePage() {
  return (
    <main>
      <header style={{ backgroundColor: '#fff', borderBottom: '1px solid #e2e8f0', padding: '16px 0' }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ fontSize: 24, fontWeight: 'bold' }}>IHSAN</div>
          <nav style={{ display: 'flex', gap: 24 }}>
            <Link href="https://life-orb.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ color: '#4a5568', fontWeight: 500, display: 'inline-flex', alignItems: 'center' }}>
              LifeOrb <ExternalIcon />
            </Link>
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
              <Button
                title="Open LifeOrb Demo"
                onClick={() => window.open('https://life-orb.vercel.app/', '_blank')}
                style={{ background: '#1a202c', color: '#fff', padding: '10px 18px', borderRadius: 6, cursor: 'pointer', border: '1px solid #2d3748' }}
              />
            </div>
          </div>
        </div>
      </section>

      <footer style={{ background: '#1a202c', color: '#a0aec0', padding: '32px 0', marginTop: 40 }}>
        <div style={{ maxWidth: 960, margin: '0 auto', padding: '0 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
          <span style={{ fontSize: 14 }}>© {new Date().getFullYear()} IHSAN</span>
          <div style={{ display: 'flex', gap: 16 }}>
            <Link href="https://life-orb.vercel.app/" target="_blank" style={{ color: '#a0aec0', display: 'inline-flex', alignItems: 'center' }}>
              LifeOrb <ExternalIcon />
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
