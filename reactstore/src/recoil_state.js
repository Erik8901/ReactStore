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

const searchResultList = atom({
    key: "searchResultList",
    default: []
})

const allProductsList = atom({
    key: "allProductsList",
    default: []
})

const selectedProduct = atom({
    key: "selectedProduct",
    default: {}
})

const selectedClothingType = atom({
    key: "selectedClothingType",
    default: null
})

export {
    openMainMenuState,
    carouselCurrentIndex,
    openCategoryMenuState,
    categoriesDefaultState,
    selectedCategoryState,
    savedSelectedCategoryState,
    selectedCategoryList,
    searchResultList,
    searchTerm,
    allProductsList,
    selectedProduct,
    selectedClothingType
};