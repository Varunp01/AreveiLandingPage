import { useState, useEffect } from 'react'
import '../App.css'

function Background() {
  const [count, setCount] = useState(0)
// State to store the current mouse position (x, y)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Function to update the mouse position on every mouse move event
    const updateMousePosition = (ev) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    // Attach the event listener to the window
    window.addEventListener('mousemove', updateMousePosition);
    
    // Cleanup function to remove the listener when the component unmounts
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []); // Empty dependency array ensures this runs once on mount

  // Dynamic style for the radial gradient spotlight effect
  const spotlightStyle = {
    // Center the radial gradient at the current mouse position
    // background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(139, 92, 246, 0.25) 0%, transparent 45%)`,
    background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, #9BE13F50 0%, transparent 25%)`,
  };
  return (
    <>
    <div className="fixed inset-0 -z-10 bg-[#1C1C1C]">
      <div className="fixed inset-0 pointer-events-none transition-opacity duration-75" style={spotlightStyle} aria-hidden="true" ></div>
      <div className=" fixed h-[100%] w-[100%] top-[20%] right-5 rounded-full bg-[radial-gradient(circle,rgba(135,135,135,0.1)_0%,rgba(0,0,0,0)_100%)]"></div>
      <div className=" fixed h-[500px] w-[500px] top-[20%] md:-left-[5%] left-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
      <div className=" fixed h-[300px] w-[300px] top-[70%] right-0 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.1)_0%,transparent_50%)]"></div>
      
    </div>
    </>
  )
}

export default Background