import React, { useState, useEffect } from "react";
import Movies from "./components/Movies";
import Menu from "./components/Menu";
import Searches from "./components/Searches";
import Filter from "./components/Filters/Filter";
import Footer from "./components/Footer";
import Request from "./Request";
import NumPages from "./components/numPages";
function App() {
  const [movies, setMovies] = useState([]);
  const [order, setOrder] = useState("");
  const [genre, setGenre] = useState("")
  const [page, setPage] = useState("1");

    useEffect(()=> {
      const feachtMovies = async () => {
        const movieData = await Request(genre, page, "movie", order);
        setMovies(movieData)
      };
      feachtMovies();
      window.scrollTo(0, 0);
      console.log(genre)
    }, [genre, page, order]);

  return (
    <>
      <div className="bg-slate-800">
        <Menu />
        <Searches type="filme" />
        <div className="flex flex-row justify-center gap-10">
          <Filter setGenre={setGenre} setOrder={setOrder} setPage={setPage}/>
          <Movies movies={movies}/>
        </div>
        <NumPages setPage={setPage} page={page}/>
          <Footer />
      </div>
    </>
  );
}

export default App;
