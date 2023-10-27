import React from 'react';
import './styles/about.css'
import portrait from '../assets/c96a6cbd-3100-4c58-bf14-d041a37a9700.jpg';

export default function Home() {
  return (
    <section className="about-section general">

        <img src={portrait} alt="" className="me" />

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, assumenda. Labore alias reiciendis tempora, repellat odio reprehenderit laborum. Fuga eaque nostrum recusandae, magnam magni sapiente nesciunt voluptas ullam ea atque.
        </p>

    </section>
  );
}