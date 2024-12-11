import Order from "./Order";
import Genres from "./Genres";
import ButtonApllyFilters from "./ButtonApllyFilters";
import { useState } from "react";

function Filter({setGenre, setOrder, setPage}) {
  const [isGenre, setisGenre] = useState("");
  const [isOrder, setisOrder] = useState("")
  return (
    <div className="flex flex-col mt-16 gap-5">
      <Order setisOrder={setisOrder } type="movie"/>
      <Genres setisGenre={setisGenre}/>
      <ButtonApllyFilters setPage={setPage} setGenre={setGenre} setOrder={setOrder} isGenre={isGenre} isOrder={isOrder}/>
    </div>
  );
}

export default Filter;
