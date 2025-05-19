import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import { ChevronDownIcon } from "@heroicons/react/24/outline"; // Heroicons v2

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gray-50 flex flex-col items-center justify-center text-center px-4 font-sans"
    >
      {/* Logo & Title */}
      <div className="mb-6">
        <h1 className="text-4xl sm:text-7xl font-extrabold text-gray-900 flex items-center justify-center gap-2 text-center">
          <span className="text-gray-900 text-7xl">RS</span>
          <span className="text-orange-500 -mt-2 text-3xl sm:text-5xl">↗</span>
          <span className="text-gray-600 text-xl">Services</span>
        </h1>

        <p className="text-gray-500 mt-5 text-lg">
          The Right Staff, At the Right Time
        </p>
      </div>

      {/* Hero Heading */}
      <div className="mb-6">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 leading-tight ">
          Get the Right Staff,
          <br />
          <span className="text-orange-500 mt-2">At the Right Time!</span>
        </h2>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          The only service you'll ever need for your staff requirements
          <br />
          (seriously)!
        </p>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918544369195"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold flex items-center gap-2 transition mb-6"
      >
        <FaWhatsapp className="text-xl" />
        WhatsApp Us
      </a>

      {/* Down Arrow Icon */}
      {/* Down Arrow Icon with scroll */}
      <a href="#about" className="mt-2">
        <ChevronDownIcon className="w-8 h-8 text-orange-500 animate-bounce cursor-pointer" />
      </a>
    </section>
  );
};

export default Home;
