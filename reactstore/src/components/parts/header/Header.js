import React from 'react';
import { openMainMenuState, searchTerm } from "../../../recoil_state";
import { useRecoilState } from "recoil";
import { useNavigate } from 'react-router-dom';
import {
    Link
} from "react-router-dom";

// get our fontawesome imports
import { faBars, faUser, faBagShopping, faClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


//styles
import './Header.css';

function Header() {
    const navigate = useNavigate();
    const [openMainMenu, setOpenMainMenu] = useRecoilState(openMainMenuState);
    const [search, setSearch] = useRecoilState(searchTerm);

    const openMenu = () => {
        setOpenMainMenu(!openMainMenu)
    }

    const handleSearch = event => {
        setSearch(event.target.value);
        navigate('/Search-Results=' + event.target.value)

        // console.log('value is: ', search);
    };

    return (
        <div className="header-main-container">
            <Link className='header-h1' to="/">React Store Header</Link>
            {openMainMenu === false ? <FontAwesomeIcon icon={faBars} size="lg" className="hamburger-icon" onClick={openMenu} />
                : <FontAwesomeIcon icon={faClose} size="xl" className="hamburger-icon" onClick={openMenu} />}
            <div className="login-and-cart-container">
                <input type="text" placeholder='Enter keyword or Item' className="search-bar" onChange={handleSearch} />
                <FontAwesomeIcon icon={faUser} size="lg" className="user-login-icon" />
                <FontAwesomeIcon icon={faBagShopping} size="lg" className="user-cart-icon" />
            </div>
        </div >
    );
}

export default Header;