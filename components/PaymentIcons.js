// Original, hand-drawn payment-method icons — stylized representations,
// not traced copies of the official network logo artwork.

function Card({ children, bg = "#ffffff" }) {
  return (
    <svg width="44" height="28" viewBox="0 0 44 28" aria-hidden="true">
      <rect width="44" height="28" rx="5" fill={bg} />
      {children}
    </svg>
  );
}

export function VisaIcon() {
  return (
    <Card>
      <text x="22" y="19" textAnchor="middle" fontFamily="Georgia, serif" fontStyle="italic" fontWeight="700" fontSize="13" fill="#1a3a8f">
        VISA
      </text>
    </Card>
  );
}

export function MastercardIcon() {
  return (
    <Card>
      <circle cx="18" cy="14" r="8" fill="#eb5b2c" />
      <circle cx="27" cy="14" r="8" fill="#f2a900" opacity="0.92" />
    </Card>
  );
}

export function AmexIcon() {
  return (
    <Card bg="#1f72cd">
      <text x="22" y="18" textAnchor="middle" fontFamily="Arial, sans-serif" fontWeight="700" fontSize="9" fill="#ffffff">
        AMEX
      </text>
    </Card>
  );
}

export function PayPalIcon() {
  return (
    <Card bg="#003087">
      <text x="22" y="18" textAnchor="middle" fontFamily="Arial, sans-serif" fontStyle="italic" fontWeight="700" fontSize="9.5" fill="#ffffff">
        PayPal
      </text>
    </Card>
  );
}

export default function PaymentIcons({ className = "" }) {
  const icons = [VisaIcon, MastercardIcon, AmexIcon, PayPalIcon];
  return (
    <div className={`flex flex-wrap items-center gap-2 ${className}`}>
      {icons.map((Icon, i) => (
        <div key={i} className="overflow-hidden rounded-md ring-1 ring-white/15">
          <Icon />
        </div>
      ))}
    </div>
  );
}
