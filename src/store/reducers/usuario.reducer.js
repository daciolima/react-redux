import { NOME_USUARIO } from "../actions/actionTypes";

const initialState = {
  nome: "Dacio",
  sobrenome: "Lima",
};

const usuarioReducer = function (state = initialState, action) {
  switch (action.type) {
    case NOME_USUARIO:
      return {
        ...state,
        min: action.payload,
      };

    default:
      return state;
  }
};

export default usuarioReducer;
