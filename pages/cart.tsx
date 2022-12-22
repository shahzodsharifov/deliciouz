import { CartWrapper } from "../styles/CartWrapper"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import ShoppingItem from "../components/ShoppingItem"
import shopItems from "../src/store/shopItems"
import { useDispatch, useSelector } from "react-redux/es/exports"
import { AppState } from "../src/store/store"
import { GetFood, GetInfo } from "../components/FoodCard"
import { useRouter } from "next/router"

const Cart = () => {

    const items = useSelector((state: AppState) => state.shopItems.items)
    const dispatch = useDispatch();
    const router = useRouter()
    var totalCashMoney = 0;
    items.forEach((e) => {
        totalCashMoney = totalCashMoney + parseInt(GetFood(e.selectedFood)!.foodPrice) * e.foodCount
    })
   if(items.length<1) {
            return (
                <>
                <Navigation/>
                <CartWrapper>
                   <div className="noLeft">
                   <h4 className="noItem">{GetInfo()!.noItem}</h4>
                    <button className="backtomenu" onClick={() => router.push("/")}>{GetInfo()!.menu}</button>
                   </div>
                </CartWrapper>
                <Footer/>
                </>
            )
   } else {
    return (
        <>
        <Navigation/>
        <CartWrapper>
       <div className="shopItemList">
       {items.map((e,index) => items.length>0 ?<ShoppingItem key={index} nameFood={e.selectedFood} foodCount={e.foodCount} itemIndex={index}/> : "")}
       </div>

       <div className="totalCash">
        <h3>{GetInfo()!.order}</h3>
        <div>
            {items.map((e, index) => 
                <div key={index} className="itemInfos">
                <p>{GetFood(e.selectedFood)!.foodName}</p>
                <p>{parseInt(GetFood(e.selectedFood)!.foodPrice) * e.foodCount} {GetFood(e.selectedFood)!.currency} </p>
                </div>
            )}
           
        </div>
       <div className="delivery">
        <p>  {GetInfo()!.delivery}</p>
        <p>0 {GetInfo()!.currency}</p>
       </div>

       <div className="totalMoney">
        <p>  {GetInfo()!.total}</p>
        <p>{totalCashMoney} {GetInfo()!.currency}</p>

     
       </div>

       <button className="buyTheFood">
         {GetInfo()!.makePayment}
        </button>
       </div>
        </CartWrapper>
        <Footer/>
        </>
    )
   }
}

export default Cart