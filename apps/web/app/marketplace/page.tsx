import useSWR from 'swr';
import Link from 'next/link';

const fetcher = (url: string) => fetch(url).then(r => r.json());
const STORE_URL = process.env.NEXT_PUBLIC_STORE_URL || 'http://localhost:4103';

export default function Marketplace() {
  const { data } = useSWR(`${STORE_URL}/products`, fetcher);
  const products = data?.products ?? [];
  return (
    <main style={{ padding: 24, maxWidth: 1000, margin: '0 auto' as any }}>
      <h1>Marketplace</h1>
      <p style={{ color: '#64748b' }}>Buy digital products made within IHSAN.</p>
      <ul>
        {products.map((p: any) => (
          <li key={p.id}>
            {p.title} — ${p.price / 100}
            {' '}
            <Link href={`${process.env.NEXT_PUBLIC_PAYMENTS_URL || 'http://localhost:4102'}/checkout/create?title=${encodeURIComponent(p.title)}&price=${p.price}`}>Buy</Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
