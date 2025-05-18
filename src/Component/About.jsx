import React from "react";
import { FaHeart, FaUsers, FaBuilding } from "react-icons/fa";

const About = () => {
  return (
    <section
      id="about"
      className="min-h-screen px-8 py-20 bg-white text-gray-800"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-base font-semibold text-orange-500 tracking-widest uppercase">
            Our Mission
          </h3>
          <h2 className="text-5xl font-bold mt-3">
            Service With a Social Purpose
          </h2>
          <div className="w-14 h-1 bg-orange-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-14">
          {/* Left side content */}
          <div className="bg-white p-8 rounded-2xl shadow-md text-lg leading-relaxed">
            <p className="mb-6">
              <strong>StaffChahiye</strong> started as a social service project
              to help underserved blue collar workers get employment and earn a
              livelihood for their families.
            </p>
            <p className="mb-6">
              Most of them aren't familiar with technology and hence we help
              them get access to job opportunities with just a phone call or
              message.
            </p>
            <p>
              There are about 400 Million+ unorganised workers in India and we
              envision to reach every last of them. It's a bold undertaking,
              right? But this journey will be worth it.
            </p>
          </div>

          {/* Right side cards */}
          <div className="space-y-10">
            <div className="bg-white p-6 rounded-2xl shadow-md flex items-start gap-5">
              <div className="text-orange-500 text-3xl mt-1">
                <FaHeart />
              </div>
              <div>
                <h4 className="font-semibold text-xl mb-1">
                  Value-Aligned Matching
                </h4>
                <p className="text-md text-gray-700 leading-relaxed">
                  We carefully match candidates with businesses that match the
                  requirements and ensure a win-win hire.
                </p>
              </div>
            </div>

            <div className="bg-white py-8 px-6 rounded-2xl shadow-md flex items-start gap-5">
              <div className="text-orange-500 text-3xl mt-1">
                <FaUsers />
              </div>
              <div>
                <h4 className="font-semibold text-xl mb-1">Diverse Pool</h4>
                <p className="text-md text-gray-700 leading-relaxed">
                  Our candidates network includes workers from all backgrounds.
                </p>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-2xl shadow-md flex items-start gap-5">
              <div className="text-orange-500 text-3xl mt-1">
                <FaBuilding />
              </div>
              <div>
                <h4 className="font-semibold text-xl mb-1">
                  Partner businesses
                </h4>
                <p className="text-md text-gray-700 leading-relaxed">
                  We work with all small and big businesses to help them with
                  staff requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
