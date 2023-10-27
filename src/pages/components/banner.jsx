import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/banner.css';

export default function banner() {
    return (
        <div className="banner">
            <div className="logo">
            <div>
                <h2 className="logoTitle">In Bloom</h2>
            </div>
            <div>
                <p className="logoWords">therapy and wellness</p>
            </div>
            </div>
            <Link to='/'> Home </Link>
            <Link to='/about'> About </Link>
            <Link to='/partners'> Partners </Link>
            <Link to='/bookings'> Bookings</Link>
            <a href="mailto: madison@inbloomtherapy.ca"> Contact </a>
        </div>
    )
}