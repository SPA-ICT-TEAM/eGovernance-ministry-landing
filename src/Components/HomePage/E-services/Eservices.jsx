import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { NavBar } from "../NavBar"
import { Hero } from "./Hero"
import { Services } from "./Services"

export const Eservicepage = ()=>{
    const { ministry, loading, error } = useContext(UserContext);
    return(
        <div className="bg-gray-200 min-h-screen">
            <Hero/>
            <Services services={ministry.services} />

        </div>
    )
}