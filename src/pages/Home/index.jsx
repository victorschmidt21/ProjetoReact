import { TextMenu } from "../../components/Universal/TextMenu";
import { Header } from "../../components/Universal/Header";
import { MoviesHome } from "../../components/Home/MoviesHome";
import { CarouselHome } from "@/components/CarouselHome";

export function Home() {
  return (
    <div className="h-full w-full bg-slate-800">
      <Header>
        <TextMenu type="movie" typeContent="">
          Filmes
        </TextMenu>
        <TextMenu type="tv" typeContent="">
          Séries
        </TextMenu>
      </Header>

      <CarouselHome />
      <MoviesHome type="recommendations?" genre="839033">
        Recomendações para você
      </MoviesHome>
      <MoviesHome type="upcoming?">Por vir</MoviesHome>
      <MoviesHome type="top_rated?">Melhores filmes</MoviesHome>
    </div>
  );
}
