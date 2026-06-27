// NEXORA TRADING LLC product catalog
// All product names, copy and pricing here are original to NEXORA.
// No third-party brand names, logos or copied marketing text are used.

export const CATEGORIES = [
  { slug: "kitchen", name: "Kitchen" },
];

export const PRODUCTS = [
  {
    slug: "crispair-digital-air-fryer",
    name: "Instant Vortex Plus Air Fryer",
    category: "kitchen",
    price: 69.99,
    rating: 4.6,
    reviews: 312,
    short: "6-in-1 air fryer with AirFry, Roast, Bake, Broil, Reheat, and Dehydrate.",
    description:
      "This air fryer offers six cooking functions, AirFry, Roast, Broil, Bake, Reheat, and Dehydrate, controlled from a digital display with temperature and time dials. It circulates hot air up to 400°F to crisp food with little to no oil, and the pull-out basket makes serving straightforward.",
    features: [
      "6 functions: AirFry, Roast, Broil, Bake, Reheat, Dehydrate",
      "Digital display with temperature and time dials",
      "Heats up to 400°F (200°C)",
      "Dishwasher-safe basket and tray",
    ],
    specs: { Capacity: "6 Qt (5.7 L)", Power: "1500 W", Temperature: "Up to 400°F", Functions: "6-in-1" },
  },
  {
    slug: "cookcore-multi-cooker",
    name: "Sencor Multi-Cooker",
    category: "kitchen",
    price: 58.99,
    rating: 4.7,
    reviews: 256,
    short: "Multi-cooker with rice, steam, sauté, slow cook, and oatmeal settings.",
    description:
      "This multi-cooker covers white rice, brown rice, quick rice, steaming, sautéing, simmering, slow cooking on high or low, and oatmeal, all from one stainless steel unit. The delay timer lets you set it to start later, and the keep-warm function holds food at temperature until you're ready to serve.",
    features: [
      "10 functions: rice, steam, sauté, simmer, slow cook, oatmeal",
      "Delay timer and keep-warm settings",
      "Stainless steel housing with non-stick inner pot",
      "Includes rice paddle, measuring cup, and steam tray",
    ],
    specs: { Functions: "10-in-1", Material: "Stainless steel", Display: "Digital with timer", Includes: "Paddle, cup, steam tray" },
  },
  {
    slug: "grillpress-panini-maker",
    name: "Crispy Panini Press",
    category: "kitchen",
    price: 37.99,
    rating: 4.4,
    reviews: 187,
    short: "Non-stick panini press with a floating hinge for any thickness.",
    description:
      "This panini press has ridged, non-stick plates that heat up in about 3 minutes, with a floating top hinge that presses evenly on sandwiches of any thickness. The removable drip tray catches grease, and the handle locks flat for compact storage.",
    features: [
      "Ridged non-stick plates, ready in ~3 minutes",
      "Floating hinge presses evenly on thick fillings",
      "Removable drip tray",
      "Locks flat for compact storage",
    ],
    specs: { Power: "750 W", Plates: "Non-stick ridged", Ready: "~3 min preheat", Storage: "Locks flat" },
  },
  {
    slug: "blendpro-countertop-blender",
    name: "Nordic Sense Blender",
    category: "kitchen",
    price: 149.99,
    rating: 4.8,
    reviews: 204,
    short: "Countertop blender with a glass jar and pulse, ice, and variable speed settings.",
    description:
      "This blender's glass jar holds smoothies, soups, and crushed ice, with a dial that switches between pulse, ice crush, and variable speed control. The stop/start button sits front and center, and the jar's built-in measurements and pour spout make it easy to use straight from the blender.",
    features: [
      "Glass jar with handle and pour spout",
      "Pulse, ice crush, and variable speed dial",
      "Stop/Start button",
      "Dishwasher-safe jar and lid",
    ],
    specs: { Material: "Glass jar, stainless blade", Power: "Variable speed motor", Settings: "Pulse, ice, min-max dial", Care: "Dishwasher-safe jar" },
  },
  {
    slug: "chefedge-stainless-steel-pan",
    name: "Even Heat Stainless Steel Pan",
    category: "kitchen",
    price: 129.99,
    rating: 4.8,
    reviews: 221,
    short: "Tri-ply stainless pan that sears evenly and goes oven-to-table.",
    description:
      "This pan is built from tri-ply stainless steel with an aluminum core, so heat spreads evenly across the whole surface instead of pooling in the center. The riveted handle stays cool on the stovetop and the pan is oven-safe up to 260°C, so it moves straight from sear to oven to table.",
    features: [
      "Tri-ply stainless steel with aluminum core",
      "Even heat, no hot spots",
      "Oven-safe up to 260°C",
      "Riveted stainless handle, dishwasher-safe",
    ],
    specs: { Diameter: "28 cm", Material: "Tri-ply stainless steel", "Oven-safe": "Up to 260°C", Care: "Dishwasher-safe" },
  },
  {
    slug: "classic-drip-coffee-maker",
    name: "Aigostar Coffee Maker",
    category: "kitchen",
    price: 44.99,
    rating: 4.5,
    reviews: 178,
    short: "10-cup drip coffee maker with a stainless steel finish and glass carafe.",
    description:
      "This coffee maker brews a full 10-cup glass carafe with a simple one-button start. The stainless steel water reservoir sits above a classic drip brew basket, and the carafe's cup markings make it easy to brew exactly the amount you need.",
    features: [
      "10-cup glass carafe with cup markings",
      "One-button on/off operation",
      "Stainless steel and black housing",
      "Warming plate keeps coffee hot after brewing",
    ],
    specs: { Capacity: "10 cups", Power: "900 W", Material: "Stainless steel + black housing", Carafe: "Glass, marked to 10 cups" },
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
