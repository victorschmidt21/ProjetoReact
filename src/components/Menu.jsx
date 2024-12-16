import React from "react";
import { UserRound } from "lucide-react";

function Menu({children}) {
  return (
    <nav className="bg-slate-800 flex h-16 mx-auto items-center justify-between">
      <a href="#" className="text-slate-300 mx-12 font-bold text-2xl">VTFLIX</a>
      <div className="text-white flex text-center font-semibold gap-10">
        {children}
      </div>
      <button><UserRound className="mx-16 text-slate-300"/></button>

    </nav>
  );
}

export default Menu;
