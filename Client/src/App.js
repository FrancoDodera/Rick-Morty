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
import Favorites from "./components/Favorites/Favorites";

function App() {
  // HOOKS
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  const login = async (userData) => {
    try {
      const { email, password } = userData;
      const URL = `http://localhost:3001/rickandmorty/login/?email=${email}&password=${password}`;
      const { data } = await axios.get(URL);
      const { access } = data;
      setAccess(access);
      if (access) {
        navigate("/home");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = async (id) => {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/rickandmorty/character/${id}`
      );
      if (data.name) {
        setCharacters((characters) => [...characters, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onClose = (id) => {
    const filteredCharacters = characters.filter(
      (char) => Number(char.id) !== Number(id)
    );
    setCharacters(filteredCharacters);
  };

  return (
    <>
      {location.pathname === "/" ? (
        <Form login={login} />
      ) : (
        location.pathname !== "/favorites" && <Nav onSearch={onSearch} />
      )}

      <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
}

export default App;
