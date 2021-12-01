import React,{useState,useEffect} from "react";
import { useSelector } from "react-redux";
import _ from 'underscore';

import Card from "./Card";

function Home({search}) {
    // console.log('Search'+search)
  const movies = useSelector((state) => state.moviesData.movieList, _.isEqual);
  const [movie,setMovie] = useState(movies);
//   const [count,setCount] = useState(0);
//   setTrue(true)
//   setMovie(movies)

  
  useEffect(()=>{

  },[])
  
  console.log(movies)
  return (
    <div className="container  mt-5" style={{marginBottom:'6rem'}}>
      <div className="row">
        <Card movie={movie} search={search} movies={movies}/>
      </div>
    </div>
  );
}

export default Home;
