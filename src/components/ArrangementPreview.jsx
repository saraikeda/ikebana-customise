import ArrangementCanvas from "./ArrangementCanvas";

export default function ArrangementPreview({
  selectedPot,
  selectedFlowers,
  setSelectedFlowers,
}) {
  return (
    <ArrangementCanvas
      selectedPot={selectedPot}
      selectedFlowers={selectedFlowers}
      setSelectedFlowers={setSelectedFlowers}
      editable={Boolean(setSelectedFlowers)}
    />
  );
}
