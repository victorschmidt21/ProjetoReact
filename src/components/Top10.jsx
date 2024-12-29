import { useEffect, useState } from "react";
import "../index.css";
const token =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGUwYjEwOGU1OWRlMzlkY2I3MTZjNDdlMjUxZWFjYSIsIm5iZiI6MTcyODMxOTA2Ny4yMTcsInN1YiI6IjY3MDQwZTViYTVmMjlmNDNhNTczZjc2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.If42fCe1yeB_KTRQlecFh4G6OOkroxYjaqnqHx-9mq4";

export function Top10() {
  const [movies, setMovies] = useState(["text"]);
  const url = `https://api.themoviedb.org/3/movie/238/recommendations?language=pt-BR&page=1`;

  useEffect(() => {
    const feachtMovies = async () => {
      const data = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const movieData = await data.json();
      setMovies(movieData.results);
    };
    feachtMovies();
  }, []);

  return (
    <div className="w-full overflow-hidden p-4">
      <h1 className="text-slate-800 stroke-slate-300 stroke-2 font-semibold text-2xl p-2">Top 10</h1>
      <div className="flex overflow-x-auto scroll-smooth gap-4 snap-x snap-mandatory no-scrollbar">
        {movies.slice(movies, 10).map((filme) => (
          <button key={filme.id} className="flex-shrink-0 w-48 snap-center">
            <img
              src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
              alt={filme.title || "Imagem não disponível"}
              className=" m-2 h-70 w-full rounded-md hover:border-slate-300 hover:border-2"
            ></img>
          </button>
        ))}
      </div>
    </div>
  );
}
