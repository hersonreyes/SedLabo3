import React, { useState } from "react";
import './App.css';
import Axios from 'axios' 

function App() {
  const [movieName,setMovieName] = useState("")

  const addToList = () => {
    Axios.post("http://localhost:5000/insert",
    {movieName: movieName,});
  };

  return (
    <div className="App">
      <h1>
        Agrega tus peliculas Favoritass!!
        hola
      </h1>
      <label>Nombre de la Pelicula</label>
      <input type="text" 
      onChange={(event)=>{
        setMovieName(event.target.value);
      }}
      />
      <div className="buttons">
      <button onClick={addToList}>Añadir</button>
      </div>  
    </div>
  )
};

export default App;
