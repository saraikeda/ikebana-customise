import { flowers } from "../data/flowers";

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
        flower,
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