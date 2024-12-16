import { BookX } from "lucide-react";

function ErrorLoading({type}) {
    return(
        <div className="text-slate-300 min-h-screen w-9/12">
        {type == "movie" ? (
            <div className="flex justify-center items-end h-screen w-screen gap-5 flex-col">
            <BookX size={20}/>
            <h1 className="" >Nenhum filme encontrado!</h1>
          </div>
        ) : (
        <div>
            <BookX/>
          <h1>Nenhuma série encontrada!</h1>
          </div>
        )}
      </div>
    );
}

export default ErrorLoading;