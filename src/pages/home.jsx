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
          At In Bloom Therapy, my mission is to create a warm and empowering space for you to foster your mental and emotional wellbeing. I am passionate about providing high-quality therapeutic services that are specifically tailored to meet the unique needs and hopes of each individual, with a focus on compassion, authenticity, and understanding. My hope is to support you in navigating life’s challenges and rediscovering how resilient you really are.
        </p>

      </div>

      <div className="booking landingSection">

        <h1>
          How can I help?
        </h1>
        <br />
        <p className="helpIntroduction">
          I specialize in working with teens, young adults, and all female-identifying folks.
        </p>

        <div className="helpContainer">

          <div className="anxietyDepression help">
            <h3>Anxiety & Depression</h3>
            <p>
              I support individuals struggling with social anxiety, stress, lack of motivation, obsessive thoughts, and/or burn-out.            </p>
          </div>
          <div className="depression help">
            <h3>Trauma</h3>
            <p>
              Trauma changes us, our relationships, and how we see the world. I support individuals in processing and working through various traumatic life events.            </p>
          </div>
          <div className="Grief help">
            <h3>Grief</h3>
            <p>
              I understand first-hand how debilitating, isolating, and traumatic the loss of a loved one can be. I can support you in navigating this painful time.            </p>
          </div>
          <div className="lifeChanges help">
            <h3>Life Changes</h3>
            <p>
              Significant changes in our relationships, family dynamics, schooling, or jobs can be exhausting. Allow me to help if you are struggling with a challenging transition.            </p>
          </div>
        </div>
      </div>

      <div className="bookNow">

        <div className="bookNowContainer">
          <p>Start your therapy journey by booking online with me now!
            <br />
            <br />
            I offer free 15 minute video sessions so we can get to know each-other.
            <br />
            <br />
            If you are ready to jump right in you can also book your first full session!
          </p>
          <Link target="_blank" to="https://inbloomtherapy.janeapp.com/#staff_member/1">BOOK NOW</Link>
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