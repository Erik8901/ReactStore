import React from 'react';
import LandingPage from '../components/landingPage/LandingPage';
import Products from '../pages/Products';
import {
    Routes,
    Route
} from "react-router-dom";

function Routing() {

    return (
        <div className="Routes">
            <Routes>
                <Route exact path='/' element={<LandingPage />} />
                <Route path={'/category/:categoryList'} element={<Products />} />
            </Routes>
        </div>
    );
}

export default Routing;