import { useEffect } from 'react';
import axios from "axios";
import { useRecoilState } from 'recoil';
import { categoriesDefaultState } from "../recoil_state";

function ApiCalls() {
    const [categories, setCategories] = useRecoilState(categoriesDefaultState)

    useEffect(() => {
        console.log('api')

        const baseUrl = 'https://fakestoreapi.com'
        const allCategories = '/products/categories'
        // const mensClothingEndPoint = 'men%27s%20clothing'

        axios.get(baseUrl + allCategories)
            .then(response => setCategories(response.data))
    }, [])

    return null;
}

export default ApiCalls;