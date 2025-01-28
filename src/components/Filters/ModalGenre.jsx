import { X } from "lucide-react";
import { useEffect, useState } from "react";
import { api, token } from "@/services/api";
import { MovieContext } from "@/context/movieContext";
import { useContext } from "react";
export function ModalGenre({ isOpen, setOpen }) {
  const [genres, setGenres] = useState([]);
  const { typeContent, changeValueButton, changeIsGenre } =
    useContext(MovieContext);
  useEffect(() => {
    const requisition = async () => {
      const data = await api.get(`genre/${typeContent}/list?language=pt-BR`, {
        params: {
          api_key: token,
        },
      });
      const response = await data.data;
      setGenres(response.genres);
    };
    requisition();
  }, [typeContent]);

  if (isOpen) {
    return (
      <div className="fixed inset-0 bg-black flex justify-center lg:items-center bg-opacity-50 0z-50">
        <div className=" bg-slate-300 h-max rounded-md max-w-[70%] w-full lg:max-w-[50%] p-4 overflow-auto">
          <div className="flex justify-between items-center border-b-2 border-b-slate-800 pb-2">
            <h1 className="text-lg font-semibold">Gêneros</h1>
            <button className="text-slate-800" onClick={() => setOpen(false)}>
              <X />
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-5 p-4">
            {genres.map((genre, index) => (
              <button
                className="font-semibold text-sm lg:text-md bg-slate-200 hover:bg-slate-400 rounded p-2 transition-colors"
                key={index}
                onClick={() => (
                  changeValueButton(genre.name),
                  setOpen(false),
                  changeIsGenre(genre.id)
                )}
              >
                {genre.name}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  } else {
    return <></>;
  }
}
