export function ButtonApllyFilters({
  setGenre,
  setOrder,
  setPage,
  isOrder,
  isGenre,
}) {
  return (
    <div className="bg-white rounded-lg flex items-center justify-center font-semibold w-32 lg:w-52">
      <button
        className="px-2 sm:px-8 lg:px-12"
        onClick={() => (setGenre(isGenre), setOrder(isOrder), setPage(1))}
      >
        Aplicar filtros
      </button>
    </div>
  );
}
