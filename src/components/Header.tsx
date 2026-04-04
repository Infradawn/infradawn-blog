import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-hero-start sticky top-0 z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
          infradawn<span className="text-accent">.</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-white/60">
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-white transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
