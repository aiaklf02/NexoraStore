// Original sample reviews for the NEXORA demo catalog. Fictional reviewers,
// written specifically about each product's real features.

export const REVIEWS = {
  "auraglow-sunrise-lamp": [
    { name: "Morgan T.", rating: 5, date: "2026-03-02", text: "Genuinely changed how I wake up. The light starts dim and I'm usually already half awake before the alarm even goes off." },
    { name: "Priya K.", rating: 4, date: "2026-02-11", text: "Works great, the colour modes are a nice touch for reading at night. Only wish the touch ring was a bit more responsive." },
  ],
  "driftsilent-mini-humidifier": [
    { name: "Daniela R.", rating: 5, date: "2026-01-19", text: "So quiet I forget it's running. My apartment doesn't feel like a desert anymore in winter." },
    { name: "Tom H.", rating: 4, date: "2025-12-28", text: "Does the job well for a small bedroom. Wouldn't expect it to cover a bigger room though." },
  ],
  "nesttidy-drawer-organizer-set": [
    { name: "Jess O.", rating: 5, date: "2026-03-10", text: "Finally my junk drawer makes sense. The trays clip together so nothing slides when I open it fast." },
    { name: "Marcus B.", rating: 4, date: "2026-01-22", text: "Good quality, just wish a couple more tray sizes were included for bigger drawers." },
  ],
  "lumenstrip-led-light-bar": [
    { name: "Helen W.", rating: 5, date: "2026-02-14", text: "Stuck it under my kitchen cabinet, motion sensor is quick and the battery lasts for weeks." },
    { name: "Connor P.", rating: 4, date: "2025-12-30", text: "Great for the closet. Magnetic mount makes recharging painless." },
  ],
  "gripease-magnetic-mount": [
    { name: "Olivia F.", rating: 5, date: "2026-03-01", text: "Holds my phone solid even on bumpy roads. Way easier than the clamp mount I had before." },
    { name: "Derek N.", rating: 4, date: "2026-01-27", text: "Strong magnet, good build. Took a try or two to find the best spot on the vent." },
  ],
  "snapstore-stackable-jars": [
    { name: "Ella R.", rating: 5, date: "2026-02-25", text: "Pantry finally looks like the Pinterest photos. The press-seal lids really do keep things fresh longer." },
    { name: "Victor M.", rating: 4, date: "2026-01-08", text: "Stack neatly and the labels are a nice touch. A couple lids were a little stiff at first." },
  ],
  "brewbuddy-cold-brew-maker": [
    { name: "Chloe B.", rating: 5, date: "2026-03-05", text: "Set it before bed, perfect concentrate by morning. The mesh filter means zero grit in the cup." },
    { name: "Jordan T.", rating: 4, date: "2026-02-01", text: "Great flavour, fits in the fridge door easily. Wish the carafe held a bit more for bigger households." },
  ],
  "precisepro-digital-kitchen-scale": [
    { name: "Renee D.", rating: 5, date: "2026-02-12", text: "Tare function is exactly what I needed for portioning meal prep. Accurate down to the gram every time." },
    { name: "Felix N.", rating: 4, date: "2026-01-20", text: "Good size for a small kitchen, just wish the display stayed lit a few seconds longer." },
  ],
  "frothworks-handheld-milk-frother": [
    { name: "Carmen J.", rating: 5, date: "2026-02-27", text: "Replaced my old frother that needed batteries every month. Charges fast and froths oat milk surprisingly well." },
    { name: "Theo W.", rating: 4, date: "2026-01-14", text: "Quick and easy to clean. Wish it came with a stand to set it down between uses." },
  ],
  "wavecharge-wireless-charging-stand": [
    { name: "Bianca L.", rating: 5, date: "2026-03-08", text: "Charges through my case with no issues, and the angle is perfect for watching videos while it charges." },
    { name: "Owen P.", rating: 4, date: "2026-02-09", text: "Works as advertised. The LED ring is a nice touch at night, dims on its own." },
  ],
};

export function reviewsFor(slug) {
  return REVIEWS[slug] || [];
}
