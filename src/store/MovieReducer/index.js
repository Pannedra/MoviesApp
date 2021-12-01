import { combineReducers } from "redux";
// import { ProdutRe } from "./ProductReducer";
import { MovieReducer } from "./MovieReducer";

export const reducer = combineReducers({
    moviesData : MovieReducer
})