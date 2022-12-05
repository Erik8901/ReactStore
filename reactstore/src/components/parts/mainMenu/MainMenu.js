import React, { useEffect, useState } from 'react';
import { openMainMenuState, categoriesDefaultState, selectedCategoryState, savedSelectedCategoryState } from "../../../recoil_state";
import { useRecoilState } from 'recoil';
import {
    Link
} from "react-router-dom";


//styles
import './mainMenu.css';

function MainMenu() {
    const [openMainMenu, setOpenMainMenu] = useRecoilState(openMainMenuState);
    const [categories] = useRecoilState(categoriesDefaultState)
    const [cats, setCats] = useState([])
    const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryState)
    const [savedCategory, setSavedCategory] = useRecoilState(savedSelectedCategoryState)

    useEffect(() => {
        if (categories) { setCats(categories.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1))) }
    }, [])

    const closeMainMenu = () => {
        setOpenMainMenu(!openMainMenu)
    }

    const selectCategory = (cat) => {
        setSelectedCategory(cat)
        setSavedCategory(cat)
    }
    //replace(/\s+/g, '-')
    return (
        <div className="main-menu-container" onMouseLeave={closeMainMenu}>
            <h3 className="title-categories">Categories</h3>
            <div className='categories-list-container'>
                {cats.map((category, index) => {
                    return <Link to={'/category/' + category.replace(' ', '-')} key={index}>
                        <li className="category-li" key={index} categoryid={index} onClick={() => selectCategory(category)}>
                            {category}
                        </li>
                    </Link>
                })}
            </div>
        </div >
    );
}

export default MainMenu;