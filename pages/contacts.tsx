import { ContactsWrap } from "../styles/ContactsWrap"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"


 const Contacts = () => {
    return (
     <>
        <Navigation/>
        <ContactsWrap>
            <div className="contactsContainer">
                <h1 className="cHeader">Kontaklar</h1>
                <p className="cSub">Yagona aloqa markazi: <span>+99899 999 99 99</span></p>
                <p className="cInfo">info@delicouz.com ga yo'zishingiz ham mumkin</p>
            </div>
        </ContactsWrap>
        <Footer/>
     </>
    )
 }

 export default Contacts