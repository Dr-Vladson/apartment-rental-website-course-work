import {Link} from "react-router-dom";
import "./style/HeaderBlock.css"

interface HeaderBlockPropsInterface {
    
}
export default function HeaderBlock ({}:HeaderBlockPropsInterface){
    return(
        <div className={"header-wrap"}>
            <div className={"dflex header-block"}>
                <Link className={"header-block_link"} to={"/"}>Пошук квартир по параметрам</Link>
                <Link className={"header-block_link"} to={"/flats-managing"}>Управління моїми квартирами</Link>
            </div>
        </div>
    )
}