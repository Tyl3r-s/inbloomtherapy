import React from 'react';
import Home from './pages/home';
import Team from './pages/team';
import About from './pages/about';
import Banner from './pages/components/banner';
import Promo from './pages/components/promo';
import Footer from './pages/components/footer';
import Services from './pages/services';
import './App.css';
import './pages/styles/general.css';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';



export default function App() {
  return (
    <BrowserRouter>
    <Promo />
    <Banner />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/partners' element={<Team />}/>
      <Route path='/services' element={<Services />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
