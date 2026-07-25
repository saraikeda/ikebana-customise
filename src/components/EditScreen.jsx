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
        </div>

        <div className="editor-section">
          <h2 className="section-title">
        Live Preview
          </h2>

          <ArrangementPreview
            selectedPot={selectedPot}
            selectedFlowers={selectedFlowers}
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
