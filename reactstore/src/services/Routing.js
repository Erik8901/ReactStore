import React from 'react';
import LandingPage from '../components/landingPage/LandingPage';
import Products from '../pages/Products';
import { useRecoilState } from 'recoil';
import { selectedCategoryState, savedSelectedCategoryState } from "../recoil_state";
import {
    Routes,
    Route,
} from "react-router-dom";

function Routing() {
    const [selectedCategory] = useRecoilState(selectedCategoryState)
    const [categoryList] = useRecoilState(savedSelectedCategoryState)

    return (
        <div className="Routes">
            <Routes>
                <Route exact path='/' element={<LandingPage />} />
                {/* <Route path={'/category/' + selectedCategory} element={<Products />} /> */}
                <Route path={'/category/:categoryList'} element={<Products />} />
            </Routes>
        </div>
    );
}

export default Routing;