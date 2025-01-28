import React from "react";
import { UserRound } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { TextMenu } from "./TextMenu";
import { MovieContext } from "@/context/movieContext";
import { useContext } from "react";
export function Header() {
  const { changeTypeContent } = useContext(MovieContext);
  const navigate = useNavigate();
  const clickLogo = () => {
    changeTypeContent("");
    navigate("/");
  };
  return (
    <nav className="flex h-16 w-full items-center justify-between bg-slate-800">
      <button
        onClick={clickLogo}
        className="text-white mx-12 font-bold text-2xl"
      >
        VTFLIX
      </button>
      <div className="text-white flex text-center font-semibold gap-10">
        <TextMenu />
      </div>
      <Link to="/fav" onClick={() => changeTypeContent("")}>
        <UserRound className="mx-16 text-white" />
      </Link>
    </nav>
  );
}
