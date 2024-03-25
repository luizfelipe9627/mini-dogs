import React from "react";
import { useDispatch } from "react-redux";
import { autoLogin } from "./store/login.jsx";
import Header from "./components/Header.jsx";
import Content from "./components/Content.jsx";
import "./App.css";

const App = () => {
  const dispatch = useDispatch(); // Está executando o hook useDispatch que é responsável por acessar o dispatch da store que dispara as ações, e armazena na constante dispatch.

  // O useEffect executa toda vez que o dispatch é modificado, ou seja sempre que uma ação for acionada o useEffect executa o bloco de código dentro dele.
  React.useEffect(() => {
    dispatch(autoLogin()); // Dispara uma ação passando como parâmetro e executando a função autoLogin.
  }, [dispatch]);

  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
};

export default App;
