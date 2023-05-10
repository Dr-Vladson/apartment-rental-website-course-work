import "./style/DropDownMenuItem.css"
interface DropDownMenuItemNotFoundPropsInterface {

}
export default function DropDownMenuItemNotFound ({}:DropDownMenuItemNotFoundPropsInterface){
    return(
        <div className={"drop-down-menu-item"}>
            <p>Нічого не знайдено</p>
        </div>
    )
}