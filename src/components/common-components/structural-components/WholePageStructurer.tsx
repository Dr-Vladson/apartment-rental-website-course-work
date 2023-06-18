import {Outlet} from "react-router-dom";
import HeaderBlock from "./HeaderBlock";
import FooterBlock from "./FooterBlock";
import "./style/WholePageStructurer.css"

interface WholePageStructurerPropsInterface {

}
export default function WholePageStructurer ({}:WholePageStructurerPropsInterface){
    return(
        <div className={"whole-page-structurer dflex"}>
            <HeaderBlock/>
            <div className={"whole-page-structurer__outlet-wrap"}><Outlet/></div>
            <FooterBlock/>
        </div>
    )
}