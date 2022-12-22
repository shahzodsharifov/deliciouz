import Link from "next/link";
import { FooterWrap } from "../styles/FooterWrap";
import { getInfo } from "./FoodCard";

const Footer = () => {
    return (
        <FooterWrap>
          <div className="fMain">
            <Link href={"/"}>
            <div className="logoFooter">
                <h1>DELICO<span>UZ</span></h1>
            </div>
            </Link>

            <div className="footerItems">
            <Link href={"/"}>
            <p>{getInfo()?.mainPage}</p>
           </Link>

           <Link href={"/contacts"}>
            <p>{getInfo()?.contactsPage}</p>
           </Link>

           <Link href={"/"}>
            <p>{getInfo()?.aboutUSPage}</p>
           </Link>
            </div>
          </div>

            <p className="rights">@Delicouz 2022 All Rights Reserved </p>
        </FooterWrap>
    )
}

export default Footer;