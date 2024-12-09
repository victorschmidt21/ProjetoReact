import { Logs } from "lucide-react";

function Order() {
  return (
    <div className="bg-slate-300 w-52 rounded-md h-32">
      <div className=" h-12 flex items-center justify-between border-b-2 border-b-slate-800">
        <h1 className="mx-5 font-semibold">Ordenar</h1>
        <Logs className="mx-2" />
      </div>
      <div className="flex items-center flex-col">
        <h1>Ordenar resultados por:</h1>
        <select id="SelectOrder" className="rounded-md bg-slate-400">
          <option value="Popularity">Popularidade</option>
          <option value="Classification">Classificação</option>
          <option value="Date">Data de lançamento</option>
          <option value="title">Titulo (A - Z)</option>
        </select>
      </div>
    </div>
  );
}

export default Order;
