import { useState, useEffect } from 'react'
import '../App.css'

function Connect() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="mt-20 max-w-6xl mx-auto px-6" >
        <div className="bg-[#222222] p-2 rounded-4xl">
          <div className="flex flex-col lg:flex-row items-center gap-3">
            <div className="lg:w-1/2 w-full h-[100%] order-1 lg:order-1 bg-[#1C1C1C] rounded-4xl px-4 py-8 grid md:grid-rows-2 grid-rows-2">
              <div className="div1 row-start-1">
                <a className="fontInter cursor-pointer text-[#9BE13F] border-1 border-[#9BE13F] hover:text-black transition-all duration-300 ease-in-out hover:bg-[#9BE13F] rounded-4xl px-8 py-3 font-semibold text-lg transform hover:scale-105 active:scale-100" >
                  Connect with us
                </a>
                <img src="/AR Wordmark Color.png" alt="Logo" className='my-10 pl-3 h-12 md:h-16' />
              </div>
              <div className="div2 md:row-start-3 row-start-2">
                <h2 className="fontInter text-3xl md:text-5xl font-bold text-white mb-4">
                  Let Us Know, When can we connect!
                </h2>
                {/* Subheading */}
                <p className="fontInter text-base md:text-xl text-white font-medium mb-8">
                  <span className='text-[#9BE13F]'>Join us and learn more</span> about how we handle every single project with modern solutions.
                </p>
                <a href="/#Form_Section" className="fontInter text-gray-800 transition-all duration-300 ease-in-out bg-[#9BE13F] hover:bg-white rounded-4xl px-8 py-3 shadow-xl font-semibold text-lg transform hover:scale-105 active:scale-100" >
                  Get a Quote
                </a>
              </div>
            </div>
            <div className="lg:w-1/2 w-full h-[100%] order-2 lg:order-2  rounded-4xl px-4 py-8">
              <div className="div1 ">
                <h2 className="fontInter text-3xl md:text-5xl font-bold text-white mb-4">
                  Connect and Create Something New.
                </h2>
                {/* Subheading */}
                <p className="fontInter text-base md:text-xl text-white font-medium mb-8">
                  Need a <span className='text-[#9BE13F]'>fast Website or a high-converting Email strategy?</span> Let's build your unified growth plan.
                </p>
              </div>
              <div className="div2 bg-[#1C1C1C] rounded-4xl px-4 py-8">

                <div className=" mb-6 flex p-6 rounded-2xl bg-white/5 border border-[#9BE13F]/20 shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-[#9BE13F20] backdrop-blur-sm text-center">
                  <div className="w-full sm:flex sm:justify-between sm:items-center">
                    <div className="mx-auto sm:mx-0 mb-4 sm:mb-0 text-3xl md:text-5xl text-white bg-[#9BE13F] w-12 h-12 rounded-full p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="black"><path d="M476.9 161.1C435 119.1 379.2 96 319.9 96C197.5 96 97.9 195.6 97.9 318C97.9 357.1 108.1 395.3 127.5 429L96 544L213.7 513.1C246.1 530.8 282.6 540.1 319.8 540.1L319.9 540.1C442.2 540.1 544 440.5 544 318.1C544 258.8 518.8 203.1 476.9 161.1zM319.9 502.7C286.7 502.7 254.2 493.8 225.9 477L219.2 473L149.4 491.3L168 423.2L163.6 416.2C145.1 386.8 135.4 352.9 135.4 318C135.4 216.3 218.2 133.5 320 133.5C369.3 133.5 415.6 152.7 450.4 187.6C485.2 222.5 506.6 268.8 506.5 318.1C506.5 419.9 421.6 502.7 319.9 502.7zM421.1 364.5C415.6 361.7 388.3 348.3 383.2 346.5C378.1 344.6 374.4 343.7 370.7 349.3C367 354.9 356.4 367.3 353.1 371.1C349.9 374.8 346.6 375.3 341.1 372.5C308.5 356.2 287.1 343.4 265.6 306.5C259.9 296.7 271.3 297.4 281.9 276.2C283.7 272.5 282.8 269.3 281.4 266.5C280 263.7 268.9 236.4 264.3 225.3C259.8 214.5 255.2 216 251.8 215.8C248.6 215.6 244.9 215.6 241.2 215.6C237.5 215.6 231.5 217 226.4 222.5C221.3 228.1 207 241.5 207 268.8C207 296.1 226.9 322.5 229.6 326.2C232.4 329.9 268.7 385.9 324.4 410C359.6 425.2 373.4 426.5 391 423.9C401.7 422.3 423.8 410.5 428.4 397.5C433 384.5 433 373.4 431.6 371.1C430.3 368.6 426.6 367.2 421.1 364.5z" /></svg>
                    </div>
                    <div className="">
                      <p className="text-base md:text-xl font-semibold text-white capitalize tracking-wide">
                        WhatsApp
                      </p>
                      <p className="text-sm md:text-base font-normal text-gray-500 ">
                        +91 962 544 0855
                      </p>
                    </div>
                    <br />
                    <a href="https://wa.me/919625440855" className="fontInter text-gray-800 transition-all duration-300 ease-in-out bg-white hover:bg-[#9BE13F] rounded-4xl flex items-center justify-center px-8 py-3 shadow-xl font-semibold text-lg transform hover:scale-105 active:scale-100" >
                      Message Us
                    </a>
                  </div>
                </div>

                <div className=" my-6 flex p-6 rounded-2xl bg-white/5 border border-[#9BE13F]/20 shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-[#9BE13F20] backdrop-blur-sm text-center">
                  <div className="w-full sm:flex sm:justify-between sm:items-center">
                    <div className="mx-auto sm:mx-0 mb-4 sm:mb-0 text-3xl md:text-5xl text-white bg-[#9BE13F] w-12 h-12 rounded-full p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="black"><path d="M125.4 128C91.5 128 64 155.5 64 189.4C64 190.3 64 191.1 64.1 192L64 192L64 448C64 483.3 92.7 512 128 512L512 512C547.3 512 576 483.3 576 448L576 192L575.9 192C575.9 191.1 576 190.3 576 189.4C576 155.5 548.5 128 514.6 128L125.4 128zM528 256.3L528 448C528 456.8 520.8 464 512 464L128 464C119.2 464 112 456.8 112 448L112 256.3L266.8 373.7C298.2 397.6 341.7 397.6 373.2 373.7L528 256.3zM112 189.4C112 182 118 176 125.4 176L514.6 176C522 176 528 182 528 189.4C528 193.6 526 197.6 522.7 200.1L344.2 335.5C329.9 346.3 310.1 346.3 295.8 335.5L117.3 200.1C114 197.6 112 193.6 112 189.4z"/></svg>
                    </div>
                    <div className="">
                      <p className="text-base md:text-xl font-semibold text-white capitalize tracking-wide">
                        Email
                      </p>
                      <p className="text-sm md:text-base font-normal text-gray-500 ">
                        admin@arevei.com
                      </p>
                    </div>
                    <br />
                    <a href="mailto:admin@arevei.com" className="fontInter text-gray-800 transition-all duration-300 ease-in-out bg-white hover:bg-[#9BE13F] rounded-4xl flex md:hidden items-center justify-center px-8 py-3 shadow-xl font-semibold text-lg transform hover:scale-105 active:scale-100" >
                      Mail Us
                    </a>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=admin@arevei.com&su=ContactViaWebsite" className="fontInter text-gray-800 transition-all duration-300 ease-in-out bg-white hover:bg-[#9BE13F] rounded-4xl md:flex hidden items-center justify-center px-8 py-3 shadow-xl font-semibold text-lg transform hover:scale-105 active:scale-100" >
                      Mail Us
                    </a>
                  </div>
                </div>

                <div className=" mt-6 flex p-6 rounded-2xl bg-white/5 border border-[#9BE13F]/20 shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:shadow-[#9BE13F20] backdrop-blur-sm text-center">
                  <div className="w-full sm:flex sm:justify-between sm:items-center">
                    <div className="mx-auto sm:mx-0 mb-4 sm:mb-0 text-3xl md:text-5xl text-white bg-[#9BE13F] w-12 h-12 rounded-full p-2">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill="black"><path d="M544 139.2L544 500.9C544 525.2 525 544.1 500.8 544.1L139.2 544.1C115.3 544 96 525.4 96 500.8L96 139.2C96 115.1 114.8 96 139.2 96L500.9 96C524.9 96 544 114.8 544 139.2zM506.7 500.8L506.7 139.2C506.7 136.2 504.1 133.4 500.9 133.4L491.6 133.4L381.3 208L320 158.1L258.8 208L148.5 133.3L139.2 133.3C136 133.3 133.4 136.1 133.4 139.1L133.4 500.8C133.4 503.8 136 506.6 139.2 506.6L500.9 506.6C504.1 506.7 506.7 503.9 506.7 500.8zM246.2 250L246.2 287L172.7 287L172.7 250L246.2 250zM246.2 324.4L246.2 361.7L172.7 361.7L172.7 324.4L246.2 324.4zM257.3 177.1L311.3 133.4L192.8 133.4L257.3 177.1zM467.3 250L467.3 287L271.3 287L271.3 250L467.3 250zM467.3 324.4L467.3 361.7L271.3 361.7L271.3 324.4L467.3 324.4zM382.7 177.1L447.2 133.4L328.8 133.4L382.7 177.1zM467.3 399L467.3 436.3L367.9 436.3L367.9 399L467.3 399z"/></svg>
                    </div>
                    <div className="">
                      <p className="text-base md:text-xl font-semibold text-white capitalize tracking-wide">
                        Custom Form
                      </p>
                      <p className="text-sm md:text-base font-normal text-gray-500 ">
                        Click to go to the form
                      </p>
                    </div>
                    <br />
                    <a href="/#Form_Section" className="fontInter text-gray-800 transition-all duration-300 ease-in-out bg-white hover:bg-[#9BE13F] rounded-4xl flex items-center justify-center px-8 py-3 shadow-xl font-semibold text-lg transform hover:scale-105 active:scale-100" >
                      Open Form
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Connect