import { X } from "lucide-react";
import { useEffect, useState } from "react";

function ModalGenre({ isOpen, setOpen, type, setValueButton }) {
  const url = `https://api.themoviedb.org/3/genre/${type}/list?language=pt`;
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGUwYjEwOGU1OWRlMzlkY2I3MTZjNDdlMjUxZWFjYSIsIm5iZiI6MTcyODMxOTA2Ny4yMTcsInN1YiI6IjY3MDQwZTViYTVmMjlmNDNhNTczZjc2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.If42fCe1yeB_KTRQlecFh4G6OOkroxYjaqnqHx-9mq4";
  const [genres, setGenres] = useState([]);
  useEffect(() => {
    const requisition = async () => {
      const data = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await data.json();
      setGenres(response.genres);
    };
    requisition();
  }, []);
  if (isOpen) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
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
            {genres.map((genre) => (
              <button
                className="font-semibold"
                onClick={() => (setValueButton(genre.name), setOpen(false))}
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
