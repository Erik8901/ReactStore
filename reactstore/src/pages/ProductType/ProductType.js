import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import axios from "axios";
import { useLocation, useNavigate } from "react-router-dom";

import './ProductType.css';

function ProductType() {
    const [currentCategory, setCurrentCategory] = useState('');
    const [typeOfClothes, setTypeOfClothes] = useState(null);

    const navigate = useNavigate();
    const location = useLocation(); // React Hook

    useEffect(() => {
        const title = location.pathname.split("/")
        setCurrentCategory(title[1])

        axios.get('https://reactstorebackend-default-rtdb.europe-west1.firebasedatabase.app/Products/Clothes/' + title[1] + '.json')
            .then(response => setTypeOfClothes(response.data))

        return

    }, [location])

    const toProductinfo = (item) => {
        let title = item.title
        title = title.replace(/\s+/g, '-');
        let id = item.id
        navigate(location.pathname + "/" + "Product" + "/" + id + "/" + title)
    }

    return (
        <div className="product-type-main-container">
            <h1 className="currentCategory">{currentCategory}</h1>
            {typeOfClothes !== null &&
                <div className="types-of-clothing-container">
                    <div className="indoors-container" >
                        <span className="type-clothing-img-title">{Object.keys(typeOfClothes)[0]}</span>
                        <img className="type-clothing-img" src={typeOfClothes.Indoors.img} />
                    </div>
                    <div className="outdoors-container">
                        <span className="type-clothing-img-title">{Object.keys(typeOfClothes)[1]}</span>
                        <img className="type-clothing-img" src={typeOfClothes.Outdoors.img} />
                    </div>
                </div>
            }
        </div >
    );
}

export default ProductType;