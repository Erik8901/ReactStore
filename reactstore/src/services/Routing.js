
import { useRecoilState } from 'recoil';
import React, { useEffect } from 'react';
import LandingPage from '../pages/landingPage/LandingPage';
import About from '../pages/About/About'
import Home from '../pages/Home/Home';
import Style from '../pages/Style/Style';
import Career from '../pages/Career/Career'
import Contact from '../pages/Contact/Contact'
import Products from '../pages/Products';
import ProductType from '../pages/ProductType/ProductType'
import SearchResult from '../pages/SearchResult/SearchResult';
import ProductInfoPage from '../pages/ProductInfoPage/ProductInfoPage';
import ProductsTypeList from '../pages/ProductsTypeList/ProductsTypeList';
import { searchTerm, } from "../recoil_state"
import {
    Routes,
    Route
} from "react-router-dom";

function Routing() {
    const [search] = useRecoilState(searchTerm);
    useEffect(() => { }, [search])

    return (
        <div className="Routes">
            <Routes>
                <Route exact path='/' element={<LandingPage />} />
                <Route exact path='/Home' element={<Home />} />
                <Route path={'/Search-Results=' + search} element={<SearchResult />} />
                <Route path={'/Search-Results=:searchResultList'} element={<SearchResult />} />
                <Route path='/About' element={<About />} />
                <Route path='/Style' element={<Style />} />
                <Route path='/Career' element={<Career />} />
                <Route path='/Contact' element={<Contact />} />
                <Route path={'/:categoryList'} element={<Products />} />
                <Route path={'/:categoryList'} element={<ProductType />} />
                <Route path={'/:categoryList/Product/:id/:title'} element={<ProductInfoPage />} />
                <Route path={'/:categoryList/:ProductType'} element={<ProductsTypeList />} />
            </Routes>
        </div>
    );
}

export default Routing;