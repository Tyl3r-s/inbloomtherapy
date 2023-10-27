import React from 'react';
import { Link } from 'react-router-dom';

export default function banner() {
    return (
        <div className="banner">
            <div className="logo">
                <h2>In Bloom</h2>
            </div>
            <Link to='/'> Home </Link>
            <Link to='/about'> About </Link>
            <Link to='/partners'> Partners </Link>
            <Link to='/contact'> Contact </Link>
        </div>
    )
}