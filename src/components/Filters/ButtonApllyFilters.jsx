
  function ButtonApllyFilters({setGenre, setOrder, setPage, isOrder, isGenre}) {
  return (
    <div className="bg-slate-300 rounded-lg flex items-center justify-center font-semibold">
      <button onClick={()=> (setGenre(isGenre), setOrder(isOrder), setPage(1))}>Aplicar filtros</button>
    </div>
  );
}

export default ButtonApllyFilters;
