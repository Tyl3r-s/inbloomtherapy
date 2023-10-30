import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/banner.css';
import AiOutlineMenu from 'react-icons';

export default function banner() {
    return (
        <div className="banner">
            <div className="bannerMenu">
            <div className="logo">
            <div>
                <h1 className="logoTitle">In Bloom</h1>
            </div>
            <div>
                <p className="logoWords">therapy and wellness</p>
            </div>
            </div>
            <Link to='/'> Home </Link>
            <Link to='/about'> About </Link>
            <Link to='/services'> Services </Link>
            <Link to='/partners'> Partners </Link>
            <a href="mailto: madison@inbloomtherapy.ca"> Contact </a>
            <Link to ='/booking' className="bookingBtn">BOOK NOW</Link>
            </div>
            <div className="bannerTitle">
                <p>An evidence based, empathetic approach to growth & healing</p>
            </div>
        </div>
    )
}