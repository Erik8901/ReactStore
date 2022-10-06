import React, { useState, useEffect } from 'react';
import axios from "axios";


//Styles
import './Header.css';

function Header() {

    useEffect(() => {


        const urlAllCategories = 'https://fakestoreapi.com/products/category/'
        const mensClothingEndPoint = 'men%27s%20clothing'

        axios.get(urlAllCategories + mensClothingEndPoint)
            .then(response => console.log(response))
    }, [])
    return (
        <div className="header-main-container">
            <h1>React Store Header</h1>
        </div>
    );
}

export default Header;