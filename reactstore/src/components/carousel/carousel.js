import React, { useEffect, useState } from 'react';

import './carousel.css';

import mainImg from '../../assets/images/landingPageImg1.webp'
import mainImg1 from '../../assets/images/landingPageImg2.webp'
import mainImg2 from '../../assets/images/landingPageImg3.webp'
import mainImg3 from '../../assets/images/landingPageImg4.webp'

import mobileImg1 from '../../assets/images/mobile/landingPageImg1-mobile.webp'
import mobileImg2 from '../../assets/images/mobile/landingPageImg2-mobile.webp'

const fadeImages = [

];

const fadeImagesDesktop = [
    mainImg,
    mainImg1,
    mainImg2,
    mainImg3
];

const fadeImagesMobile = [
    mobileImg1,
    mobileImg2
];

function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentImg, setCurrentImg,] = useState(0);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);


    useEffect(() => {
        let img = document.getElementsByClassName("main-img-desktop")

        const handleWindowResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleWindowResize);

        if (windowWidth < 1000) {
            fadeImages.splice(0, fadeImages.length, ...fadeImagesMobile);
        } else {
            fadeImages.splice(0, fadeImages.length, ...fadeImagesDesktop);
        }

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

    }, [currentIndex, windowWidth])

    useEffect(() => {

        const interval = setInterval(() => {
            setCurrentIndex(count => count + 1)
        }, 10000);

        return () => clearInterval(interval);

    }, [currentIndex])

    return (
        <div className="carousel-container">
            <div className="btns-carousel">
                <div className="btn-left" onClick={() => setCurrentIndex(count => count - 1)}></div>
                <div className="btn-right" onClick={() => setCurrentIndex(count => count + 1)}></div>
            </div>
            <img className="main-img-desktop" src={currentImg} alt="fail" />
            <div className="commercial-text">
                <span>AUTUMN WINTER COLLECTION 2022</span>
                <span className="sub-title">Stay warm and cosy</span>
                <span className="browse-link">Browse Here</span>
            </div>
        </div>
    );
}

export default Carousel;