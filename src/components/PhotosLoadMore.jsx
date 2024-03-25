import React from "react";
import styles from "./PhotosLoadMore.module.css";
import { useDispatch, useSelector } from "react-redux";
import { loadNewPhotos } from "../store/photos";
import Loading from "./helper/Loading";

const PhotosLoadMore = () => {
  const dispatch = useDispatch(); // Está executando o hook useDispatch que é responsável por acessar o dispatch da store que dispara as ações, e armazena na constante dispatch.

  const { pages, infinite, loading } = useSelector((state) => state.photos); // Está executando o hook useSelector que é responsável por acessar o estado da store, e está desestruturando as propriedades pages e infinite.

  function handleClick() {
    dispatch(loadNewPhotos(pages + 1)); // Está disparando a ação loadNewPhotos passando a próxima página como parâmetro, fazendo com que as fotos da próxima página sejam adicionadas ao estado da store.
  }

  if (loading) {
    return <Loading />;
  }

  // Se a propriedade infinite for igual a false, executar o bloco de código do if.
  if (!infinite) {
    return null; // Retorna null, ou seja, não renderiza nada.
  }

  return (
    <button className={styles.button} onClick={handleClick}>
      +
    </button>
  );
};

export default PhotosLoadMore;
