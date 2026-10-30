import Link from "next/link";

export default function NotFound() {
  return (
    <main className="grid min-h-screen place-items-center bg-ink p-6 text-center text-cream">
      <div>
        <h1 className="font-display text-5xl text-gold">404</h1>
        <p className="mt-3 text-lg">यह पेज नहीं मिला।</p>
        <Link href="/" className="mt-6 inline-flex min-h-12 items-center rounded-full bg-gold px-6 font-bold text-ink">होम पर जाएं</Link>
      </div>
    </main>
  );
}

