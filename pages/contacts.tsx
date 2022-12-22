import { ContactsWrap } from "../styles/ContactsWrap"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import { GetInfo } from "../components/FoodCard"


 const Contacts = () => {
    return (
     <>
        <Navigation/>
        <ContactsWrap>
            <div className="contactsContainer">
                <h1 className="cHeader">{GetInfo()!.contactsPage}</h1>
                <p className="cSub">{GetInfo()!.call1} <span>+99899 999 99 99</span></p>
                <p className="cInfo">info@delicouz.com {GetInfo()!.call2} </p>
            </div>
        </ContactsWrap>
        <Footer/>
     </>
    )
 }

 export default Contacts