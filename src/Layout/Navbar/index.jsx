import React from 'react'
import NavBarList from './navBarList'
import{navItemsLeft,navItemsRight}from"./navItem"
const NavBar= () => {
  return(
  <nav className='h-16 bg-darkBlue flex text-white font-semibold font-size[45px] justify-between items-center max-w-[1400px] mx-auto px-10'>
    <NavBarList items={navItemsLeft}/>
    <NavBarList items={navItemsRight}/>
  </nav>
  )
}

export default  NavBar