import React, { useRef } from 'react';
import '../styles/navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Navbar() {
    const navRef = useRef();

    const showNavBar = () => {
        navRef.current.classList.toggle("responsive_nav")
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
            <nav ref={navRef}>
                <Link to='/inbloomtherapy'> Home </Link>
                <Link to='/about'> About </Link>
                <Link to='/services'> Services </Link>
                {/* <Link to='/partners'> Partners </Link> */}
                <Link to='/location'> Contact </Link>
                <Link to='/booking' className="bookingBtn">BOOK NOW</Link>

                <button className="nav-btn nav-btn-close" onClick={showNavBar}>
                    <FontAwesomeIcon icon="fa-solid fa-xmark" />
                </button>
            </nav>
            <button className="nav-btn" onClick={showNavBar}>
                <FontAwesomeIcon icon="fa-solid fa-bars" />
            </button>
        </div>
    )
}