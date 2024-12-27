import { Link } from "react-router-dom";
import Header from "../../components/Header";
import { TextMenu } from "../../components/TextMenu";
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
      <div className="bg-slate-400 w-72 h-36 p-3 rounded-lg flex justify-center items-center flex-col gap-1">
        <h1 className="text-slate-900 text-2xl font-bold">Erro 404</h1>
        <h2 className="text-slate-900 text-lg font-semibold">Página não encontrada</h2>
        <Link to="/" className="bg-slate-800 py-1 px-2 text-slate-200 rounded-md">Vá para a página Home</Link>
      </div>
      </div>
    </div>
  );
}