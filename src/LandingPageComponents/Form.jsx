import { useState } from "react";

export default function Form() {
  // Individual useStates for each field
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(""); // Radio button: Website / Marketing
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Log form data (can replace with API call)
    console.log({
      name,
      number,
      email,
      service,
      message,
    });
  };

  return (
    <div className="mt-20 mb-24 max-w-6xl mx-auto px-6" >
    <div className="flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-[#222222] w-full max-w-2xl rounded-2xl p-8 shadow-xl border border-[#9BE13F]" >
        <div className=" fontInter w-full text-center mx-auto">
            {/* Heading */}
            <h2 className="fontInter text-3xl md:text-5xl font-bold text-white mb-4">
              Get In Touch
            </h2>
            {/* Subheading */}
            <p className="fontInter text-base md:text-xl text-white mb-4 font-medium">
              <span className='text-[#9BE13F]'>Tell us about your project or general inquiry.</span>
            </p>
          </div>
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
            className="w-full p-3 rounded-lg bg-[#2b2b2b] text-white focus:outline-none focus:ring-2 focus:ring-[#9BE13F]"
          />
        </div>

        {/* Number */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Phone Number</label>
          <input
            type="tel"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter your number"
            className="w-full p-3 rounded-lg bg-[#2b2b2b] text-white focus:outline-none focus:ring-2 focus:ring-[#9BE13F]"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full p-3 rounded-lg bg-[#2b2b2b] text-white focus:outline-none focus:ring-2 focus:ring-[#9BE13F]"
          />
        </div>

        {/* Radio buttons */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Service Interested In</label>
          <div className="flex gap-6">
            <label className="flex items-center text-gray-300 cursor-pointer">
              <input
                type="radio"
                value="Website"
                checked={service === "Website"}
                onChange={(e) => setService(e.target.value)}
                className="mr-2 accent-[#9BE13F]"
              />
              Website
            </label>
            <label className="flex items-center text-gray-300 cursor-pointer">
              <input
                type="radio"
                value="Marketing"
                checked={service === "Marketing"}
                onChange={(e) => setService(e.target.value)}
                className="mr-2 accent-[#9BE13F]"
              />
              Marketing
            </label>
          </div>
        </div>

        {/* Message */}
        <div className="mb-6">
          <label className="block text-gray-300 mb-1">Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Write your message..."
            rows="2"
            className="w-full p-3 rounded-lg bg-[#2b2b2b] text-white focus:outline-none focus:ring-2 focus:ring-[#9BE13F]"
          ></textarea>
        </div>

        {/* Submit */}
        <button type="submit" className="w-full py-3 rounded-lg bg-[#9BE13F80] hover:bg-[#9BE13F] text-black font-semibold transition-colors duration-200" >
          Submit
        </button>
      </form>
    </div>
    </div>
  );
}
