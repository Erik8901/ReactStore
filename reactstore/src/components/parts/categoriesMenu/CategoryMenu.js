import React, { useEffect, useState } from 'react';
import { categoriesDefaultState, selectedCategoryState, savedSelectedCategoryState, openCategoryMenuState } from "../../../recoil_state";
import { useRecoilState } from 'recoil';
import {
    Link
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

    useEffect(() => {
        if (categories) { setCats(categories.map(cat => cat.charAt(0).toUpperCase() + cat.slice(1))) }
    }, [openMenu])

    const selectCategory = (cat) => {
        setSelectedCategory(cat)
        setSavedCategory(cat)
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

export default CategoryMenu;