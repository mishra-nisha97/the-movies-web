import React, { useRef,useState ,useEffect} from 'react'
import SearchBox from '../SearchBox';
import MoviesList from '../../MoviesList';
import SeachButton from '../SeachButton';
const Banner= () => {
const[searchValue,setSearchValue]=useState('')
const[movies,setMovieS]=useState([]);
const getMovieRequest=async(searchValue)=>{
  const url=`http://www.omdbapi.com/?s=${searchValue}&apikey=6f440b10&s`
  const response=await fetch(url);
  const  responsjson=await response.json();
  if(responsjson.Search){
    setMovieS(responsjson.Search)
  }
};
useEffect(()=>{
getMovieRequest(searchValue)
},[searchValue]);
  
  
  return<div className='h-[300px] bg-banner bg-cover py-5'>
<div className='flex flex-col gap-10 px-10  py-10'>
<div className="text-white">
<h2 className='font-bold text-5xl'>Welcome.</h2>
<h3 className='font-semibold text-[2rem]  leading-1'>
 Millions of movies,TV shows and people to discover,Explore now.
</h3>
</div>
<div className='relative'>
<SearchBox searchValue={searchValue}setSearchValue={setSearchValue}/>
<div className='absolute top-0 right-0'>
  <SeachButton/>
</div>
</div>
<div>
<MoviesList movies={movies}/>
</div>
</div>
</div>

}

export default Banner
