import { MovieContext } from "@/context/movieContext";
import { useContext } from "react";

export function ButtonApllyFilters() {
  const { changeGenre, changeOrder, changePage, isGenre, isOrder } =
    useContext(MovieContext);
  return (
    <div className="bg-white rounded-lg flex items-center justify-center font-semibold w-32 lg:w-52">
      <button
        className="px-2 sm:px-8 lg:px-12"
        onClick={() => (
          changeGenre(isGenre), changeOrder(isOrder), changePage(1)
        )}
      >
        Aplicar filtros
      </button>
    </div>
  );
}
