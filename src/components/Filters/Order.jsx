import { Logs } from "lucide-react";

  function Order({setisOrder, typeContent}) {

    const handleChange = (e) => {
      setisOrder(e.target.value);
    };
  return (
    <div className="bg-slate-300 w-52 rounded-md h-32">
      <div className=" h-12 flex items-center justify-between border-b-2 border-b-slate-800">
        <h1 className="mx-5 font-semibold">Ordenar</h1>
        <Logs className="mx-2" />
      </div>
      <div className="flex items-center flex-col">
        <h1>Ordenar resultados por:</h1>
        <select onChange={handleChange} id="SelectOrder" className="rounded-md bg-white">
          <option value="popularity.desc">Popularidade</option>
          <option value="vote_count.desc">Classificação</option>
        <option value={typeContent === "movie" ? "title.asc" : "name.asc"}>Titulo A - Z</option>
        </select>
      </div>
    </div>
  );
}

export default Order;
