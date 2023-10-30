import React from 'react';
import './styles/about.css'
import portrait from '../assets/c96a6cbd-3100-4c58-bf14-d041a37a9700.jpg';
import Verified from '../assets/psychology-today-verified-logo-transparent-hd-png-download.png';

export default function Home() {
  return (
    <section className="about-section general">

      <img src={portrait} alt="" className="me" />

      <p className="aboutIntro">
        <h2>Madison Dean (she/her) </h2>
        <br />
        Master of Social Work
        <br />
        Registered Social Worker
        <br />
        <br />
        <img src={Verified} alt="" className="verified" />
      </p>




      <p className="aboutText">
        Specializing in anxiety, grief, and depression, I strive to act as a beacon of hope for teens and young adults. My client-centered approach allows me to create a safe space for individuals to confront their fears, explore their emotions, and develop coping strategies. Through empathy and active listening, I foster self-confidence and self-awareness, guiding transformative journeys towards mental and emotional well-being. I don't just offer therapy; I provide compassionate support, shaping a future where young individuals can face their challenges with courage and resilience, knowing they are never alone in their healing journey.
      </p>

    </section>
  );
}