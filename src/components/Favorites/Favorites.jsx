import { connect, useDispatch } from "react-redux";
import Card from "../Card/Card";
import style from "./Favorites.module.css";
import { filterCards, orderCards } from "../../redux/action";

const Favorites = ({ myFavorites }) => {
  const dispatch = useDispatch();
  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div>
      <select onChange={handleOrder}>
        <option value="A">Ascendente</option>
        <option value="D">Descendente</option>
      </select>

      <select onChange={handleFilter}>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="Genderless">Genderless</option>
        <option value=" unknown"> unknown</option>
      </select>
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
