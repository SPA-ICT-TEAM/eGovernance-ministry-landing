import { useContext, useEffect } from "react";
import { UserContext } from "../../UserContext";
import { Hero } from "./Hero"
import { Services } from "./Services"
import Footer from "../../Footer/Footer";

export const Eservicepage = ()=>{
    const { ministry, loading, error } = useContext(UserContext);
    // console.log(ministry);
    useEffect(() => {
        }, [ministry]);

    if (loading) {
        return 'Loading...'
    }
    return(
        <div className="bg-gray-200 min-h-screen">
            <Hero/>
            <Services services={ministry.services} />
            <Footer />
        </div>
    )
}
