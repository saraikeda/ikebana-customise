// Temporary placeholders while the PNG assets are unavailable.
// Keep the same data shape so the rest of the UI continues to work.
export const flowers = [
  {
    id: 1,
    name: "Plum Flower (Ume)",
    image: new URL("../images/ume.PNG", import.meta.url).href,
    description: "Hope and perseverance. Blooming in late winter snow, the plum blossom represents resilience and the quiet promise of spring."
  },
  {
    id: 2,
    name: "Cherry Blossom (Sakura)",
    image: new URL("../images/sakura.PNG", import.meta.url).href,
    description: "Impermanence and fleeting beauty. The brief cherry blossom bloom embodies mono no aware — a bittersweet appreciation of life's transience."
  },
  {
    id: 3,
    name: "Chrysanthemum (Kiku)",
    image: new URL("../images/kiku.PNG", import.meta.url).href,
    description: "Nobility and the imperial family. The chrysanthemum's orderly petals represent rejuvenation and autumn's graceful, dignified beauty."
  },
  {
    id: 4,
    name: "Camellia (Tsubaki)",
    image: new URL("../images/tsubaki.PNG", import.meta.url).href,
    description: "Humility and dignified grace. The camellia drops whole rather than petal by petal, symbolizing a sudden, honorable end."
  },
  {
    id: 5,
    name: "Pine (Matsu)",
    image: new URL("../images/pine.PNG", import.meta.url).href,
    description: "Eternal endurance and steadfastness. Its evergreen nature symbolizes longevity and unyielding strength, often used as a structural backbone in formal arrangements."
  },
];