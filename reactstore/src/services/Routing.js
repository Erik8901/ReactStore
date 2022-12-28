import React from 'react';
import LandingPage from '../components/landingPage/LandingPage';
import About from '../pages/About/About'
import Style from '../pages/Style/Style';
import Career from '../pages/Career/Career'
import Contact from '../pages/Contact/Contact'
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
                <Route exact path='/Home' element={<LandingPage />} />
                <Route path='/About' element={<About />} />
                <Route path='/Style' element={<Style />} />
                <Route path='/Career' element={<Career />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path={'/Category/:categoryList'} element={<Products />} />
            </Routes>
        </div>
    );
}

export default Routing;