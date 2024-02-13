import { Routes, Route } from "react-router-dom";
import { PaperPublication } from './pages/PaperPublication';
import { Contact } from "./pages/Contact";
import { Resume } from "./pages/Resume";
import { Project } from "./pages/Project";
import { Home } from "./pages/Home";

export const Router = () => {
    return(
        <Routes>
          <Route path = "/" element ={ <Home />} /> 
          <Route path = "/PaperPublication" element ={ <PaperPublication />} /> 
          <Route path = "/Contact" element ={ <Contact />} /> 
          <Route path = "/Resume" element ={ <Resume />} /> 
          <Route path = "/Project" element ={ <Project />} /> 
        </Routes>
    )
}