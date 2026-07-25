export default function ArrangementPreview({
  selectedPot,
  selectedFlowers,
}) {
  return (
    <div className="preview-panel">
      <div className="preview-canvas">
        <div className="preview-flowers">
          {selectedFlowers.map((flower) => (
            <img
              key={flower.id}
              src={flower.image}
              alt={flower.name}
              className="option-image preview-flower"
            />
          ))}
        </div>

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