import React, { useState } from "react";
import {ErrorLoading} from "./ErrorLoading";
import { ModalInfos } from "./Modalnfos";
import { InfosMovies } from "./InfosMovies";



function Movies({ movies }) {
  const [movie, setMovie] = useState("");
  const [open, setOpen] = useState(false);
  const collectId = (filme) => {
    setMovie(filme);
    setOpen(true);
  };

  if (movies.length != 0) {
    return (
      <div className="min-h-screen mt-16">
        <div className="grid grid-cols-5 gap-10">
          {movies.map((filme) => (
            <button
              onClick={() => collectId(filme)}
              key={filme.id}
              className="flex flex-col items-center justify-center "
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                alt={filme.title || "Imagem não disponível"}
                className=" m-2 h-70 w-48 rounded-md hover:border-slate-300 hover:border-2"
              ></img>
            </button>
          ))}
          <ModalInfos type="movie">
            <InfosMovies
              setOpen={setOpen}
              isOpen={open}
              movie={movie}
            ></InfosMovies>
          </ModalInfos>
        </div>
      </div>
    );
  } else {
    return <ErrorLoading type="movie" />;
  }
}

export default Movies;
