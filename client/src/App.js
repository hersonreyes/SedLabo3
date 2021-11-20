import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios' 

function App() {
  const [movieName,setMovieName] = useState("");

  const [movieList,setMovieList]= useState([])

  useEffect(()=>{
    Axios.get('http://localhost:5000/read').then((response)=>{
      setMovieList(response.data);
    })
  },[])

  const addToList = () => {
    Axios.post("http://localhost:5000/insert",
    {movieName: movieName,});

  };

  return (
    <div className="App">
      <h1>
        Agrega tus peliculas Favoritass!!
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

      <h1> Movie List </h1>
       {movieList.map((val,key) => {
         return (<div key={key}>
           <h2>{val.movieName}</h2>
           </div>
           );
       })}
    </div>
  );
}

export default App;
