import React, { useState } from "react";

const staffData = [
  {
    id: 1,
    category: "Service",
    role: "Waiter",
    description:
      "Provide exceptional dining service to guests in a high-end restaurant setting.",
  },
  {
    id: 2,
    category: "Restaurant",
    role: "Cook",
    description:
      "Mix and serve drinks with flair, maintain bar inventory and cleanliness.",
  },
  {
    id: 3,
    category: "Front Office",
    role: "Desk Receptionist",
    description: "Handle guest check-ins/check-outs and provide hotel info.",
  },
  {
    id: 4,
    category: "Service",
    role: "Steward",
    description:
      "Assist kitchen and service staff, manage dishwashing and maintain kitchen cleanliness.",
  },
  {
    id: 5,
    category: "Restaurant",
    role: "Helper - Kitchen",
    description:
      "Assist chefs with food preparation, cleaning, and basic cooking tasks.",
  },
  {
    id: 6,
    category: "Housekeeping",
    role: "Housekeeping Staff",
    description:
      "Maintain cleanliness and presentation of guest rooms and public areas.",
  },
];

const categories = [
  "All",
  "Service",
  "Housekeeping",
  "Front Office",
  "Restaurant",
];

const Staff = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredStaff =
    selectedCategory === "All"
      ? staffData
      : staffData.filter((member) => member.category === selectedCategory);

  return (
    <section id="staff" className="min-h-screen px-8 py-10 bg-gray-50 mb-90">
      <div className="max-w-8xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-gray-900">
          We've all types of staff available for you!
        </h1>
        <p className="text-center text-gray-500 mb-10">
          The right time is now! Reach out to us today, and we'll help you find
          the right staff for your business.
        </p>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm border cursor-pointer ${
                selectedCategory === cat
                  ? "bg-orange-500 text-white"
                  : "bg-white text-gray-700 border-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Staff Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {filteredStaff.map(({ id, role, description, category }) => (
            <div
              key={id}
              className="bg-white rounded-2xl p-6 shadow hover:shadow-md transition min-h-[230px]"
            >
              <div className="flex justify-between mb-4">
                <span className="text-sm font-medium bg-orange-100 text-orange-400 px-3 py-1 rounded-full">
                  {category}
                </span>
                <span className="text-sm font-medium bg-gray-100 text-gray-400 px-3 py-1 rounded-full">
                  Full-time
                </span>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 mb-3">
                {role}
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mt-15">
        <p>and many more!</p>
      </div>
    </section>
  );
};

export default Staff;
