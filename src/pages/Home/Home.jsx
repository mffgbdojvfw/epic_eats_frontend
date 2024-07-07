import React from 'react'
import Navbar from '../../components/Navbar';
import img from "./header_img.png"
import { useState } from 'react';
import "./home.css"
import CategorySlider  from '../../components/CategorySlider';
import Explore_menu from '../../components/Explore_menu';
import Food_display from '../../components/Food_display';
import Footer from '../../components/Footer';
import Download_app from '../../components/Download_app';
const Home = () => {
  const [cate , setcate] = useState("All")
  return (
    <>
    <div>
      <Navbar/>
      <div id='home-section'>
      <div className='suchna'>
        <p>Order your Favorite food here</p>
        <button className='view'>View Menu</button>
        </div>
      <div className="container">
        <img src={img} alt="" className='image' />
      </div>
      </div>
      <h2 className='expl'>Explore Menu</h2>
      <div className="category">
        <Explore_menu category={cate} setcategory = {setcate}/>
      {/* <CategorySlider/> */}
      </div>
      <div className="display">
        <Food_display category={cate}/>
      </div>
      <div className="Download">
        <Download_app/>
      </div>
      <div className="Footer">
        <Footer/>
      </div>
    </div>
    
     </>
  )
}

export default Home
