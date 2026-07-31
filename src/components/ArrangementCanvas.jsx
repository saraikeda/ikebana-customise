import { useRef } from "react";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

export default function ArrangementCanvas({
  selectedPot,
  selectedFlowers,
  setSelectedFlowers,
  editable = false,
}) {
  const canvasRef = useRef(null);
  const dragStateRef = useRef(null);

  const handleFlowerPointerDown = (flower, event) => {
    if (!editable || !setSelectedFlowers || !canvasRef.current) {
      return;
    }

    event.preventDefault();

    const canvasBounds = canvasRef.current.getBoundingClientRect();
    const flowerCenterX = canvasBounds.left + (flower.x / 100) * canvasBounds.width;
    const flowerCenterY = canvasBounds.top + (flower.y / 100) * canvasBounds.height;

    dragStateRef.current = {
      flowerId: flower.id,
      offsetX: event.clientX - flowerCenterX,
      offsetY: event.clientY - flowerCenterY,
    };

    const handlePointerMove = (moveEvent) => {
      const dragState = dragStateRef.current;

      if (!dragState || !canvasRef.current) {
        return;
      }

      const bounds = canvasRef.current.getBoundingClientRect();
      const nextX = clamp(
        ((moveEvent.clientX - dragState.offsetX - bounds.left) / bounds.width) * 100,
        0,
        100
      );
      const nextY = clamp(
        ((moveEvent.clientY - dragState.offsetY - bounds.top) / bounds.height) * 100,
        0,
        100
      );

      setSelectedFlowers((currentFlowers) =>
        currentFlowers.map((item) =>
          item.id === dragState.flowerId
            ? { ...item, x: nextX, y: nextY }
            : item
        )
      );
    };

    const handlePointerUp = () => {
      dragStateRef.current = null;
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerup", handlePointerUp);
    };

    window.addEventListener("pointermove", handlePointerMove);
    window.addEventListener("pointerup", handlePointerUp);

    setSelectedFlowers((currentFlowers) => {
      const flowerIndex = currentFlowers.findIndex((item) => item.id === flower.id);

      if (flowerIndex < 0 || flowerIndex === currentFlowers.length - 1) {
        return currentFlowers;
      }

      const movedFlower = currentFlowers[flowerIndex];

      return [
        ...currentFlowers.slice(0, flowerIndex),
        ...currentFlowers.slice(flowerIndex + 1),
        movedFlower,
      ];
    });
  };

  return (
    <div className="preview-panel">
      <div ref={canvasRef} className="preview-canvas">
        {selectedFlowers.map((flower) => (
          <button
            key={flower.id}
            type="button"
            className={`preview-flower-button ${editable ? "preview-flower-button-editable" : ""}`}
            style={{ left: `${flower.x}%`, top: `${flower.y}%` }}
            onPointerDown={(event) => handleFlowerPointerDown(flower, event)}
            aria-label={`Move ${flower.name}`}
            tabIndex={editable ? 0 : -1}
            disabled={!editable}
          >
            <img
              src={flower.image}
              alt={flower.name}
              className="option-image preview-flower"
            />
          </button>
        ))}

        {selectedPot && (
          <img
            src={selectedPot.image}
            alt={selectedPot.name}
            className="option-image preview-pot"
          />
        )}
      </div>
    </div>
  );
}
