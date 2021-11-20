import React, { useState, useEffect } from "react";
import './App.css';
import Axios from 'axios' 

function App() {
  const [movieName,setMovieName] = useState("");

  const [movieList,setMovieList]= useState([])

  const [newMovieName,setNewMovieName] = useState('');

  useEffect(()=>{
    Axios.get('http://localhost:5000/read').then((response)=>{
      setMovieList(response.data);
    })
  },[])

  const addToList = () => {
    Axios.post("http://localhost:5000/insert",
    {movieName: movieName,});
    window.location.reload(); 
  };

  const updateMovie = (id) =>{
    Axios.put("http://localhost:5000/update",
    {
      id:id,
      newMovieName : newMovieName,
    });
  };

  const deleteMovie = (id) =>{
    Axios.delete(`http://localhost:5000/delete/${id}`)
    window.location.reload();
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
           <input type="text" 
           placeholder="Nuevo nombre de Pelicula"
           onChange={(event)=>{
            setNewMovieName(event.target.value);
          }}
          />
           <button onClick={()=>updateMovie(val._id)}>Actualizar</button>
           <button onClick={()=>deleteMovie(val._id)}>Eliminar</button>
           </div>
           );
       })}
    </div>
  );
}

export default App;
