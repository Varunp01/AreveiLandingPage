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

function LandingPageBody() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Background />
    <Navbar />
    <div className=" w-[100%] h-20">&nbsp;</div>
    <Home />
    <ImgCarousel />
    <MarqueeStrip />
    <About />
    <Services />
    <Teams />
    <Testimonials />
    <Connect />
    <Footer />
    </>
  )
}

export default LandingPageBody