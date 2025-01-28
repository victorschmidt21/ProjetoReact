import React, { useState, useEffect } from "react";
import { Movies } from "@/components/SeriesAndMovies/Movies";
import { Searches } from "@/components/SeriesAndMovies/Searches";
import { Filter } from "@/components/Filters/Filter.jsx";
import { NumPages } from "@/components/SeriesAndMovies/NumPages";
import { Order } from "@/components/Filters/Order";
import { Genres } from "@/components/Filters/Genres";
import { ButtonApllyFilters } from "@/components/Filters/ButtonApllyFilters";
import { api, token } from "@/services/api";
import { MovieContext } from "@/context/movieContext";
import { useContext } from "react";

export function SeriesAndMovies() {
  const {
    page,
    typeContent,
    order,
    genre,
    typeRequest,
    key,
    changeMovies,
    changeTotalPages,
  } = useContext(MovieContext);

  const [load, setLoad] = useState(false);
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
      changeMovies(response.results);
      changeTotalPages(response.total_pages);
      setLoad(false);
    }
    feachtMovies();
    window.scrollTo(0, 0);
  }, [genre, page, order, typeRequest, key, typeContent]);

  return (
    <div className=" h-full w-full bg-slate-800">
      <Searches />
      <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10">
        <Filter>
          <div className="flex flex-row gap-5 lg:space-y-2 lg:flex-col">
            <Order />
            <Genres />
          </div>
          <ButtonApllyFilters />
        </Filter>
        {load ? (
          <div className="flex justify-center items-center w-full h-72">
            <strong className="text-white">Carregando...</strong>
          </div>
        ) : (
          <Movies />
        )}
      </div>
      <NumPages />
    </div>
  );
}
