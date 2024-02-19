import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <>
      <span id="contact"></span>
      <div
        data-aos="zoom-in"
        className="bg-gray-900 dark:bg-black dark:text-white py-14"
      >
        <div className="container ">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 py-8 px-6">
            <div className="col-span-2 space-y-3">
              <h1 className="text-4xl sm:text-5xl font-bold text-white">
                Let's collaborate on your upcoming car rental venture
              </h1>
              <p className="text-gray-400">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Exercitationem necessitatibus quasi et vel,{" "}
              </p>
            </div>
            <div className="sm:grid sm:place-items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="button-outline"
              >
                Contact
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
