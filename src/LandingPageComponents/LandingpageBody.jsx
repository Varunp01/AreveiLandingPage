import { useState } from 'react'
import '../App.css'
import Navbar from './Navbar'
import Background from './Background'
import Home from './Home'
import ImgCarousel from './ImgCarousel'
import MarqueeStrip from './MarqueeStrip'
import About from './About'
import Services from './Services'
import Teams from './Teams'
import Testimonials from './Testimonials'
import Connect from './Connect'
import Footer from './Footer'
import Form from './Form'

function LandingPageBody() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Background />
    <Navbar />
    <div className="w-[100%] h-20 " id='Home_Section'>&nbsp;</div>
    <Home />
    <ImgCarousel />
    <MarqueeStrip />
    <div className=" w-[100%] h-0.5 " id='About_Section'>&nbsp;</div>
    <About />
    <div className=" w-[100%] h-0.5 " id='Services_Section'>&nbsp;</div>
    <Services />
    <div className=" w-[100%] h-0.5 " id='Teams_Section'>&nbsp;</div>
    <Teams />
    <div className=" w-[100%] h-0.5 " id='Testimonials_Section'>&nbsp;</div>
    <Testimonials />
    <div className=" w-[100%] h-0.5 " id='Connect_Section'>&nbsp;</div>
    <Connect />
    <div className=" w-[100%] h-0.5 " id='Form_Section'>&nbsp;</div>
    <Form />
    <Footer />
    </>
  )
}

export default LandingPageBody