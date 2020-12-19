import React from "react";
import Card from "./Card";

const Media = (props) => {
  //   const min = props.min;
  //   const max = props.max;
  // Usando destructure
  const { min, max } = props;

  return (
    <Card title="Média dos Números" red>
      <div>
        <span>
          <span>Resultado: </span>
          <strong>{(max + min) / 2}</strong>
        </span>
      </div>
    </Card>
  );
};

export default Media;
