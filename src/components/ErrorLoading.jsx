import { BookX } from "lucide-react";

export function ErrorLoading({type}) {
    return(
        <div className="text-slate-300 h-screen w-screen flex items-center flex-col">
          <BookX size={150} className="my-10"/>
        {type == "movie" ? (
            <h1 className="font-semibold text-2xl text-end">Nenhum filme encontrado!</h1>
        ) : (
          <h1>Nenhuma série encontrada!</h1>
        )}
      </div>
    );
}