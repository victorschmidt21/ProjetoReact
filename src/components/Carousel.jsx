import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Carousel() {
  const num = [0, 1, 2, 3, 4];
  const onClickButton = (type) => {
    if (index === 4 && type == "right") {
      setIndex(0);
    } else if (index === 0 && type == "left") {
      setIndex(4);
    } else {
      if (type == "left") {
        setIndex(index - 1);
      } else {
        setIndex(index + 1);
      }
    }
  };
  const [index, setIndex] = useState(0);
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGUwYjEwOGU1OWRlMzlkY2I3MTZjNDdlMjUxZWFjYSIsIm5iZiI6MTcyODMxOTA2Ny4yMTcsInN1YiI6IjY3MDQwZTViYTVmMjlmNDNhNTczZjc2MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.If42fCe1yeB_KTRQlecFh4G6OOkroxYjaqnqHx-9mq4";
  const url = "https://api.themoviedb.org/3/";
  const [expo, setExpo] = useState(["texto"]);

  useEffect(() => {
    const requisition = async () => {
      const data = await fetch(url, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const response = await data.json();
      setExpo(response.results);
    };
    requisition();
  }, []);
  return (
    <div className="flex items-center justify-center">
      <div className="flex items-center justify-center relative w-screen space-x-5">
        <button
          onClick={() => onClickButton("left")}
          className="left-0 top-1/2  text-white bg-black/20 p-2 rounded-full transition-all z-50 hover:text-white hover:p-2.5 hover:bg-black/50"
        >
          <ChevronLeft />
        </button>
        {expo.length > 0 && (
          <img
            key={expo[index].id}
            src={`https://image.tmdb.org/t/p/w500${expo[index].backdrop_path}`}
            alt={expo[index].title || "Imagem não disponível"}
            className="rounded-lg w-4/6 shadow-lg opacity-70"
          />
        )}
        <div className="absolute text-white flex flex-col top-1/2 left-72 space-y-2 bg-black/5">
          <h1 className="font-bold text-4xl">{expo[index].title}</h1>
          <div className="flex space-x-2">
            <h1 className="border-2 px-1 text-sm">Novo</h1>
            <h1>{expo[index].release_date}</h1>
          </div>
        </div>
        <div className="absolute bottom-3 flex space-x-3">
          {num.map((num) => (
            <div
              className={
                num == index
                  ? "bg-white rounded-full p-1.5"
                  : "bg-slate-800 rounded-full p-1.5"
              }
            ></div>
          ))}
        </div>
        <button
          onClick={() => onClickButton("right")}
          className="top-1/2  text-white bg-black/20 p-2 rounded-full transition-all z-50 hover:text-white hover:p-2.5 hover:bg-black/35"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  );
}
