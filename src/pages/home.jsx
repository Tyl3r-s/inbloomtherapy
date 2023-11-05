import React from 'react';
import { Link } from 'react-router-dom';
import './styles/home.css';


export default function Home() {
  return (
    <section className="landing general">

      <div className="welcomeText landingSection">

        <p>
          <h3>A message from Madison...</h3>
          At In Bloom Therapy, my mission is to create a nurturing and empowering space for you to foster your mental and emotional well-being. I am dedicated to providing high-quality therapy services tailored to the unique needs of each individual, with a focus on empathy, understanding, and respect. My goal is to support you in navigating life's challenges, empowering you to overcome obstacles, build resilience, and achieve your full potential.
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

      <div className="bookNow">

        <div className="bookNowContainer">
          <p>Start your therapy journey by booking online with me now.
            <br />
            <br />
            I offer free 15 minute video sessions so we can get to know each-other.
            <br />
            <br />
            If you are ready to jump right in you can also book your first full session.
          </p>
        </div>

        <Link>Book Now</Link>
      </div>

      <div className="landingQuote landingSection">
        <h4>
          "The lotus flower blooms most beautifully from the deepest and thickest mud." <br /> - Buddhist Proverb
        </h4>
      </div>

    </section>
  );
}