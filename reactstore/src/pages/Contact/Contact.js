import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { openMainMenuState } from "../../recoil_state";


//styles
import './Contact.css';

function Contact() {
    const [openMainMenu, setOpenMainMenu] = useRecoilState(openMainMenuState);

    useEffect(() => {
        if (openMainMenu == true) {
            setOpenMainMenu(!openMainMenu)
        }
    }, [])

    return (
        <div className="page-main-container">
            <h1>Contact Page</h1>
        </div>
    );
}
export default Contact;