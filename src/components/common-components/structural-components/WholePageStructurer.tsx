import {Outlet} from "react-router-dom";

interface WholePageStructurerPropsInterface {

}
export default function WholePageStructurer ({}:WholePageStructurerPropsInterface){
    return(
        <div>
            <header></header>
            <Outlet/>
            <footer></footer>
        </div>
    )
}