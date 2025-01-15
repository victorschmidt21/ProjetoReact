import { useNavigate } from "react-router-dom";

export function TextMenu({
  setTypeContent = () => {},
  typeContent = "",
  setTypeRequest = () => {},
  setGenre = () => {},
  setOrder = () => {},
  setValueButton = () => {},
}) {
  const navigate = useNavigate();
  function onClickMenu(type) {
    setTypeRequest("discover");
    setGenre("");
    setOrder("");
    setValueButton("Todos");
    setTypeContent(type);
    if (typeContent) {
      const input = document.getElementById("inputValue");
      input.value = "";
      const select = document.querySelector("select");
      select.value = "popularity.desc";
    }

    navigate(`/content/${type}`);
    console.log("click");
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
