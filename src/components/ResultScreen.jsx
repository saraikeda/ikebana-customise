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

        <div className="result-preview">
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

        <ul className="result-list">
          {selectedFlowers.map((flower) => (
            <li key={flower.id}>{flower.name}</li>
          ))}
        </ul>

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