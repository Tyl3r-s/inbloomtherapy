import React, { useRef } from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav")
    }

    const scrollTop = () => {
        window.scroll({
            top: 0,
            left: 0,
            behaviour: "smooth",
        })
    }

    return (
        <div className="bannerMenu">
            <div className="logo">
                <div>
                    <h1 className="logoTitle">In Bloom</h1>
                </div>
                <div>
                    <p className="logoWords">therapy and wellness</p>
                </div>
            </div>
            <nav className="navItems scrollToTopLink" ref={navRef}>
                <Link onClick={showNavBar} to='/'> Home </Link>
                <Link onClick={showNavBar} to='/about'> About </Link>
                <Link onClick={showNavBar} to='/partners'> Team </Link>
                <Link onClick={showNavBar} to='/services'> Services </Link>
                {/* <Link to='/partners'> Partners </Link> */}
                <Link onClick={showNavBar} to='/location'> Contact </Link>
                <Link onClick={showNavBar} target="_blank" to="https://inbloomtherapy.janeapp.com/#/list" className="bookingBtn">BOOK NOW</Link>

                <button className="nav-btn nav-btn-close" onClick={showNavBar}>
                    <FontAwesomeIcon icon="fa-solid fa-xmark" />
                </button>
            </nav>
            <button className="nav-btn nav-btn-open" onClick={showNavBar}>
                <FontAwesomeIcon icon="fa-solid fa-bars" />
            </button>
        </div>
    )
}