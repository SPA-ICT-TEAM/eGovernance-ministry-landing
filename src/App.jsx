import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import { NavBar } from "./Components/HomePage/NavBar";
import { AboutPage } from "./Components/HomePage/About/Aboutpage";
import { Eservicepage } from "./Components/HomePage/E-services/Eservices";
import { OurService } from "./Components/HomePage/About/OurServices/Ourservice";
import { Contact } from "./Components/HomePage/Contact/Contact";
import { UserProvider } from './Components/UserContext'; 
import { Project } from "./Components/HomePage/Project";

function App() {
    return (
      <UserProvider> 
        <Router>
          <NavBar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/eService" element={<Eservicepage />} />
            <Route path="/services" element={<OurService />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/project" element={<Project />} />
          </Routes>
        </Router>
      </UserProvider>
    );
}

export default App;
