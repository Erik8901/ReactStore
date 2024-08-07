import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import axios from "axios";
import { selectedCategoryList, searchTerm } from "../recoil_state";
import { useLocation, useNavigate } from "react-router-dom";

import BreadCrumbs from '../components/parts/breadCrumbs/breadCrumbs';
import './products.css';

function Products() {
    const [productList] = useRecoilState(selectedCategoryList);
    const [currentCategory, setCurrentCategory] = useState('');
    const [search] = useRecoilState(searchTerm);

    const navigate = useNavigate();
    const location = useLocation(); // React Hook

    useEffect(() => {
        const title = location.pathname.split("/")

        //  const currentTitle = title[2]
        setCurrentCategory(title[1])


        return

    }, [location, search])


    const toProductinfo = (item) => {
        let title = item.title
        title = title.replace(/\s+/g, '-');
        let id = item.id
        navigate(location.pathname + "/" + "Product" + "/" + id + "/" + title)
    }

    return (
        <div className="products-main-container">
            {/* {loadingProduts ? <h3>Loading Products...</h3> : null} */}


            {productList.length === 0 ? null :
                <div className="products-container">

                    <BreadCrumbs />
                    <div className="products-ul">
                        {productList.map((item, index) => {
                            return <div className="product-container" key={item.id} onClick={() => toProductinfo(item)}>
                                <img src={item.image} className="product-img" alt="Image fail" />
                                <span className="product-title">{item.title}</span>
                                <span className="product-price" >Price: {item.price} €</span>
                            </div>
                        })}
                    </div>
                </div>
            }
        </div >
    );
}

export default Products;