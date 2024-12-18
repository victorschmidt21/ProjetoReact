import React from "react";
import { UserRound } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Menu({children}) {
  const navigate = useNavigate();
  const clickLogo = () => {
    navigate('/');
  }
  return (
    <nav className="bg-slate-800 flex h-16 mx-auto items-center justify-between">
      <button onClick={clickLogo} className="text-slate-300 mx-12 font-bold text-2xl">VTFLIX</button>
      <div className="text-slate-300 flex text-center font-semibold gap-10">
        {children}
      </div>
      <button><UserRound className="mx-16 text-slate-300"/></button>

    </nav>
  );
}

export default Menu;
