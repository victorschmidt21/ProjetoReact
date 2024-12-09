import { VideoIcon } from "lucide-react";
import ModalGenre from "./ModalGenre";
import { useState } from "react";   
import { ArrowDown } from "lucide-react";

function Genres() {

    const [valueButton, setValueButton] = useState("Todos");
    const [open, setOpen] = useState(false);
  return (
    <div className="bg-slate-300 w-52 rounded-md h-32">
      <div className=" h-12 flex items-center justify-between border-b-2 border-b-slate-800">
        <h1 className="mx-5 font-semibold">Gêneros</h1>
        <VideoIcon className="mx-2" />
      </div>
      <div className="flex items-center flex-col">
        <h1>Buscar por tipos de gêneros:</h1>
          <button onClick={()=> setOpen(true)}id="SelectOrder" className="rounded-md bg-slate-400 flex w-44 justify-center gap-4">{valueButton}</button>  
          <ModalGenre isOpen={open} setOpen={setOpen} type="tv" setValueButton={setValueButton}/>
      </div>
    </div>
  );
}

export default Genres;
