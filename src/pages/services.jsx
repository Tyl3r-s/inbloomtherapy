import './styles/services.css';
import { Link } from 'react-router-dom';

export default function services() {
    return (
        <div className="services">

            <div className="introductory">
                <h1>15 Minute Consultation</h1>
                <p>
                    I wholeheartedly believe in the significance of finding the right connection in therapy. Comfort and trust in your therapist are crucial for receiving the support you deserve. It's absolutely okay if not every therapist feels like the right fit for you—I completely understand.
                    To facilitate this process, I offer a complimentary 15-minute consultation. This gives us an opportunity to chat, get to know each other a bit, and gauge whether we're a good match for each other. If it turns out that I might not be the best fit for your needs, I'm more than happy to provide a referral to another clinician who might better suit your preferences and needs.
                    Your comfort and the effectiveness of our therapeutic journey together are my top priorities.
                    <br />
                    <br />
                    Cost: Free
                </p>
                <Link>
                    Book Now
                </Link>
            </div>

            <div className="teenSession">
                <h1>Teen Therapy</h1>
                <p>
                    Navigating the teenage years has always been a complex journey—filled with personal growth, identity exploration, friendship dynamics, and the onset of romantic experiences. However, today's teens face an amplified set of challenges, especially amidst the pressures of social media and online interactions, which can often include bullying. The emphasis on self-image and the weight of societal expectations can be overwhelming. Teenagerhood comes with a whirlwind of emotions, thoughts, and pressures, and too often, teens face these challenges alone.
                    With years of experience working closely with teens, I deeply understand the significance of connection, warmth, transparency, and perhaps most importantly, the use of humor. My goal is to create a supportive, relaxed, and authentic space where your teen feels acknowledged, understood, and empowered. I'm committed to fostering a therapeutic relationship that allows your teen to feel safe in addressing the pain, anxiety, sadness, or any other emotional burdens they may be carrying.
                    My approach centers on building trust and rapport with your teen, offering an environment where they can feel seen, heard, and validated. If you believe I could be the right fit to support your teen, I invite you to schedule a 15-minute consultation. This brief meeting will allow us to connect and explore how I can best assist your teen during this crucial phase of their life journey.
                    <br />
                    <br />
                    Cost: $160
                </p>
                <Link>
                    Book Now
                </Link>
            </div>

            <div className="session">
                <h1>Individual Therapy</h1>
                <p>
                    Taking that first step towards therapy isn't always easy, and I'm truly glad you're here. My aim is to craft a space where you can find relief—a sanctuary where together, we can lighten the burdens you carry. Whether it's anxiety, depression, traumatic events, the loss of a loved one, or navigating significant life changes, you don't have to face these challenges alone.
                    Creating an environment that's warm, deeply connected, honest, and above all, safe, is my passion. My aspiration is that through our collaboration, you'll feel empowered and a bit lighter. Individual therapy is dedicated time for you, tailored to honour your unique needs and goals.
                    To gain more insight into my therapeutic approach, please explore my "about" page. You may also schedule a complimentary 15-minute consultation so that we may chat and get to know each other.
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