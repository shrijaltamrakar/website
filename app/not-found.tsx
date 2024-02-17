import Link from 'next/link';
import Time from './component/time';

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <h2 className="py-10 text-5xl text-center">You are lost.</h2>
      <Time />
      <button className="mt-14 border px-10 py-3">
        <Link href="/">Go Home</Link>
      </button>
    </main>
  );
}
