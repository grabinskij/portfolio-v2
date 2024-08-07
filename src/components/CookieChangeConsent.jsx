import React from 'react';





const ChangeConsentBanner = ({showChangeConsent, setShowPopup}) =>{
    function togglePopup() {
        setShowPopup(prev => !prev);
    }
    return (
        <div className={`fixed bottom-4 right-4 z-50 ${showChangeConsent ? 'visible' : 'hidden'}`} onClick={togglePopup}>
            <button className="rounded-full flex justify-center items-center text-center rounded-full hover:bg-orange-300 mr-px md:mr-6" title="Change Cookie Preferences">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-8 h-8 fill-current lg:w-12 lg:h-12">
                    <path d="M21.598 11.064a1.006 1.006 0 0 0-.854-.172A2.938 2.938 0 0 1 20 11c-1.654 0-3-1.346-3.003-2.937.005-.034.016-.136.017-.17a.998.998 0 0 0-1.254-1.006A2.963 2.963 0 0 1 15 7c-1.654 0-3-1.346-3-3 0-.217.031-.444.099-.716a1 1 0 0 0-1.067-1.236A9.956 9.956 0 0 0 2 12c0 5.514 4.486 10 10 10s10-4.486 10-10c0-.049-.003-.097-.007-.16a1.004 1.004 0 0 0-.395-.776zM12 20c-4.411 0-8-3.589-8-8a7.962 7.962 0 0 1 6.006-7.75A5.006 5.006 0 0 0 15 9l.101-.001a5.007 5.007 0 0 0 4.837 4C19.444 16.941 16.073 20 12 20z"/>
                    <circle cx="12.5" cy="11.5" r="1.5"/>
                    <circle cx="8.5" cy="8.5" r="1.5"/>
                    <circle cx="7.5" cy="12.5" r="1.5"/>
                    <circle cx="15.5" cy="15.5" r="1.5"/>
                    <circle cx="10.5" cy="16.5" r="1.5"/>
                </svg>
            </button>
        </div>
    );
}

export default ChangeConsentBanner;