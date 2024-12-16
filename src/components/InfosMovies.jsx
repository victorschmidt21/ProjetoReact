import { X } from "lucide-react"
export function InfosMovies({setOpen, isOpen, movie}) {
if(isOpen) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center 0z-50">
      <div className=" bg-slate-300 rounded-md">
        <div className="flex justify-between h-12 border-b-2 border-b-slate-800 items-center">
          <h1 className="m-3 font-bold text-xl">{movie.title}</h1>
          <button className="m-3 font-semibold" onClick={() => setOpen(false)}>
            <X />
          </button>
        </div>
        <div className="flex flex-row">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className=" m-2 h-80 w-60 rounded-md hover:border-slate-300"
          ></img>
          <div className="w-96">
            <h1 className="font-semibold text-center">Sinopse</h1>
            <span className="my-5">{movie.overview}</span>
            <h1 className="my-5">Classificação: {movie.vote_average}</h1>
            <h1>{movie.release_date}</h1>
          </div>
        </div>
        </div>
    </div>
  );
}else{
    <></>
}
}
