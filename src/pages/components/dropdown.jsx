import '../styles/dropdown.css';
import { Link } from 'react-router-dom';

export default function dropdown() {
    return (
        <div className="bannerMenu">
            <div className="logo">
                <div>
                    <h1 className="logoTitle">In Bloom</h1>
                </div>
                <div>
                    <p className="logoWords">therapy and wellness</p>
                </div>
            </div>
            <Link to='/inbloomtherapy'> Home </Link>
            <Link to='/about'> About </Link>
            <Link to='/services'> Services </Link>
            {/* <Link to='/partners'> Partners </Link> */}
            <Link to='/location'> Contact </Link>
            <Link to='/booking' className="bookingBtn">BOOK NOW</Link>
        </div>
    )
}