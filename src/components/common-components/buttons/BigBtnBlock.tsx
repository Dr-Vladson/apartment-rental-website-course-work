import "./style/BigBtnBlock.css"

interface BigBtnBlockPropsInterface {
    uniqueStyleCSSClass ?: string
    btnText : string
    onClickFunc : (e: React.MouseEvent) => void
}
export default function BigBtnBlock ({uniqueStyleCSSClass, btnText, onClickFunc}:BigBtnBlockPropsInterface){
    return(
        <div onClick={onClickFunc} className={`big-btn-block ${uniqueStyleCSSClass || ''}`}>
            <p>{btnText}</p>
        </div>
    )
}