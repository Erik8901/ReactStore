import React from 'react';
import { useRecoilState } from 'recoil';

import LandingPage from '../components/landingPage/LandingPage';
import About from '../pages/About/About'
import Style from '../pages/Style/Style';
import Career from '../pages/Career/Career'
import Contact from '../pages/Contact/Contact'
import Products from '../pages/Products';
import SearchResult from '../pages/SearchResult/SearchResult'
import { searchTerm } from "../recoil_state"
import {
    Routes,
    Route
} from "react-router-dom";

function Routing() {
    const [search] = useRecoilState(searchTerm);

    return (
        <div className="Routes">
            <Routes>
                <Route exact path='/' element={<LandingPage />} />
                <Route exact path='/Home' element={<LandingPage />} />
                <Route path={'/Search-Results=' + search} element={<SearchResult />} />
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