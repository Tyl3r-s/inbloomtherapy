import './styles/contact.css';

export default function location() {
    return (
        <div className="location general">

            <div className="detailContainer">

                <div className="contactStatement">
                    <p>
                        In Bloom Therapy shares a cozy and relaxing space with <a href='https://www.havenhealthcare.ca/' target="_blank">Haven Healthcare</a>, offering you a holistic experience for your mental, physical, and emotional well-being.
                        <br />
                        <br />
                        The office is located on the 2nd floor of a building in central Oshawa with ample free parking available.
                        <br />
                        <br />
                        An elevator is available for those who need it. Please contact us in advance to arrange for this as we will need to meet you to operate the elevator. Please also advise of any other accessibility requirements you may have.
                    </p>
                </div>
                <div className="address">
                    <p>madison@inbloomtherapy.ca</p>
                    <p>905 626 1741</p>
                </div>

            </div>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2874.1419792145757!2d-78.87649488759585!3d43.91503453533534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d51c8da0eaaaab%3A0x278ba471e7ce511b!2s58%20Rossland%20Rd%20W%20Unit%20205%2C%20Oshawa%2C%20ON%20L1G%202V5!5e0!3m2!1sen!2sca!4v1699142018281!5m2!1sen!2sca"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    )
}