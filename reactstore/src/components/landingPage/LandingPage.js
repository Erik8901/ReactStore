import './landingPage.css';
import mainImg from '../../assets/images/landingPageImg1.jpg'
import mainImg2 from '../../assets/images/landingPageImg2.jpg'
import mainImg3 from '../../assets/images/landingPageImg3.jpg'
import mainImg4 from '../../assets/images/landingPageImg4.jpg'

function LandingPage() {
    return (
        <div className="landing-page-main-container">
            <img src={mainImg} alt="Image fail" />
            <img src={mainImg2} alt="Image fail" />
            <img src={mainImg3} alt="Image fail" />
            <img src={mainImg4} alt="Image fail" />
            <div className="commercial-text">
                <h1>AUTUMN/WINTER COLLECTION 2022</h1>
            </div>
        </div>
    );
}

export default LandingPage;