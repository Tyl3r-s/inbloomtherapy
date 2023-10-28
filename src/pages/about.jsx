import React from 'react';
import './styles/about.css'
import portrait from '../assets/c96a6cbd-3100-4c58-bf14-d041a37a9700.jpg';

export default function Home() {
  return (
    <section className="about-section general">

      <img src={portrait} alt="" className="me" />

      <p className="aboutIntro">
        Madison Dean • Registered Social Worker • MSW • RSW • (she, her)
      </p>

      <p className="aboutText">
        Madison is a beacon of hope for teens and young adults, specializing in anxiety, grief, and depression. With a client-centered approach, they create a safe space for individuals to confront fears, explore emotions, and develop coping strategies. Through empathy and active listening, Madison fosters self-confidence and self-awareness, guiding transformative journeys towards mental and emotional well-being. They offer not just therapy but compassionate support, shaping a future where young individuals face challenges with courage and resilience, knowing they are never alone in their healing journey.
      </p>

    </section>
  );
}