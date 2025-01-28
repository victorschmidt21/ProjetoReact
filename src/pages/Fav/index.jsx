import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import { Trash2 } from "lucide-react";
import { Clapperboard } from "lucide-react";
import { Tv } from "lucide-react";
import { toast } from "react-toastify";

export function Fav() {
  const [movies, setMovies] = useState([]);
  const [series, setSeries] = useState([]);
  useEffect(() => {
    const local = localStorage.getItem("@vt");
    const json = JSON.parse(local) || [];

    const valueSeries = json.filter((serie) => serie.number_of_episodes);
    const valueMovies = json.filter((movie) => !movie.number_of_episodes);

    setSeries(valueSeries);
    setMovies(valueMovies);
  }, []);

  function deleteMS(type, id) {
    const local = localStorage.getItem("@vt");
    const json = JSON.parse(local) || [];
    let updateData = json.filter((item) => item.id != id);
    localStorage.setItem("@vt", JSON.stringify(updateData));

    setSeries(updateData.filter((serie) => serie.number_of_episodes));
    setMovies(updateData.filter((movie) => !movie.number_of_episodes));
    if (type == "filme") {
      toast.success("Filme removido com sucesso!");
    } else {
      toast.success("Série removida com sucesso!");
    }
  }

  return (
    <div>
      <div className="flex bg-slate-800 justify-center items-start space-x-10 h-screen">
        <ul className="flex justify-center items-center flex-col w-96">
          <h1 className="text-white mb-1 font-bold">Meus Filmes</h1>
          {movies.length > 0 ? (
            movies.map((movie) => (
              <li
                key={movie.id}
                className="bg-white mb-2 p-1 rounded-md flex justify-between items-center w-96"
              >
                <h1 className="font-semibold">{movie.title}</h1>
                <div className="flex space-x-2 text-slate-800">
                  <Link to={`/movie/${movie.id}`}>
                    <Eye />
                  </Link>
                  <button onClick={() => deleteMS("filme", movie.id)}>
                    <Trash2 />
                  </button>
                </div>
              </li>
            ))
          ) : (
            <div className="flex flex-col">
              <strong className="text-white">
                Você não possui nenhuma filme favorito!
              </strong>
              <Link
                to="/content/movie"
                className="px-3 flex justify-between bg-white mt-2 p-1 rounded-md font-semibold"
              >
                Filmes <Clapperboard absoluteStrokeWidth />{" "}
              </Link>
            </div>
          )}
        </ul>
        <ul className="flex justify-center items-center flex-col w-96">
          <h1 className="text-white mb-1 font-bold">Minhas Séries</h1>
          {series.length > 0 ? (
            series.map((serie) => (
              <li
                key={serie.id}
                className="bg-white mb-2 p-1 rounded-md flex justify-between items-center w-96"
              >
                <h1 className="font-semibold">{serie.name}</h1>
                <div className="flex space-x-2">
                  <Link to={`/tv/${serie.id}`}>
                    <Eye />
                  </Link>
                  <button onClick={() => deleteMS("série", serie.id)}>
                    <Trash2 />
                  </button>
                </div>
              </li>
            ))
          ) : (
            <div className="flex flex-col">
              <strong className="text-white">
                Você não possui nenhuma série favorita!
              </strong>
              <Link
                className="px-3 flex justify-between bg-white mt-2 p-1 rounded-md font-semibold"
                to="/content/tv"
              >
                Séries <Tv absoluteStrokeWidth />
              </Link>
            </div>
          )}
        </ul>
      </div>
    </div>
  );
}
