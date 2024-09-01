import { useContext, useEffect } from "react"
import { AboutUs } from "./AboutUs"
import { Hero } from "./Hero"
import { Leadership } from "./Leadership"
import { Mission } from "./Mission"
import { Qualifications } from "./Qualification"
import { UserContext } from "../../UserContext"
import Footer from "../../Footer/Footer";
export const AboutPage = () =>{
    const { ministry, loading, error } = useContext(UserContext);

    useEffect(() => {
        console.log('Ministry in AboutPage:', ministry);
      }, [ministry]);
      console.log("ministry:", ministry);

    if (loading) {
        return 'Loading...'
    }

    return(
        <div>
            <Hero title="About" name={ministry?.ministryDetails?.name} />
            <Mission mission={ministry?.ministryDetailsTwo?.mission} vision={ministry?.ministryDetailsTwo?.vision} />
            <AboutUs about={ministry?.ministryDetailsTwo?.about} />
            <Leadership leader={ministry?.commissionerDetails} />
            <Qualifications achievements={ministry?.commissionerDetails?.achievements} professional={ministry?.commissionerDetails?.professional} />
            <Footer />
        </div>
    )
}
