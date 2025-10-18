import { useState, useEffect } from 'react'
import '../App.css'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className="mt-20 mx-auto px-6 py-12 bg-black" id="footer_section">
      <div className=" flex justify-around flex-wrap px-3">
        <div className="logo text-center sm:text-left">
          <img src="/AR Wordmark Color.png" alt="Logo" className='mb-10 h-8 md:h-10 mx-auto sm:mx-0' />
          <div className="">
            {/* Heading */}
            <h2 className="fontInter text-base md:text-xl font-semibold text-white mb-4">
              Your Brand Companion Till The Success
            </h2>
            {/* Subheading */}
            <p className="fontInter text-sm md:text-base text-gray-400 mb-6 font-medium">
              Drive measurable results. We specialize in crafting unique
            </p>
          </div>
        </div>
        <div className="links">
          <div className="">
            {/* Heading */}
            <h2 className="fontInter text-base md:text-xl font-semibold text-white mb-4">
              Links
            </h2>
            {/* Subheading */}
            <p className="fontInter text-sm md:text-base text-gray-400 mb-6 font-medium">
              Home
            </p>
            <p className="fontInter text-sm md:text-base text-gray-400 mb-6 font-medium">
              About Us
            </p>
            <p className="fontInter text-sm md:text-base text-gray-400 mb-6 font-medium">
              Services
            </p>
            <p className="fontInter text-sm md:text-base text-gray-400 mb-6 font-medium">
              Contact Us
            </p>
          </div>
        </div>
        <div className="Socials">
          <div className="">
            {/* Heading */}
            <h2 className="fontInter text-base md:text-xl font-semibold text-white mb-4">
              Socials
            </h2>
            {/* Subheading */}
            <p className="fontInter text-sm md:text-base text-gray-400 mb-6 font-medium">
              <div>Instagram</div>
              &nbsp;&nbsp;
              <div>LinkdIn</div>
              &nbsp;&nbsp;
              <div>WhatsApp</div>
            </p>
          </div>
        </div>
      </div>
      <div className="border-[#9BE13F] border-t-2 w-full text-center text-gray-600 pt-3">
        ©2025 AREVEI All Rights Reserved.
      </div>
    </section>
    </>
  )
}

export default Footer