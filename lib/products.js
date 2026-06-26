// NEXORA TRADING LLC product catalog
// All product names, copy and pricing here are original to NEXORA.
// No third-party brand names, logos or copied marketing text are used.

export const CATEGORIES = [
  { slug: "kitchen", name: "Kitchen" },
  { slug: "living", name: "Living" },
  { slug: "lighting", name: "Lighting" },
  { slug: "wellness", name: "Wellness" },
];

export const PRODUCTS = [
  {
    slug: "auraglow-sunrise-lamp",
    name: "AuraGlow Sunrise Lamp",
    category: "lighting",
    price: 49.99,
    rating: 4.8,
    reviews: 214,
    badge: "Bestseller",
    short: "30-minute sunrise simulation with 20 brightness levels and 8 colors.",
    description:
      "AuraGlow brightens gradually over 30 minutes to wake you without a jarring alarm sound. Choose from 20 brightness levels and 8 ambient colors, plus a dimmable reading mode and a soft nightlight. Controlled with a single touch ring on top, and powered by USB-C.",
    features: [
      "30-minute gradual sunrise + sunset modes",
      "20 brightness levels, 8 ambient colours",
      "Touch-ring control, remembers your last setting",
      "USB-C powered, sits under 15 cm tall",
    ],
    specs: { Power: "USB-C, 5 W", Height: "14.5 cm", Material: "Matte ABS + frosted shade", Warranty: "1 year" },
  },
  {
    slug: "driftsilent-mini-humidifier",
    name: "DriftSilent Mini Humidifier",
    category: "wellness",
    price: 27.99,
    rating: 4.6,
    reviews: 389,
    badge: "New",
    short: "Quiet 320ml humidifier with up to 10 hours of mist per fill.",
    description:
      "DriftSilent adds moisture back into dry rooms at under 28 decibels, so it runs quietly through the night or during work calls. The 320ml tank lasts up to 10 hours per fill, with auto shut-off when empty and an optional warm nightlight ring.",
    features: [
      "Ultra-quiet operation under 28 dB",
      "320 ml tank, up to 10 hours per fill",
      "Auto shut-off when the water runs out",
      "Optional warm nightlight ring",
    ],
    specs: { Capacity: "320 ml", Runtime: "~10 h", Noise: "< 28 dB", Power: "USB-C, 2 W" },
  },
  {
    slug: "nesttidy-drawer-organizer-set",
    name: "NestTidy Drawer Organizer Set",
    category: "living",
    price: 24.99,
    rating: 4.5,
    reviews: 502,
    short: "11-piece interlocking tray set for drawers, in 4 sizes.",
    description:
      "NestTidy includes 11 trays in 4 sizes that interlock so they stay in place when the drawer opens. Use them for cutlery, cables, makeup, or office supplies. Non-slip base, food-safe and wipe-clean.",
    features: [
      "11 interlocking trays in 4 sizes",
      "Non-slip base, stays put on open/close",
      "Food-safe, wipe-clean surface",
      "Reconfigurable for any standard drawer",
    ],
    specs: { Pieces: "11 trays", Material: "Recyclable PP", Finish: "Matte", Care: "Hand wash" },
  },
  {
    slug: "lumenstrip-led-light-bar",
    name: "LumenStrip LED Light Bar",
    category: "lighting",
    price: 18.99,
    rating: 4.4,
    reviews: 631,
    short: "Motion-sensor LED bar with a magnetic, rechargeable mount.",
    description:
      "LumenStrip turns on automatically when it senses motion and fades out when you leave. The magnetic back detaches for charging and reattaches to the included steel strip. Lasts up to 5 weeks per charge, with warm or cool white light.",
    features: [
      "Motion + light sensor, auto on/off",
      "Magnetic mount, lifts off to recharge",
      "Up to 5 weeks per charge in normal use",
      "Warm or cool white selectable",
    ],
    specs: { Length: "30 cm", Battery: "1200 mAh", Charge: "USB-C", Mount: "Magnetic strip" },
  },
  {
    slug: "gripease-magnetic-mount",
    name: "GripEase Magnetic Phone Mount",
    category: "living",
    price: 14.99,
    rating: 4.3,
    reviews: 845,
    short: "Magnetic phone mount with 360° rotation for car dashboards.",
    description:
      "GripEase holds your phone in place with strong magnets, so it stays steady over rough roads. The ball joint rotates 360° for portrait or landscape viewing. Includes both an adhesive mount and a vent clip.",
    features: [
      "Strong multi-magnet hold, one-hand docking",
      "360° ball joint for any viewing angle",
      "Slim plate fits under most cases",
      "Adhesive + vent clip both included",
    ],
    specs: { Hold: "Up to 350 g", Rotation: "360°", Mount: "Adhesive or vent", Material: "Anodised aluminium" },
  },
  {
    slug: "snapstore-stackable-jars",
    name: "SnapStore Stackable Jars (6)",
    category: "kitchen",
    price: 29.99,
    rating: 4.6,
    reviews: 288,
    short: "6 airtight, stackable jars with one-press silicone seals.",
    description:
      "SnapStore includes 6 square jars in 3 sizes that stack without wasting shelf space. Each lid seals airtight with a single press to keep pantry staples fresh longer. Comes with reusable labels and a marker.",
    features: [
      "One-press airtight silicone seal",
      "Square design stacks without wasted space",
      "Set of 6 (2 large, 2 medium, 2 small)",
      "Reusable labels and marker included",
    ],
    specs: { Pieces: "6 jars", Material: "BPA-free Tritan", Seal: "Silicone", Care: "Hand wash lids" },
  },
  {
    slug: "brewbuddy-cold-brew-maker",
    name: "BrewBuddy Cold Brew Maker",
    category: "kitchen",
    price: 34.99,
    rating: 4.7,
    reviews: 174,
    badge: "New",
    short: "1L cold brew carafe with a stainless mesh filter, no paper needed.",
    description:
      "BrewBuddy makes a liter of smooth, low-acidity cold brew overnight in the fridge. The stainless mesh filter replaces paper filters, and the borosilicate glass carafe fits most fridge doors. Also works for cold-brew tea.",
    features: [
      "1 L borosilicate glass carafe",
      "Fine stainless mesh, no paper filters",
      "Airtight lid, fits most fridge doors",
      "Also works for cold-brew tea and infusions",
    ],
    specs: { Capacity: "1 L", Material: "Borosilicate glass", Filter: "Stainless mesh", Care: "Dishwasher safe" },
  },
  {
    slug: "precisepro-digital-kitchen-scale",
    name: "PrecisePro Digital Kitchen Scale",
    category: "kitchen",
    price: 19.99,
    rating: 4.7,
    reviews: 198,
    badge: "New",
    short: "Digital scale with 0.1g accuracy and a tare button.",
    description:
      "PrecisePro weighs ingredients from 1g up to 5kg in 0.1g increments, with a tare button to zero out the bowl. The backlit display reads in grams, ounces, pounds, or milliliters. Slim enough to store standing up in a drawer.",
    features: [
      "0.1 g precision up to 5 kg capacity",
      "Tare function zeroes out any container",
      "Switches between g / oz / lb / ml",
      "Backlit LCD display",
    ],
    specs: { Capacity: "5 kg", Precision: "0.1 g", Power: "2x AAA batteries", Display: "Backlit LCD" },
  },
  {
    slug: "frothworks-handheld-milk-frother",
    name: "FrothWorks Handheld Milk Frother",
    category: "kitchen",
    price: 16.99,
    rating: 4.5,
    reviews: 233,
    short: "Rechargeable handheld frother for coffee, lattes, and matcha.",
    description:
      "FrothWorks whisks milk into microfoam in under 30 seconds, hot or cold. The rechargeable battery runs for about 30 uses per charge. Stainless steel whisk head, detaches for easy cleaning.",
    features: [
      "Foams milk in under 30 seconds",
      "USB-C rechargeable, ~30 uses per charge",
      "Detachable stainless whisk head",
      "Works with hot or cold milk",
    ],
    specs: { Power: "USB-C rechargeable", Runtime: "~30 uses/charge", Material: "Stainless steel + ABS", Speed: "Single-speed motor" },
  },
  {
    slug: "wavecharge-wireless-charging-stand",
    name: "WaveCharge Wireless Charging Stand",
    category: "living",
    price: 24.99,
    rating: 4.4,
    reviews: 167,
    badge: "New",
    short: "10W wireless charging stand with case-friendly design.",
    description:
      "WaveCharge delivers up to 10W of wireless charging through most phone cases up to 3mm thick. The angled stand keeps your screen visible for calls and notifications while it charges. LED ring dims automatically in the dark.",
    features: [
      "Up to 10W fast wireless charging",
      "Charges through cases up to 3mm",
      "Angled stand for upright viewing",
      "LED ring auto-dims at night",
    ],
    specs: { Output: "10 W max", Input: "USB-C", Compatibility: "Qi-enabled phones", Material: "Aluminum + silicone" },
  },
];

export function getProduct(slug) {
  return PRODUCTS.find((p) => p.slug === slug) || null;
}

export function categoryName(slug) {
  return CATEGORIES.find((c) => c.slug === slug)?.name || slug;
}

export function formatPrice(value) {
  return new Intl.NumberFormat("en-US", { style: "currency", currency: "USD" }).format(value);
}
