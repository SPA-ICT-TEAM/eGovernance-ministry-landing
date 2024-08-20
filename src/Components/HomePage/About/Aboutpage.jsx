import { NavBar } from "../NavBar"
import { AboutUs } from "./AboutUs"
import { Hero } from "./Hero"
import { Leadership } from "./Leadership"
import { Mission } from "./Mission"
import { Qualifications } from "./Qualification"

export const AboutPage = () =>{
    return(
        <div>
            <Hero />
            <Mission />
            <AboutUs />
            <Leadership />
            <Qualifications />
        </div>
    )
}