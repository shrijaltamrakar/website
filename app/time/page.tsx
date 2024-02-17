'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Time() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDate(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="border-cyan-100 border-2 p-28">
        <h2 className="pt-6 text-5xl text-center">
          {date.toLocaleTimeString()}
        </h2>

        <h2 className="pt-6 text-2xl text-center">
          {date.toLocaleDateString()}
        </h2>
      </div>
      <button className='mt-14 border px-10 py-3' >
        <Link href="/">Go Home</Link>
      </button>
    </main>
  );
}
