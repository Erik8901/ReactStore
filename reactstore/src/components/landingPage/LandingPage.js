import React from 'react';
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import './landingPage.css';

import mainImg from '../../assets/images/landingPageImg1.jpg'
import mainImg1 from '../../assets/images/landingPageImg2.jpg'
import mainImg2 from '../../assets/images/landingPageImg3.jpg'
import mainImg3 from '../../assets/images/landingPageImg4.jpg'

const fadeImages = [
    mainImg,
    mainImg1,
    mainImg2,
    mainImg3
];

function LandingPage() {
    return (
        <div className="landing-page-main-container">
            <Fade duration={4000}>
                <div className="each-fade">
                    <img src={fadeImages[0]} alt="fail to load" />
                </div>
                <div className="each-fade">
                    <img src={fadeImages[1]} alt="fail to load" />
                </div>
                <div className="each-fade">
                    <img src={fadeImages[2]} alt="fail to load" />
                </div>
                <div className="each-fade">
                    <img src={fadeImages[3]} alt="fail to load" />
                </div>
            </Fade>
            <div className="commercial-text">
                <h1>AUTUMN/WINTER COLLECTION 2022</h1>
            </div>
        </div>
    );
}

export default LandingPage;