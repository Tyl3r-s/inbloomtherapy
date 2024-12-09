import React from 'react';
import './styles/about.css'
import portrait from '../assets/c96a6cbd-3100-4c58-bf14-d041a37a9700.jpg';
import { Link } from 'react-router-dom';
import Verified from '../assets/psychology-today-verified-logo-transparent-hd-png-download.png';

export default function Home() {
  return (
    <section className="about-section general">

      <p className="aboutIntro aboutTitle">
        <h2>About</h2>
      </p>

      <p className="aboutText">
        Hello and welcome! We are so glad you’re here.
        <br />
        <br />
        In Bloom Therapy and Wellness is a mental health therapy practice specializing in working with teens and young adults.          <br />
        <br />
        Our goal at In Bloom is to create a space that is dedicated to young people; a space where teens and young adults can feel heard, validated, safe and empowered; a space where young people can show up comfortably as themselves.          <br />
        <br />
        We are a team of authentic, down-to-earth therapists committed to supporting you in your healing; whatever that may look like for you.        
        {/* Click here to learn more about our team.         
        <br /> */}
      </p>

      <p className="aboutIntro">
        <h2>FAQ</h2>
      </p>

      <p className="aboutText">
        <h3>Do you also accept adult clients?</h3>
        <br />
        Absolutely! Although In Bloom specializes in providing therapy to teens and young adults, we also offer individual therapy services to adults of any age. Every member of our team has experience in working with adults as well, and we are happy to provide a free 15 minute consultation so that you can decide if we are the right fit.          
        <br />
        <br />
        <h3>Do you accept insurance? </h3>
        <br />
        In Bloom does not offer direct billing to insurance companies; however, most insurers offer coverage for therapy (MSW or RP). We require payment upfront and send a receipt via email that you may submit to your insurance company for reimbursement.          
        <br />
        <br />
        <h3>How do I get started? </h3>
        <br />
        Getting started can sometimes be the hardest part. We totally understand, and we are happy to take it step-by-step with you. We offer a free 15 minute consultation if you’d like to chat and decide if we are the right fit for you first. Alternatively, if you’d like to jump right in, you can go ahead and schedule a full first session with one of our therapists. Online scheduling is available for consultations and sessions. If that sounds too overwhelming, please feel free to start by reaching out via telephone or email and we can figure it out together.   
      </p>

    </section>
  );
}