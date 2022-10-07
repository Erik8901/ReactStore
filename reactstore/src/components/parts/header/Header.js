import React from 'react';
import { openMainMenuState } from "../../../recoil_state";
import { useRecoilState } from "recoil";

// get our fontawesome imports
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


//styles
import './Header.css';

function Header() {
    const [openMainMenu, setOpenMainMenu] = useRecoilState(openMainMenuState);

    const openMenu = () => {
        setOpenMainMenu(!openMainMenu)
    }
    return (
        <div className="header-main-container">
            <h1>React Store Header</h1>
            <FontAwesomeIcon icon={faBars} size="lg" className="hamburger-icon" onMouseEnter={openMenu} onClick={openMenu} />
        </div>
    );
}

export default Header;