// NEXORA TRADING LLC product catalog
// All product names, copy and pricing here are original to NEXORA.
// No third-party brand names, logos or copied marketing text are used.

export const CATEGORIES = [
  { slug: "kitchen", name: "Kitchen" },
];

export const PRODUCTS = [
  {
    slug: "crispair-digital-air-fryer",
    imgExt: "png",
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
    imgExt: "jpg",
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
    imgExt: "png",
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
    imgExt: "jpg",
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
    imgExt: "jpg",
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
    imgExt: "jpg",
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
  {
    slug: "ceramic-teapot",
    imgExt: "png",
    name: "Ceramic Pour-Over Teapot",
    category: "kitchen",
    price: 34.99,
    rating: 4.6,
    reviews: 143,
    short: "Hand-glazed ceramic teapot with a built-in infuser and drip-free spout.",
    description:
      "This ceramic teapot holds 1.2 liters and comes with a removable stainless steel infuser basket, making it easy to brew loose-leaf tea without a separate strainer. The angled spout is designed to pour cleanly without dripping, and the wide-grip handle stays cool during pouring.",
    features: [
      "1.2 L capacity, serves 2–4 cups",
      "Removable stainless steel infuser basket",
      "Drip-free angled spout",
      "Microwave and dishwasher safe",
    ],
    specs: { Capacity: "1.2 L", Material: "Glazed ceramic + stainless infuser", Care: "Dishwasher-safe", Compatible: "All stovetop types (except induction)" },
  },
  {
    slug: "serving-dish-set",
    imgExt: "png",
    name: "Ceramic Serving Dish Set",
    category: "kitchen",
    price: 54.99,
    rating: 4.7,
    reviews: 119,
    short: "Set of 3 ceramic serving dishes, oven-to-table ready.",
    description:
      "This set of three graduated ceramic serving dishes transitions directly from oven to table. Each dish has low sides for easy serving and a glazed finish that resists staining. Sizes range from a small sauce dish to a large roasting dish, and all three nest for compact storage.",
    features: [
      "Set of 3 graduated sizes",
      "Oven-safe up to 220°C",
      "Stain-resistant glaze",
      "Nesting design for compact storage",
    ],
    specs: { Pieces: "3-dish set", Material: "Stoneware ceramic", "Oven-safe": "Up to 220°C", Care: "Dishwasher-safe" },
  },
  {
    slug: "egg-cooker",
    imgExt: "png",
    name: "Rapid Egg Cooker",
    category: "kitchen",
    price: 24.99,
    rating: 4.6,
    reviews: 203,
    short: "Cooks up to 6 eggs at once, hard, medium, soft, or poached.",
    description:
      "This egg cooker handles hard-boiled, medium, soft-boiled, and poached eggs with no guesswork. Fill the measuring cup to the indicated line for your preferred doneness, press the button, and an audible alert signals when they're ready. The tray and poaching tray are dishwasher-safe.",
    features: [
      "Cooks up to 6 eggs: hard, medium, soft, or poached",
      "Audible ready alert",
      "Includes measuring cup with piercer",
      "Dishwasher-safe tray and poaching tray",
    ],
    specs: { Capacity: "6 eggs", Power: "400 W", Modes: "Hard / medium / soft / poached", Care: "Dishwasher-safe tray" },
  },
  {
    slug: "red-rice-cooker",
    imgExt: "png",
    name: "Compact Rice Cooker",
    category: "kitchen",
    price: 49.99,
    rating: 4.7,
    reviews: 167,
    short: "3-cup rice cooker with steam tray and keep-warm function.",
    description:
      "This compact rice cooker handles white rice, brown rice, and steamed vegetables from one unit. The keep-warm function switches on automatically after cooking ends, and the non-stick inner pot lifts out for easy cleaning. Comes with a steam tray, rice paddle, and measuring cup.",
    features: [
      "3-cup capacity (cooked)",
      "Automatic keep-warm after cooking",
      "Includes steam tray, paddle, measuring cup",
      "Non-stick removable inner pot",
    ],
    specs: { Capacity: "3 cups cooked", Power: "300 W", Functions: "Cook / Steam / Keep-warm", Care: "Removable non-stick pot" },
  },
  {
    slug: "electric-griddle",
    imgExt: "png",
    name: "Non-Stick Electric Griddle",
    category: "kitchen",
    price: 42.99,
    rating: 4.5,
    reviews: 134,
    short: "Large non-stick griddle with adjustable temperature and a drip tray.",
    description:
      "This electric griddle has a large non-stick cooking surface with an adjustable thermostat that goes from warm to 375°F, making it easy to dial in the right heat for pancakes, eggs, bacon, or sandwiches. The removable drip tray catches grease, and the surface wipes clean in seconds.",
    features: [
      "Large non-stick cooking surface",
      "Adjustable thermostat up to 375°F",
      "Removable drip tray",
      "Cool-touch handles",
    ],
    specs: { Temperature: "Up to 375°F", Surface: "Non-stick coated", Drip: "Removable tray", Handles: "Cool-touch" },
  },
  {
    slug: "hand-mixer",
    imgExt: "png",
    name: "5-Speed Hand Mixer",
    category: "kitchen",
    price: 29.99,
    rating: 4.6,
    reviews: 189,
    short: "5-speed hand mixer with beaters, dough hooks, and a whisk.",
    description:
      "This hand mixer runs through five speeds with a turbo boost button for extra power when mixing thick dough. It comes with two beaters, two dough hooks, and a whisk, all of which eject at the push of a button. The swivel cord keeps it out of the way while you work.",
    features: [
      "5 speeds plus turbo boost",
      "Includes beaters, dough hooks, and whisk",
      "One-button accessory eject",
      "Swivel cord for left or right-hand use",
    ],
    specs: { Speeds: "5 + turbo", Attachments: "Beaters, dough hooks, whisk", Power: "250 W", Cord: "Swivel design" },
  },
  {
    slug: "electric-kettle",
    imgExt: "png",
    name: "Stainless Electric Kettle",
    category: "kitchen",
    price: 34.99,
    rating: 4.7,
    reviews: 211,
    short: "1.7 L stainless kettle that boils in under 3 minutes with auto shut-off.",
    description:
      "This stainless steel kettle holds 1.7 liters and reaches a full boil in under 3 minutes. The concealed heating element makes cleaning easy, and the 360° swivel base means you can pick it up from any angle. Auto shut-off and boil-dry protection cut the power the moment boiling is complete.",
    features: [
      "1.7 L capacity, boils in under 3 min",
      "360° swivel cordless base",
      "Auto shut-off and boil-dry protection",
      "Concealed heating element, easy to clean",
    ],
    specs: { Capacity: "1.7 L", Power: "1500 W", Safety: "Auto shut-off + boil-dry", Base: "360° swivel" },
  },
  {
    slug: "ceramic-mixing-bowl",
    imgExt: "png",
    name: "Stoneware Mixing Bowl Set",
    category: "kitchen",
    price: 29.99,
    rating: 4.5,
    reviews: 98,
    short: "Set of 3 stoneware mixing bowls with pour spouts and grip handles.",
    description:
      "This set of three stoneware mixing bowls comes in small, medium, and large sizes. Each bowl has a built-in pour spout and a handle for easy maneuvering, and the weighted base keeps them stable while mixing. The matte glaze finish works as well for serving as it does for prep.",
    features: [
      "Set of 3 sizes: small, medium, large",
      "Built-in pour spout on each bowl",
      "Non-slip weighted base",
      "Matte glaze, oven and microwave safe",
    ],
    specs: { Pieces: "3-bowl set", Material: "Stoneware", "Oven-safe": "Up to 200°C", Care: "Dishwasher-safe" },
  },
  {
  slug: "sensart-dish-set",
  imgExt: "png",
  name: "SensArt Ceramic Cookware Set",
  category: "kitchen",
  price: 89.99,
  rating: 4.8,
  reviews: 248,
  short: "10-piece ceramic non-stick cookware set with tempered glass lids and dishwasher-safe design.",
  description:
    "The SensArt Ceramic Cookware Set includes essential pots, pans, and tempered glass lids for everyday cooking. Its ceramic non-stick coating allows food to release easily while requiring less oil. Designed for durability and convenience, the cookware features ergonomic handles, even heat distribution, and is dishwasher-safe for effortless cleaning.",
  features: [
    "10-piece cookware set",
    "Ceramic non-stick coating",
    "Tempered glass lids",
    "Even heat distribution",
    "Ergonomic stay-cool handles",
    "Dishwasher-safe",
    "Easy to clean",
    "Suitable for everyday cooking"
  ],
  specs: {
    Pieces: "10",
    Material: "Aluminum with ceramic non-stick coating",
    Lids: "Tempered glass",
    Care: "Dishwasher-safe",
    Color: "Blue",
    Compatibility: "Gas, Electric, Ceramic, Halogen (Induction if induction-compatible base)"
  },
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
