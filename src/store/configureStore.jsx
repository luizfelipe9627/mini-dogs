import { configureStore, combineReducers } from "@reduxjs/toolkit";
import login from "./login";
import localStorage from "./middleware/localStorage";
import photos from "./photos";

// O combineReducers é responsável por combinar os reducers e armazenar em uma constante chamada reducer.
const reducer = combineReducers({
  login,
  photos,
});

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(localStorage); // A constante middleware recebe uma função que recebe como parâmetro o getDefaultMiddleware que é responsável por retornar os middlewares padrões do redux-toolkit, e junta com o middleware personalizado localStorage.

// Criado uma constante chamada store que recebe o retorno da função configureStore que é responsável por criar a store(armazém) da aplicação.
const store = configureStore({ reducer, middleware }); // O configureStore recebe um objeto como parâmetro, e esse objeto deve conter a chave reducer, que recebe o/s reducer/s que será responsável por alterar/atualizar o estado da store.

export default store; // Exporta a constante store.
