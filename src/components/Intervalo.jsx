import React from "react";
import { connect } from "react-redux";

import "./Intervalo.css";
import Card from "./Card";

import {
  alterarNumeroMinimo,
  alterarNumeroMaximo,
} from "../store/actions/numeros.action";

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
            onChange={(e) => props.alterarMinino(+e.target.value)}
          />
        </span>

        <span>
          <strong>Máxino</strong>
          <input
            type="number"
            value={max}
            onChange={(e) => props.alterarMaximo(+e.target.value)}
          />
        </span>
      </div>
    </Card>
  );
};

function mapStateToProps(state) {
  return {
    min: state.numeros.min,
    max: state.numeros.max,
  };
}

function mapDispatchToProp(dispatch) {
  return {
    alterarMinino(novoNumero) {
      // Action Creator => action
      const action = alterarNumeroMinimo(novoNumero);
      dispatch(action);
    },
    alterarMaximo(novoNumero) {
      // Action Creator => action
      const action = alterarNumeroMaximo(novoNumero);
      dispatch(action);
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProp)(Intervalo);
