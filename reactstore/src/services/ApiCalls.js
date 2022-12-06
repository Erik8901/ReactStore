import { useEffect } from 'react';
import axios from "axios";
import { useRecoilState } from 'recoil';
import { useLocation } from 'react-router-dom';
import { categoriesDefaultState, selectedCategoryState, selectedCategoryList } from "../recoil_state";

function ApiCalls() {
    const [categories, setCategories] = useRecoilState(categoriesDefaultState)
    const [categoryList, setCategoryList] = useRecoilState(selectedCategoryList)

    const baseUrl = 'https://fakestoreapi.com'
    const allCategories = '/products/categories'
    const currentCategory = '/products/category/'

    const location = useLocation(); // React Hook

    //Get All Categories
    useEffect(() => {
        axios.get(baseUrl + allCategories)
            .then(response => setCategories(response.data))
    }, [])

    //Get Selected Category
    useEffect(() => {
        const currentUrl = location.pathname.replace('/category', '')
        const getUrl = currentUrl.replace('/', '')
        const fixUrl = getUrl.charAt(0).toLowerCase() + getUrl.slice(1)
        const newUrl = fixUrl.replace('-', ' ')

        axios.get(baseUrl + currentCategory + newUrl)
            .then(response => setCategoryList(response.data))

        return

    }, [location])
}

export default ApiCalls;