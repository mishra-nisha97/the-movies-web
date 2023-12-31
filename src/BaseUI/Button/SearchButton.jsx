import React from 'react'

const SearchButton = (props) => {
  return (
   <button{...props} className='h-11 text-white font-bold px-7 py-3 rounded-[8rem] bg-green-200  bg-gradient-to-r from-lightGreen to-lightBlue  hover:text-black inline-flex  justify-center items-center'>
    Search
   </button>
  )
}

export default SearchButton