import Link from "next/link";

export default function Header() {
  return (
    <header className="border-b border-border bg-surface/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="max-w-3xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
          infradawn
        </Link>
        <nav className="flex items-center gap-6 text-sm font-medium text-muted">
          <Link href="/" className="hover:text-foreground transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-foreground transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
