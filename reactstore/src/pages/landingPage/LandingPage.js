import React, { useEffect } from 'react';
import { openMainMenuState } from "../../recoil_state";
import { useRecoilState } from 'recoil';
import Carousel from '../../components/carousel/carousel'

import './landingPage.css';

function LandingPage() {
    const [openMainMenu] = useRecoilState(openMainMenuState);

    useEffect(() => {
        let landingPageContainer = document.getElementsByClassName("landing-page-main-container");

        if (openMainMenu === true) {
            landingPageContainer[0].style.height = "100vh";
        } else {
            landingPageContainer[0].style.height = "auto";
        }
    }, [openMainMenu])

    return (
        <div className="landing-page-main-container">
            <Carousel />
        </div>
    );
}

export default LandingPage;