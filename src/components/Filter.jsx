import Order from "./Order";
import Genres from "./Genres";

function Filter() {
    return (
    <div className="flex flex-col  mt-16 gap-5">
    <Order />
    <Genres type="movie"/>
    
    </div>
    )
}

export default Filter;