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
};

export function reviewsFor(slug) {
  return REVIEWS[slug] || [];
}
