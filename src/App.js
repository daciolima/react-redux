import React from "react";
import { connect } from "react-redux";

import "./App.css";
import Intervalo from "./components/Intervalo";
import Media from "./components/Media";
import Sorteio from "./components/Sorteio";
import Soma from "./components/Soma";

const App = (props) => {
  const { nome, sobrenome } = props;
  return (
    <div className="App">
      <h1>Exercícios React-Redux - Simples</h1>
      <h3>
        {nome} {sobrenome}
      </h3>
      <div className="linha">
        <Intervalo></Intervalo>
      </div>
      <div className="linha">
        <Media />
        <Soma />
        <Sorteio />
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    nome: state.usuario.nome,
    sobrenome: state.usuario.sobrenome,
  };
}

export default connect(mapStateToProps)(App);
