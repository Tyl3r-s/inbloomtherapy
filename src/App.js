import React from 'react';
import Home from './pages/home';
import Team from './pages/team';
import About from './pages/about';
import Banner from './pages/components/banner';
import Promo from './pages/components/promo';
import Footer from './pages/components/footer';
import Services from './pages/services';
import Location from './pages/contaxt';
import Navbar from './pages/components/navBar';
import './App.css';
import './pages/styles/general.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons';

library.add(faBars, faXmark, faLinkedin, faInstagram, faFacebook)


export default function App() {
  return (
    <BrowserRouter>
    <Promo />
    <Navbar />
    <Banner />
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/about' element={<About />}/>
      <Route path='/partners' element={<Team />}/>
      <Route path='/location' element={<Location />}/>
      <Route path='/services' element={<Services />}/>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
