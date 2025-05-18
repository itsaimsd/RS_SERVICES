import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

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
              <span className="text-orange-500 text-lg">❤️</span>
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

        {/* Bottom strip with Instagram */}

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-gray-600">
          <div className="flex justify-center mb-2">
            <div className="bg-gray-100 p-2 rounded-full text-orange-500 text-xl">
              <FontAwesomeIcon icon={faInstagram} />
            </div>
          </div>
          <p>© 2025 StaffChahiye. All rights reserved.</p>
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
