import Image from "next/image";
import { CartItemWrap } from "../styles/CartItemWrap"
import Food1 from "../public/img/food1.png"
import { GetFood } from "./FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../src/store/store";
import { updateCount,decreaseCount,deleteItem } from "../src/store/shopItems";

const ShoppingItem = ({nameFood, foodCount, itemIndex}:any) => {

    const items = useSelector((state: AppState) => state?.shopItems?.items)
    const dispatch = useDispatch();

    return (
        <CartItemWrap>
           <div className="cartStuff">
           <div className="cartThumbContainer">
                <div className="cartThumb">
                    <Image src={GetFood(nameFood)!.foodThumb} fill alt="thumb" />
                </div>
            </div>

            <div className="cartInfo">
                <h4 className="itemName">{GetFood(nameFood)?.foodName}</h4>
                <p>Coca Cola 1.5L</p>
                <p>Pepsi 1.5L</p>
            </div>
           </div>

            <div className="cartActions">
                <p className="itemPrice">{parseInt(GetFood(nameFood)!.foodPrice) * foodCount} {GetFood(nameFood)!.currency}</p>

                <div className="itemButton">
                    <p onClick={()=> {
                       if(items[itemIndex].foodCount<2) {
                        dispatch(deleteItem(itemIndex))
                       } else {
                        dispatch(decreaseCount(itemIndex))
                       }
                    }}>-</p>
                    <p>{items[itemIndex].foodCount}</p>
                    <p onClick={() => {
                    dispatch(updateCount(itemIndex))
                    console.log(items)
                    }}>+</p>
                </div>
            </div>
        </CartItemWrap>
    )
}

export default ShoppingItem;