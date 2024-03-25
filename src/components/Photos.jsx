import React from "react";
import { useDispatch } from "react-redux";
import { loadNewPhotos } from "../store/photos";
import PhotosContent from "./PhotosContent";
import PhotosLoadMore from "./PhotosLoadMore";

const Photos = () => {
  const dispatch = useDispatch(); // Está executando o hook useDispatch que é responsável por acessar o dispatch da store que dispara as ações, e armazena na constante dispatch.

  // O useEffect é responsável por executar um efeito colateral, e está recebendo uma função anônima que é executada toda vez que o dispatch é alterado.
  React.useEffect(() => {
    dispatch(loadNewPhotos(1)); // Está disparando a ação loadNewPhotos passando a página como parâmetro, que é responsável por adicionar as fotos ao estado da store.
  }, [dispatch]);

  return (
    <section>
      <PhotosContent />
      <PhotosLoadMore />
    </section>
  );
};

export default Photos;
