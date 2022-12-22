import Image from "next/image";
import { NavWrapper } from "../styles/NavWrapper"
import HamburgerIc from "../public/img/hamburger.svg"
import CloseIc from "../public/img/closeIc.svg"
import UzbFlag from "../public/img/uz.svg"
import RuFlag from "../public/img/ru.svg"
import EnFlag from "../public/img/en.svg"
import DownIc from "../public/img/downIc.svg"
import TickIc from "../public/img/tick.svg"
import ShoppingCart from "../public/img/shoppingCart.svg"
import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { getInfo } from "./FoodCard";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../src/store/store";


    const Navigation = () => {

    
        var chosenF;
        var chosenC;

        const  items = useSelector((state: AppState) => state.shopItems.items)
        const dispatch = useDispatch();
        const[flSelectOpen, setFlSelectOpen] = useState(false)
        const [drawerOpen, setDrawerOpen] = useState(false)
        
        const router = useRouter()

        if(router.locale == "uz") {
            chosenF = UzbFlag;
            chosenC = "O'zbekcha"
        } else if (router.locale == "ru") {
            chosenF = RuFlag;
            chosenC = "Русский";
        } else if (router.locale == "en") {
            chosenF = EnFlag;
            chosenC = "English";
        }
        return (
            <NavWrapper>
                {/* <div className="logo" onClick={()=> router.push("/")}>
                    <h1>DELICO<span>UZ</span></h1>
                </div> */}

                <Link href={"/cart"}>
                <div className="shoppingCartContainer">
                    <div className={items.length > 0 ? "cartTag" : "cartTagClosed"}>
                        <p>{items.length}</p>
                    </div>
                    <div className="shoppingCart">
                        <Image src={ShoppingCart} alt="shopping cart" fill/>
                    </div>
                </div>
                </Link>

                <div className="hamburgerContainer"  onClick={() => {
                    setDrawerOpen(true)
                    console.log("clicked")
                }
                   
                    }>
                    <div className="hamIc" >
                        <Image src={HamburgerIc} fill alt="menu icon"/>
                    </div>
                </div>

                <div className={drawerOpen ? "navBg" : "navBgClosed"} onClick={()=> console.log("clicked")} />
                <div className={drawerOpen ? "moreInfoNav" : "moreInfoNavClosed"}>
                    <div className="menuLabel">
                        <p>{getInfo()?.menu}</p>
                        <div className="arrow" onClick={()=> {setDrawerOpen(false)}}>
                        <div className="arrowContainer">
                            <Image src={CloseIc} fill alt="close icon"/>
                        </div>
                        </div>
                    </div>

                    <div className="nav-items">
                        <div className="languageSelect">
                          

                                <div className="theFlag">
                                <div className="flagImgContainer">
                                    <div className="flagImg">
                                        <Image src={chosenF} alt="flags" fill/>
                                    </div>

                                   
                                </div>

                                <p>{chosenC}</p>

                                <div className={flSelectOpen ? "flagsListOpen" : "flagsListClosed"}>
                                        <ul>
                                        <li 
                                            className={router.locale == "ru" ? "activeFl" : ""}
                                            onClick={() => {router.push("/", "/", {locale: "ru"})}}
                                            
                                            >
                                            <div className="fl">

                                            <div className="flagImgContainer">
                                            <div className="flagImg">
                                            <Image src={RuFlag} alt="flags" fill/>
                                            </div>
                                            </div>

                                            <p>Русский</p>
                                            </div>

                                            <div className="tickContainer">
                                            <div className="tick">
                                                <Image src={TickIc} fill alt="close icon"/>
                                            </div>
                                            </div>
                                            </li>


                                            <li className={router.locale == "uz" ? "activeFl" : ""}
                                                onClick={() => {router.push("/", "/", {locale: "uz"})}}
                                            >
                                            <div className="fl">

                                            <div className="flagImgContainer">
                                            <div className="flagImg">
                                            <Image src={UzbFlag} alt="flags" fill/>
                                            </div>
                                            </div>

                                            <p>O'zbekcha</p>
                                            </div>

                                            <div className="tickContainer">
                                            <div className="tick">
                                                <Image src={TickIc} fill alt="close icon"/>
                                            </div>
                                            </div>
                                            </li>

                                            <li   className={router.locale == "en" ? "activeFl" : ""}
                                                  onClick={() => {router.push("/", "/", {locale: "en"})}}
                                             >
                                            <div className="fl">

                                            <div className="flagImgContainer">
                                            <div className="flagImg">
                                            <Image src={EnFlag} alt="flags" fill/>
                                            </div>
                                            </div>

                                            <p>English</p>
                                            </div>

                                            <div className="tickContainer">
                                            <div className="tick">
                                                <Image src={TickIc} fill alt="close icon"/>
                                            </div>
                                            </div>
                                            </li>



                                        </ul>
                                </div>
                                </div>

                                <div className={flSelectOpen ? "dropIcContainerOpen" : "dropIcContainer"} onClick={() => {setFlSelectOpen(!flSelectOpen)}}>
                                    <div className="dropIc">
                                        <Image src={DownIc} alt="flags" fill/>
                                    </div>
                                </div>
                          
                        </div>

                        <ul className="pages">
                          <Link href={"/"}>
                          <li className={!router.pathname.includes("contacts") && !router.pathname.includes("aboutus") ? "activeRoute" : ""}>
                                <p>{getInfo()?.mainPage}</p> 
                                <div className="tickContainer">
                                            <div className="tick">
                                                <Image src={TickIc} fill alt="close icon"/>
                                            </div>
                                            </div>
                                </li>
                            </Link> 
                           <Link href={"/contacts"}>
                           <li className={router.pathname.includes("contacts") ? "activeRoute" : ""}>
                            <p>{getInfo()?.contactsPage}</p>
                            <div className="tickContainer">
                                            <div className="tick">
                                                <Image src={TickIc} fill alt="close icon"/>
                                            </div>
                                            </div>
                            
                            </li>
                           </Link>
                           <Link href={"/"}>
                           <li className={router.pathname.includes("aboutus") ? "activeRoute" : ""}>
                            <p>{getInfo()?.aboutUSPage}</p>
                            <div className="tickContainer">
                                            <div className="tick">
                                                <Image src={TickIc} fill alt="close icon"/>
                                            </div>
                                            </div>
                            
                            </li>
                           </Link>  
                           
                        </ul>
                    </div>
                </div>
            </NavWrapper>
        )
    }

    export default Navigation;