import React from "react";
import whiteCar from "../../assets/car2.png";
import car2 from "../../assets/car3.png";
import car3 from "../../assets/car4.png";
import { motion } from "framer-motion";

const carList = [
  {
    name: "BMW UX",
    price: 100,
    image: whiteCar,
    aosDelay: "0",
  },
  {
    name: "KIA UX",
    price: 140,
    image: car2,
    aosDelay: "500",
  },
  {
    name: "BMW UX",
    price: 100,
    image: car3,
    aosDelay: "1000",
  },
];

const CarList = () => {
  return (
    <div className=" py-24 ">
      <div className="container">
        <h1 className="text-3xl sm:text-4xl font-semibold font-serif mb-3 text-center text-white">
          Choose Your cars
        </h1>
        <p className="text-center text-lg text-white my-8" data-aos="fade-up">
          Selecting the perfect car is like choosing a companion for your
          journey - each one has its own personality and charm. Browse our
          collection and find the ideal vehicle that resonates with your travel
          style.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-16">
          {carList.map((data, id) => (
            <motion.div
              key={id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              data-aos="fade-up"
              data-aos-delay={data.aosDelay}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition duration-300"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-full h-[200px] overflow-hidden"
              >
                <img
                  src={data.image}
                  alt=""
                  className="w-full h-full object-cover transform transition-transform duration-300"
                />
              </motion.div>
              <div className="p-4">
                <h1 className="text-lg font-semibold text-gray-500 mb-2">
                  {data.name}
                </h1>
                <p className="text-sm text-gray-600 mb-2">${data.price}/Day</p>
                <a
                  href="#"
                  className="block text-sm text-blue-600 font-semibold hover:text-blue-800 transition duration-300"
                >
                  Details
                </a>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="button-outline"
          >
            Get Started
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default CarList;
