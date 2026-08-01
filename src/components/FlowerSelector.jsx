import { flowers } from "../data/flowers";

const defaultFlowerPosition = (index) => {
  const presetPositions = [
    { x: 44, y: 30 },
    { x: 58, y: 36 },
    { x: 32, y: 38 },
    { x: 50, y: 20 },
    { x: 67, y: 48 },
    { x: 24, y: 52 },
    { x: 45, y: 58 },
  ];

  return presetPositions[index % presetPositions.length];
};

export default function FlowerSelector({
  selectedFlowers,
  setSelectedFlowers,
}) {
  const toggleFlower = (flower) => {
    const alreadySelected = selectedFlowers.some(
      (item) => item.id === flower.id
    );

    if (alreadySelected) {
      setSelectedFlowers(
        selectedFlowers.filter(
          (item) => item.id !== flower.id
        )
      );
    } else {
      setSelectedFlowers([
        ...selectedFlowers,
        {
          ...flower,
          ...defaultFlowerPosition(selectedFlowers.length),
          rotation: 0,
        },
      ]);
    }
  };

  return (
    <div className="selector-grid selector-grid-flowers">
      {flowers.map((flower) => {
        const selected = selectedFlowers.some(
          (item) => item.id === flower.id
        );

        return (
          <div
            key={flower.id}
            onClick={() => toggleFlower(flower)}
            className={`option-card ${
              selected
                ? "option-card-selected"
                : ""
            }`}
          >
            <img
              src={flower.image}
              alt={flower.name}
              className="option-image option-image-flower"
            />

            <p className="option-name">
              {flower.name}
            </p>
          </div>
        );
      })}
    </div>
  );
}