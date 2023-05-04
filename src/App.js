import './App.css';
import Card from './components/Card/Card.jsx';
import Cards from './components/Cards/Cards.jsx';
import SearchBar from './components/SearchBar/SearchBar.jsx';
import characters, { Rick } from './data.js';
import style from './App.module.css'
import NavBar from './components/NavBar/NavBar';

function App() {
   return (
      <div className={style.App}>
         <NavBar />
         {/* <SearchBar onSearch={(characterID) => window.alert(characterID)} /> */}
         <Cards characters={characters} />
         {/* <Card */}
            // id={Rick.id}
            // name={Rick.name}
            // status={Rick.status}
            // species={Rick.species}
            // gender={Rick.gender}
            // origin={Rick.origin.name}
            // image={Rick.image}
            // // onClose={() => window.alert('Emulamos que se cierra la card')}
         {/* // /> */}
      </div>
   );
}

export default App;
