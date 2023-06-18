import "./style/ManagingFlatsPageBlock.css"
import BigBtnBlock from "../common-components/buttons/BigBtnBlock";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {toggleIsFlatAddFormActive} from "../../features/slices/flatsSlice";
import FlatsStructurer from "../common-components/structural-components/FlatsStructurer";
import FlatsNotFoundBlock from "../common-components/flat/FlatsNotFoundBlock";
import UserFlats from "./UserFlats";
import FlatAddOrEditFormTogglingWrap from "./FlatAddOrEditFormTogglingWrap";

interface ManagingFlatsPageBlockPropsInterface {
    
}
export default function ManagingFlatsPageBlock ({}:ManagingFlatsPageBlockPropsInterface){
    const userFlatsArray = useAppSelector(({flats: {userFlatsArray}}) => userFlatsArray)
    const dispatch = useAppDispatch()
    const onClickAddFlat = (e : React.MouseEvent) => {
        e.preventDefault()
        dispatch(toggleIsFlatAddFormActive())
    }
    return(
        <div className={"managing-flats-page-block"}>
            <div className={"managing-flats-page-block__managing-options-bar-wrap"}>
                <div className={"managing-flats-page-block__managing-options-bar dflex"}>
                    <div className={"managing-flats-page-block__add-btn-wrap"}>
                        <BigBtnBlock uniqueStyleCSSClass={"big-btn-block_style-silver"} btnText={"Додати квартиру"}
                                     onClickFunc={onClickAddFlat}/>
                    </div>
                </div>
            </div>
            <FlatAddOrEditFormTogglingWrap/>
            <div className = {"managing-flats-page-block__user-flats-wrap"}>
                <FlatsStructurer>
                    {
                        userFlatsArray.length ?
                            <UserFlats flatsArray={userFlatsArray}/>
                            : <div className={"managing-flats-page-block__flats-not-found-wrap"}><FlatsNotFoundBlock/></div>
                    }
                </FlatsStructurer>
            </div>
        </div>   
    )
}