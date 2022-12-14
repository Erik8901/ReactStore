import { useEffect } from 'react';
import axios from "axios";
import { useRecoilState } from 'recoil';
import { useLocation } from 'react-router-dom';
import { categoriesDefaultState, selectedCategoryList, allProductsList } from "../recoil_state";

function ApiCalls() {
    const [categories, setCategories] = useRecoilState(categoriesDefaultState)
    const [categoryList, setCategoryList] = useRecoilState(selectedCategoryList)
    const [productsList, setProducts] = useRecoilState(allProductsList)

    const baseUrl = 'https://fakestoreapi.com'
    const allProducts = '/products'
    const allCategories = '/products/categories'
    const currentCategory = '/products/category/'

    const location = useLocation(); // React Hook

    useEffect(() => {
        const currentUrl = location.pathname.replace('/category', '')
        const getUrl = currentUrl.replace('/', '')
        const fixUrl = getUrl.charAt(0).toLowerCase() + getUrl.slice(1)
        const newUrl = fixUrl.replace('-', ' ')

        //Get All Products
        axios.get(baseUrl + allProducts)
            .then(response => setProducts(response.data))

        //Get All Categories
        axios.get(baseUrl + allCategories)
            .then(response => setCategories(response.data))

        //Get Selected Category
        axios.get(baseUrl + currentCategory + newUrl)
            .then(response => setCategoryList(response.data))

        return

    }, [location])
}

export default ApiCalls;