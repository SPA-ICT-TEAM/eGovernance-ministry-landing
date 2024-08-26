import { useContext } from "react";
import { Eservice } from "./EService";
import { Faq } from "./Faq";
import { Hero } from "./Hero";
import { NavBar } from "./NavBar";
import { Project } from "./Project";
import { Welcome } from "./Welcome";
import { UserContext } from "../UserContext";
import logo from "../../assets/images/logo.png"

function HomePage(){
  const { ministry, loading, error } = useContext(UserContext);

  if (loading) return( 
    <div className="size-full h-screen flex flex-col items-center justify-center">
      <img src={logo} alt="logo" className="w-[150px]" />
      <p>Loading...</p>
    </div>
  );
  if (error) return <p>Error: {error}</p>;

  return(
    <div>
      <Hero ministry={ministry} />
      <Welcome ministry={ministry}/>
      <Eservice ministry={ministry}/>
      <Project />
      <Faq />
    </div>
  )
}

export default HomePage;
