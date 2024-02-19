import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";
import { motion } from "framer-motion";

const skillsData = [
  {
    name: "Best Price",
    icon: <FaCameraRetro className="text-5xl text-primary" />,
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
  },
  {
    name: "Fast and Safe",
    icon: <GiNotebook className="text-5xl text-primary" />,
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "500",
  },
  {
    name: "Experience Drivers",
    icon: <SlNote className="text-5xl text-primary" />,
    link: "#",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
  },
];

const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="dark:bg-black bg-gray-900 dark:text-white py-14 sm:min-h-[600px] sm:grid sm:place-items-center">
        <div className="container">
          <div className="pb-12">
            <h1 className="text-3xl font-semibold text-center sm:text-4xl font-serif">
              Why Choose Us
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {skillsData.map((skill) => (
              <motion.div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card text-center group p-4 sm:py-16 bg-dark text-white rounded-lg shadow-md overflow-hidden"
                whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              >
                <div className="grid place-items-center">{skill.icon}</div>
                <h1 className="text-2xl font-bold">{skill.name}</h1>
                <p>{skill.description}</p>
                <a
                  href={skill.link}
                  className="inline-block text-lg font-semibold py-3 text-primary group-hover:text-white duration-300"
                >
                  Learn more
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
