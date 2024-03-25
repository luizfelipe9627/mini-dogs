import React from "react";
import styles from "./Header.module.css";
import { useSelector, useDispatch } from "react-redux";
import { userLogout } from "../store/login";

const Header = () => {
  const { user, token } = useSelector((state) => state.login); // O useSelector é responsável por acessar o estado da store, como parâmetro ele recebe o estado da store, e retorna o estado login, que é desestruturado em user e token.

  const loading = token.loading || user.loading; // Está criando uma variável loading que tem o valor true caso o estado token.loading ou user.loading seja true.

  const dispatch = useDispatch(); // Está executando o hook useDispatch que é responsável por acessar o dispatch da store que dispara as ações, e armazena na constante dispatch.

  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Mini Dogs</h1>
      <button
        // Quando o botão é clicado, a função anônima é chamada, fazendo com que o dispatch dispare/execute a ação userLogout.
        onClick={() => dispatch(userLogout())}
        // A propriedade aria-label é responsável por informar o nome do botão para os leitores de tela.
        aria-label="Logout"
        // Está atribuindo a classe login ao botão, e caso o estado user.loading seja true ou seja está fazendo a requisição, é adicionado a classe loading, e caso o estado user.data seja true ou seja o usuário esteja logado, é adicionado a classe loaded.
        className={`
        ${styles.login} 
        ${loading ? styles.loading : ""} 
        ${user.data ? styles.loaded : ""}
        `}
      ></button>
    </header>
  );
};

export default Header;
