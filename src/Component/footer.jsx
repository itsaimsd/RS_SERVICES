import React from "react";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white text-gray-800 px-6 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
          {/* Left: Brand and mission */}
          <div>
            <h2 className="text-xl font-bold">
              <span className="text-orange-500">Staff</span>
              Chahiye<span className="text-gray-300">.com</span>
            </h2>
            <p className="mt-4">
              Connecting & supporting underserved workers with businesses and
              making a real social impact.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <span className="text-orange-500 text-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 6.5 3.5 5
              5.5 5c1.54 0 3.04.99 3.57 2.36h1.87C13.46 5.99 14.96 5 16.5
              5 18.5 5 20 6.5 20 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                  />
                </svg>
              </span>
              <p>Making a difference, one staff at a time!</p>
            </div>
          </div>

          {/* Center: Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Staff
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Right: Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex gap-2 items-start">
                <span className="text-orange-500 mt-1">📍</span>
                <span>
                  ndls new delhi ra, <br />
                  Banaras Hindu University (BHU), <br />
                  India, 221005.
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-orange-500">📞</span>
                <span>+91 9999999999</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-orange-500">✉️</span>
                <span>info@Chahiye.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-10 border-t pt-6 text-center text-xs text-gray-600">
          <div className="flex justify-center mb-2">
            <div className="bg-gray-100 p-2 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5 text-gray-600"
              >
                <path
                  d="M12 2.2C6.6 2.2 2.2 6.6 2.2 12S6.6 21.8 12 21.8 21.8 17.4 21.8
           12 17.4 2.2 12 2.2zm0 17.6c-3.7 0-6.8-3-6.8-6.8S8.3 6.2 12 6.2s6.8 3 6.8
           6.8-3 6.8-6.8 6.8zm3.2-6.1c-.1-.3-.3-.6-.6-.9s-.5-.5-.9-.6c-.3-.1-.9-.2-1.8-.2s-1.5.1-1.8.2c-.3.1-.6.3-.9.6s-.5.6-.6.9c-.1.3-.2.9-.2 1.8s.1 1.5.2 1.8c.1.3.3.6.6.9s.5.5.9.6c.3.1.9.2 1.8.2s1.5-.1 1.8-.2c.3-.1.6-.3.9-.6s.5-.6.6-.9c.1-.3.2-.9.2-1.8s-.1-1.5-.2-1.8z"
                />
              </svg>
            </div>
          </div>
          <p>© 2025 StaffChahiye. All rights reserved.</p>
          <p>Built with 🧡 by Sujān</p>
          <div className="mt-2 flex justify-center gap-4">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms of Service
            </a>
            <a href="#" className="hover:underline">
              Cookies
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
