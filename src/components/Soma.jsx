import React from "react";
import Card from "./Card";

const Soma = (props) => {
  const { min, max } = props;

  return (
    <Card title="Soma dos Números" green>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{max + min}</strong>
        </span>
      </div>
    </Card>
  );
};

export default Soma;
