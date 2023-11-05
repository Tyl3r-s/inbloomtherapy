import React from 'react';
import Home from './pages/home';
import Team from './pages/team';
import About from './pages/about';
import Banner from './pages/components/banner';
import Promo from './pages/components/promo';
import Footer from './pages/components/footer';
import Services from './pages/services';
import Location from './pages/contaxt';
import Dropdown from './pages/components/dropdown';
import './App.css';
import './pages/styles/general.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';



export default function App() {
  return (
    <BrowserRouter>
    <Promo />
    <Dropdown />
    <Banner />
    <Routes>
      <Route path='/inbloomtherapy' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/partners' element={<Team />}/>
      <Route path='/location' element={<Location />}/>
      <Route path='/services' element={<Services />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
