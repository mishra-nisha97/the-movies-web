import React from 'react'
import './moviesList.css';
const MoviesList = (props) => {
  return(
    <>
    {props.movies.map((movie,index)=>
    <div className=' '>
        <img src={movie.Poster} alt='movie'></img>
        <div></div>
        </div>)}
    </>
  )
}

export default MoviesList