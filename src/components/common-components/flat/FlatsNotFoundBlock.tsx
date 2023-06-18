import "./style/FlatsNotFoundBlock.css"

interface FlatsNotFoundBlockPropsInterface {

}
export default function FlatsNotFoundBlock ({}:FlatsNotFoundBlockPropsInterface){
    return(
        <div className={"flats-not-found-block"}>
            <p className={"position-page-centre"}>Квартир не знайдено</p>
        </div>
    )
}