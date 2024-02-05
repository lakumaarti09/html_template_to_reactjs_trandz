import Header from "./Header/Header";
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import About from "./pages/About";
import Forex from "./pages/Forex";

import Indices from "./pages/Indices";
import Metals from "./pages/Metals";
import Stock from "./pages/Stock";
import CryptoCurrency from "./pages/CryptoCurrency";
import Footer from "./Footer/Footer";


function App() {
  return (
    <>
    <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />  
          <Route path="/contact" element={<ContactUs />} />  
          <Route path="/about" element={<About />} />  
          <Route path="/forex" element={<Forex />} />  
          <Route path="/cryptocurrency" element={<CryptoCurrency/>} />  
          <Route path="/Indices" element={<Indices />} /> 
          <Route path="/Metals" element={<Metals />} /> 
          <Route path="/Stock" element={<Stock/>} /> 
        </Routes>
        <Footer/>
    </Router>
  
  
    </>
  );
}

export default App;
