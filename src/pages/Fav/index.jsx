import { useState, useEffect } from "react";
import Header from "../../components/Header";
import { TextMenu } from "../../components/TextMenu";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import { Trash2 } from "lucide-react";
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

  function deleteMS(id) {
    const local = localStorage.getItem("@vt");
    const json = JSON.parse(local) || [];
    let updateData = json.filter((item) => item.id != id)
    localStorage.setItem("@vt", JSON.stringify(updateData));

    setSeries(updateData.filter((serie)=> serie.number_of_episodes))
    setMovies(updateData.filter((movie)=> !movie.number_of_episodes))
  }

  return (
    <div>
      <Header>
        <TextMenu type="movie" typeContent="">
          Filmes
        </TextMenu>
        <TextMenu type="tv" typeContent="">
          Séries
        </TextMenu>
      </Header>
      <div className="flex bg-slate-800 justify-center items-start space-x-10 h-screen">
        <ul className="flex justify-center items-center flex-col">
          <h1 className="text-white mb-1 font-bold">Meus Filmes</h1>
          {movies.map((movie) => {
            return (
              <li
                key={movie.id}
                className="bg-white mb-2 p-1 rounded-md flex justify-between items-center w-96"
              >
                <h1>{movie.title}</h1>
                <div className="flex space-x-2 text-slate-800">
                  <Link to={`/movie/${movie.id}`}>
                    <Eye />
                  </Link>
                  <button onClick={() => deleteMS(movie.id)}>
                    <Trash2 />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
        <ul className="flex justify-center items-center flex-col">
          <h1 className="text-white mb-1 font-bold">Minhas Séries</h1>
          {series.map((serie) => {
            return (
              <li
                key={serie.id}
                className="bg-white mb-2 p-1 rounded-md flex justify-between items-center w-96"
              >
                <h1>{serie.name}</h1>
                <div className="flex space-x-2">
                  <Link to={`/tv/${serie.id}`}>
                    <Eye />
                  </Link>
                  <button onClick={() => deleteMS(serie.id)}>
                    <Trash2 />
                  </button>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
