import React from 'react';
import './styles/partners.css'
import './styles/about.css'
import Ashley from '../assets/HHAshley-17.jpg';

export default function Home() {
    return (
        <section className="partner-landing about-section general">

            <img src={Ashley} alt="" className="Ashley" />

            <p className="aboutIntro">
                Ashley Alton
                <br />
                Registered Acupuncturist
                <br />
                Registered Traditional Chinese Medicine Practitioner
                <br />
            </p>

            <p className="aboutText">
                My clinical practice weaves together my experience and training in TCM, psychotherapy and crisis counseling.  I have always had a particular focus on women’s health and fertility care and am passionate about being an ally to couples as they try to conceive and grow their families. Western medicine has historically failed women, especially when it comes to gynecological conditions such as endometriosis and PCOS.  While there has been slow but steady improvement in this regard, a lot more needs to be done, and I endeavor to help women empower themselves with knowledge as they navigate choices that impact their health and wellbeing.
                <br/>
                <br/>
                In 2019 my husband and I moved from Toronto to Oshawa, but it wasn’t until January 2021 that I found the perfect clinic space to open Haven Healthcare. My understanding of stress and trauma, how they impact our nervous systems, and the fundamental importance of creating a sense of safety in order to facilitate healing has been the driving force behind this clinic space. My vision is to create a refuge for my patients, a place to access quality holistic healthcare in a calming, soothing environment. As a practitioner of mindfulness, I feel that the treatment starts as soon as you walk through the door.
            </p>
        </section>
    );
}