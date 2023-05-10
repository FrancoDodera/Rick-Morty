import SearchBar from "../SearchBar/SearchBar";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.css";

const Nav = ({ onSearch }) => {
  return (
    <div className={style.container}>
      <NavLink to={"/about"} className={style.about}>
        <button>About</button>
      </NavLink>
      <NavLink to={"/home"} className={style.home}>
        <button>Home</button>
      </NavLink>
      <NavLink to={"/favorites"} className={style.home}>
        <button>Favorties</button>
      </NavLink>
      <SearchBar onSearch={onSearch} />
    </div>
  );
};

export default Nav;
