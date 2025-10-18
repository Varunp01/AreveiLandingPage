import { useState, useEffect } from 'react'
import '../App.css'
import { ChevronDown, X } from 'lucide-react';

const initialGridData = [
  {
    id: 0,
    nameinitials: 'RS',
    name: 'Rohit Sharma',
    designation: 'Founder, UrbanThreads India',
    content: '<span class="text-[#9BE13F] font-semibold">AREVEI</span> redesigned our <span class="text-[#9BE13F] font-semibold">Shopify</span> store with a perfect blend of aesthetics and performance. The new site reflects our brand beautifully, and we’ve seen a 40% increase in conversions within weeks.',
  },
  {
    id: 1,
    nameinitials: 'BK',
    name: 'Beatrice Kim',
    designation: 'Marketing Director, Solis Energy (USA)',
    content: 'The <span class="text-[#9BE13F] font-semibold">Email Marketing</span> strategy developed by <span class="text-[#9BE13F] font-semibold">AREVEI</span> completely revamped our customer engagement. Their automation and segmentation approach helped us achieve a 50% higher open rate and better ROI across all campaigns.',
  },
  {
    id: 2,
    nameinitials: 'AP',
    name: 'Aarav Patel',
    designation: 'CTO, TechNova Solutions',
    content: 'We partnered with <span class="text-[#9BE13F] font-semibold">AREVEI</span> for a <span class="text-[#9BE13F] font-semibold">MERN Stack</span> rebuild of our internal platform. The new dashboard is faster, scalable, and perfectly aligned with our workflow. Their professionalism and tech depth truly stood out.',
  },
  {
    id: 3,
    nameinitials: 'DP',
    name: 'Diana Prince',
    designation: 'Head of Operations, FitNation (UK)',
    content: 'From design to deployment, <span class="text-[#9BE13F] font-semibold">AREVEI</span> handled everything for our <span class="text-[#9BE13F] font-semibold">WordPress</span> site flawlessly. They delivered on time, optimized for SEO, and made our content management effortless. Highly recommended for startups and growing businesses!',
  },
  {
    id: 4,
    nameinitials: 'NS',
    name: 'Nikita Sinha',
    designation: 'Digital Marketing Head, Bloom Beauty India',
    content: 'Our <span class="text-[#9BE13F] font-semibold">Email Campaigns</span> from <span class="text-[#9BE13F] font-semibold">AREVEI</span> achieved an outstanding engagement rate. Their creatives and audience targeting felt deeply personal — it’s like they understood our customers better than we did!',
  },
  {
    id: 5,
    nameinitials: 'CL',
    name: 'Chris Lee',
    designation: 'CEO, UrbanGrow (Singapore)',
    content: 'We hired <span class="text-[#9BE13F] font-semibold">AREVEI</span> to rebuild our website using the <span class="text-[#9BE13F] font-semibold">MERN Stack</span>. The performance boost and clean design have impressed our clients and investors alike. Their technical expertise is top-tier and communication was seamless throughout.',
  },
  {
    id: 6,
    nameinitials: 'PK',
    name: 'Priya Khanna',
    designation: 'Co-founder, Elevate Digital Studio',
    content: '<span class="text-[#9BE13F] font-semibold">AREVEI</span> helped us reimagine our <span class="text-[#9BE13F] font-semibold">WordPress</span> portfolio website. Their UI/UX input made the design intuitive and impactful. The team is responsive, insightful, and focused on long-term brand value.',
  },
  {
    id: 7,
    nameinitials: 'AJ',
    name: 'Alex Johnson',
    designation: 'Founder, GreenWave Apparel (USA)',
    content: '<span class="text-[#9BE13F] font-semibold">AREVEI</span> transformed our outdated <span class="text-[#9BE13F] font-semibold">Shopify</span> store into a modern, high-converting ecommerce site. Their team was quick, creative, and deeply understood our brand’s aesthetic. We saw a 35% increase in sales within the first month after launch!',
  },
  {
    id: 8,
    nameinitials: 'VK',
    name: 'Vikram Kapoor',
    designation: 'Product Manager, Innovent Systems',
    content: '<span class="text-[#9BE13F] font-semibold">AREVEI</span> delivered a robust <span class="text-[#9BE13F] font-semibold">Full-Stack</span> web app tailored to our analytics needs. The code quality and UI polish were exceptional, and their proactive support made the whole process seamless.',
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
      <section className="mt-20 mb-24 max-w-6xl mx-auto px-6" >
        <div className="items-center gap-5">
          <div className=" fontInter w-full text-center mx-auto md:w-2/3">
            {/* Heading */}
            <h2 className="fontInter text-3xl md:text-5xl font-bold text-white mb-4">
              Proof in the Performance: Our Partnerships, Their Growth
            </h2>
            {/* Subheading */}
            <p className="fontInter text-base md:text-xl text-white mb-4 font-medium">
              <span className='text-[#9BE13F]'>We build more than systems; we build trust.</span> See the real impact of working with a partner dedicated to foundational web expertise and precise email conversions.
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