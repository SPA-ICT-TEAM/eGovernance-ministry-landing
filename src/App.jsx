import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage/HomePage";
import { NavBar } from "./Components/HomePage/NavBar";
import { AboutPage } from "./Components/HomePage/About/Aboutpage";
import { Eservicepage } from "./Components/HomePage/E-services/Eservices";
import { OurService } from "./Components/HomePage/About/OurServices/Ourservice";
import { UserProvider } from './Components/UserContext'; 

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
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
