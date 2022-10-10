import React, { useEffect, useState } from 'react';
import LandingPage from '../components/landingPage/LandingPage';
import Products from '../pages/Products';
import { useRecoilState } from 'recoil';
import { selectedCategoryState } from "../recoil_state";

import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useParams
} from "react-router-dom";



function Routing() {
    const [selectedCategory, setSelectedCategory] = useRecoilState(selectedCategoryState)

    useEffect(() => {

    }, [])
    return (
        <div className="Routes">
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path={selectedCategory} element={<Products />} />
            </Routes>

        </div>
    );
}

export default Routing