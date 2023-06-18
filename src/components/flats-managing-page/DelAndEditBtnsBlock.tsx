import "./style/DelAndEditBtnsBlock.css"
import BigBtnBlock from "../common-components/buttons/BigBtnBlock";
import {IFlat} from "../../models";
import {setUserCurrentFlat} from "../../features/slices/flatsSlice";
import {setFlatDeleteAsync} from "../../features/async-action-creators/AsyncActionCreators";
import {useAppDispatch} from "../../app/hooks";

interface DelAndEditBtnsBlockPropsInterface {
    flat : IFlat
}

export default function DelAndEditBtnsBlock ({flat}:DelAndEditBtnsBlockPropsInterface){
    const dispatch = useAppDispatch()
    const editBtnOnclick = (e : React.MouseEvent) => {
        e.preventDefault()
        dispatch(setUserCurrentFlat(flat))
    }
    const deleteBtnOnclick = (e : React.MouseEvent) => {
        e.preventDefault()
        dispatch(setFlatDeleteAsync(flat.id))
    }
    return(
        <div className={"del-and-edit-btns-block dflex"}>
            <div className={"del-and-edit-btns-block__btn"}><BigBtnBlock btnText={"Редагувати"} uniqueStyleCSSClass={"big-btn-block_style-silver "} onClickFunc={editBtnOnclick}/></div>
            <div className={"del-and-edit-btns-block__btn"}><BigBtnBlock btnText={"Видалити"} uniqueStyleCSSClass={"big-btn-block_style-silver"} onClickFunc={deleteBtnOnclick}/></div>
        </div>
    )
}