import React, { useState, useEffect } from "react";
import Movies from "../../components/Movies";
import Header from "../../components/Header";
import Searches from "../../components/Searches";
import Filter from "../../components/Filters/Filter";
import Footer from "../../components/Footer";
import Request from "../../services/Request";
import NumPages from "../../components/numPages";
import Order from "../../components/Filters/Order";
import Genres from "../../components/Filters/Genres";
import ButtonApllyFilters from "../../components/Filters/ButtonApllyFilters";
import { TextMenu } from "../../components/TextMenu";
import { useParams } from "react-router-dom";
function SeriesAndMovies() {
  const {content} = useParams();
  const type = content;
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

  useEffect(() => {
    const feachtMovies = async () => {
      const movieData = await Request(
        genre,
        page,
        typeContent,
        order,
        key,
        typeRequest
      );
      setMovies(movieData.results);
      setTotalPages(movieData.total_pages);
    };
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
          <Movies movies={movies} />
        </div>
        <NumPages setPage={setPage} page={page} pag={totalPages} />
        <Footer />
      </div>
    </>
  );
}

export default SeriesAndMovies;
