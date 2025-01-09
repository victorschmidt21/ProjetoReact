import { Link } from "react-router-dom";
import { Header } from "../../components/Universal/Header";
import { TextMenu } from "../../components/Universal/TextMenu";
export function Error() {
  return (
    <div className="bg-slate-800 w-full h-screen">
      <Header>
        <TextMenu type="movie" typeContent="">
          Filmes
        </TextMenu>
        <TextMenu type="tv" typeContent="">
          Séries
        </TextMenu>
      </Header>
      <div className="flex justify-center mt-10">
        <div className="bg-white w-72 h-36 p-3 rounded-lg flex justify-center items-center flex-col gap-1">
          <h1 className="text-slate-800 text-2xl font-bold">Erro 404</h1>
          <h2 className="text-slate-800 text-lg font-semibold">
            Página não encontrada
          </h2>
          <Link to="/" className="bg-slate-800 py-1 px-2 text-white rounded-md">
            Vá para a página Home
          </Link>
        </div>
      </div>
    </div>
  );
}
