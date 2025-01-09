import { Logs } from "lucide-react";

export function Order({ setisOrder, typeContent }) {
  const handleChange = (e) => {
    setisOrder(e.target.value);
  };
  return (
    <div className="bg-slate-300 rounded-md w-40 h-24 lg:w-52 lg:h-32">
      <div className="flex items-center justify-between border-b-2 border-b-slate-800 lg:h-12">
        <h1 className="mx-5 font-semibold text-sm lg:text-lg">Ordenar</h1>
        <Logs className="mx-2 h-auto w-auto" />
      </div>
      <div className="flex items-center flex-col text-sm lg:text-lg">
        <h1>Ordenar resultados por:</h1>
        <select
          onChange={handleChange}
          id="SelectOrder"
          className="rounded-md bg-white"
        >
          <option value="popularity.desc">Popularidade</option>
          <option value="vote_count.desc">Classificação</option>
          <option value={typeContent === "movie" ? "title.asc" : "name.asc"}>
            Titulo A - Z
          </option>
        </select>
      </div>
    </div>
  );
}
