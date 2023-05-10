import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addFav, removeFav } from "../../redux/action";
import { useState, useEffect } from "react";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({
        id,
        name,
        status,
        species,
        gender,
        origin,
        image,
        onClose,
        addFav,
        removeFav,
      });
    }
  };

  useEffect(() => {
    myFavorites.forEach((fav) => {
      if (fav.id === id) {
        setIsFav(true);
      }
    });
  }, [myFavorites, id]);

  return (
    <div className={style.card}>
      {isFav ? (
        <button className={style.cardButton} onClick={handleFavorite}>
          ❤️
        </button>
      ) : (
        <button className={style.cardButton} onClick={handleFavorite}>
          🤍
        </button>
      )}
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

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
