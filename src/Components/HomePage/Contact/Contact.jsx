import { useContext, useEffect, useRef } from "react";
import { Hero } from "./Hero";
import { ContactInfo } from "./ContactInfo";
import { ContactForm } from "./ContactForm";
import ReCAPTCHA from 'react-google-recaptcha';

import { UserContext } from "../../UserContext";
import Footer from "../../Footer/Footer";
export const Contact = () => {
    const { ministry, loading, error } = useContext(UserContext);

    useEffect(() => {
      }, [ministry]);

    if (loading) {
        return 'Loading...'
    }

    let text = "Have a question or want to work together? Fill out the form below and we'll get back to you";
    console.log('details:', ministry)
    let {address, email, phone, office_hours} = ministry?.ministryDetailsTwo

    return(
        <div>
            <Hero text={text} title="Get in Touch" />
            <ContactInfo address={address} email={email} phone={phone} officeHours={office_hours} />
            <ContactForm />
            <Footer />
        </div>
    )
}

