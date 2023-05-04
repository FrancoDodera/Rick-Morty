import styles from './SearchBar.module.css';
import {useState} from 'react'

const SearchBar = ({onSearch}) => {
  const [id, setId] = useState('')
  const handleChange = (event) => {
    setId(event.target.value)
  }
  return (
    <div className={styles.searchBar}>
      <input value={id} type="search" className={styles.searchInput} placeholder="Agregar personaje" onChange={handleChange}/>
      <button className={styles.searchButton} onClick={()=>{onSearch(id)}}>Agregar</button>
    </div>
  );
};

export default SearchBar;