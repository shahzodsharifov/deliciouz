import Image from "next/image"
import { FoodCardWrapper } from "../styles/FoodCardWrap"
import Food1 from "../public/img/food1.png"
import { Hamburger, HamburgerEn, HamburgerRu, Mix, MixEn, MixRu } from "../public/FoodInfo";
import Router, { useRouter } from "next/router";
import { ButtonsEn, ButtonsRu, ButtonsUz } from "../public/generalInfo";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../src/store/store";
import { setItems } from "../src/store/shopItems";


interface FoodCardProps {
    foodName:string;
    
}

export function GetInfo() {
    if(useRouter().locale == "uz") {
        return ButtonsUz
    } else if(useRouter().locale == "ru") {
        return ButtonsRu
    } else if (useRouter().locale == "en") {
        return ButtonsEn
    }
}

export function GetFood(f:string) {
    if(f == "Hamburger" && useRouter().locale == "uz") {
        return Hamburger;
    } else if(f == "Hamburger" && useRouter().locale == "en") {
        return HamburgerEn;
    } else if (f == "Hamburger" && useRouter().locale == "ru") {
        return HamburgerRu;
    }
    else if (f == "Mix" && useRouter().locale == "uz") {
        return Mix;
    } else if (f == "Mix" && useRouter().locale == "ru") {
        return MixRu;
    } else if (f == "Mix" && useRouter().locale == "en") {
        return MixEn;
    }
}

const FoodCard = ({foodName} :FoodCardProps) => {

    const items = useSelector((state: AppState) => state.shopItems.items)
    const dispatch = useDispatch();
    return (
        <FoodCardWrapper>
            <div className="fImgContainer">
                <div className="fImg">
                    <Image src={GetFood(foodName)!.foodThumb} alt="fastfood" fill/>
                </div>
            </div>
            <h4 className="fName">{GetFood(foodName)!.foodName}</h4>
            <p className="fInfo">{GetFood(foodName)!.foodInfo}</p>

            <p className="fPrice">{GetFood(foodName)!.foodPrice} {GetFood(foodName)!.currency}</p>

            <button className="buyBtn">{GetInfo()?.addToCart}</button>
        </FoodCardWrapper>
    )
}

export default FoodCard