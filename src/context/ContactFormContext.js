import { createContext } from "react";

const ContactFormContext = createContext({
    showPopupForm: false,
    setShowPopupForm: (isActive) => { }
});

export default ContactFormContext;