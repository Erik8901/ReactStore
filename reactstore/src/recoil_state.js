import { atom } from "recoil";

const openMainMenuState = atom({
    key: "mainMenu",
    default: false
})

const openCategoryMenuState = atom({
    key: "CategoryMenu",
    default: false
})

const carouselCurrentIndex = atom({
    key: "carouselCurrentIndex",
    default: 0
})

const categoriesDefaultState = atom({
    key: "categoriesDefault",
    default: []
})

const selectedCategoryState = atom({
    key: "categorySelected",
    default: null
})

const savedSelectedCategoryState = atom({
    key: "savedCategorySelected",
    default: null
})

const selectedCategoryList = atom({
    key: "categorySelectedList",
    default: []
})

const searchTerm = atom({
    key: "searchTerm",
    default: null
})

const allProductsList = atom({
    key: "allProductsList",
    default: []
})

export {
    openMainMenuState,
    carouselCurrentIndex,
    openCategoryMenuState,
    categoriesDefaultState,
    selectedCategoryState,
    savedSelectedCategoryState,
    selectedCategoryList,
    searchTerm,
    allProductsList
};