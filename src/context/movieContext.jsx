import { createContext, useState } from "react";
import { useParams } from "react-router-dom";
export const MovieContext = createContext({});

export function MovieProvider({ children }) {
  const { type } = useParams();
  const [typeContent, setTypeContent] = useState(type);
  const [movies, setMovies] = useState([]);
  const [order, setOrder] = useState("vote_count.desc");
  const [genre, setGenre] = useState("");
  const [page, setPage] = useState("1");
  const [isGenre, setisGenre] = useState("");
  const [isOrder, setisOrder] = useState("");
  const [typeRequest, setTypeRequest] = useState("discover");
  const [key, setKey] = useState("");
  const [totalPages, setTotalPages] = useState("");
  const [valueButton, setValueButton] = useState("Todos");

  function changeIsOrder(isOrder) {
    setisOrder(isOrder);
  }

  function changeIsGenre(isGenre) {
    setisGenre(isGenre);
  }

  function changeTotalPages(totalPages) {
    setTotalPages(totalPages);
  }

  function changePage(page) {
    setPage(page);
  }

  function changeMovies(movies) {
    setMovies(movies);
  }

  function changeKey(key) {
    setKey(key);
  }

  function changeTypeContent(typeContent) {
    setTypeContent(typeContent);
  }

  function changeGenre(genre) {
    setGenre(genre);
  }
  function changeOrder(order) {
    setOrder(order);
  }
  function changeTypeRequest(typeRequest) {
    setTypeRequest(typeRequest);
  }
  function changeValueButton(valueButton) {
    setValueButton(valueButton);
  }
  return (
    <MovieContext.Provider
      value={{
        page,
        typeContent,
        movies,
        order,
        genre,
        isGenre,
        isOrder,
        typeRequest,
        key,
        totalPages,
        valueButton,
        changeTypeContent,
        changeGenre,
        changeOrder,
        changeTypeRequest,
        changeValueButton,
        changeIsGenre,
        changeIsOrder,
        changeKey,
        changeMovies,
        changeTotalPages,
        changePage,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
}
