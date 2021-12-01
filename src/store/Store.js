import { createStore } from "redux";
import { reducer } from "./MovieReducer";


// import thunk from 'redux-thunk';


 export const Store = createStore(reducer,{},
)