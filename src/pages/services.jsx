import './styles/services.css';
import { Link } from 'react-router-dom';

export default function services() {
    return (
        <div className="services general">

            <div className="introductory">
                <h1>15 Minute Consultation</h1>
                <p>
                    We believe in the importance of finding the right therapist for you. Not everyone you meet is going to be your cup of tea, and that’s totally okay! We offer a free 15 minute video or phone consultation so that we may chat and get to know each other a bit before you book your first session. If it turns out that one of us is not the best fit for your needs, we are happy to refer you to another professional.
                </p>
                <h4>Cost: Free</h4>
                <section className="btnDiv">
                    <Link to="https://inbloomtherapy.janeapp.com/#/list" target="_blank">
                        Create Appointment
                    </Link>
                </section>
            </div>

            <div className="teenSession">
                <h1>Individual Therapy</h1>
                <p>
                    Are you or your teen struggling with anxiety, depression, anger, self-harming behaviours, grief, or a significant life change? Are you looking for skills to help you cope with these feelings? Maybe you are feeling overwhelmed. Are you looking for someone to confide in and help you make sense of it all?
                    <br />
                    <br />
                    Being a young person is hard enough – figuring out your identity, changing schools or applying to new jobs, complicated friendships, relationships, social media… the list goes on! Our hope is that you will not have to face these challenges alone.
                    <br />
                    <br />
                    Individual therapy is time dedicated to you – to talk about and work on whatever feels most important to you.
                </p>
                <h4>Cost: $150</h4>
                <section className="btnDiv">
                    <Link to="https://inbloomtherapy.janeapp.com/#/list" target="_blank">
                        Create Appointment
                    </Link>
                </section>
            </div>

            <div className="session">
                <h1>Parent Consultation</h1>
                <p>
                    Being a parent is hard, to say the least. Being a parent to a young person who is struggling, often feeling sad, anxious or angry… how do you do it? There’s no manual for this.                    
                    <br />
                    <br />
                    We offer parent consultations so that you can get support while you do your best to support your child. This is a space where you can talk openly about the challenges your family may be facing, and we can discuss strategies to best support your loved one.
                </p>
                <h4>Cost: $150</h4>
                <section className="btnDiv">
                    <Link to="https://inbloomtherapy.janeapp.com/#/list" target="_blank">
                        Create Appointment
                    </Link>
                </section>
            </div>

        </div>
    )
}