import { ACTION_TYPES } from "../ActionTypes"

 export const addMovie = (movie)=>{
     return {
         type : ACTION_TYPES.ADD_MOVIE,
         payload : {...movie,id: Date.now()}
     }
 } 

 export const fetchMovies = ()=>{
     return {
         type : ACTION_TYPES.FETCH_MOVIES
     }
 }