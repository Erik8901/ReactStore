import './landingPage.css';
import mainImg from '../../assets/images/landingPageImg1.jpg'

function LandingPage() {
    return (
        <div className="landing-page-main-container">
            <img src={mainImg} alt="Image fail" />
            <div className="commercial-text">
                <h1>AUTUMN/WINTER COLLECTION 2022</h1>
            </div>
        </div>
    );
}

export default LandingPage;