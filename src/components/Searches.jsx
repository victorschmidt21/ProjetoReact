import { Search } from "lucide-react"
function Searches(props) {
    return(
        <div className="flex justify-center mt-10 items-end">
            <div className="flex flex-col">
            <input type="text" placeholder="Pesquise por uma série ou filme" className="rounded-l-2xl w-80 text-center rounded-none"></input>
            </div>
            <div className="h-6 w-6 rounded-r-2xl bg-slate-200 flex text-center">
            <button><Search className="text-slate-800  w-5"/></button>
            </div>
        </div>
    );
}

export default Searches;

