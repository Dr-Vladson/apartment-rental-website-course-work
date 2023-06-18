import "./style/ErrorMessageBlock.css"

interface ErrorMessageBlockPropsInterface {
    errorMessage : string
}
export default function ErrorMessageBlock ({errorMessage}:ErrorMessageBlockPropsInterface){
    return(
        <div className={"error-message-block"}>
            <p>{errorMessage}</p>
        </div>
    )
}