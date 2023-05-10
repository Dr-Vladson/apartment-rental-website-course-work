import "./style/BigBtnBlock.css"
interface BigBtnBlockPropsInterface {
    uniqueStyleCSSClass : string
    btnText : string
    onClickFucn : (e: React.MouseEvent) => void
}
export default function BigBtnBlock ({uniqueStyleCSSClass, btnText, onClickFucn}:BigBtnBlockPropsInterface){
    return(
        <div onClick={onClickFucn} className={`big-btn-block ${uniqueStyleCSSClass}`}>
            <p>{btnText}</p>
        </div>
    )
}