export function Footer() {
  return (
    <footer className="border-t border-term-border px-4 py-8 text-center text-xs term-dim">
      <p>
        <span className="text-term-green">$</span> echo &quot;Built with Next.js 14 · TypeScript · Tailwind&quot;
      </p>
      <p className="mt-2">© {new Date().getFullYear()} Abhilash Maurya</p>
    </footer>
  );
}
