import React, { useState, useEffect } from "react";
import Movies from "../../components/Movies";
import Header from "../../components/Header";
import Searches from "../../components/Searches";
import Filter from "../../components/Filters/Filter";
import NumPages from "../../components/numPages.jsx";
import Order from "../../components/Filters/Order";
import Genres from "../../components/Filters/Genres";
import ButtonApllyFilters from "../../components/Filters/ButtonApllyFilters";
import { TextMenu } from "../../components/TextMenu";
import { useParams } from "react-router-dom";
import { api } from "../../services/api";

function SeriesAndMovies() {
  const { type } = useParams();
  const [movies, setMovies] = useState([]);
  const [order, setOrder] = useState("");
  const [genre, setGenre] = useState("");
  const [page, setPage] = useState("1");
  const [isGenre, setisGenre] = useState("");
  const [isOrder, setisOrder] = useState("");
  const [typeRequest, setTypeRequest] = useState("discover");
  const [key, setKey] = useState("");
  const [totalPages, setTotalPages] = useState("");
  const [typeContent, setTypeContent] = useState(type);
  const [valueButton, setValueButton] = useState("Todos");
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function feachtMovies() {
      const token = "d4e0b108e59de39dcb716c47e251eaca";
      setLoad(true);
      if (typeRequest == "discover") {
        const data = await api.get(`discover/${typeContent}`, {
          params: {
            language: "pt-BR",
            page: page,
            sort_by: order,
            query: key,
            with_genres: genre,
            api_key: token,
          },
        });
        const response = await data.data;
        setMovies(response.results);
        setTotalPages(response.total_pages);
        setLoad(false);
      } else {
        const data = await api.get(`search/${typeContent}`, {
          params: {
            api_key: token,
            language: "pt-BR",
            page: page,
            query: key,
          },
        });
        const response = await data.data;
        setMovies(response.results);
        setTotalPages(response.total_pages);
        setLoad(false);
      }
    }
    feachtMovies();
    window.scrollTo(0, 0);
  }, [genre, page, order, typeRequest, key, typeContent]);

  return (
    <>
      <div className=" h-full w-full bg-slate-800">
        <Header>
          <TextMenu
            setTypeContent={setTypeContent}
            typeContent={typeContent}
            type={"movie"}
            setTypeRequest={setTypeRequest}
            setGenre={setGenre}
            setOrder={setOrder}
            setValueButton={setValueButton}
          >
            Filmes
          </TextMenu>
          <TextMenu
            setTypeContent={setTypeContent}
            typeContent={typeContent}
            type={"tv"}
            setTypeRequest={setTypeRequest}
            setGenre={setGenre}
            setOrder={setOrder}
            setValueButton={setValueButton}
          >
            Séries
          </TextMenu>
        </Header>
        <Searches
          setTypeRequest={setTypeRequest}
          setKey={setKey}
          setPage={setPage}
          typeContent={typeContent}
        />
        <div className="flex flex-row justify-center gap-10">
          <Filter typeRequest={typeRequest}>
            <Order setisOrder={setisOrder} typeContent={typeContent}></Order>
            <Genres
              setisGenre={setisGenre}
              typeContent={typeContent}
              valueButton={valueButton}
              setValueButton={setValueButton}
            ></Genres>
            <ButtonApllyFilters
              setPage={setPage}
              setGenre={setGenre}
              setOrder={setOrder}
              isGenre={isGenre}
              isOrder={isOrder}
            ></ButtonApllyFilters>
          </Filter>
          {load ? (
            <div className="flex justify-center items-center w-screen">
              <strong className="text-white">Carregando...</strong>
            </div>
          ) : (
            <Movies movies={movies} type={typeContent}/>
          )}
        </div>
        <NumPages setPage={setPage} page={page} pag={totalPages} />
        
      </div>
    </>
  );
}

export default SeriesAndMovies;
