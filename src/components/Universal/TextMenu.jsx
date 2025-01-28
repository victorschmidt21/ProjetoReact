import { useNavigate } from "react-router-dom";
import { MovieContext } from "@/context/movieContext";
import { useContext } from "react";

export function TextMenu() {
  const {
    changeTypeContent,
    changeGenre,
    changeOrder,
    changeTypeRequest,
    changeValueButton,
    typeContent,
  } = useContext(MovieContext);
  const navigate = useNavigate();
  function onClickMenu(type) {
    changeGenre("");
    changeTypeRequest("discover");
    changeOrder("");
    changeValueButton("Todos");
    changeTypeContent(type);
    if (typeContent) {
      const input = document.getElementById("inputValue");
      if (input) input.value = "";

      const select = document.querySelector("select");
      if (select) select.value = "popularity.desc";
    }
    navigate(`/content/${type}`);
  }

  function defStyle(type) {
    return type === typeContent
      ? `p-2 border-b-2 border-b-white text-white`
      : "p-2 border-2 border-transparent transition-all duration-300 hover:border-b-white hover:text-white";
  }

  return (
    <div className="space-x-5">
      <button
        onClick={() => onClickMenu("movie")}
        className={defStyle("movie")}
      >
        Filmes
      </button>
      <button onClick={() => onClickMenu("tv")} className={defStyle("tv")}>
        Séries
      </button>
    </div>
  );
}
