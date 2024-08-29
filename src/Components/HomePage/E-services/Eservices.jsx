import { useContext } from "react";
import { UserContext } from "../../UserContext";
import { Hero } from "./Hero"
import { Services } from "./Services"

export const Eservicepage = ()=>{
    const { ministry, loading, error } = useContext(UserContext);
    console.log(ministry);
    return(
        <div className="bg-gray-200 min-h-screen">
            <Hero/>
            <Services services={ministry.services} />
        </div>
    )
}