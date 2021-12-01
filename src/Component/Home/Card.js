import React,{useEffect, useState} from 'react'

import movieImg from '../../Images/movie.png'
// React.memo(props => {
//     console.log("Greeting Comp render");
//     return <h1>Hi {props.name}!</h1>;
//   });
class Card extends React.Component {
    //   const {movie,} = this.props;
    state={
        myMovies : this.props.movie,
        searchTerm : this.props.search,
        movies: this.props.movies,
    }
    componentDidUpdate(prevsState){
        console.log(prevsState,this.props)
        if(prevsState.search!==this.props.search){
          const filterMovies =  this.state.movies.filter((movie)=>movie.name.toLowerCase().includes(this.props.search.toLowerCase()))
            console.log(filterMovies)
            this.setState({myMovies:filterMovies})
        }
        
    }
    
    render(){
        return (
            <>
            {this.state.myMovies &&
                this.state.myMovies.length > 0 &&
                this.state.myMovies.map((movie) => (
                  <div className="col-md-4 mt-4" key={movie.id}>
                    <div className="card">
                      <img src={movieImg} className="card-img-top img-fluid" alt="..." />
                      <div class="card-body">
                        <h5 className="card-title">{movie.name}</h5>
                        <p className="card-text">
                          {movie.description}
                        </p>
                        <a href="#" className="btn btn-primary">
                          faviorite
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
                
                </>
        )
    }
    
}

export default Card
