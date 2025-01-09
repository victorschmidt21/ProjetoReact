import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";
import { Header } from "../../components/Universal/Header";
import { TextMenu } from "../../components/Universal/TextMenu";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Heart } from "lucide-react";
import { toast } from "react-toastify";

export function Info() {
  const token = "d4e0b108e59de39dcb716c47e251eaca";
  const { id, type } = useParams();
  const [movie, setMovie] = useState({});
  const [like, setLike] = useState(false);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    function collectLocal() {
      const myList = localStorage.getItem("@vt");
      let moviesSave = JSON.parse(myList) || [];
      const hasMovie = moviesSave.some((movieSave) => movieSave.id == id);
      console.log(hasMovie);
      setLike(hasMovie);
    }

    async function collectMovie() {
      const response = await api.get(`/${type}/${id}`, {
        params: {
          api_key: token,
          language: "pt-BR",
        },
      });
      setMovie(response.data);
      setLoad(false);
      collectLocal();
    }
    collectMovie();
  }, []);

  function saveFav(id) {
    const myList = localStorage.getItem("@vt");
    let moviesSave = JSON.parse(myList) || [];
    if (like) {
      let movieFilter = moviesSave.filter((movie) => movie.id !== id);
      localStorage.setItem("@vt", JSON.stringify(movieFilter));
      if (type == "movie") {
        toast.success("Filme removido com sucesso!");
      } else {
        toast.success("Série removida com sucesso!");
      }
      setLike(!like);
      return;
    }
    console.log("oi");
    moviesSave.push(movie);
    localStorage.setItem("@vt", JSON.stringify(moviesSave));
    if (type == "movie") {
      toast.success("Filme salvo com sucesso!");
    } else {
      toast.success("Série salva com sucesso!");
    }
    setLike(!like);
  }

  return (
    <div className="bg-slate-800">
      <Header>
        <TextMenu type="movie" typeContent="">
          Filmes
        </TextMenu>
        <TextMenu type="tv" typeContent="">
          Séries
        </TextMenu>
      </Header>
      {load ? (
        <div className="flex justify-center items-center h-screen">
          <strong className="font-bold text-white">Carregando...</strong>
        </div>
      ) : (
        <div className="h-screen my-0 mx-auto flex flex-col justify-center max-w-3xl text-white">
          <h1 className="font-bold text-2xl">
            {type == "tv" ? movie.name : movie.title}
          </h1>
          <img
            className="rounded-lg mt-2 w-3xl"
            src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
          />
          <h3 className="font-semibold mt-1">Sinopse</h3>
          <span className="text-white">{movie.overview}</span>
          <div className="flex justify-between mt-2">
            <strong>Avaliação: {movie.vote_average} / 10</strong>{" "}
            <div className="flex gap-2">
              <a
                className="bg-white text-slate-800 px-2 rounded-md"
                target="blank"
                href={`https://www.youtube.com/results?search_query=${
                  type == "tv" ? movie.name : movie.title
                } Trailer`}
              >
                Trailer
              </a>
              {like ? (
                <FavoriteIcon
                  onClick={() => saveFav(movie.id)}
                  className="cursor-pointer"
                />
              ) : (
                <Heart
                  onClick={() => saveFav(movie.id)}
                  className="cursor-pointer"
                ></Heart>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
