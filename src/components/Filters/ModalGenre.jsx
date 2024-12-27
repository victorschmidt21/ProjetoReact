import { X } from "lucide-react";
import { useEffect, useState } from "react";
import {api} from '../../services/api'
function ModalGenre({ isOpen, setOpen, typeContent, setValueButton, setisGenre }) {
  const url = `https://api.themoviedb.org/3/genre/${typeContent}/list?language=pt`;
  const token = "d4e0b108e59de39dcb716c47e251eaca";
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const requisition = async () => {
      const data = await api.get(`genre/${typeContent}/list?language=pt-BR`, {
        params: {
          api_key: token,
        }
      })
      console.log(data)
      const response = await data.data;
      setGenres(response.genres);
    };
    requisition();
  }, [typeContent]);


  if (isOpen) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center 0z-50">
        <div className="h-96  w-100 bg-slate-300 rounded-md">
          <div className="flex justify-between h-12 border-b-2 border-b-slate-800">
            <h1 className="m-3 font-semibold">Gêneros</h1>
            <button
              className="m-3 font-semibold"
              onClick={() => setOpen(false)}
            >
              <X />
            </button>
          </div>
          <div className="grid grid-cols-5 gap-10 m-5">
            {genres.map((genre, index) => (
              <button
                className="font-semibold" key={index}
                onClick={() => (setValueButton(genre.name), setOpen(false), setisGenre(genre.id) )}
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

export default ModalGenre;
