import { ADD_FAV, REMOVE_FAV, FILTER, ORDER } from "./action";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        myFavorites: [...state.allCharacters, action.payload],
        allCharacters: [...state.allCharacters, action.payload],
      };
    case REMOVE_FAV:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };
    case FILTER:
      const filteredCharacters = state.allCharacters.filter(
        (char) => char.gender === action.payload
      );
      return {
        ...state,
        myFavorites: filteredCharacters,
      };
    case ORDER:
      const sortedCharacters = [...state.allCharacters];
      sortedCharacters.sort((a, b) => {
        if (action.payload === "A") {
          return a.id - b.id; // Orden ascendente
        } else if (action.payload === "D") {
          return b.id - a.id; // Orden descendente
        } else {
          return 0;
        }
      });
      return {
        ...state,
        myFavorites: sortedCharacters,
      };
    default:
      return { ...state };
  }
};

export default reducer;
