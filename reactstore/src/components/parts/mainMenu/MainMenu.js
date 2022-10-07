import React, { useEffect } from 'react';
import { openMainMenuState, categoriesDefaultState } from "../../../recoil_state";
import { useRecoilState } from 'recoil';


//styles
import './mainMenu.css';

function MainMenu() {
    const [openMainMenu, setOpenMainMenu] = useRecoilState(openMainMenuState);
    const [categories] = useRecoilState(categoriesDefaultState)
    const [cats, setCats] = useRecoilState(categoriesDefaultState)

    useEffect(() => {
        if (categories) { setCats(categories.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1))) }
    }, [])

    const closeMainMenu = () => {
        setOpenMainMenu(!openMainMenu)
    }
    return (
        <div className="main-menu-container" onMouseLeave={closeMainMenu}>
            <h3>Categories</h3>
            <div className='categories-list-container'>
                {cats.map((category, index) => {
                    return <li className="category-li" key={index} categoryid={index}>
                        {category}
                    </li>
                })}
            </div>
        </div>
    );
}

export default MainMenu;