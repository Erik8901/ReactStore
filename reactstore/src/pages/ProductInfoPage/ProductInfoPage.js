import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedProduct } from "../../recoil_state";


import './ProductInfoPage.css';

function ProductsInfoPage() {
    const [product] = useRecoilState(selectedProduct);
    const [productTitle, setProductTitle] = useState('');
    const [productImg, setProductImg] = useState('');

    useEffect(() => {
        if (product) {
            setProductTitle(product.title);
            setProductImg(product.image);
        }
    }, [product])

    return (
        <div className="selected-product-main-container">
            <h1>INFO PAGE</h1>
            <h3>{productTitle}</h3>
            <img src={productImg} className="product-img" alt="Image fail" />
        </div>
    );
}

export default ProductsInfoPage;