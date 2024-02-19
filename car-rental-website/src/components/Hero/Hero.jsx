import React, { useEffect, useState } from "react";
import carPng from "../../assets/car.png";
import yellowCar from "../../assets/banner-car.png";
import AOS from "aos";
import { motion } from "framer-motion";

const Hero = ({ theme }) => {
  useEffect(() => {
    AOS.refresh();
  });
  return (
    <div className="dark:bg-black bg-gray-900 dark:text-white duration-300 ">
      <div className="container min-h-[620px] flex">
        <div className="grid grid-cols-1 sm:grid-cols-2 place-items-center">
          <div
            data-aos="zoom-in"
            data-aos-duration="1500"
            data-aos-once="false"
            className="order-1 sm:order-2"
          >
            <img
              src={theme === "dark" ? carPng : yellowCar}
              alt=""
              className="sm:scale-125 relative -z-10 max-h-[600px] drop-shadow-[2px_20px_6px_rgba(0,0,0,0.50)]"
            />
          </div>
          <div className="space-y-5 order-2 sm:order-1 sm:pr-32 text-white ">
            <h1
              data-aos="fade-up"
              data-aos-delay="600"
              className="text-5xl text-white lg:text-7xl font-semibold font-serif hover:text-blue-500"
            >
              DriveWise
            </h1>

            <p
              className="text-center text-lg font-semibold text-white my-8"
              data-aos="fade-up"
              data-aos-delay="1000"
            >
              Welcome to our car rental service, where every journey begins with
              comfort and style. Choose from our premium selection of vehicles
              and start your adventure today!
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
  );
};

export default Hero;
