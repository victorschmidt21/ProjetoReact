    function NumPages({setPage, page, pag}) {
    const num = Array.from({ length: parseInt(pag, 10) }, (_, i) => i + 1);
    return(
        <div className="flex items-center justify-center gap-5 text-slate-300 h-16 m-5">
            {num.slice(0,10).map((index) => (
                
              <button
                className={`font-bold  h-6 w-6 rounded-md flex items-center justify-center ${page == index ? "text-slate-800 bg-slate-300" : "text-slate-300" } `} key={index} onClick={() => setPage(index) }
              >
                {index}
              </button>
            ))}
        </div>
    )
}

export default NumPages