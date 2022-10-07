import { atom } from "recoil";

const openMainMenuState = atom({
    key: "mainMenu",
    default: false
})

const categoriesDefaultState = atom({
    key: "categoriesDefault",
    default: []
})


export {
    openMainMenuState,
    categoriesDefaultState
};