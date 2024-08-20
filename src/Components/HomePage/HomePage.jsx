import { Eservice } from "./EService";
import { Faq } from "./Faq";
import { Hero } from "./Hero";
import { NavBar } from "./NavBar";
import { Project } from "./Project";
import { Welcome } from "./Welcome";

function HomePage(){

  return(
    <div>
      <Hero />
      <Welcome />
      <Eservice />
      <Project />
      <Faq />
    </div>
  )
}

export default HomePage;
