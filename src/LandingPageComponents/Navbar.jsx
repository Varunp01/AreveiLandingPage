import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // SVG for the menu (hamburger) icon
  const MenuIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="4" y1="12" x2="20" y2="12"></line>
      <line x1="4" y1="6" x2="20" y2="6"></line>
      <line x1="4" y1="18" x2="20" y2="18"></line>
    </svg>
  );

  // SVG for the close icon
  const XIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="18" y1="6" x2="6" y2="18"></line>
      <line x1="6" y1="6" x2="18" y2="18"></line>
    </svg>
  );

  return (
    <>
      <nav className="fixed w-full px-3 pt-2 z-1 bg-[linear-gradient(to_bottom,#1C1C1C_0%,#1C1C1C_25%,#1C1C1C_50%,transparent_75%,transparent_100%)]" id='Navbar_Section'>
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="">
                <a href="/#Home_Section" className="">
                  <img src="/AR Wordmark Color.png" alt="Logo" className='h-6 md:h-7' />
                </a>
              </div>
            </div>
            <div className="flex items-center">
              {/* Desktop Navigation Links */}
              <div className="hidden md:flex space-x-8 rounded-4xl border-1 border-[#9BE13F]">
                <a href="/#Home_Section" className="fontInter text-base md:text-xl font-medium text-white hover:text-black transition-all duration-300 ease-in-out  hover:bg-[#9BE13F] py-1.5 px-3 rounded-4xl flex items-center justify-center">
                  Home
                </a>
                <a href="/#About_Section" className="fontInter text-base md:text-xl font-medium text-white hover:text-black transition-all duration-300 ease-in-out  hover:bg-[#9BE13F] py-1.5 px-3 rounded-4xl flex items-center justify-center">
                  About Us
                </a>
                <a href="/#Services_Section" className="fontInter text-base md:text-xl font-medium text-white hover:text-black transition-all duration-300 ease-in-out  hover:bg-[#9BE13F] py-1.5 px-3 rounded-4xl flex items-center justify-center">
                  Services
                </a>
                <a href="/#Connect_Section" className="fontInter text-base md:text-xl font-medium text-white hover:text-black transition-all duration-300 ease-in-out  hover:bg-[#9BE13F] py-1.5 px-3 rounded-4xl flex items-center justify-center">
                  Contact Us
                </a>
              </div>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/#Form_Section" className="fontInter text-base md:text-xl font-semibold text-gray-800  transition-all duration-300 ease-in-out bg-white hover:bg-[#9BE13F] py-3 px-4 rounded-4xl flex items-center justify-center">
                  Get a Quote
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              {/* Mobile menu button */}
              <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-black  hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white transition-all duration-300 ease-in-out"
                aria-expanded={isOpen ? "true" : "false"}
              >
                <span className="sr-only">Open main menu</span>
                {isOpen ? <XIcon className="block h-6 w-6 text-gray-500" /> : <MenuIcon className="block h-6 w-6 text-gray-500" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu Panel */}

        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-black rounded-2xl`} id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="/#Home_Section" onClick={() => setIsOpen(!isOpen)} className="block text-gray-200 hover:bg-[#9BE13F] transition-all duration-300 ease-in-out px-3 py-2 rounded-md font-medium bg-gray-800">Home</a>
            <a href="/#About_Section" onClick={() => setIsOpen(!isOpen)} className="block text-gray-200 hover:bg-[#9BE13F] transition-all duration-300 ease-in-out px-3 py-2 rounded-md font-medium bg-gray-800">About Us</a>
            <a href="/#Services_Section" onClick={() => setIsOpen(!isOpen)} className="block text-gray-200 hover:bg-[#9BE13F] transition-all duration-300 ease-in-out px-3 py-2 rounded-md font-medium bg-gray-800">Services</a>
            <a href="/#Connect_Section" onClick={() => setIsOpen(!isOpen)} className="block text-gray-200 hover:bg-[#9BE13F] transition-all duration-300 ease-in-out px-3 py-2 rounded-md font-medium bg-gray-800">Contact Us</a>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;