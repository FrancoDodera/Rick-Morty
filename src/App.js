import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav'
import { useState } from 'react';
import axios from 'axios'
import {Routes, Route} from 'react-router-dom'
import About from './components/About/About.jsx';
import Detail from './components/Detail/Detail.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx'

function App() {
  const [characters, setCharacters] = useState([]);
  
  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(({ data }) => {
      if (data.name) {
          setCharacters((characters) => [...characters, data]);
      } else {
          window.alert('¡No hay personajes con este ID!');
      }
    });
  };
  const onClose = (id) => {
    const filteredCharacters = characters.filter((char) => Number(char.id) !== Number(id));
    setCharacters(filteredCharacters);
  };
  
  return (
    <>
      <Nav onSearch={onSearch}/>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/detail/:id' element={<Detail/>}/>
      </Routes>
    </>
  );
}

export default App;
