import React from "react";
import { useSelector } from "react-redux";
import styles from "./PhotosContent.module.css";

const PhotosContent = () => {
  const { list } = useSelector((state) => state.photos); // Está executando o hook useSelector que é responsável por acessar o estado da store, e está desestruturando o list do estado photos e armazenando na constante list.

  return (
    <ul className={styles.list}>
      {/* O map é responsável por percorrer o array de fotos(sem retornar um novo array, diferente do forEach) e retornar uma imagem para cada foto. */}
      {list.map((photo) => (
        <li key={photo.id} className={`${styles.item} anime`}>
          <img src={photo.src} alt={photo.title} className={styles.img} />
          <h2 className={styles.title}>{photo.title}</h2>
          <span className={styles.access}>{photo.acessos}</span>
        </li>
      ))}
    </ul>
  );
};

export default PhotosContent;
