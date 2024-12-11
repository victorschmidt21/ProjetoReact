    function NumPages({setPage, page}) {
    const num = [1,2,3,4,5,6,7,8,9,10];
    return(
        <div className="flex items-center justify-center gap-5 text-slate-300 h-16 m-5">
            {num.map((index) => (
                
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