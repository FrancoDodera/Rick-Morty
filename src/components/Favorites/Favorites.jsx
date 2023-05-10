import { connect } from "react-redux";
import Card from "../Card/Card";

const Favorites = ({ myFavorites }) => {
  return (
    <div>
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
  );
};

const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

export default connect(mapStateToProps, null)(Favorites);
