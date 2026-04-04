import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-56 bg-hero-start flex flex-col px-6 py-8 z-40">
      {/* Logo */}
      <Link
        href="/"
        className="text-xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity mb-1"
      >
        infradawn<span className="text-accent">.</span>
      </Link>
      <p className="text-xs text-white/40 mb-10">
        Tech &amp; projects
      </p>

      {/* Navigation */}
      <nav className="flex flex-col gap-1">
        <Link
          href="/"
          className="text-sm font-medium text-white/60 hover:text-white px-3 py-2 rounded-md hover:bg-white/5 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/about"
          className="text-sm font-medium text-white/60 hover:text-white px-3 py-2 rounded-md hover:bg-white/5 transition-colors"
        >
          About
        </Link>
      </nav>

      {/* Footer in sidebar */}
      <div className="mt-auto text-xs text-white/30">
        <p>&copy; {new Date().getFullYear()} infradawn.xyz</p>
      </div>
    </aside>
  );
}
