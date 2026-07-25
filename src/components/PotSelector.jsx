import { pots } from "../data/pots";

export default function PotSelector({
  selectedPot,
  setSelectedPot,
}) {
  return (
    <div className="selector-grid selector-grid-pots">
      {pots.map((pot) => (
        <div
          key={pot.id}
          onClick={() => setSelectedPot(pot)}
          className={`option-card ${
            selectedPot?.id === pot.id
              ? "option-card-selected"
              : ""
          }`}
        >
          <img
            src={pot.image}
            alt={pot.name}
            className="option-image option-image-pot"
          />

          <p className="option-name">
            {pot.name}
          </p>
        </div>
      ))}
    </div>
  );
}