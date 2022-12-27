import React from 'react';

// get our fontawesome imports
import { faBars, faUser, faBagShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


//styles
import './HeaderTop.css';

function Header() {

    return (
        <div className="header-top-main-container">
            <span className="text-newsletter-sub">Subscribe to our newsletter and receive 10% off your first purchase!</span>
        </div >
    );
}

export default Header;