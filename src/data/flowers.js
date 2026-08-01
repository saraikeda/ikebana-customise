// Temporary placeholders while the PNG assets are unavailable.
// Keep the same data shape so the rest of the UI continues to work.
export const flowers = [
  {
    id: 1,
    name: "Plum Flower (Ume)",
    image: new URL("../images/ume.PNG", import.meta.url).href,
  },
  {
    id: 2,
    name: "Cherry Blossom (Sakura)",
    image: new URL("../images/sakura.PNG", import.meta.url).href,
  },
  {
    id: 3,
    name: "Chrysanthemum (Kiku)",
    image: new URL("../images/kiku.PNG", import.meta.url).href,
  },
  {
    id: 4,
    name: "Camellia (Tsubaki)",
    image: new URL("../images/tsubaki.PNG", import.meta.url).href,
  },
  {
    id: 5,
    name: "Pine (Matsu)",
    image: new URL("../images/pine.PNG", import.meta.url).href,
  },
];