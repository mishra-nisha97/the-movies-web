
import Container from "./Layout/Navbar/container";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Section from "./Layout/Section";
import { useEffect, useState } from "react";

import './App.css';
import Movieslist from "./components/Movi/Movieslist";

function App(){
 const handleToggleValue=(selectedValue)=>{
  console.log(selectedValue)
 }
  return(
<>
<Header/>
<Container>
<Banner/>
<Section title="Trending" items={["On TV", "In Theateres"]} onToggle={handleToggleValue}>
  <Movieslist/>
</Section>
</Container>
<div className='container-fluid movie-app'>
  <div className="row">
  </div>
  <div className='row'>
 
 
  </div>
</div>




</>
  )
}
export default App;
