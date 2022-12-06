import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedCategoryList, selectedCategoryState, savedSelectedCategoryState } from "../recoil_state";
import { useLocation } from "react-router-dom";
import './products.css';
function Products() {
    const [productList] = useRecoilState(selectedCategoryList);
    const [currentCategory, setCurrentCategory] = useState('');
    const location = useLocation(); // React Hook

    useEffect(() => {
        const title = location.pathname.split("/")
        const currentTitle = title[2]
        setCurrentCategory(currentTitle)
    }, [location])

    return (
        <div className="products-main-container">
            {/* {loadingProduts ? <h3>Loading Products...</h3> : null} */}
            {productList.length === 0 ? null :
                <div className="products-container">
                    <h1>{currentCategory}</h1>
                    <div className="products-ul">
                        {productList.map((item, index) => {
                            return <div className="product-container" key={item.id}>
                                <img src={item.image} className="product-img" alt="Image fail" />
                                <span className="product-title">{item.title}</span>
                                <span className="product-price" >Price: {item.price} €</span>
                            </div>
                        })}
                    </div>
                </div>
            }
        </div>
    );
}

export default Products;