import './styles/services.css';
import { Link } from 'react-router-dom';

export default function services() {
    return (
        <div className="services">

            <div className="introductory">
                <h1>Free Video Introduction Session</h1>
                <p>
                    Ready to get started? We will connect via a secure video platform to begin forming a
                    therapeutic plan and working on your goals.
                    <br />
                    <br />
                    Cost: Free
                </p>
                <Link>
                Book Now
                </Link>
            </div>

            <div className="session">
                <h1>50 Minute Session</h1>
                <p>
                    Ready to get started? We will connect via a secure video platform to begin forming a
                    therapeutic plan and working on your goals.
                    <br />
                    <br />
                    Cost: $160
                </p>
                <Link>
                Book Now
                </Link>
            </div>

        </div>
    )
}