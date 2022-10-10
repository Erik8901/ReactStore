import { atom } from "recoil";

const openMainMenuState = atom({
    key: "mainMenu",
    default: false
})

const categoriesDefaultState = atom({
    key: "categoriesDefault",
    default: []
})

const selectedCategoryState = atom({
    key: "categorySelected",
    default: null
})

const selectedCategoryList = atom({
    key: "categorySelectedList",
    default: []
})


export {
    openMainMenuState,
    categoriesDefaultState,
    selectedCategoryState,
    selectedCategoryList
};