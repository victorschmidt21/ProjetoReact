import { TextMenu } from "../components/TextMenu";
import Menu from "../components/Menu";

export function Home() {
return (
<>
<div className="h-screen w-screen bg-slate-800">
    <Menu>
        <TextMenu type="movie" typeContent="">
            Filmes
        </TextMenu>
        <TextMenu type="tv" typeContent="">
            Séries
        </TextMenu>
    </Menu>

</div>
</>
)
}

