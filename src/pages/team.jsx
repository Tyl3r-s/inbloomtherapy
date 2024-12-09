import React from 'react';
import './styles/partners.css'
import './styles/about.css'
import Ashley from '../assets/HHAshley-17.jpg';
import Sara from '../assets/Sara.jpg';
import Madison from '../assets/c96a6cbd-3100-4c58-bf14-d041a37a9700.jpg';
import Karina from '../assets/thumbnail_Profile Pic_Karina Cheung.png';
import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <section className="partner-landing about-section general">

            <img src={Madison} alt="" className="me" />

            <p className="aboutIntro">
                <h2>Madison Dean (she/her) </h2>
                <br />
                Master of Social Work
                <br />
                Registered Social Worker
                <br />
                Clinical Director
                <br />
                <br />
                {/* <img src={Verified} alt="" className="verified" /> */}
            </p>




            <p className="aboutText">
                I am a registered social worker and psychotherapist, and my passion for mental health stems from personal experience. From a young age, I watched my loved ones struggle with their mental health, experiencing the profound impact first-hand. Most significantly, I supported my brother throughout most of his life, as he struggled with severe anxiety, depression, suicidality, and addictions. Naturally, I became curious about how I could help on a larger scale. Through education and experience, I discovered that there are ways to help – ways to create space, understanding, and healing; that we do not have to be stuck or alone.
                <br />
                <br />
                In 2020, my brother tragically died, ultimately because of his lifelong struggle with mental illness. Although I was already a passionate therapist prior to my brother’s death, it has since become my mission to honour him by providing others with the professional support and care that he did not receive - this tragedy has given new meaning to my work. I intimately understand what it means to struggle as a teen and young adult. As someone who has personally struggled with anxiety, trauma, and grief, I also understand what it means to heal.
                <br />
                <br />
                With over 8 years of experience providing services to teens, young adults and families across Durham Region and Toronto, I know that there is no one-size-fits-all approach to therapy. What works for you may not work for someone else, and that's perfectly okay. I believe that you are the expert on yourself. I'm here to collaborate with you, supporting you every step of the way.
                <br />
                <br />
                As a therapist, I'm dedicated to providing you with evidence-based practices, tools, and skills, ensuring you feel confident that you're receiving the support you need. On a personal level, I value connection, compassion, humour, and warmth. While I tailor my approach to each individual, you can always expect me to show up as my authentic self – offering a down-to-earth, genuine atmosphere in our sessions.
                <br />
                <br />
                Having personally faced significant loss and trauma, I deeply believe in the concept that we are always "in bloom." Even when it feels like you're stuck, I see you as ever-growing and resilient. Let me be a source of support as you explore and discover just how resilient you truly are.
            </p>

            <div className="createSesh">
                <Link to="https://inbloomtherapy.janeapp.com/#/staff_member/1" target="_blank">
                    Create Appointment
                </Link>
            </div>

            <img src={Sara} alt="" className="me" />

            <p className="aboutIntro">
                <h2>Sara Rutkowski</h2>
                <br />
                Master of Social Work
                <br />
                Registered Social Worker
                <br />
            </p>

            <p className="aboutText">
                Growing up, Sara always knew that she wanted to work with people. Sara received her Bachelor’s of Social Work from Toronto Metropolitan University (formally Ryerson University), and a couple of years later, completed her Master’s of Social Work at Renison University College, through the University of Waterloo. Since then, she has worked in various roles supporting youth and adults with their mental health.                <br />
                <br />
                Sara has an interest in helping and supporting people with their anxiety, depression, life changes, and managing stress. Sara’s energy and warmth for connecting with others forms a safe setting  where clients can feel seen, heard, validated, and empowered to make meaningful change in their life.  Her practice is influenced by many therapeutic modalities, such as strengths-based therapy, person-centered therapy, and cognitive behavioural therapy.            </p>

            <div className="createSesh">
                <Link to="https://inbloomtherapy.janeapp.com/#/staff_member/2" target="_blank">
                    Create Appointment
                </Link>
            </div>

            <img src={Karina} alt="" className="me" />

            <p className="aboutIntro">
                <h2>Karina Cheung (she/her) </h2>
                <br />
                Master of Social Work
                <br />
                Registered Social Worker
                <br />
                <br />
            </p>




            <p className="aboutText">
                It is okay to feel sad, frustrated, anxious, angry, or lost. Having feelings doesn’t make you a negative person. It makes you human. Whatever you are facing, I am here to offer a safe, non-judgmental space for you to share freely.
                <br />
                <br />
                I acquired a Master of Social Work degree from the University of Toronto with a specialization in health and mental health. I have years of experience supporting youth and adults with mental health challenges and difficult life transitions across school and hospital settings from a person-centered, culturally sensitive approach.
                <br />
                <br />
                I work with young people and parents to cope with anxiety, depression, learning disabilities (dyslexia, autism, and ADHD), emotional dysregulation, grief and bereavement, trauma, immigration adjustment, and chronic illnesses. With the belief that everyone’s healing journey is unique, I take the time to understand your lived experience and pursue a collaborative alliance where you feel validated and empowered. I also value authenticity and connection in relationships. 
                <br />
                <br />
                Received training in Cognitive Behavioural Therapy (CBT), Dialectical Behaviour Therapy (DBT), Acceptance and Commitment Therapy (ACT), Mindfulness, and Emotion-Focused Therapy (EFT), I practice a holistic approach and tailor the therapy sessions that align with your worldviews and preferences. Services can be provided in English, Cantonese, or Mandarin. Let’s embark on this journey of transformation and empowerment together! 
                <br />
                <br />
            </p>

            <div className="createSesh">
                <Link to="https://inbloomtherapy.janeapp.com/#/staff_member/3" target="_blank">
                    Create Appointment
                </Link>
            </div>

        </section>
    );
}