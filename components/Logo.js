// Original NEXORA wordmark + glyph (no third-party assets).
export default function Logo({ className = "", light = false }) {
  const fg = light ? "#ffffff" : "#0e1116";
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg width="28" height="28" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="nexora-mark" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#0891b2" />
          </linearGradient>
        </defs>
        <rect width="32" height="32" rx="9" fill="url(#nexora-mark)" />
        <path d="M9 22V10l14 12V10" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-lg font-extrabold tracking-[0.18em]" style={{ color: fg }}>
        NEXORA
      </span>
    </span>
  );
}
