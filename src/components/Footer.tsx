export default function Footer() {
  return (
    <footer className="bg-hero-start mt-auto">
      <div className="px-6 py-4 flex items-center justify-end text-sm text-white/40">
        <p>&copy; {new Date().getFullYear()} infradawn.xyz</p>
      </div>
    </footer>
  );
}
