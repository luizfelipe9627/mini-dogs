import React from "react";
import Login from "./Login";
import Photos from "./Photos";
import { useSelector } from "react-redux";
import Loading from "./helper/Loading";

const Content = () => {
  const { user, token } = useSelector((state) => state.login); // O useSelector é responsável por acessar o estado da store, como parâmetro ele recebe o estado da store, e retorna o estado login, que é desestruturado em user e token.

  // Se a propriedade loading do estado user ou token for true, ou seja se a requisição estiver sendo feita, ele executa o bloco de código do if, se não executa o bloco de código do else.
  if (user.loading || token.loading) {
    return <Loading />; // Retorna o componente Loading
  }

  // Se a propriedade data do estado user for true, ou seja se o usuário estiver logado, ele executa o bloco de código do if, se não executa o bloco de código do else.
  if (user.data) {
    return <Photos />; // Retorna o componente Photos.
  } else {
    return <Login />; // Retorna o componente Login.
  }
};

export default Content;
