import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState, useEffect } from "react";
import { api, token } from "@/services/api";
import { useNavigate } from "react-router-dom";
export function CarouselHome() {
  const [movie, setMovie] = useState(["text"]);
  const navigate = useNavigate();
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

  function handleClick(id) {
    navigate(`/movie/${id}`);
  }

  return (
    <div className="flex justify-center items-center p-4">
      <Carousel className="w-full max-w-5xl">
        <CarouselContent className="flex space-x-4" >
          {movie.map((movie) => (
            <CarouselItem
              key={movie.id}
              className="relative flex-shrink-0 w-full sm:w-1/2 md:w-1/3 cursor-pointer"
              onClick={() => handleClick(movie.id)}
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                alt={movie.title || "Imagem não disponível"}
                className="rounded-3xl shadow-lg w-full h-100 object-fill"
              />
              <div className=" mx-16 absolute inset-0 flex flex-col justify-center items-start text-white text-center p-4">
                <h1 className="font-bold text-xl md:text-2xl">{movie.title}</h1>
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
  );
}
