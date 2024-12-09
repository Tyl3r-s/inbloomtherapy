import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/promo.css';

export default function promo() {
    return (
        <div className="promo">
            <p className="promoText">BOOK A FREE CONSULTATION <Link to="https://inbloomtherapy.janeapp.com/#/discipline/1/treatment/2" target="_blank">HERE</Link></p>
        </div>
    )
}