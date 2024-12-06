import React from "react";
import { UserRound } from "lucide-react";

function Menu() {
  return (
    <nav className="bg-slate-800 flex h-16 mx-auto items-center justify-between">
      <h1 className="text-slate-300 mx-16 font-bold text-2xl">FLIX</h1>
      <div className="text-white flex text-center font-semibold gap-5">
        <a href="#">Filmes</a>
        <a href="#">Séries</a>
      </div>
      <button><UserRound className="mx-16 text-slate-300"/></button>

    </nav>
  );
}

export default Menu;
