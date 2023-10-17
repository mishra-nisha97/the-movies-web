import React from 'react'

const SearchBox = (props) => {
  return (
    <div className=''>
        <input className='w-full h-11 rounded-[8rem] outline-none px-5 py-3'value={props.value}
      onChange={(event)=>props.setSearchValue(event.target.value)}
        placeholder='type to search..'>
        </input>
    </div>
  )
}

export default SearchBox;
