import { VideoIcon } from "lucide-react";

function Genres(props) {
  return (
    <div className="bg-slate-300 w-52 rounded-md h-32">
      <div className=" h-12 flex items-center justify-between border-b-2 border-b-slate-800">
        <h1 className="mx-5 font-semibold">Gêneros</h1>
        <VideoIcon className="mx-2" />
      </div>
      <div className="flex items-center flex-col">
        <h1>Buscar por tipos de gêneros:</h1>
        {props.type === "movie" ? (
          <select id="SelectOrder" className="rounded-md bg-slate-400">
            <option value="All">Todos</option>
            <option value="Popularity">Ação</option>
            <option value="Classification">Aventura</option>
            <option value="Date">Animação</option>
            <option value="title">Comédia</option>
            <option value="Classification">Documentário</option>
            <option value="Date">Família</option>
            <option value="title">Fantasia</option>
            <option value="Classification">Terror</option>
            <option value="title">Mistério</option>
            <option value="Popularity">Romance</option>
            <option value="Classification">Ficção científica</option>
            <option value="Date">Guerra</option>
          </select>
        ) : (
          <select id="SelectOrder" className="rounded-md bg-slate-400">
            <option value="All">Todos</option>
            <option value="Popularity">Ação</option>
            <option value="Classification">Animação</option>
            <option value="title">Comédia</option>
            <option value="Popularity">Crime</option>
            <option value="Classification">Documentário</option>
            <option value="Date">Família</option>
            <option value="title">Drama</option>
            <option value="Popularity">Mistério</option>
            <option value="Classification">Kids</option>
            <option value="Date">News</option>
            <option value="title">Reality</option>
            <option value="Popularity">Sci-Fi</option>
          </select>
        )}
      </div>
    </div>
  );
}

export default Genres;
