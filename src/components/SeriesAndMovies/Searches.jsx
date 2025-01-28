import { Search } from "lucide-react";
import { useRef } from "react";
import { MovieContext } from "@/context/movieContext";
import { useContext } from "react";
export function Searches() {
  const inputValue = useRef();
  const { changeTypeRequest, typeContent, changeKey, changePage } =
    useContext(MovieContext);

  const collectValue = () => {
    changeKey(inputValue.current.value);
    changePage("1");
    if (inputValue.current.value) {
      changeTypeRequest("search");
    } else {
      changeTypeRequest("discover");
    }
  };
  return (
    <div className="flex justify-center pt-4 items-end">
      <div className="flex flex-col">
        <input
          id="inputValue"
          ref={inputValue}
          type="text"
          placeholder={
            typeContent == "tv"
              ? "Pesquise por uma série"
              : "Pesquise por um filme"
          }
          className=" ps-2 rounded-l-2xl w-80 text-center rounded-none"
        ></input>
      </div>
      <div className="h-6 w-6 rounded-r-2xl bg-white flex text-center">
        <button onClick={collectValue}>
          <Search size={18} className="text-slate-800" />
        </button>
      </div>
    </div>
  );
}
