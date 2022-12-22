import { DetailModalWrapper } from "../styles/DetailModal";
import CloseIc from "../public/img/closeIc.svg"
import Image from "next/image";
import { useEffect, useState } from "react";
import Food1 from "../public/img/food1.png"
import { getFood, getInfo } from "./FoodCard";
import { useSelector } from "react-redux";
import { AppState } from "../src/store/store";
import { useDispatch } from "react-redux";
import shopItems, { setItems } from "../src/store/shopItems";


    interface DetailModalProps {
        isOpen: boolean;
    }



    const DetailModal = ({setModalOpen, isOpen, selectedFood}:any) => {

        const [foodCount, setFoodCount] = useState(1);
        const items = useSelector((state: AppState) => state.shopItems.items)
        const dispatch = useDispatch()


         return (
            
            <DetailModalWrapper>
               <div className={isOpen ? "modalOpen" : "modalClosed"}>
                

               <div className="cross" onClick={()=>{ 
                setFoodCount(1)
                
                setModalOpen(false)
                console.log("hey")}}>
                        <div className="crossContainer">
                            <Image src={CloseIc} fill alt="close icon"/>
                        </div>
                        </div>

                 <div className="foodPicContainer">
                    <div className="foodPic">
                        <Image src={getFood(selectedFood)!.foodThumb} alt="food pic" fill/>
                    </div>
                </div> 

                <h1 className="foodNameModal">{getFood(selectedFood)?.foodName}</h1> 
                <p className="foodInfoModal">{getFood(selectedFood)?.foodInfo}</p>  

                <p className="drinking">{getInfo()?.drinks}</p>   
                <div className="dChoices">
                <div className="coke">
                <input type="checkbox" className="cokeInput"/>
                <p className="inputLabel">Coca Cola 1.5L</p>
                </div>

                <div className="coke">
                <input type="checkbox" className="cokeInput"/>
                <p className="inputLabel">Pepsi 1.5L</p>
                </div>
                </div>

                <p className="totalPrice">{parseInt(getFood(selectedFood)!.foodPrice) * foodCount} {getFood(selectedFood)!.currency}</p>

                <div className="modalBtns">
                    <div className="addBtn">
                        <p className={foodCount > 1 ? "unclickable" : "click"} onClick={() => setFoodCount(foodCount - 1)}>-</p>
                        <p>{foodCount}</p>
                        <p onClick={() => setFoodCount(foodCount + 1)}>+</p>
                    </div>

                    <button className="buyBtnModal" 
                        onClick={() => {
                            dispatch(setItems({selectedFood, foodCount}))
                            setFoodCount(1)
                            setModalOpen(false)
                            console.log(items)
                         
                           

                        }}>
                    {getInfo()?.addToCart}
                    </button>
                </div>

                
               </div>
            </DetailModalWrapper>
        )
    }

    export default DetailModal ;