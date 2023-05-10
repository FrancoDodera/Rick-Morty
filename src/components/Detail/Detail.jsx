import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import style from "./Detail.module.css";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);
  return (
    <div className={style.card}>
      <img className={style.cardimage} src={character.image} alt="" />
      <div className={style.cardinfo}>
        <h1 className={style.cardname}>{character.name}</h1>
        <h2 className={style.cardspecies}>Especie:{character.species}</h2>
        <h2 className={style.cardgender}>Genero:{character.gender}</h2>
        <h2 className={style.cardorigin}>Origen:{character.origin?.name}</h2>
        <h2 className={style.cardstatus}>Status:{character.status}</h2>
      </div>
    </div>
  );
};

export default Detail;
