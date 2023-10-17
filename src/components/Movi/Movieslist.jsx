import React from 'react'
import MovieCard from './MovieCard'

const  Movies=[
    {
    title:'the boys',
    date:"25 july",
    imageURl:"https://www.themoviedb.org/t/p/w440_and_h660_face/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg"
},
{
    title:'the boys',
    date:"25 july",
    imageURl:"https://www.themoviedb.org/t/p/w440_and_h660_face/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg"
},
{
    title:'the boys',
    date:"25 july",
    imageURl:"https://www.themoviedb.org/t/p/w440_and_h660_face/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg"
},
{
    title:'the boys',
    date:"25 july",
    imageURl:"https://www.themoviedb.org/t/p/w440_and_h660_face/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg"
},
{
    title:'the boys',
    date:"25 july",
    imageURl:"https://www.themoviedb.org/t/p/w440_and_h660_face/iwsMu0ehRPbtaSxqiaUDQB9qMWT.jpg"
},
]
const Movieslist = () => {
  return
    <div className=''>
        {Movies.map((movie,index)=>{
return <MovieCard {...movie}/>

        })}
    </div>
  
}

export default Movieslist