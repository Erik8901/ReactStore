import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { openMainMenuState } from "../../recoil_state";

//styles
import './About.css';

import AboutImg1 from '../../assets/images/Desktop/AboutPageImages/AboutUsWoman650.webp'
import AboutImg2 from '../../assets/images/Desktop/AboutPageImages/AboutPageMen650.webp'
import AboutImg3 from '../../assets/images/Desktop/AboutPageImages/AboutPageKids650.webp'

function About() {
    const [openMainMenu, setOpenMainMenu] = useRecoilState(openMainMenuState);

    useEffect(() => {
        if (openMainMenu === true) {
            setOpenMainMenu(!openMainMenu)
        }
    }, [])

    return (
        <div className="page-main-container">
            <h1>About Us</h1>
            <div className="about-page-info-container">
                <div className="info-container-1">
                    <img alt="img-fail" className="about-page-img" src={AboutImg1}></img>
                    <div className="about-page-info">
                        <h2>Title One</h2>
                        <span className="info-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it
                            to make a type specimen book </span>
                    </div>
                </div>
                <div className="info-container-2">
                    <img alt="img-fail" className="about-page-img" src={AboutImg2}></img>
                    <div className="about-page-info">
                        <h2>Title Two</h2>
                        <span className="info-text-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it
                            to make a type specimen book</span>
                    </div>
                </div>
                <div className="info-container-1">
                    <img alt="img-fail" className="about-page-img" src={AboutImg3}></img>
                    <div className="about-page-info">
                        <h2>Title Three</h2>
                        <span className="info-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it
                            to make a type specimen book</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;