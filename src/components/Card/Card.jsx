import style from "./Card.module.css";
import { Link } from "react-router-dom";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
}) => {
  return (
    <div className={style.card}>
      <button
        className={style.cardClose}
        onClick={() => {
          onClose(id);
        }}
      >
        X
      </button>
      <Link to={`/detail/${id}`}>
        <img className={style.cardImage} src={image} alt="" />

        <div className={style.cardDetails}>
          <h2 className={style.cardName}>{name}</h2>
          <div className={style.cardInfo}>
            <span className={style.cardInfoLabel}>Species:</span>
            <span className={style.cardInfoValue}>{species}</span>
          </div>
          <div className={style.cardInfo}>
            <span className={style.cardInfoLabel}>Gender:</span>
            <span className={style.cardInfoValue}>{gender}</span>
          </div>
          <div className={style.cardInfo}>
            <span className={style.cardInfoLabel}>Origin:</span>
            <span className={style.cardInfoValue}>{origin}</span>
          </div>
          <div className={style.cardInfo}>
            <span className={style.cardInfoLabel}>Status:</span>
            <span className={style.cardInfoValue}>{status}</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Card;
