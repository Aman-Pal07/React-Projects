import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
} from "react-icons/fa";

const FooterLinks = [
  {
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/#about",
  },
  {
    title: "Contact",
    link: "/#contact",
  },
  {
    title: "Blog",
    link: "/#blog",
  },
];

const Footer = () => {
  return (
    <div className="bg-gray-900  dark:bg-dark mt-[-22px] rounded-t-3xl">
      <section className="container">
        <div className="grid md:grid-cols-3 py-5">
          {/* company Details */}
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-white text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 font-serif">
              DriveWise
            </h1>
            <p className="text-lg text-white my-8" data-aos="fade-up">
              Have a question or ready to book your next adventure? Reach out to
              us today. We're here to assist you every step of the way.
            </p>
            <br />
            <div className="flex items-center gap-3">
              <FaLocationArrow className="text-white" />
              <p className="text-white">Delhi</p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <FaMobileAlt className="text-white" />
              <p className="text-white">+91 123456789</p>
            </div>
            {/* Social Handle */}
            <div className="flex items-center gap-3 mt-6">
              <a href="#">
                <FaInstagram className="text-3xl text-white hover:text-pink-600 duration-300" />
              </a>
              <a href="#">
                <FaFacebook className="text-3xl text-white hover:text-blue-700 duration-300" />
              </a>
              <a href="#">
                <FaLinkedin className="text-3xl text-white hover:text-blue-950 duration-300" />
              </a>
            </div>
          </div>
          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-white text-xl font-bold sm:text-left text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, id) => (
                    <li
                      key={id}
                      className="cursor-pointer hover:text-primary duration-300 space-x-1 text-gray-500 dark:text-gray-200"
                    >
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-white text-xl font-bold sm:text-left text-justify mb-3">
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, id) => (
                    <li
                      key={id}
                      className="cursor-pointer hover:text-primary duration-300 space-x-1 text-gray-500 dark:text-gray-200"
                    >
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="">
              <div className="py-8 px-4">
                <h1 className="sm:text-xl text-white text-xl font-bold sm:text-left text-justify mb-3">
                  Location
                </h1>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link, id) => (
                    <li
                      key={id}
                      className="cursor-pointer hover:text-primary duration-300 space-x-1 text-gray-500 dark:text-gray-200"
                    >
                      <span>&#11162;</span>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
