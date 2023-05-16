import styles from "./SearchBar.module.css";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [id, setId] = useState("");
  const [addedIds, setAddedIds] = useState([]);

  const handleChange = (event) => {
    setId(event.target.value);
  };

  const handleSearch = () => {
    if (addedIds.includes(id)) {
      window.alert("Este personaje ya ha sido agregado. Por favor eliga otro personaje.");
    } else {
      onSearch(id);
      setAddedIds([...addedIds, id]);
      setId("");
    }
  };

  return (
    <div className={styles.searchBar}>
      <input
        value={id}
        type="search"
        className={styles.searchInput}
        placeholder="Agregar personaje"
        onChange={handleChange}
      />
      <button className={styles.searchButton} onClick={handleSearch}>
        AGREGAR
      </button>
    </div>
  );
};

export default SearchBar;
