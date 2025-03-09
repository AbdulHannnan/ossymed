import { useState } from "react";
import { motion } from "framer-motion";

const categories = [
  "Nutrition",
  "Phlebotomy",
  "Lab Tech",
  "Audiology",
  "Pharmacy Tech",
  "EKG Tech",
];

const jobs = [
  {
    title: "Dialysis Technician",
    company: "Sonora Quest laboratories Ltd.",
    location: "Bannu, KPK",
    description:
      "Reporting to the Laboratory Manager this is an exciting opportunity for Laboratory Technician who has desire to develop their capabilities.",
    logo: "/images/slack-brands.svg",
    buttonColor: "bg-yellow-400",
  },
  {
    title: "QC Lab Chemist",
    company: "Aarvi Encon Ltd.",
    location: "Askari-11, RWP",
    description:
      "Reporting to the Laboratory Manager this is an exciting opportunity for Laboratory Technician who has desire to develop their capabilities.",
    logo: "/images/square-pied-piper-brands.svg",
    buttonColor: "bg-orange-400",
  },
  {
    title: "Jr. Lab Technician",
    company: "Aarvi Encon Ltd.",
    location: "U-Town, Pesh",
    description:
      "Reporting to the Laboratory Manager this is an exciting opportunity for Laboratory Technician who has desire to develop their capabilities.",
    logo: "/images/drupal-brands.svg",
    buttonColor: "bg-pink-400",
  },
];

export default function CareerComponent() {
  const [selectedCategory, setSelectedCategory] = useState("Lab Tech");

  return (
    <div className="mx-auto lg:px-56 py-8 bg-[#FDF8F3]">
      <h2 className="text-2xl md:text-4xl font-bold py-4 px-4 md:px-0">
        Explore Careers
      </h2>

      {/* Category Tabs */}
      <div
        className="flex overflow-x-auto space-x-4 mt-4 border-b px-4 md:px-0"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`pb-4 py-3 text-lg text-green-600 font-semibold whitespace-nowrap ${
              selectedCategory === category ? "border-b-2 border-black" : ""
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 px-4 md:px-0">
        {jobs.map((job, index) => (
          <motion.div
            key={index}
            className="border p-4 rounded-lg shadow-md bg-white"
            whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-between items-center">
              <h3 className="font-bold text-lg md:text-2xl">{job.title}</h3>
              <img
                src={job.logo}
                alt="Company Logo"
                className="w-10 h-10"
              />
            </div>
            <p className="text-green-600 text-base md:text-lg">
              {job.company}
            </p>
            <p className="text-gray-500 mt-2 text-sm">{job.description}</p>
            <div className="flex justify-between items-center mt-4">
              <p className="text-gray-600 flex items-center">
                📍 {job.location}
              </p>
              <button
                className={`px-4 py-2 text-white rounded ${job.buttonColor}`}
              >
                Apply
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}