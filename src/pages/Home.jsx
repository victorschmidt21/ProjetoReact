import { TextMenu } from "../components/TextMenu";
import Menu from "../components/Menu";
import Footer from "../components/Footer";
import { Carousel } from "../components/Carousel";
import { MoviesHome } from "../MoviesHome";

export function Home() {
return (
<>
<div className="h-full w-full bg-slate-800">
    <Menu>
        <TextMenu type="movie" typeContent="">
            Filmes
        </TextMenu>
        <TextMenu type="tv" typeContent="">
            Séries
        </TextMenu>
    </Menu>
    <Carousel/>
    <MoviesHome>Destaques</MoviesHome>
    <MoviesHome>Top 10</MoviesHome>
    <Footer/>


</div>
</>
)
}

