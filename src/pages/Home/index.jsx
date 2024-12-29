import { TextMenu } from "../../components/TextMenu";
import Header from "../../components/Header";
import { MoviesHome } from "../../components/MoviesHome";
import { Top10 } from "../../components/top10.jsx";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { api } from "@/services/api";

export function Home() {
  const token = "d4e0b108e59de39dcb716c47e251eaca";
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function collectData() {
      const data = await api.get("movie/upcoming", {
        params: {
          api_key: token,
          language: "pt-BR",
          page: 1,
        },
      });
      const response = await data.data;
      setMovie(response.results);
    }
    collectData();
  }, []);
  return (
    <>
      <div className="h-full w-full bg-slate-800">
        <Header>
          <TextMenu type="movie" typeContent="">
            Filmes
          </TextMenu>
          <TextMenu type="tv" typeContent="">
            Séries
          </TextMenu>
        </Header>
        <div className="flex justify-center items-center p-4">
          <Carousel className="w-full max-w-5xl">
            <CarouselContent className="flex space-x-4">
              {movie.map((movie) => (
                <CarouselItem
                  key={movie.id}
                  className="relative flex-shrink-0 w-full sm:w-1/2 md:w-1/3"
                >
                  <img
                    src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                    alt={movie.title || "Imagem não disponível"}
                    className="rounded-3xl shadow-lg w-full h-96 object-fill"
                  />
                  <div className=" mx-16 absolute inset-0 flex flex-col justify-center items-start text-white text-center p-4">
                    <h1 className="font-bold text-xl md:text-2xl">
                      {movie.title}
                    </h1>
                    <div className="mt-2 flex flex-col md:flex-row md:space-x-2 items-center">
                      <span className="border-2 border-white px-2 py-1 text-xs">
                        Novo
                      </span>
                      <span className="text-sm mt-1 md:mt-0">
                        {movie.release_date}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className=" top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full" />
            <CarouselNext className=" top-1/2 -translate-y-1/2 bg-black/40 p-2 rounded-full" />
          </Carousel>
        </div>
        <MoviesHome>Recomendações para você</MoviesHome>
        <MoviesHome>Maiores Bilheterias</MoviesHome>
        <MoviesHome>Top 10</MoviesHome>
        <Top10></Top10>
      </div>
    </>
  );
}
