import React, { useEffect, useState } from 'react';

import './carousel.css';

import mainImg from '../../assets/images/landingPageImg1.webp'
import mainImg1 from '../../assets/images/landingPageImg2.webp'
import mainImg2 from '../../assets/images/landingPageImg3.webp'
import mainImg3 from '../../assets/images/landingPageImg4.webp'

const fadeImages = [
    mainImg,
    mainImg1,
    mainImg2,
    mainImg3
];

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImg, setCurrentImg,] = useState(0);

    useEffect(() => {
        let img = document.getElementsByClassName("main-img-desktop")

        if (currentIndex === 0) {
            img[0].classList.add("fade")
            setTimeout(function () { img[0].classList.remove("fade"); }, 1000);
            setCurrentImg(fadeImages[0])
        }

        setCurrentImg(fadeImages[currentIndex])

        if (currentIndex) {
            img[0].classList.add("fade")
            setTimeout(function () { img[0].classList.remove("fade"); }, 1000);
        }

        if (currentIndex === fadeImages.length) {
            setCurrentImg(fadeImages[0])
            setCurrentIndex(0)
        }

        if (currentIndex < 0) {
            setCurrentImg(fadeImages[fadeImages.length - 1])
            setCurrentIndex(fadeImages.length - 1)
        }

    }, [currentIndex])

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentIndex(count => count + 1)
        }, 10000);

        return () => clearInterval(interval);

    }, [currentIndex])

    return (
        <div className="landing-page-main-container">
            <div className="btns-carousel">
                <div className="btn-left" onClick={() => setCurrentIndex(count => count - 1)}></div>
                <div className="btn-right" onClick={() => setCurrentIndex(count => count + 1)}></div>
            </div>
            <img className="main-img-desktop" src={currentImg} alt="fail" />
            <div className="commercial-text">
                <h1>AUTUMN/WINTER COLLECTION 2022 </h1>
            </div>
        </div>
    );
}

export default Carousel;