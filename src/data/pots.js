// Temporary placeholders while the PNG assets are unavailable.
// Keep the same data shape so the rest of the UI continues to work.
export const pots = [
  {
    id: 1,
    name: "Long pot (blue)",
    image: new URL("../images/blue_pot.PNG", import.meta.url).href,
  },
  {
    id: 2,
    name: "Long pot (purple)",
    image: new URL("../images/purple_pot.PNG", import.meta.url).href,
  },
  {
    id: 3,
    name: "Flat pot",
    backImage: new URL("../images/flat_pot_back.png", import.meta.url).href,
    frontImage: new URL("../images/flat_pot_front.png", import.meta.url).href,
    image: new URL("../images/flat_pot_front.png", import.meta.url).href,
  },
];