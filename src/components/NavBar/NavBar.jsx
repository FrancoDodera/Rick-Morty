import SearchBar from "../SearchBar/SearchBar";
import style from './NavBar.module.css'

const NavBar = () => {
    return (
        <div className={style.nav}>
            <SearchBar/>
        </div>
    )
};

export default NavBar;