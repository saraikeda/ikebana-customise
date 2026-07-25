import { useState } from "react";

import StartScreen from "./src/components/StartScreen";
import EditorScreen from "./src/components/EditScreen";
import ResultScreen from "./src/components/ResultScreen";

export default function App() {
  const [screen, setScreen] = useState("start");

  const [selectedPot, setSelectedPot] = useState(null);

  const [selectedFlowers, setSelectedFlowers] = useState([]);

  return (
    <div className="app">
      {screen === "start" && (
        <StartScreen
          onStart={() => setScreen("editor")}
        />
      )}

      {screen === "editor" && (
        <EditorScreen
          selectedPot={selectedPot}
          setSelectedPot={setSelectedPot}
          selectedFlowers={selectedFlowers}
          setSelectedFlowers={setSelectedFlowers}
          onFinish={() => setScreen("result")}
        />
      )}

      {screen === "result" && (
        <ResultScreen
          selectedPot={selectedPot}
          selectedFlowers={selectedFlowers}
          onRestart={() => {
            setSelectedPot(null);
            setSelectedFlowers([]);
            setScreen("start");
          }}
        />
      )}
    </div>
  );
}