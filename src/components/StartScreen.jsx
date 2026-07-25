export default function StartScreen({ onStart }) {
  return (
    <div className="screen screen-center">
      <div className="card card-large hero-card center-stack">
        <h1 className="title title-xl">
          Ikebana Designer
        </h1>

        <p className="copy copy-lg" style={{ marginTop: "1rem" }}>
          Create your own Japanese-inspired flower arrangement by choosing a pot and selecting flowers to build a calm, modern composition.
        </p>

        <div className="info-panel">
          <h2>
            How to Play
          </h2>

          <ul className="bullet-list">
            <li>Choose one of two pots.</li>
            <li>Select flowers from seven available options.</li>
            <li>Preview your arrangement as you build it.</li>
            <li>Finish and view your completed design.</li>
          </ul>
        </div>

        <button
          onClick={onStart}
          className="primary-button"
        >
          Start Creating
        </button>

      </div>
    </div>
  );
}