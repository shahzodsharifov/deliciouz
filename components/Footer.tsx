import Link from "next/link";
import { FooterWrap } from "../styles/FooterWrap";
import { GetInfo } from "./FoodCard";

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
            <p>{GetInfo()?.mainPage}</p>
           </Link>

           <Link href={"/contacts"}>
            <p>{GetInfo()?.contactsPage}</p>
           </Link>

           <Link href={"/"}>
            <p>{GetInfo()?.aboutUSPage}</p>
           </Link>
            </div>
          </div>

            <p className="rights">@Delicouz 2022 All Rights Reserved </p>
        </FooterWrap>
    )
}

export default Footer;