import { useContext, useEffect } from "react"
import { AboutUs } from "./AboutUs"
import { Hero } from "./Hero"
import { Leadership } from "./Leadership"
import { Mission } from "./Mission"
import { Qualifications } from "./Qualification"
import { UserContext } from "../../UserContext"
import Footer from "../../Footer/Footer";
import enugu from "../../../assets/images/enugu.jpeg";

const about = "Our team of dedicated professionals is committed to providing exceptional government services to the people of Enugu State."+ 
                "With years of experience and a focus on innovation, we strive to enhance the efficiency and effectiveness of public services."+
                "We aim to build a transparent and responsive government that meets the needs of its citizens. Our commitment to excellence ensures that we remain a trusted partner in driving the development and progress of Enugu State."+ 
                "We are here to serve you, making sure your needs are met with the highest standards of service and professionalism."


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
            <AboutUs about={ministry?.ministryDetailsTwo?.about ?? about} />
            <Leadership leader={ministry?.commissionerDetails} />
            <Qualifications achievements={ministry?.commissionerDetails?.achievements} professional={ministry?.commissionerDetails?.professional} />
            <Footer />
        </div>
    )
}
