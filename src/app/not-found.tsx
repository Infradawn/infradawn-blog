import Link from "next/link";

export default function NotFound() {
  return (
    <div className="max-w-3xl mx-auto px-10 py-24 text-center">
      <h1 className="text-7xl font-bold text-foreground mb-4">404</h1>
      <p className="text-lg text-muted mb-8">
        This page doesn&apos;t exist — maybe it was a dream.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
      >
        &larr; Back to home
      </Link>
    </div>
  );
}
