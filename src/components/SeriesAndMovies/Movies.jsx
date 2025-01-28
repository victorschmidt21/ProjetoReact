import { ErrorLoading } from "./ErrorLoading";
import { Link } from "react-router-dom";
import { MovieContext } from "@/context/movieContext";
import { useContext } from "react";
export function Movies() {
  const { movies, typeContent } = useContext(MovieContext);
  if (movies.length != 0) {
    return (
      <div className="min-h-screen mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-5 sm:grid-cols-3 gap-10">
          {movies.map((filme) => (
            <Link
              to={`/${typeContent}/${filme.id}`}
              key={filme.id}
              className="flex flex-col items-center justify-center "
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                alt={filme.title || "Imagem não disponível"}
                className=" m-2 h-70 w-48 rounded-md hover:border-slate-300 hover:border-2"
              ></img>
            </Link>
          ))}
        </div>
      </div>
    );
  } else {
    return <ErrorLoading type="movie" />;
  }
}
