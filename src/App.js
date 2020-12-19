import React, { useState } from "react";
import "./App.css";
import Intervalo from "./components/Intervalo";
import Media from "./components/Media";
import Sorteio from "./components/Sorteio";
import Soma from "./components/Soma";

function App() {
  // Padrão do useState   [variável(min), função(setMin)]
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);

  return (
    <div className="App">
      <h1>Exercícios React-Redux - Simples</h1>
      <div className="linha">
        <Intervalo
          min={min}
          max={max}
          onMinChanged={setMin}
          onMaxChanged={setMax}
        ></Intervalo>
      </div>
      <div className="linha">
        <Media min={min} max={max} />
        <Soma min={min} max={max} />
        <Sorteio min={min} max={max} />
      </div>
    </div>
  );
}

export default App;
