import React from 'react'
import Navbar from '../Navbar/Navbar'
import './about.css'
import Footer from '../Footer/Footer'
import image from '../Assets/Image-1.png'

function about() {
  return <>
    <Navbar/>
    <div className="container">
      <div className="mainDiv">
        <img src={image} alt="wedding" width='100' height='100'/>
        <div className='d-flex justify-content-center flex-column align-items-center'>
          <h1>Your Dream Wedding Planners</h1>
          <p>Welcome to Your Dream Wedding Planners, where your vision of the perfect wedding becomes a reality. Founded with a passion for creating unforgettable moments, we specialize in crafting bespoke weddings tailored to reflect your unique love story. With meticulous attention to detail, creativity, and dedication, we are here to turn your dreams into a seamless and breathtaking reality.</p>
        </div>
      </div>
    </div>
    <Footer/>
  </>
}

export default about
