import { atom } from "recoil";

const openMainMenuState = atom({
    key: "mainMenu",
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


export {
    openMainMenuState,
    carouselCurrentIndex,
    categoriesDefaultState,
    selectedCategoryState,
    savedSelectedCategoryState,
    selectedCategoryList
};