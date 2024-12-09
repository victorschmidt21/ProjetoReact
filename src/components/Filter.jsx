import Order from "./Order";
import Genres from "./Genres";
import ButtonApllyFilters from "./buttonApllyFilters";

function Filter() {
    return (
    <div className="flex flex-col  mt-16 gap-5">
    <Order />
    <Genres/>
    <ButtonApllyFilters />
    </div>
    )
}

export default Filter;