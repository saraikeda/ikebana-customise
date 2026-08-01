import PotSelector from "./PotSelector";
import FlowerSelector from "./FlowerSelector";
import ArrangementPreview from "./ArrangementPreview";

export default function EditorScreen({
  selectedPot,
  setSelectedPot,
  selectedFlowers,
  setSelectedFlowers,
  onFinish,
}) {
  const rotateFlower = (flowerId, direction) => {
    setSelectedFlowers((currentFlowers) =>
      currentFlowers.map((flower) =>
        flower.id === flowerId
          ? {
              ...flower,
              rotation: (flower.rotation ?? 0) + direction,
            }
          : flower
      )
    );
  };

  return (
    <div className="screen screen-page">
      <div className="editor-shell">
        <div className="editor-title">
          <h1 className="title" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
        Create Your Ikebana
          </h1>
        </div>

        <div className="editor-section">
          <h2 className="section-title">
        Choose a Pot
          </h2>

          <PotSelector
            selectedPot={selectedPot}
            setSelectedPot={setSelectedPot}
          />
        </div>

        <div className="editor-section">
          <h2 className="section-title">
        Choose Flowers
          </h2>

          <FlowerSelector
            selectedFlowers={selectedFlowers}
            setSelectedFlowers={setSelectedFlowers}
          />

          <div className="flower-meaning-panel">
            <h3 className="flower-meaning-title">Selected Flower Meaning</h3>

            {selectedFlowers.length > 0 ? (
              <div className="flower-meaning-list">
                {selectedFlowers.map((flower) => (
                  <article key={flower.id} className="flower-meaning-card">
                    <div>
                      <p className="flower-meaning-name">{flower.name}</p>
                      <p className="flower-meaning-type">
                        Rotation: {flower.rotation ?? 0}°
                      </p>
                      <p className="flower-meaning-description">
                        {flower.description}
                      </p>
                    </div>

                    <div className="flower-meaning-actions">
                      <button
                        type="button"
                        className="flower-meaning-button"
                        onClick={() => rotateFlower(flower.id, -15)}
                      >
                        Rotate Left
                      </button>

                      <button
                        type="button"
                        className="flower-meaning-button"
                        onClick={() => rotateFlower(flower.id, 15)}
                      >
                        Rotate Right
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="flower-meaning-empty">
                Select a flower to see its description.
              </p>
            )}
          </div>
        </div>

        <div className="editor-section">
          <h2 className="section-title">
        Live Preview
          </h2>

          <ArrangementPreview
            selectedPot={selectedPot}
            selectedFlowers={selectedFlowers}
            setSelectedFlowers={setSelectedFlowers}
          />
        </div>

        <div className="center-stack">
          <button
            onClick={onFinish}
            disabled={!selectedPot}
            className="primary-button"
          >
            Finish Arrangement
          </button>
        </div>
      </div>
    </div>
  );
}
