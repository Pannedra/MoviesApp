import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { addMovie } from "../../store/MovieActionCreators/MovieActionCreators";
import { v4 as uuidv4 } from 'uuid';
// import { Link } from "react-router-dom";

import "./AddMovie.css";
import { Link ,useNavigate} from "react-router-dom";
function AddMovie() {
    const dispatch = useDispatch();
    const state = useSelector((state)=>state);
    const navigate = useNavigate();
    console.log(state);
  const [movie, setMovie] = useState({
      id : null,
    name: "",
    description: "",
    cast: "",
    similarMovies: "",
    genere: "",
    languages: "",
  });
  const handleChange = (e)=>{
      const {name,value} = e.target;
    //   setMovie({...movie,id : Date.now()}) 
      setMovie({...movie,[name]:value})
  }
  const handleSubmit = (e)=>{
      e.preventDefault();
    //   import { v4 as uuidv4 } from 'uuid';
    //   setMovie({...movie, id : uuidv4()}) 
    //   console.log(uuidv4());
    //   setTimeout(()=>{
        dispatch(addMovie(movie))
        // console(addMovie(movie))
        // debugger;
        navigate('/')
        console.log(movie);
        // <Redirect to="/login" />
    //   },200)
      
      
  }
  // name, description, cast, similar     movies, genre, language, etc
  return (
    <div>


{/* 
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" name="name" onChange={handleChange}  placeholder="Add the movie Name" />
        </div>
        <div>
          <label>Description</label>
          <input type="text" name="description"  onChange={handleChange} placeholder="Add the movie Name" />
        </div>
        <div>
          <label>cast</label>
          <input type="text" name="cast" onChange={handleChange} placeholder="Add the movie Name" />
        </div>
        <div>
          <label>Similar Movies</label>
          <input type="text" name="similarMovies" onChange={handleChange} placeholder="Add the movie Name" />
        </div>
        <div>
          <label>Genere</label>
          <input type="text" name="genere" onChange={handleChange} placeholder="Add the movie Name" />
        </div>
        <div>
          <label>Languages</label>
          <input type="text" name="languages" onChange={handleChange} placeholder="Add the movie Name" />
        </div>
        <button type="submit" className="btn">Add Movie</button>
      </form> */}

      <form onSubmit={handleSubmit} className="w-50 d-block p-5">
  <div class="mb-1">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" name="name" onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
    
  </div>
  <div class="mb-1">
    <label for="exampleInputPassword1" class="form-label">Description</label>
    <input type="text" name="description" onChange={handleChange} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-1">
    <label for="exampleInputPassword1" class="form-label">cast</label>
    <input type="text" name="cast" onChange={handleChange} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-1">
    <label for="exampleInputPassword1" class="form-label">Similar Movies</label>
    <input type="text" name="similarMovies" onChange={handleChange} class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <div class="mb-1">
    <label for="exampleInputPassword1" class="form-label">Genere</label>
    <input type="text" name="genere" onChange={handleChange} class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-1">
    <label for="exampleInputPassword1" class="form-label">Languages</label>
    <input type="text" name="languages" onChange={handleChange} class="form-control" id="exampleInputPassword1"/>
  </div>
  
  <button type="submit" class="btn btn-primary">Submit</button>
  
</form>
    </div>
  );
}

export default AddMovie;
