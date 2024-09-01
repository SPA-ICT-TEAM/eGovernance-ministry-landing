import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import { NavBar } from "./Components/HomePage/NavBar";
import { AboutPage } from "./Components/HomePage/About/Aboutpage";
import { Eservicepage } from "./Components/HomePage/E-services/Eservices";
import { OurService } from "./Components/HomePage/About/OurServices/Ourservice";
import { Contact } from "./Components/HomePage/Contact/Contact";
import { UserProvider } from './Components/UserContext'; 
import { ProjectProvider } from "./Components/ProjectContext";
import { DomainProvider } from "./Components/DomainContext";
import { Project } from "./Components/HomePage/Project";
import { ViewProject } from "./Components/HomePage/Project/ViewProject";

function App() {
    return (
      <DomainProvider>
        <UserProvider> 
          <ProjectProvider>
            <Router>
              <NavBar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/eService" element={<Eservicepage />} />
                <Route path="/services" element={<OurService />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/project" element={<Project AddFooter={true} />} />
                <Route path="/project/:id" element={<ViewProject />} />
              </Routes>
            </Router>
          </ProjectProvider>
        </UserProvider>
      </DomainProvider>
    );
}

export default App;
