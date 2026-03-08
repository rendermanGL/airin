import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center relative z-10">
      <div
        className="w-full max-w-md mx-4 p-8"
        style={{
          background: 'rgba(43,18,76,0.4)',
          border: '1px solid rgba(251,228,216,0.08)',
          borderRadius: 0,
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="flex mb-4 gap-2 items-center">
          <AlertCircle className="h-8 w-8" style={{ color: 'var(--col-rose)' }} />
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontWeight: 400, fontSize: '1.5rem', color: 'var(--col-cream)' }}>
            404 Page Not Found
          </h1>
        </div>
        <p className="mt-4" style={{ color: 'var(--col-blush)', fontSize: '0.85rem' }}>
          The page you're looking for doesn't exist.
        </p>
        <a
          href="/"
          className="inline-block mt-6 px-6 py-2 transition-all duration-300 uppercase tracking-widest text-xs"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 400,
            border: '1px solid rgba(251,228,216,0.3)',
            color: 'var(--col-cream)',
            background: 'transparent',
            borderRadius: 0,
          }}
        >
          Go Home
        </a>
      </div>
    </div>
  );
}
