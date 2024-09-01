import { useContext } from "react";
import { Eservice } from "./EService";
import { Faq } from "./Faq";
import { Hero } from "./Hero";
import { NavBar } from "./NavBar";
import { Project } from "./Project";
import { Welcome } from "./Welcome";
import { UserContext } from "../UserContext";
import logo from "../../assets/images/logo.png"
import Footer from "./../Footer/Footer";


function HomePage(){
  const { ministry, loading, error } = useContext(UserContext);

  if (loading) return(
    <div className="size-full h-screen flex flex-col items-center justify-center">
      <img src={logo} alt="logo" className="w-[150px]" />
      <p>Loading...</p>
    </div>
  );
  if (error) return <p>Error: {error}</p>;

  return (!ministry) ? (<div><Hero ministry={ministry} /></div>) : (
    <div>
      <Hero ministry={ministry} />
      <Welcome ministry={ministry}/>
      <Eservice ministry={ministry}/>
      <Project projects={ministry.projects} />
      <Faq faqs={ministry.ministryFAQ} details={ministry.ministryDetailsTwo} />
      <Footer />
    </div>
  )
}

export default HomePage;
