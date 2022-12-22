import { ContactsWrap } from "../styles/ContactsWrap"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { getInfo } from "../components/FoodCard"


 const Contacts = () => {
    return (
     <>
        <Navigation/>
        <ContactsWrap>
            <div className="contactsContainer">
                <h1 className="cHeader">{getInfo()!.contactsPage}</h1>
                <p className="cSub">{getInfo()!.call1} <span>+99899 999 99 99</span></p>
                <p className="cInfo">info@delicouz.com {getInfo()!.call2} </p>
            </div>
        </ContactsWrap>
        <Footer/>
     </>
    )
 }

 export default Contacts