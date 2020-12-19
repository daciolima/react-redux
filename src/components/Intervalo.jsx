import React from "react";
import "./Intervalo.css";
import Card from "./Card";

const Intervalo = (props) => {
  const { min, max } = props;

  return (
    <Card title="Intervalo de Números" blue>
      <div className="Intervalo">
        <span>
          <strong>Mínimo</strong>
          <input
            type="number"
            value={min}
            onChange={(e) => props.onMinChanged(+e.target.value)}
          />
        </span>

        <span>
          <strong>Máxino</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => props.onMaxChanged(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
};

export default Intervalo;
