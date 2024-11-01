import React, { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { openMainMenuState } from "../../recoil_state";

//styles
import './Career.css';

function Career() {
    const [openMainMenu, setOpenMainMenu] = useRecoilState(openMainMenuState);

    useEffect(() => {
        if (openMainMenu == true) {
            setOpenMainMenu(!openMainMenu)
        }
    }, [])

    return (
        <div className="page-main-container">
            <h1>Career Page</h1>
        </div>
    );
}

export default Career;