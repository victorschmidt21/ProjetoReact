import React, { useState, useEffect } from "react";
import { Movies } from "@/components/SeriesAndMovies/Movies";
import { Header } from "@/components/Universal/Header";
import { Searches } from "@/components/SeriesAndMovies/Searches";
import { Filter } from "@/components/Filters/Filter.jsx";
import { NumPages } from "@/components/SeriesAndMovies/NumPages";
import { Order } from "@/components/Filters/Order";
import { Genres } from "@/components/Filters/Genres";
import { ButtonApllyFilters } from "@/components/Filters/ButtonApllyFilters";
import { TextMenu } from "@/components/Universal/TextMenu";
import { useParams } from "react-router-dom";
import { api, token } from "@/services/api";

export function SeriesAndMovies() {
  const { type } = useParams();
  const [typeContent, setTypeContent] = useState(type);
  const [movies, setMovies] = useState([]);
  const [order, setOrder] = useState("");
  const [genre, setGenre] = useState("");
  const [page, setPage] = useState("1");
  const [isGenre, setisGenre] = useState("");
  const [isOrder, setisOrder] = useState("");
  const [typeRequest, setTypeRequest] = useState("discover");
  const [key, setKey] = useState("");
  const [totalPages, setTotalPages] = useState("");
  const [valueButton, setValueButton] = useState("Todos");
  const [load, setLoad] = useState(true);

  useEffect(() => {
    async function feachtMovies() {
      setLoad(true);
      const data = await api.get(`${typeRequest}/${typeContent}`, {
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
            setTypeRequest={setTypeRequest}
            setGenre={setGenre}
            setOrder={setOrder}
            setValueButton={setValueButton}
          />
        </Header>
        <Searches
          setTypeRequest={setTypeRequest}
          setKey={setKey}
          setPage={setPage}
          typeContent={typeContent}
        />
        <div className="flex flex-col lg:flex-row justify-center gap-10">
          <Filter typeRequest={typeRequest}>
            <div className="flex flex-row gap-5 lg:space-y-2 lg:flex-col">
              <Order setisOrder={setisOrder} typeContent={typeContent}></Order>
              <Genres
                setisGenre={setisGenre}
                typeContent={typeContent}
                valueButton={valueButton}
                setValueButton={setValueButton}
              ></Genres>
            </div>
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
            <Movies movies={movies} type={typeContent} />
          )}
        </div>
        <NumPages setPage={setPage} page={page} pag={totalPages} />
      </div>
    </>
  );
}
