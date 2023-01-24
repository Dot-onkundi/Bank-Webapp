import React from "react";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Infosection from "./components/Infosection";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";

function App() {
  return (
    <>    
      <Navbar/>
      <Hero/>  
      <Infosection/>   
      <Newsletter/>
      <Cards/>
      <Footer/>
    </>
  );
}

export default App;
