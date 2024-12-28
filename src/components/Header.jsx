import React from "react";
import { UserRound } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

function Header({children}) {
  const navigate = useNavigate();
  const clickLogo = () => {
    navigate('/');
  }
  return (
    <nav className="flex h-16 mx-auto items-center justify-between bg-slate-800">
      <button onClick={clickLogo} className="text-white mx-12 font-bold text-2xl">VTFLIX</button>
      <div className="text-white flex text-center font-semibold gap-10">
        {children}
      </div>
      <Link to="/fav"><UserRound className="mx-16 text-white"/></Link>

    </nav>
  );
}

export default Header;
