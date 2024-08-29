import { useContext } from "react";
import { Hero } from "./Hero";

import { UserContext } from "../../UserContext";

export const Contact = () => {
    const { ministry, loading, error } = useContext(UserContext);
    let text = "Have a question or want to work together? Fill out the form below and we'll get back to you";

    return(
        <div>
            <Hero text={text} title="Get in Touch" />
            <div className="py-8 flex flex-row justify-around px-4">
                <p className="flex flex-col">
                    <span className="font-semibold">Our Office Address</span>
                    <span>No. 5 FSP Avenue, Independence Layout Enugu</span>
                </p>
                <p className="flex flex-col">
                    <span className="font-semibold">Phone Number</span>
                    <span>07040244022</span>
                </p>
            </div>
        </div>
    )
}

