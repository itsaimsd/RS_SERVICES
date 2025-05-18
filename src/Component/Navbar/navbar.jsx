import React from "react";

const Navbar = () => {
  const linkClass = "text-gray-700 hover:text-green-600 transition"; 

  return (
    <nav className="bg-white shadow-md px-4 py-3 flex items-center justify-between fixed top-0 w-full z-50">
      {/* Logo */}
      <div className="text-xl font-bold text-green-600">RS Services</div>

      {/* Navigation Links */}
      <div className="space-x-6 hidden md:flex">
        <a href="#home" className={linkClass}>
          Home
        </a>
        <a href="#about" className={linkClass}>
          About
        </a>
        <a href="#staff" className={linkClass}>
          Staff
        </a>
      </div>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/7739002652"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
      >
        WhatsApp
      </a>
    </nav>
  );
};

export default Navbar;
