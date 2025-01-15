import { useEffect, useState } from "react";
import "../../index.css";
import { useNavigate } from "react-router-dom";
import { api, token } from "@/services/api";

export function MoviesHome({ children, type, genre = "" }) {
  const navigate = useNavigate();
  const [movies, setMovies] = useState(["text"]);
  const url = genre == "" ? `/movie/${type}` : `/movie/${genre}/${type}`;
  useEffect(() => {
    async function feachtMovies() {
      const data = await api.get(url, {
        params: {
          api_key: token,
          language: "pt-BR",
          page: 1,
        },
      });
      const movieData = await data.data;
      setMovies(movieData.results);
    }
    feachtMovies();
  }, []);

  function handleClick(id) {
    navigate(`/movie/${id}`);
  }

  return (
    <div className="w-full overflow-hidden p-4">
      <h1 className="text-white font-semibold text-2xl p-2">{children}</h1>
      <div className="flex overflow-x-auto scroll-smooth gap-4 snap-x snap-mandatory no-scrollbar">
        {movies.slice(movies, 15).map((movie) => (
          <button
            onClick={() => handleClick(movie.id)}
            key={movie.id}
            className="flex-shrink-0 w-48 snap-center"
          >
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title || "Imagem não disponível"}
              className=" m-2 h-70 w-full rounded-md hover:border-slate-300 hover:border-2"
            ></img>
          </button>
        ))}
      </div>
    </div>
  );
}
