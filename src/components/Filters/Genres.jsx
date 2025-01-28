import { VideoIcon } from "lucide-react";
import { ModalGenre } from "./ModalGenre";
import { useState } from "react";
import { MovieContext } from "@/context/movieContext";
import { useContext } from "react";
export function Genres() {
  const { valueButton } = useContext(MovieContext);
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-slate-300 rounded-md w-40 h-24 lg:w-52 lg:h-36">
      <ModalGenre isOpen={open} setOpen={setOpen} />
      <div className="flex items-center justify-between border-b-2 border-b-slate-800 lg:h-12">
        <h1 className="mx-5 font-semibold text-sm lg:text-lg">Gêneros</h1>
        <VideoIcon className="mx-2 h-auto w-auto" />
      </div>
      <div className="flex items-center flex-col text-sm lg:text-lg">
        <h1>Buscar por gêneros:</h1>
        <button
          onClick={() => setOpen(true)}
          id="SelectOrder"
          className="rounded-md bg-white flex justify-center w-11/12 text-sm lg:text-lg lg:w-44 mt-2"
        >
          {valueButton}
        </button>
      </div>
    </div>
  );
}
