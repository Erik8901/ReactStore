import React, { useEffect } from 'react';
import LandingPage from '../components/landingPage/LandingPage';
import Products from '../pages/Products';
import { useRecoilState } from 'recoil';
import { selectedCategoryState } from "../recoil_state";
import {
    Routes,
    Route,
    BrowserRouter
} from "react-router-dom";

import './routes.css'

function Routing() {
    const [selectedCategory] = useRecoilState(selectedCategoryState)

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

export default Routing;