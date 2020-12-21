// Combinando todos os reducers
import { createStore, combineReducers } from "redux";

import numeroReducers from "./reducers/numeros.reducer";
import usuarioReducers from "./reducers/usuario.reducer";

const reducers = combineReducers({
  numeros: numeroReducers,

  usuario: usuarioReducers,
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
