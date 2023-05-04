 import style from './SearchBar.module.css'
 
 
 const SearchBar = ({onSearch}) => {
   return (
      <div className={style.contenedor}>
         <input type='search' /> 
         <button onClick={onSearch}>Agregar</button> 
      </div>
   );
};

export default SearchBar;
