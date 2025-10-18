import { useState, useEffect } from 'react'
import '../App.css'
import { ChevronDown, X } from 'lucide-react';

const initialGridData = [
  {
    id: 0,
    nameinitials: 'AJ',
    name: 'Alex Johnson',
    designation: 'Founder, GreenWave Apparel',
    content: '<span class="text-[#9BE13F] font-semibold">AREVEI</span> transformed our outdated <span class="text-[#9BE13F] font-semibold">Shopify</span> store into a modern, high-converting ecommerce site. Their team was quick, creative, and deeply understood our brand’s aesthetic. We saw a 35% increase in sales within the first month after launch!',
  },
  {
    id: 1,
    nameinitials: 'BK',
    name: 'Beatrice Kim',
    designation: 'Marketing Director, Solis Energy',
    content: 'The <span class="text-[#9BE13F] font-semibold">Email Marketing</span> strategy developed by <span class="text-[#9BE13F] font-semibold">AREVEI</span> completely revamped our customer engagement. Their automation and segmentation approach helped us achieve a 50% higher open rate and better ROI across all campaigns.',
  },
  {
    id: 2,
    nameinitials: 'CL',
    name: 'Chris Lee',
    designation: 'CEO, UrbanGrow',
    content: 'We hired <span class="text-[#9BE13F] font-semibold">AREVEI</span> to rebuild our website using the <span class="text-[#9BE13F] font-semibold">MERN Stack</span>. The performance boost and clean design have impressed our clients and investors alike. Their technical expertise is top-tier and communication was seamless throughout.',
  },
  {
    id: 3,
    nameinitials: 'DP',
    name: 'Diana Prince',
    designation: 'Head of Operations, FitNation',
    content: 'From design to deployment, <span class="text-[#9BE13F] font-semibold">AREVEI</span> handled everything for our <span class="text-[#9BE13F] font-semibold">WordPress</span> site flawlessly. They delivered on time, optimized for SEO, and made our content management effortless. Highly recommended for startups and growing businesses!',
  },
  {
    id: 4,
    nameinitials: 'EH',
    name: 'Ethan Hunt',
    designation: 'Co-founder, BoldPeak Digital',
    content: 'Working with <span class="text-[#9BE13F] font-semibold">AREVEI</span> on multiple client projects has been a game changer. Their <span class="text-[#9BE13F] font-semibold">MERN Stack</span> developers are exceptionally skilled, and their attention to detail ensures every product feels polished and professional.',
  },
  {
    id: 5,
    nameinitials: 'FG',
    name: 'Fi\ona Glenanne',
    designation: 'Ecommerce Manager, LuxeWell Living',
    content: 'Our <span class="text-[#9BE13F] font-semibold">Shopify</span> redesign by <span class="text-[#9BE13F] font-semibold">AREVEI</span> exceeded expectations. The user experience improvements directly contributed to a smoother checkout flow and higher retention. The team’s dedication and creativity were unmatched.',
  },
  {
    id: 6,
    nameinitials: 'GK',
    name: 'George Kirk',
    designation: 'Entrepreneur & Podcast Host',
    content: '<span class="text-[#9BE13F] font-semibold">AREVEI</span> built my personal <span class="text-[#9BE13F] font-semibold">WordPress</span> site from scratch and made it look like a premium media brand. Their mix of design flair and SEO knowledge made the launch effortless and impactful. I couldn’t have asked for a better team!',
  },
  {
    id: 7,
    nameinitials: 'HM',
    name: 'Hannah Montana',
    designation: 'Brand Manager, PureGlow Cosmetics',
    content: 'The <span class="text-[#9BE13F] font-semibold">AREVEI Email Campaigns</span> helped us reconnect with dormant customers through personalized journeys. Their creative copywriting and data-driven approach led to consistent month-over-month growth in engagement.',
  },
  {
    id: 8,
    nameinitials: 'IM',
    name: 'Ian Malcolm',
    designation: 'CTO, NextPhase Analytics',
    content: '<span class="text-[#9BE13F] font-semibold">AREVEI</span> delivered a <span class="text-[#9BE13F] font-semibold">Full-Stack</span> web app for our analytics dashboard using the MERN stack. The performance, UI, and scalability are fantastic. Their team feels like an extension of ours — reliable, responsive, and visionary.',
  },
];


function Testimonials() {
  const [expandedId, setExpandedId] = useState(null);
  const [showAll, setShowAll] = useState(false);
  const handleCellClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };
  const visibleData = showAll ? initialGridData : initialGridData.slice(0, 4);
  return (
    <>
      <section className="mt-20 mb-24 max-w-6xl mx-auto px-6" id="testimonials_section">
        <div className="items-center gap-5">
          <div className=" fontInter w-full text-center mx-auto md:w-1/2">
            {/* Heading */}
            <h2 className="fontInter text-3xl md:text-5xl font-bold text-white mb-4">
              Trusted by World’s Fastest  Evolving Brands!
            </h2>
            {/* Subheading */}
            <p className="fontInter text-base md:text-xl text-white mb-4 font-medium">
              <span className='text-[#9BE13F]'>Discover how we can elevate your brand</span> and drive measurable results. We specialize in crafting unique brand experiences.
            </p>
          </div>
          {/* --- Expanding Grid Section --- */}
          <div className="mt-10 pb-8 md:px-12 ">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
              {visibleData.map((item) => {
                const isExpanded = expandedId === item.id;
                return (
                  <div key={item.id} onClick={() => handleCellClick(item.id)} className={`border border-gray-500 rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 ease-in-out cursor-pointer overflow-hidden relative ${isExpanded ? "md:col-span-1 ring-2 ring-gray-300 scale-[1.01]" : "md:col-span-1"}`} >
                    {/* Header */}
                    <div className="flex items-center gap-4 p-5 border-b border-[#9BE13F50]">
                      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#9BE13F] text-black text-lg font-bold">
                        {item.nameinitials}
                      </div>
                      <div>
                        <h2 className="text-lg font-semibold text-white">
                          {item.name}
                        </h2>
                        <p className="text-sm text-gray-400">{item.designation}</p>
                      </div>

                      <button className="ml-auto p-2 rounded-full text-black transition-colors duration-300 hover:!bg-[#9BE13F]" style={{ backgroundColor: isExpanded ? "#ef4444" : "#9BE13F70" }} onClick={(e) => { e.stopPropagation(); handleCellClick(item.id); }} >
                        {isExpanded ? <X size={18} /> : <ChevronDown size={18} />}
                      </button>
                    </div>

                    {/* Preview / Content */}
                    <div
                      className={`p-5 text-sm ${isExpanded ? "text-white" : "text-gray-400"}`}
                      dangerouslySetInnerHTML={{
                        __html: !isExpanded
                          ? item.content.substring(0, 200) + "..."
                          : item.content,
                      }}
                    ></div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="text-center">
            <button onClick={() => setShowAll(!showAll)} className="fontInter mx-auto text-gray-800 transition-all duration-300 ease-in-out bg-[#9BE13F] hover:bg-white rounded-4xl flex items-center justify-center px-8 py-3 shadow-xl font-semibold text-lg transform hover:scale-105 active:scale-100" >
              {showAll ? "See Less" : "See More"}
            </button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonials