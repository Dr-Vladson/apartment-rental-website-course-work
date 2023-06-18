import {useAppSelector} from "../../app/hooks";
import FlatAddEditForm from "./FlatAddEditForm";

interface FlatAddOrEditFormTogglingWrapPropsInterface {

}

export default function FlatAddOrEditFormTogglingWrap({}: FlatAddOrEditFormTogglingWrapPropsInterface) {
    const userCurrentFlat = useAppSelector(({flats: {userCurrentFlat}}) => userCurrentFlat)
    const isFlatAddFormActive = useAppSelector(({flats: {isFlatAddFormActive}}) => isFlatAddFormActive)
    return (
        <div>
            {isFlatAddFormActive && <FlatAddEditForm/>}
            {userCurrentFlat &&
                <FlatAddEditForm flatToEditId={userCurrentFlat.id} mainImageDefaultLink={userCurrentFlat.mainImage}
                                 additianalImageDefaultLink={userCurrentFlat.additionalImage}
                                 addressDefault={userCurrentFlat.address}
                                 descriptionDefault={userCurrentFlat.description}
                                 districtDefault={userCurrentFlat.district}
                                 phoneNumberDefault={userCurrentFlat.ownerPhoneNumber}
                                 priceDefault={userCurrentFlat.price.toString()}
                                 rentalTypeDefault={userCurrentFlat.rentalTermType}
                                 roomAmountDefault={userCurrentFlat.roomAmount.toString()}/>}
        </div>
    )
}