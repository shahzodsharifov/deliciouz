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
    var theLocale = useRouter().locale!.toString()
    if(theLocale == "uz") {
        return ButtonsUz
    } else if(theLocale == "ru") {
        return ButtonsRu
    } else if (theLocale == "en") {
        return ButtonsEn
    }
}

export function GetFood(f:string) {
    var theLocale = useRouter().locale!.toString()
    if(f == "Hamburger" && theLocale == "uz") {
        return Hamburger;
    } else if(f == "Hamburger" &&theLocale == "en") {
        return HamburgerEn;
    } else if (f == "Hamburger" && theLocale == "ru") {
        return HamburgerRu;
    }
    else if (f == "Mix" && theLocale == "uz") {
        return Mix;
    } else if (f == "Mix" &&theLocale == "ru") {
        return MixRu;
    } else if (f == "Mix" && theLocale == "en") {
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