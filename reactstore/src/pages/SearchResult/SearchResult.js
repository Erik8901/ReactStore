import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { searchTerm, allProductsList } from "../../recoil_state";
import { useLocation } from "react-router-dom";

import './SearchResult.css';

function Products() {
    const [productList] = useRecoilState(allProductsList);
    const [search] = useRecoilState(searchTerm);
    const location = useLocation(); // React Hook
    const [productSearchResultList, setProductSearchResultList] = useState([]);

    useEffect(() => {
        const results = productList.filter((product) => {
            return product.title.toLowerCase().includes(search.toLowerCase())
        })
        setProductSearchResultList(results)
    }, [search])

    return (
        <div className="search-results-main-container">
            {/* {loadingProduts ? <h3>Loading Products...</h3> : null} */}
            {productList.length === 0 ? null :
                <div className="products-container">
                    <div className="products-ul">
                        {productSearchResultList.map((item, index) => {
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