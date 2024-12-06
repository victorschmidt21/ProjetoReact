import React from "react";
import { useState, useEffect } from "react";

const url = "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc";
const token = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGUwYjEwOGU1OWRlMzlkY2I3MTZjNDdlMjUxZWFjYSIsIm5iZiI6MTcyODMxOTA2Ny4yMTcsInN1YiI6IjY3MDQwZTViYTVmMjlmNDNhNTczZjc2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.If42fCe1yeB_KTRQlecFh4G6OOkroxYjaqnqHx-9mq4";

function Teste() {

    const [movies, setMovies] = useState([]);
      
    useEffect (() => {
    const requisition = async () => {
      const data = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await data.json();
      setMovies(response.results);
    };
    
    requisition();
    }, []);

  return ( 
  <div>
  {movies.map((filme) => ( 
      <h1>{filme.title}</h1>
  ))}
    
    </div>
  );
}

export default Teste;
