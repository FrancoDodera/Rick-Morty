import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css";
import { filterCards, orderCards } from "../../redux/action";
import { useState } from "react";
import { NavLink } from "react-router-dom";

const Favorites = ({ myFavorites }) => {
  const [aux, setAux] = useState(false);

  const dispatch = useDispatch();
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <div className={style.containerNav}>
        <NavLink to={"/home"} className={style.home}>
          <button>Home</button>
        </NavLink>
        <NavLink to={"/about"} className={style.about}>
          <button>About</button>
        </NavLink>

        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>

        <select onChange={handleFilter}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown"> unknown</option>
        </select>
      </div>

      <div className={style.container}>
        {myFavorites.map(
          ({
            id,
            name,
            status,
            gender,
            origin,
            species,
            image,
            onClose,
            addFav,
            removeFav,
            myFavorites,
          }) => {
            return (
              <Card
                id={id}
                name={name}
                status={status}
                gender={gender}
                origin={origin}
                species={species}
                image={image}
                onClose={onClose}
                removeFav={removeFav}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
