import React from 'react';
import { Link } from 'react-router-dom';
import './styles/home.css';


export default function Home() {
  return (
    <section className="landing general">

      <div className="welcomeText landingSection">
        <p>
          Where Seeds of Self-Compassion Blossom into Beautiful Souls.
        </p>
      </div>
      <div className="booking landingSection">
        <Link to='/'> book a complimentary consultation </Link>
      </div>

      <div className="learnMore landingSection">
        <div className="readMore">
          <p>Are impacted by an anxiety, depression, or grief? I am here to assist you.</p>
          <Link to='/'> LEARN ABOUT ME </Link>
        </div>
        <div className="createBooking">
          <p>I want to get to know you. Book a consultation, or create a virtual or in person appointment.</p>
          <Link to='/'> CREATE BOOKING </Link>
        </div>
        <div className="commonQuestions">
          <p>I believe wellness ultimately requires attention to our entire body</p>
          <Link to='/'> SEE PARTNERS </Link>
        </div>
        <div className="seePartners">
          <p>For any other questions or concerns, please feel absolutely free to reach out to me.</p>
          <Link to='/'> CONTACT </Link>
        </div>
      </div>

      <div className="landingQuote landingSection">
        <h4>
          "The lotus flower blooms most beautifully from the deepest and thickest mud." <br /> - Buddhist Proverb
        </h4>
      </div>

    </section>
  );
}