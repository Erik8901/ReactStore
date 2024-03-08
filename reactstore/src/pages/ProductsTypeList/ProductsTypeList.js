import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedClothingType, savedSelectedCategoryState } from "../../recoil_state";
import { useLocation, useNavigate, Link } from "react-router-dom";


//styles
import './ProductsTypeList.css';

function ProductsTypeList() {
    const [typeOfClothes, setTypeOfClothes] = useRecoilState(selectedClothingType)
    const [category, setCategory] = useRecoilState(savedSelectedCategoryState)

    const navigate = useNavigate();
    const location = useLocation(); // React Hook

    useEffect(() => {
        setTypeOfClothes(location.pathname.split("/")[1])
        setCategory(location.pathname.split("/")[2])
    }, [location])

    return (
        <div className="page-main-container">
            <h1>ProductsTypeList Page </h1>
            <h1>{typeOfClothes} {category}</h1>
        </div>
    );
}

export default ProductsTypeList;