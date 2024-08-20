import { NavBar } from "../NavBar"
import { Hero } from "./Hero"
import { Services } from "./Services"

export const Eservicepage = ()=>{
    return(
        <div className="bg-gray-200 min-h-screen">
            <Hero/>
            <Services />

        </div>
    )
}