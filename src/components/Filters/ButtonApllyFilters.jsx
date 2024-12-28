
  function ButtonApllyFilters({setGenre, setOrder, setPage, isOrder, isGenre}) {
  return (
    <div className="bg-white rounded-lg flex items-center justify-center font-semibold">
      <button className="px-14" onClick={()=> (setGenre(isGenre), setOrder(isOrder), setPage(1))}>Aplicar filtros</button>
    </div>
  );
}

export default ButtonApllyFilters;
