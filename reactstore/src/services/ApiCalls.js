import { useEffect } from 'react';
import axios from "axios";
import { useRecoilState } from 'recoil';
import { useLocation } from 'react-router-dom';
import { categoriesDefaultState, selectedCategoryState, selectedCategoryList, savedSelectedCategoryState } from "../recoil_state";

function ApiCalls() {
    const [categories, setCategories] = useRecoilState(categoriesDefaultState)
    const [selectedCategory] = useRecoilState(selectedCategoryState)
    const [categoryList, setCategoryList] = useRecoilState(selectedCategoryList)
    const [reloadCategoryUrl, setReloadCategoryUrl] = useRecoilState(savedSelectedCategoryState)

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
        if (selectedCategory) {
            const lowerCaseCat = selectedCategory.charAt(0).toLowerCase() + selectedCategory.slice(1);
            axios.get(baseUrl + currentCategory + lowerCaseCat)
                .then(response => setCategoryList(response.data))
        } else {
            const currentUrl = location.pathname.replace('/category', '')
            const getUrl = currentUrl.replace('/', '')
            const fixUrl = getUrl.charAt(0).toLowerCase() + getUrl.slice(1)
            const newUrl = fixUrl.replace('-', ' ')

            setReloadCategoryUrl(newUrl)
            axios.get(baseUrl + currentCategory + newUrl)
                .then(response => setCategoryList(response.data))

            return
        }
    }, [selectedCategory, reloadCategoryUrl])
}

export default ApiCalls;