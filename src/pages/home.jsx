import React from 'react';
import { Link } from 'react-router-dom';
import './styles/home.css';


export default function Home() {
  return (
    <section className="landing general">

      <div className="welcomeText landingSection">
        <p>
          IN PERSON & VIRTUAL THERAPY FOR TEENS AND YOUNG ADULTS
        </p>
      </div>

      <div className="booking landingSection">
      
          <h1>
            How can I help?
          </h1>
        
        <div className="anxietyDepression ">
          <h3>Anxiety & Depression</h3>
          <p>
          I work with individuals experiencing social anxiety, stress, depression, obsessive thoughts or burn-out. 
          </p>
        </div>
        <div className="depression">
          <h3>Trauma</h3>
          <p>
          Psychotherapy is beneficial for individuals who have experienced trauma, including sexual abuse, domestic abuse, loss and grief. 
          </p>
        </div>
        <div className="Grief">
          <h3>Grief</h3>
          <p>
            Nothing fucks you up more than when someone dies.
          </p>
        </div>
        <div className="lifeChanges">
          <h3>Life Changes</h3>
          <p>
          Transitions in school, career and future planning can sometimes be challenging to our mental health. I can help if this is your experience.  
          </p>
        </div>
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