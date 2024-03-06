import {useState} from "react";
import {LoadingScreen} from "./components/LoadingScreen";
import Header from "./components/Header";
import Home from "./components/Home";
import Overlay from "./components/Overlay";
import CookiePopup from "./components/CookiePopup";
import ChangeConsentBanner from "./components/CookieChangeConsent";



function App() {
    const [started, setStarted] = useState(false);
    const [showOverlay, setShowOverlay] = useState(false);
    const [showChangeConsent, setShowChangeConsent] = useState(false);
    const [popupVisible, setPopupVisible] = useState(false);
    const [consentGiven, setConsentGiven] = useState(null);

    return (
        <>
            <LoadingScreen started={started} setStarted={setStarted}/>
            <Overlay show={showOverlay} />
            <CookiePopup setConsentGiven={setConsentGiven} setPopupVisible={setPopupVisible} popupVisible={popupVisible} setShow={setShowOverlay} setShowChangeConsent={setShowChangeConsent}/>
            <ChangeConsentBanner setShowPopup={setPopupVisible} showChangeConsent={showChangeConsent}/>
            <Header/>
            <Home started={started} consentGiven={consentGiven} setPopupVisible={setPopupVisible}/>
        </>
    );
}

export default App;
