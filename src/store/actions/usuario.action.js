import { NOME_USUARIO } from "../actions/actionTypes";

export function alterarNomeUsuario(novoUsuario) {
  return {
    type: NOME_USUARIO,
    payload: novoUsuario,
  };
}
