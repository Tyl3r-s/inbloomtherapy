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
        Hello and welcome!
        <br/>
        <br/>
        I'm here to create a space where you can find some relief; whatever burden you're carrying, I'm committed to working together to lighten the load. Whether you or your teen are wrestling with anxiety, depression, traumatic events, the loss of a loved one, or navigating a significant life change, remember, you don't have to navigate it alone.
        <br/>
        <br/>
        I am a registered social worker and psychotherapist, and my passion for mental health stems from personal experience. From a young age, I witnessed the struggles of loved ones with their mental health, experiencing the profound impact first-hand. Motivated by this, I delved into the social sciences, earning a degree in sociology and psychology, followed by a Master of Social Work at the University of Toronto.
        <br/>
        <br/>
        In my practice, I understand that there's no one-size-fits-all approach to therapy. What works for you may not work for someone else, and that's perfectly okay. My philosophy is rooted in the belief that you are the expert on yourself. I'm here to collaborate with you, supporting you every step of the way. Your needs, goals, and hopes are at the forefront, shaping a therapy experience that is uniquely yours.
        <br/>
        <br/>
        As a therapist, I'm dedicated to providing you with evidence-based practices, tools, and skills, ensuring you feel confident that you're receiving the support you need. On a personal level, I value connection, compassion, and warmth. While I tailor my approach to each individual, you can always expect me to show up as my authentic self – offering a down-to-earth, genuine atmosphere in our sessions.
        <br/>
        <br/>
        Having personally faced significant loss and trauma, I deeply believe in the concept that we are always "in bloom." Even when it feels like you're stuck, I see you as ever-growing and resilient. Let me be a source of support as you explore and discover just how resilient you truly are.      </p>

    </section>
  );
}