import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home.jsx";
import Services from "./pages/Services.jsx";
import Contact from "./pages/Contact.jsx";
import About from "./pages/About.jsx";
import B2BColdCalling from "./pages/B2BColdCalling.jsx";
import B2BLeadGeneration from "./pages/B2BLeadGeneration.jsx";
import B2CLeadGeneration from "./pages/B2CLeadGeneration.jsx";
import B2CColdCalling from "./pages/B2CColdCalling.jsx";  



export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/b2b-cold-calling" element={<B2BColdCalling />} />
          <Route path="/b2b-lead-generation" element={<B2BLeadGeneration />} />
          <Route path="/b2c-lead-generation" element={<B2CLeadGeneration />} />
          <Route path="/b2c-cold-calling" element={<B2CColdCalling />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}