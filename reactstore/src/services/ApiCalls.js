import { useEffect } from 'react';
import axios from "axios";
import { useRecoilState } from 'recoil';
import { categoriesDefaultState, selectedCategoryState, selectedCategoryList } from "../recoil_state";


function ApiCalls() {
    const [categories, setCategories] = useRecoilState(categoriesDefaultState)
    const [selectedCategory, setelectedCategory] = useRecoilState(selectedCategoryState)
    const [categoryList, setCategoryList] = useRecoilState(selectedCategoryList)

    const baseUrl = 'https://fakestoreapi.com'
    const allCategories = '/products/categories'
    const currentCategory = '/products/category/'
    // const mensClothingEndPoint = 'men%27s%20clothing'

    //Get All Categories
    useEffect(() => {
        console.log('api ' + categories)
        axios.get(baseUrl + allCategories)
            .then(response => setCategories(response.data))
    }, [])

    //Get Selected Category
    useEffect(() => {
        if (selectedCategory) {
            const lowerCaseCat = selectedCategory.charAt(0).toLowerCase() + selectedCategory.slice(1);

            axios.get(baseUrl + currentCategory + lowerCaseCat)
                // .then(response => console.log(response.data))
                .then(response => setCategoryList(response.data))

        } else {
            return
        }
    }, [selectedCategory])





    // }

    return null;
}

export default ApiCalls;