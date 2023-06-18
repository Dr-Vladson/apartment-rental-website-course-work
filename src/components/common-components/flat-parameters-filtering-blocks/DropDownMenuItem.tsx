import "./style/DropDownMenuItem.css"

interface DropDownMenuItemPropsInterface {
    value : string
    dropDownMenuItemValueSetter : (value: string) => void
}

export default function DropDownMenuItem ({value, dropDownMenuItemValueSetter} : DropDownMenuItemPropsInterface){
    const itemOnClickFunc = (e: React.MouseEvent) => {
        e.preventDefault()
        dropDownMenuItemValueSetter(value)
    }
    return(
        <div className={"drop-down-menu-item"} onClick={itemOnClickFunc} >
            <p>{value}</p>
        </div>
    )
}