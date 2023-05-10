import "./style/FlatDistrictInfoBlock.css"

interface FlatDistrictTextBlockPropsInterface {
    districtString: string,
    children: React.ReactNode
}
export default function FlatDistrictInfoBlock ({districtString, children}:FlatDistrictTextBlockPropsInterface){
    return(
        <div className={"flat-district-info-block flat-district-info-block_padding dflex"}>
            {children}
            <p>{`${districtString} район`}</p>
        </div>
    )
}