import React from 'react'

const MovieCard = (imageURl,title,date) => {
  return (
    <div className='flex flex-col'>
        <img  src={imageURl} alt={title}/>
        <div className='flex flex-col'>
        <h1  className='font-bold'>{title}</h1>
        <h1 className='font-normal'>{date}</h1>
        </div>
       
        </div>
  )
}

export default MovieCard