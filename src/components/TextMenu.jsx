import { useNavigate } from "react-router-dom";

TextMenu.defaultProps = {
  setTypeContent: () => {},
  typeContent: "",
  type: "",
  setTypeRequest: () => {},
  setGenre: () => {},
  setOrder: () => {},
  setValueButton: () => {},
};

export function TextMenu({
  children,
  setTypeContent,
  typeContent,
  type,
  setTypeRequest,
  setGenre,
  setOrder,
  setValueButton,
}) {
  const navigate = useNavigate();
  function onClickMenu() {
    setTypeContent(type);
    setTypeRequest("discover");
    setGenre("");
    setOrder("");
    setValueButton("Todos");
    if (typeContent) {
      const select = document.querySelector("select");
      select.value = "popularity.desc";
      const imput = document.getElementById("imputValue");
      imput.value = "";
    }
    navigate(`/content?type=${type}`);
  }

  if (typeContent === type) {
    return (
      <button
        onClick={onClickMenu}
        className=" p-2 border-b-2 border-b-white hover:text-white"
      >
        {children}
      </button>
    );
  } else {
    return (
      <button
        onClick={onClickMenu}
        className="p-2 border-2 border-transparent transition-all duration-300 hover:border-b-white hover:text-white"
      >
        {children}
      </button>
    );
  }
}
