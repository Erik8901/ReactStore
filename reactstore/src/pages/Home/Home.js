import React, { useEffect } from 'react';
import { openMainMenuState } from "../../recoil_state";
import { useRecoilState } from 'recoil';
import Carousel from '../../components/carousel/carousel'

import './Home.css';

function LandingPage() {
    const [openMainMenu, setOpenMainMenu] = useRecoilState(openMainMenuState);
    useEffect(() => {
        if (openMainMenu == true) {
            setOpenMainMenu(!openMainMenu)
        }

    }, [])
    return (
        <div className="landing-page-main-container">
            <Carousel />
        </div>
    );
}

export default LandingPage;