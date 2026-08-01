import ArrangementCanvas from "./ArrangementCanvas";

export default function ResultScreen({
  selectedPot,
  selectedFlowers,
  onRestart,
}) {
  return (
    <div className="screen screen-center">
      <div className="card card-large card-wide center-stack">
        <h1 className="title" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}>
          Your Ikebana Arrangement
        </h1>

        <div className="result-preview result-preview-wide">
          <ArrangementCanvas
            selectedPot={selectedPot}
            selectedFlowers={selectedFlowers}
          />
        </div>

        <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>
          Selected Pot
        </h2>

        <p className="copy" style={{ marginBottom: "1.5rem" }}>
          {selectedPot ? selectedPot.name : "None"}
        </p>

        <h2 className="section-title" style={{ marginBottom: "0.5rem" }}>
          Selected Flowers
        </h2>

        <div className="flower-meaning-panel result-meaning-panel">
          <h3 className="flower-meaning-title">Flower Meaning Summary</h3>

          {selectedFlowers.length > 0 ? (
            <div className="flower-meaning-list">
              {selectedFlowers.map((flower) => (
                <article key={flower.id} className="flower-meaning-card">
                  <div>
                    <p className="flower-meaning-name">{flower.name}</p>
                  </div>

                  <p className="flower-meaning-description">
                    {flower.description}
                  </p>
                </article>
              ))}
            </div>
          ) : (
            <p className="flower-meaning-empty">
              No flowers were selected.
            </p>
          )}
        </div>

        <button
          onClick={onRestart}
          className="secondary-button"
        >
          Create Another Arrangement
        </button>
      </div>
    </div>
  );
}