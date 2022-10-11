import React from 'react';
import { openMainMenuState } from "../../../recoil_state";
import { useRecoilState } from "recoil";
import {
    Link
} from "react-router-dom";

// get our fontawesome imports
import { faBars, faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";
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
            <Link className='header-h1' to="/">React Store Header</Link>
            <FontAwesomeIcon icon={faBars} size="lg" className="hamburger-icon" onMouseEnter={openMenu} onClick={openMenu} />
            <div className="login-and-cart-container">
                <input placeholder='Enter keyword or Item' className="search-bar" />
                <FontAwesomeIcon icon={faUser} size="lg" className="user-login-icon" />
                <FontAwesomeIcon icon={faBagShopping} size="lg" className="user-cart-icon" />
            </div>
        </div >
    );
}

export default Header;