import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import store from "./store/configureStore";

ReactDOM.createRoot(document.getElementById("root")).render(
  //* > Provider e Store
  /*
    - Para podermos ter acesso ao dispatch e a store dentro dos componentes de React, precisamos encapsular todo o applicativo dentro do componente Provider que é disponibilizado pelo react-redux.
    - Depois deve ser passado a store para o Provider, para que ele possa disponibilizar a store para os componentes filhos.
  */
  <Provider store={store}>
    <App />
  </Provider>,
);
