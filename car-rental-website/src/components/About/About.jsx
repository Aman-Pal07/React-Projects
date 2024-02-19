import React from "react";
import CarPng from "../../assets/car1.png";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="dark:bg-dark bg-gray-700  sm:min-h-[600px] sm:grid sm:place-items-center duration-300">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div data-aos="slide-right" data-aos-duration="1500">
            <img
              src={CarPng}
              alt=""
              className="sm:scale-125 sm:-translate-x-11 max-h-[600px] drop-shadow-[2px_10px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div>
            <div className="space-y-5 sm:p-16 pb-6">
              <h1
                data-aos="fade-up"
                className="text-3xl sm:text-4xl font-bold font-serif"
              >
                About us
              </h1>
              <p data-aos="fade-up" className="leading-8 tracking-wide">
                We believe that a car is more than just a mode of
                transportation; it's a gateway to unforgettable experiences and
                adventures. That's why we offer a diverse range of vehicles to
                suit every journey, ensuring you travel in style and comfort
                every time.
              </p>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                data-aos="fade-up"
                className="button-outline hover:bg-primary hover:text-white duration-300"
              >
                Get Started
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
