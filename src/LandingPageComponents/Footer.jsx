import { useState, useEffect } from 'react'
import '../App.css'

function Footer() {
  const [count, setCount] = useState(0)

  return (
    <>
    <section className="mt-20 mx-auto px-6 py-12 bg-black" id="Footer_Section">
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
              Your dedicated partner for measurable <span className='text-[#9BE13F] uppercase'>digital growth</span>.
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
            <div className="fontInter text-sm md:text-base text-gray-400 mb-6 font-medium hover:text-white">
              <a href="/#Home_Section">Home</a>
            </div>
            <div className="fontInter text-sm md:text-base text-gray-400 mb-6 font-medium hover:text-white">
              <a href="/#About_Section">About Us</a>
            </div>
            <div className="fontInter text-sm md:text-base text-gray-400 mb-6 font-medium hover:text-white">
              <a href="/#Services_Section">Services</a>
            </div>
            <div className="fontInter text-sm md:text-base text-gray-400 mb-6 font-medium hover:text-white">
              <a href="/#Connect_Section">Contact Us</a>
            </div>
          </div>
        </div>
        <div className="Socials">
          <div className="">
            {/* Heading */}
            <h2 className="fontInter text-base md:text-xl font-semibold text-white mb-4">
              Socials
            </h2>
            {/* Subheading */}
            <div className="fontInter text-sm md:text-base text-gray-400 mb-6 font-medium hover:text-white">
              <a href="https://www.instagram.com/arevei_official?utm_source=ig_web_button_share_sheet&igsh=MXUycG53eTV2N3pkYQ==">Instagram</a>
            </div>
            <div className="fontInter text-sm md:text-base text-gray-400 mb-6 font-medium hover:text-white">
              <a href="https://www.linkedin.com/company/arevei/?originalSubdomain=in">linkedIn</a>
            </div>
            <div className="fontInter text-sm md:text-base text-gray-400 mb-6 font-medium hover:text-white">
              <a href="https://x.com/areveiofficial">X</a>
            </div>
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