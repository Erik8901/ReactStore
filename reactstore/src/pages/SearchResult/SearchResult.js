import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { allProductsList } from "../../recoil_state";
import { useLocation } from "react-router-dom";
import './SearchResult.css';

function Products() {
    const [productList] = useRecoilState(allProductsList);
    const [productSearchResultList, setProductSearchResultList] = useState([]);
    const location = useLocation(); // React Hook

    useEffect(() => {
        const currentUrl = location.pathname.replace('/Search-Results=', '')
        if (productList) {
            const resultsUpdate = productList.filter((product) => {
                return product.title.toLowerCase().includes(currentUrl.toLowerCase())
            })
            setProductSearchResultList(resultsUpdate)
        }
    }, [location, productList])

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