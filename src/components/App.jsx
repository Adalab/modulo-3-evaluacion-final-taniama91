// Fichero src/components/App.jsx
import { useEffect, useState } from "react";
//import { Route, Routes } from "react-router-dom";
import getDataApi from "../services/api";
import Header from "./Header";
import MovieList from "./MovieList";
import "../styles/App.scss"
import ls from "../services/ls"

const App = () => {
  // Estados

  const [movies, setMovies] = useState([]);

  // Llamar a la api con useEffect

  useEffect(() => {
    // Dentro de useEffect llamamos a la API
    getDataApi().then((cleanData) => {
      setMovies(cleanData);
    });
    // Aquí ponemos un array vacío porque solo queremos que se llame a la API la primera vez
  }, []);


  return (
    <div>
      <Header/>
      <MovieList movies={movies}/>


      {/* <Routes>
      <Route path='/' element={<h2>Página de inicio</h2>}/>
      <Route path='/about' element={<h2>Página de about</h2>}/>
    </Routes> */}
    </div>
  );
};

export default App;