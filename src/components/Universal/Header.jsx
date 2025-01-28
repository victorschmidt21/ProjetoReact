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
    <header className="flex w-full items-center justify-between bg-slate-800">
      <button
        onClick={clickLogo}
        className="text-white mx-6 md:mx-12 font-bold text-xl md:text-2xl"
      >
        VTFLIX
      </button>
      <div className="text-white flex text-center font-semibold">
        <TextMenu />
      </div>
      <Link to="/fav" onClick={() => changeTypeContent("")}>
        <UserRound className="mx-8 md:mx-16 text-white" />
      </Link>
    </header>
  );
}
