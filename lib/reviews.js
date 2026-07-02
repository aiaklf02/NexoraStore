// Original sample reviews for the NEXORA demo catalog. Fictional reviewers,
// written specifically about each product's real features.

export const REVIEWS = {
  "crispair-digital-air-fryer": [
    { name: "Marcus L.", rating: 5, date: "2026-03-12", text: "Switched from an oil fryer and don't miss it at all. The presets take the guesswork out, fries come out crisp every time." },
    { name: "Yara B.", rating: 4, date: "2026-02-18", text: "Fits a full chicken thigh batch for two of us. Basket is easy to clean, just a little loud when it's running." },
  ],
  "cookcore-multi-cooker": [
    { name: "Patrick G.", rating: 5, date: "2026-03-01", text: "Pressure-cooks a weeknight stew in under 40 minutes. Replaced three appliances I used to keep on the counter." },
    { name: "Mei T.", rating: 4, date: "2026-02-04", text: "Rice setting is foolproof. Lid is a bit bulky to store but the cooking results are worth it." },
  ],
  "grillpress-panini-maker": [
    { name: "Noah F.", rating: 5, date: "2026-02-09", text: "The floating hinge actually matters, my sandwiches stay even instead of squashed on one side." },
    { name: "Layla S.", rating: 4, date: "2026-01-29", text: "Heats up fast and cleans up easily. Wish the drip tray were a bit bigger for greasier fillings." },
  ],
  "blendpro-countertop-blender": [
    { name: "Sofia R.", rating: 5, date: "2026-03-09", text: "Crushes a full batch of frozen mango and ice with no chunks left. The soup preset actually heats through friction, which I wasn't expecting." },
    { name: "Daniel K.", rating: 5, date: "2026-02-14", text: "Quiet for how powerful it is. Glass jar feels much sturdier than the plastic one on my last blender." },
  ],
  "chefedge-stainless-steel-pan": [
    { name: "Priya M.", rating: 5, date: "2026-03-04", text: "Heats evenly edge to edge, no more burnt center and raw edges. Goes straight from stovetop to oven for finishing." },
    { name: "Owen T.", rating: 4, date: "2026-01-26", text: "Took a couple tries to get used to cooking on stainless again, but searing is so much better than my old nonstick." },
  ],
  "classic-drip-coffee-maker": [
    { name: "Grace T.", rating: 5, date: "2026-03-07", text: "No more buying paper filters, the mesh one rinses clean in seconds. Full carafe is ready before I'm done getting dressed." },
    { name: "Felix R.", rating: 4, date: "2026-02-12", text: "Warming plate actually keeps the second cup hot, unlike my old machine. Carafe handle could be a bit sturdier." },
  ],
  "ceramic-teapot": [
    { name: "Isabelle D.", rating: 5, date: "2026-03-15", text: "The infuser basket is the right depth so the leaves actually steep properly. Spout doesn't drip at all." },
    { name: "Karim A.", rating: 4, date: "2026-02-22", text: "Beautiful piece. Holds heat well and the glaze is easy to rinse clean after each use." },
  ],
  "serving-dish-set": [
    { name: "Nora J.", rating: 5, date: "2026-03-10", text: "Goes straight from the oven to the table and looks great doing it. The three sizes cover every occasion." },
    { name: "Luca B.", rating: 4, date: "2026-02-17", text: "Really solid set for the price. The glaze holds up well after multiple dishwasher cycles." },
  ],
  "egg-cooker": [
    { name: "Nina P.", rating: 5, date: "2026-04-02", text: "Makes perfect soft-boiled eggs every time. I use it every morning, it's faster than a pot of water." },
    { name: "Tom W.", rating: 4, date: "2026-03-18", text: "Surprisingly useful. Hard-boiled eggs come out consistently and the tray is easy to rinse clean." },
  ],
  "red-rice-cooker": [
    { name: "Amara L.", rating: 5, date: "2026-04-05", text: "Compact enough to leave on the counter. Rice comes out fluffy every time and the keep-warm actually works." },
    { name: "Chris D.", rating: 4, date: "2026-03-22", text: "Does exactly what it says. Good size for two people, easy to clean." },
  ],
  "electric-griddle": [
    { name: "Rachel S.", rating: 5, date: "2026-04-08", text: "Big enough for a full pancake batch. Heats evenly and the drip tray makes cleanup much easier." },
    { name: "Ben H.", rating: 4, date: "2026-03-30", text: "Good for weekend breakfasts. Temperature dial is responsive and it cools down quickly." },
  ],
  "hand-mixer": [
    { name: "Claire M.", rating: 5, date: "2026-04-10", text: "Light enough to use for a full cake batter without arm fatigue. The eject button works smoothly." },
    { name: "David R.", rating: 4, date: "2026-03-25", text: "Good power for the price. Dough hooks handled bread dough without straining." },
  ],
  "electric-kettle": [
    { name: "Yuki T.", rating: 5, date: "2026-04-12", text: "Boils fast and shuts off immediately. The 360° base is genuinely useful when you're half-awake in the morning." },
    { name: "Marco F.", rating: 5, date: "2026-03-28", text: "Replaced my old plastic kettle with this and notice the difference in taste. Clean, fast, good quality." },
  ],
  "ceramic-mixing-bowl": [
    { name: "Sara E.", rating: 5, date: "2026-03-20", text: "The pour spout on each bowl is surprisingly useful. Batter goes straight into the pan without mess." },
    { name: "James O.", rating: 4, date: "2026-02-28", text: "Heavier than expected in a good way — stays put while I'm mixing. The matte finish looks great on the counter." },
  ],
  "sensart-dish-set": [
    { name: "Laura B.", rating: 5, date: "2026-04-15", text: "The glaze is beautiful and nothing has chipped after weeks of daily use. Goes straight from oven to table." },
    { name: "Antoine M.", rating: 4, date: "2026-04-01", text: "Great everyday dishes. The set looks much more expensive than it is." },
  ],
};

export function reviewsFor(slug) {
  return REVIEWS[slug] || [];
}
