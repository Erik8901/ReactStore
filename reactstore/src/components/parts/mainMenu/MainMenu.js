import React, { useEffect, useState } from 'react';
import { categoriesDefaultState, selectedCategoryState, savedSelectedCategoryState, openCategoryMenuState } from "../../../recoil_state";
import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import CategoryMenu from '../categoriesMenu/CategoryMenu';

//styles
import './mainMenu.css';

function MainMenu() {
    const navigate = useNavigate();
    const [menuList] = useState(["Home", "About", "Categories", "Style", "Career", "Contact"])
    const [categories] = useRecoilState(categoriesDefaultState)
    const [cats, setCats] = useState([])
    const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryState)
    const [savedCategory, setSavedCategory] = useRecoilState(savedSelectedCategoryState)
    const [openMenu, setOpenMenu] = useRecoilState(openCategoryMenuState);

    useEffect(() => {
        if (categories) { setCats(categories.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1))) }
    }, [])

    const openSelectedMenu = (menuItem) => {
        if (menuItem === "Categories") {
            setOpenMenu(!openMenu)
        }

        if (menuItem !== "Categories") {
            navigate(menuItem)
        }
    }
    //replace(/\s+/g, '-')
    return (
        <div className="main-menu-container">
            <div className='main-menu-list'>
                {menuList.map((menuItem, index) => {
                    return (<li className="main-menu-li" key={index} id={index} onClick={() => openSelectedMenu(menuItem)} >
                        {menuItem}
                    </li>)
                })}
            </div>
            {openMenu ? <CategoryMenu /> : null}
        </div >
    );
}

export default MainMenu;