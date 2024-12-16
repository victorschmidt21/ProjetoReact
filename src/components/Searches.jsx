import { Search } from "lucide-react"
import { useRef } from "react";
function Searches({setTypeRequest, setKey, setPage, typeContent}) {
    const imputValue = useRef();

    const collectValue = ()  => {
        setKey(imputValue.current.value);
        setPage("1");
        if(imputValue.current.value) {
        setTypeRequest("search");
        }else{
            setTypeRequest("discover");
        }
    }
    return(
        <div className="flex justify-center mt-10 items-end">
            <div className="flex flex-col">
            <input ref={imputValue} type="text" placeholder={ typeContent == "tv" ?"Pesquise por uma série" : "Pesquise por um filme"} className="rounded-l-2xl w-80 text-center rounded-none"></input>
            </div>
            <div className="h-6 w-6 rounded-r-2xl bg-slate-200 flex text-center">
            <button onClick={collectValue}><Search className="text-slate-800  w-5"/></button>
            </div>
        </div>
    );
}

export default Searches;

