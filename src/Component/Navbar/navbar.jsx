import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Hamburger and Close icons

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const linkClass = "text-gray-700 hover:text-green-600 transition block py-2";

  return (
    <nav className="bg-white shadow-md px-4 py-3 fixed top-0 w-full z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-green-600">RS Services</div>

        {/* Desktop Navigation */}
        <div className="space-x-6 hidden md:flex items-center">
          <a href="#home" className={linkClass}>
            Home
          </a>
          <a href="#about" className={linkClass}>
            About
          </a>
          <a href="#staff" className={linkClass}>
            Staff
          </a>
          <a
            href="https://wa.me/7739002652"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
          >
            WhatsApp
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-3 space-y-2 items-center text-center mt-45 font-bold text-xl">
          <a
            href="#home"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="#about"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#staff"
            className={linkClass}
            onClick={() => setIsOpen(false)}
          >
            Staff
          </a>
          <div className="flex justify-center">
            <a
              href="https://wa.me/7739002652"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-4 py-2 rounded-xl hover:bg-green-600 transition text-center mb-85"
              onClick={() => setIsOpen(false)}
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
