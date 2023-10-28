import React from 'react';
import './styles/partners.css'
import Ashley from '../assets/HHAshley-17.jpg';

export default function Home() {
    return (
        <section className="partner-landing general">

            <img src={Ashley} alt="" className="Ashley" />

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque nisi nesciunt dolorem ducimus amet impedit natus aut maiores assumenda accusamus porro asperiores consequuntur iste quidem, nostrum voluptate! Possimus, repellendus error?</p>

        </section>
    );
}