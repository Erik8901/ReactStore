import React, { useEffect, useState } from 'react';
import { categoriesDefaultState, selectedCategoryState, savedSelectedCategoryState, openMainMenuState, openCategoryMenuState } from "../../../recoil_state";
import { useRecoilState } from 'recoil';
import {
    Link,
    useLocation
} from "react-router-dom";

//styles
import './CategoryMenu.css';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

function CategoryMenu() {
    const [categories] = useRecoilState(categoriesDefaultState)
    const [cats, setCats] = useState([])
    const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryState)
    const [savedCategory, setSavedCategory] = useRecoilState(savedSelectedCategoryState)
    const [openMenu, setOpenMenu] = useRecoilState(openCategoryMenuState);
    const [openMainMenu, setOpenMainMenu] = useRecoilState(openMainMenuState);

    const location = useLocation(); // React Hook
    const li = document.getElementsByClassName("category-li");

    useEffect(() => {
        if (categories) { setCats(categories.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1))) }

        const url = location.pathname
        const catUrl = url.split("/category/")

        if (catUrl.length < 2) {
            return;
        } else if (catUrl.length >= 2) {
            catUrl[1].replace("-", " ")
            setTimeout(() => {
                for (var i = 0; i < li.length; i++) {
                    if (li[i].innerHTML === catUrl[1].replace("-", " ")) {
                        li[i].style.color = "#696969";
                    } else {
                        li[i].style.color = "#000";
                    }
                }
            }, "10")
        }
    }, [openMenu, location])

    const selectCategory = (cat, index) => {
        setSelectedCategory(cat)
        setSavedCategory(cat)
        setOpenMainMenu(!openMainMenu);
        for (var i = 0; i < li.length; i++) {
            if (i === index) {
                li[i].style.color = "#696969";
            } else {
                li[i].style.color = "#000";
            }
        }
    }
    //replace(/\s+/g, '-')
    return (
        <div className="category-menu-container">
            <div className="top-nav-menu-container">
                <div className="go-back-menu-container" onClick={() => setOpenMenu(!openMenu)}>
                    <FontAwesomeIcon icon={faArrowLeft} size="xl" className="arrow-back-icon" />
                    <span className="back-txt" >Back</span>
                </div>
                <span className="title-categories">Categories</span>
            </div>
            <div className='categories-list-container'>
                {cats.map((category, index) => {
                    return <Link to={category.replace(' ', '-')} key={index}>
                        <li className="category-li" key={index} categoryid={index} onClick={() => selectCategory(category, index)}>
                            {category}
                        </li>
                    </Link>
                })}
            </div>
        </div >
    );
}

export default CategoryMenu;