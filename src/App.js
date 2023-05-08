import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import LandingPage from "./components/LandingPage/LandingPage.jsx";
import Form from "./components/Form/Form";

function App() {
  // HOOKS
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAcces] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  // CREDENCIALES DE ACCESO
  const username = "francododera@gmail.com";
  const password = "fran1234";

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((characters) => [...characters, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    const filteredCharacters = characters.filter(
      (char) => Number(char.id) !== Number(id)
    );
    setCharacters(filteredCharacters);
  };

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAcces(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas!");
    }
  };

  return (
    <>
      {location.pathname === "/" ? (
        <Form login={login} />
      ) : (
        <Nav onSearch={onSearch} />
      )}

      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </>
  );
}

export default App;
