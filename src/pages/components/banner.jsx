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
            <Link to='/partners'> Team </Link>
            <a href="mailto: madison@inbloomtherapy.ca"> Contact </a>
            </div>
            <div className="bannerTitle">
                <p>VIRTUAL AND IN PERSON THERAPY</p>
            </div>
        </div>
    )
}