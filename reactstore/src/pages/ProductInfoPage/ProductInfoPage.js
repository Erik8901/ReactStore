import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedProduct } from "../../recoil_state";
import BreadCrumbs from '../../components/parts/breadCrumbs/breadCrumbs';

import './ProductInfoPage.css';

function ProductsInfoPage() {
    const [product] = useRecoilState(selectedProduct);
    const [productTitle, setProductTitle] = useState('');
    const [productImg, setProductImg] = useState('');
    const [productPrice, setproductPrice] = useState('');

    useEffect(() => {
        if (product) {
            console.log(product)
            setproductPrice(product.price);
            setProductTitle(product.title);
            setProductImg(product.image);
        }
    }, [product])

    return (
        <div className="selected-product-main-container">
            <BreadCrumbs />
            <div className="selected-product-info">
                <h3>{productTitle}</h3>
                <h4>{productPrice}</h4>
                <img src={productImg} className="product-img" alt="Image fail" />
            </div>
        </div>
    );
}

export default ProductsInfoPage;