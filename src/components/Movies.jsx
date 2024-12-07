import React from "react";
import { useState, useEffect } from "react";

const url =
  "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=pt-BR&page=1&sort_by=popularity.desc";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGUwYjEwOGU1OWRlMzlkY2I3MTZjNDdlMjUxZWFjYSIsIm5iZiI6MTcyODMxOTA2Ny4yMTcsInN1YiI6IjY3MDQwZTViYTVmMjlmNDNhNTczZjc2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.If42fCe1yeB_KTRQlecFh4G6OOkroxYjaqnqHx-9mq4";

function Movies() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
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
    <div className="flex justify-center items-center min-h-screen">
      <div className="grid grid-cols-5 gap-20">
        {movies.map((filme) => (
          <button
            key={filme.id}
            className="bg-slate-300 rounded-md flex flex-col h-100 w-48 gap- items-center justify-center"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
              alt={filme.title}
              className="h-55 w-40 m-2 rounded-md"
            ></img>
            <h1 className="mb-2 font-semibold text-slate-900">{filme.title}</h1>
          </button>
        ))}
      </div>
    </div>
  );
}

export default Movies;
