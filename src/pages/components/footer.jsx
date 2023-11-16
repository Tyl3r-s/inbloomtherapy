import '../styles/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function footer() {
    return (
        <section className="footer">
            <div className="contact-info">
                <p>58 Rossland Rd W, Unit 205</p>
                <p>Oshawa ON L1G 2V5</p>
                <p>madison@inbloomtherapy.ca</p>
                <p>(905) 626-1741</p>
            </div>
            <div className="contact-links">
                <FontAwesomeIcon className="brandIcons" icon="fa-brands fa-linkedin" />
                <FontAwesomeIcon className="brandIcons" icon="fa-brands fa-facebook" />
                <FontAwesomeIcon className="brandIcons" icon="fa-brands fa-instagram" />
            </div>
        </section>
    )
}