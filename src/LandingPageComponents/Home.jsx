import { useState } from 'react'
import '../App.css'

function Home() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="fontInter">
        <header className="pt-24 pb-10 text-center backdrop-blur-sm mb-16 max-w-4xl mx-auto px-5">
          {/* Title */}
          <h1 className="text-4xl font-bold sm:text-6xl text-white leading-tight md:leading-normal">
            Your Digital Growth Engine, Optimized and Automated
          </h1>
          {/* Subheading */}
          <p className="mt-6 text-base sm:text-xl text-gray-300 max-w-3xl mx-auto">
            <span className='text-[#9BE13F]'>From foundational website development to advanced email automation</span>, we create a unified strategy that fixes leaks and maximizes every visitor's value.
          </p>
          {/* Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <a href="/#Form_Section" className="fontInter text-gray-800 transition-all duration-300 ease-in-out bg-[#9BE13F] hover:bg-white rounded-4xl flex items-center justify-center px-8 py-3 shadow-xl font-semibold text-lg transform hover:scale-105 active:scale-100" >
              Get a Quote
            </a>
            <a href="/#Services_Section" className="fontInter text-gray-800 transition-all duration-300 ease-in-out bg-white hover:bg-[#9BE13F] rounded-4xl flex items-center justify-center px-8 py-3 shadow-xl font-semibold text-lg transform hover:scale-105 active:scale-100" >
              Services
            </a>
          </div>
        </header>
      </div>
    </>
  )
}

export default Home