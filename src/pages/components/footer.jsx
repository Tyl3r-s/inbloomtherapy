import '../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function footer() {
    return (
        <section className="footer">
            <div className="contact-info">
                <p>58 Rossland Rd W, Unit 205</p>
                <p>Oshawa ON L1G 2V5</p>
                <p><a href="mailto: abc@example.com">madison@inbloomtherapy.ca</a></p>
                <p><a href="tel:9056261741">905 626 1741</a></p>
            </div>
            <div className="contact-links">
                <a href="href='https://www.instagram.com/inbloom.therapyandwellness/'"><FontAwesomeIcon className="brandIcons" icon="fa-brands fa-facebook" /></a>
                <a href="https://www.facebook.com/profile.php?id=61553640725294"><FontAwesomeIcon className="brandIcons" icon="fa-brands fa-instagram" /></a>
            </div>
        </section>
    )
}