import { MoviesHome } from "../../components/Home/MoviesHome";
import { CarouselHome } from "@/components/Home/CarouselHome";
import { MovieProvider } from "@/context/movieContext";
export function Home() {
  return (
    <MovieProvider>
      <div className="h-full w-full bg-slate-800">
        <CarouselHome />
        <MoviesHome type="recommendations?" genre="839033">
          Recomendações para você
        </MoviesHome>
        <MoviesHome type="upcoming?">Por vir</MoviesHome>
        <MoviesHome type="top_rated?">Melhores filmes</MoviesHome>
      </div>
    </MovieProvider>
  );
}
