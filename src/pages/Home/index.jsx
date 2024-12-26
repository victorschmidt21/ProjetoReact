import { TextMenu } from "../../components/TextMenu";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { Carousel } from "../../components/Carousel";
import { MoviesHome } from "../../components/MoviesHome";
import { Top10 } from "../../components/top10";

export function Home() {
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
    <Carousel/>
    <MoviesHome>Recomendações para você</MoviesHome>
    <MoviesHome>Maiores Bilheterias</MoviesHome>
    <MoviesHome>Top 10</MoviesHome>
    <Top10></Top10>
    
    <Footer/>


</div>
</>
)
}

