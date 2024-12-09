import React from 'react';
import { Link } from 'react-router-dom';
import portrait from '../assets/371aedee-b304-4146-99e6-8f9b36329215.jpg';
import './styles/home.css';


export default function Home() {
  return (
    <section className="landing general">

      <div className="welcomeText landingSection">

        <img src={portrait} alt="" className="me" />

        <p>
          Are you or your teen struggling with anxiety, depression, or anger? How about self-harming behaviours, grief, or a major life change? Allow us to help.
          <br />
          <br />
          Our goal at In Bloom Therapy is to create a space that is collaborative and non-judgemental. A warm space where you can feel safe, accepted, and supported.
        </p>

      </div>

      <div className="booking landingSection">

        <h1>
          How can we help?
        </h1>
        <br />
        <p className="helpIntroduction">
          We specialize in working with teens and young adults
        </p>

        <div className="helpContainer">

          <div className="anxietyDepression help">
            <h3>Anxiety & Depression</h3>
            <p>
              We support individuals struggling with social anxiety, stress, lack of motivation, obsessive thoughts, and/or burn-out.            </p>
          </div>
          <div className="depression help">
            <h3>Self-Harming</h3>
            <p>
              There are many different reasons why someone might cause harm to themselves. Let’s figure out what’s going on together – you don’t have to go through this alone.               </p>
          </div>
          <div className="Grief help">
            <h3>Grief</h3>
            <p>
              We understand how debilitating, isolating, and traumatic the loss of a loved one can be. We can support you in navigating this painful time.            </p>
          </div>
          <div className="lifeChanges help">
            <h3>Life Changes</h3>
            <p>
              Significant changes in our relationships, family dynamics, schooling, or jobs can be exhausting. Allow us to help if you are struggling with a challenging transition.            </p>
          </div>
        </div>
      </div>

      <div className="bookNow">

        <div className="bookNowContainer">
          <p>
            We understand that reaching out for support can be difficult. Please know that we can take it step-by-step together
            <br />
            <br />
            We can start with a free 15 minute phone or video consultation,
            <br />
            <br />
            Or, if you feel ready to jump right in, you can also schedule a full session.
          </p>
          <div className="homeLinks">
            <Link target="_blank" to="https://inbloomtherapy.janeapp.com/#/discipline/1/treatment/2">FREE CONSULT</Link>
            <Link target="_blank" to="https://inbloomtherapy.janeapp.com/#/list">FULL SESSION</Link>
          </div>
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