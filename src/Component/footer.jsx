import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <footer className="bg-white text-gray-800 px-6 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
          {/* Left: Brand and mission */}
          <div>
            <h2 className="text-xl font-bold">
              <span className="text-orange-500">RS </span>
              <span className="text-gray-300">Services</span>
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
            <h3 className=" mb-4 font-bold">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-orange-500">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-orange-500">
                  About Us
                </a>
              </li>
              <li>
                <a href="#staff" className="hover:text-orange-500">
                  Staff
                </a>
              </li>
              <li>
                <Link to="/privacyPolicy" className="hover:text-orange-500">
                  Privacy Policy
                </Link>
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
            <h3 className="font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex gap-2 items-start">
                <span className="text-orange-500 mt-1">📍</span>
                <span>
                  2320,kamaldah path, pahari <br />
                  patna, 800008.
                </span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-orange-500">📞</span>
                <span>+91 8544369195</span>
              </li>
              <li className="flex gap-2 items-center">
                <span className="text-orange-500">✉️</span>
                <span>rsservices200@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom strip with Instagram */}

        <div className="mt-10 border-t border-gray-200 pt-6 text-center text-xs text-gray-600">
          <div className="flex justify-center mb-2">
            <div className="bg-gray-100 p-2 rounded-full text-orange-500 text-xl">
              <a
                href="https://www.instagram.com/rsservices5?igsh=MXhsM2pwMzRpZm9wdQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange-500"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <p>© 2025 RS. All rights reserved.</p>
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
