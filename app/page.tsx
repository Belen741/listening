'use client';

import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      <h1>Listening Belen</h1>
      <p>
        <Link href="/tracks">Go to tracks</Link>
      </p>
    </main>
  );
}
