  import React from "react";
  import ErrorLoading from "./ErrorLoading";

  function Movies({movies}) {
    if(movies.length != 0 ) {
    return (
      <div className="flex justify-center items-center min-h-screen mt-16">
        <div className="grid grid-cols-5 gap-10">
          {movies.map((filme) => (
            <button
              key={filme.id}
              className="bg-slate-300 rounded-md flex flex-col h-100 w-48 gap- items-center justify-center"
            >
              <img
                src={`https://image.tmdb.org/t/p/w500${filme.poster_path}`}
                alt={filme.title}
                className="h-55 w-40 m-2 rounded-md"
              ></img>
              <h1 className="mb-2 font-semibold text-slate-900">{filme.title}</h1>
            </button>
          ))}
        </div>
      </div>
    );
  }else{
    return(
    <ErrorLoading type="movie"/>
    )
  }
}

  export default Movies;
