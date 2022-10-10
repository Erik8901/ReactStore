import React, { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';
import { selectedCategoryList } from "../recoil_state";

import './products.css';
function Products() {
    const [test] = useRecoilState(selectedCategoryList);
    const [list, setList] = useState([]);

    useEffect(() => {
        // console.log('selectedCategoryList ' + JSON.stringify(test))
        console.log(test.length)



    }, [test])

    return (
        <div className='produts-main-container'>
            <h1>Products</h1>

        </div>
    );
}

export default Products;