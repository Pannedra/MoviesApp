import { ACTIONS, ACTION_TYPES } from "../ActionTypes";

const initalState = {
  movieList: [
    {
      cast: "Prabhas",
      description: "Prabhas Movie",
      genere: "perodic",
      id: 1638364752244,
      languages: "telugu",
      name: "Baahubali",
      similarMovies: "rrr",
    },
    {
      cast: "Bunny",
      description: "Bunny Movie",
      genere: "Action",
      id: 16383647522341,
      languages: "telugu",
      name: "sarinodu",
      similarMovies: "Some Movie",
    },
    {
      cast: "Chiranjeevi ",
      description: "It is based on dharma",
      genere: "Action",
      id: 1638364752231,
      languages: "telugu",
      name: "Acharya",
      similarMovies: "Tagoure",
    },
    {
        cast: "Chiranjeevi ",
        description: "It is based on entertainment",
        genere: "Action",
        id: 16383647527858,
        languages: "telugu",
        name: "Dhee",
        similarMovies: "kottichudu",
      },
      {
        cast: "Chiranjeevi ",
        description: "It is based on fun",
        genere: "Action",
        id: 1638364752231,
        languages: "telugu",
        name: "Arya",
        similarMovies: "arya",
      },
      {
        cast: "Chiranjeevi ",
        description: "It is based on comedy",
        genere: "Action",
        id: 1638364752789,
        languages: "telugu",
        name: "Munna",
        similarMovies: "ekniranjan",
      },
  ],
  favioriteMovies: [],
};

export const MovieReducer = (state = initalState, action) => {
  // console.log(action.payload);
  switch (action.type) {
    case ACTION_TYPES.ADD_MOVIE:
      return { ...state, movieList: [...state.movieList, action.payload] };

    case ACTION_TYPES.FETCH_MOVIES:
      return state.movieList;

    default:
      return state;
  }
  // console.log(initalState)
};
