import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedCategoryList, selectedCategoryState } from "../recoil_state";

import './products.css';
function Products() {
    const [selectedCategory] = useRecoilState(selectedCategoryState)
    const [productList] = useRecoilState(selectedCategoryList);
    const [loadingProduts, setLoadingProducts] = useState(true);

    useEffect(() => {
        console.log(window.location.href)

        if (productList.length === 0) {
            setLoadingProducts(loadingProduts)
        } else {
            setLoadingProducts(!loadingProduts)
            console.log(productList)
        }
    }, [productList, selectedCategory])



    return (
        <div className="products-main-container">

            {/* {loadingProduts ? <h3>Loading Products...</h3> : null} */}
            <div className="products-container">
                <h1>{selectedCategory}</h1>
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
        </div>
    );
}

export default Products;